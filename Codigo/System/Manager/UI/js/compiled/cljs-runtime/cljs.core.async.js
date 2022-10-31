goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44621 = arguments.length;
switch (G__44621) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44622 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44622 = (function (f,blockable,meta44623){
this.f = f;
this.blockable = blockable;
this.meta44623 = meta44623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44624,meta44623__$1){
var self__ = this;
var _44624__$1 = this;
return (new cljs.core.async.t_cljs$core$async44622(self__.f,self__.blockable,meta44623__$1));
}));

(cljs.core.async.t_cljs$core$async44622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44624){
var self__ = this;
var _44624__$1 = this;
return self__.meta44623;
}));

(cljs.core.async.t_cljs$core$async44622.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44622.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44622.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async44622.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async44622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44623","meta44623",-736380125,null)], null);
}));

(cljs.core.async.t_cljs$core$async44622.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44622");

(cljs.core.async.t_cljs$core$async44622.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44622");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44622.
 */
cljs.core.async.__GT_t_cljs$core$async44622 = (function cljs$core$async$__GT_t_cljs$core$async44622(f__$1,blockable__$1,meta44623){
return (new cljs.core.async.t_cljs$core$async44622(f__$1,blockable__$1,meta44623));
});

}

return (new cljs.core.async.t_cljs$core$async44622(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__44638 = arguments.length;
switch (G__44638) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__44641 = arguments.length;
switch (G__44641) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__44650 = arguments.length;
switch (G__44650) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_46614 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46614) : fn1.call(null,val_46614));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46614) : fn1.call(null,val_46614));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__44652 = arguments.length;
switch (G__44652) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___46619 = n;
var x_46620 = (0);
while(true){
if((x_46620 < n__5636__auto___46619)){
(a[x_46620] = x_46620);

var G__46621 = (x_46620 + (1));
x_46620 = G__46621;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44656 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44656 = (function (flag,meta44657){
this.flag = flag;
this.meta44657 = meta44657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44658,meta44657__$1){
var self__ = this;
var _44658__$1 = this;
return (new cljs.core.async.t_cljs$core$async44656(self__.flag,meta44657__$1));
}));

(cljs.core.async.t_cljs$core$async44656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44658){
var self__ = this;
var _44658__$1 = this;
return self__.meta44657;
}));

(cljs.core.async.t_cljs$core$async44656.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44656.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async44656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44657","meta44657",1552510900,null)], null);
}));

(cljs.core.async.t_cljs$core$async44656.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44656");

(cljs.core.async.t_cljs$core$async44656.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44656");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44656.
 */
cljs.core.async.__GT_t_cljs$core$async44656 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44656(flag__$1,meta44657){
return (new cljs.core.async.t_cljs$core$async44656(flag__$1,meta44657));
});

}

return (new cljs.core.async.t_cljs$core$async44656(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44663 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44663 = (function (flag,cb,meta44664){
this.flag = flag;
this.cb = cb;
this.meta44664 = meta44664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44665,meta44664__$1){
var self__ = this;
var _44665__$1 = this;
return (new cljs.core.async.t_cljs$core$async44663(self__.flag,self__.cb,meta44664__$1));
}));

(cljs.core.async.t_cljs$core$async44663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44665){
var self__ = this;
var _44665__$1 = this;
return self__.meta44664;
}));

(cljs.core.async.t_cljs$core$async44663.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44663.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async44663.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44663.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async44663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44664","meta44664",1136876593,null)], null);
}));

(cljs.core.async.t_cljs$core$async44663.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44663");

(cljs.core.async.t_cljs$core$async44663.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async44663");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44663.
 */
cljs.core.async.__GT_t_cljs$core$async44663 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44663(flag__$1,cb__$1,meta44664){
return (new cljs.core.async.t_cljs$core$async44663(flag__$1,cb__$1,meta44664));
});

}

return (new cljs.core.async.t_cljs$core$async44663(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44669_SHARP_){
var G__44676 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44669_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44676) : fret.call(null,G__44676));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44670_SHARP_){
var G__44677 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44670_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44677) : fret.call(null,G__44677));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__46625 = (i + (1));
i = G__46625;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___46626 = arguments.length;
var i__5770__auto___46627 = (0);
while(true){
if((i__5770__auto___46627 < len__5769__auto___46626)){
args__5775__auto__.push((arguments[i__5770__auto___46627]));

var G__46628 = (i__5770__auto___46627 + (1));
i__5770__auto___46627 = G__46628;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44687){
var map__44688 = p__44687;
var map__44688__$1 = cljs.core.__destructure_map(map__44688);
var opts = map__44688__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44684){
var G__44685 = cljs.core.first(seq44684);
var seq44684__$1 = cljs.core.next(seq44684);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44685,seq44684__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__44690 = arguments.length;
switch (G__44690) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__44536__auto___46632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44537__auto__ = (function (){var switch__44337__auto__ = (function (state_44725){
var state_val_44726 = (state_44725[(1)]);
if((state_val_44726 === (7))){
var inst_44721 = (state_44725[(2)]);
var state_44725__$1 = state_44725;
var statearr_44732_46634 = state_44725__$1;
(statearr_44732_46634[(2)] = inst_44721);

(statearr_44732_46634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (1))){
var state_44725__$1 = state_44725;
var statearr_44733_46635 = state_44725__$1;
(statearr_44733_46635[(2)] = null);

(statearr_44733_46635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (4))){
var inst_44698 = (state_44725[(7)]);
var inst_44698__$1 = (state_44725[(2)]);
var inst_44703 = (inst_44698__$1 == null);
var state_44725__$1 = (function (){var statearr_44739 = state_44725;
(statearr_44739[(7)] = inst_44698__$1);

return statearr_44739;
})();
if(cljs.core.truth_(inst_44703)){
var statearr_44740_46636 = state_44725__$1;
(statearr_44740_46636[(1)] = (5));

} else {
var statearr_44745_46637 = state_44725__$1;
(statearr_44745_46637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (13))){
var state_44725__$1 = state_44725;
var statearr_44746_46638 = state_44725__$1;
(statearr_44746_46638[(2)] = null);

(statearr_44746_46638[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (6))){
var inst_44698 = (state_44725[(7)]);
var state_44725__$1 = state_44725;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44725__$1,(11),to,inst_44698);
} else {
if((state_val_44726 === (3))){
var inst_44723 = (state_44725[(2)]);
var state_44725__$1 = state_44725;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44725__$1,inst_44723);
} else {
if((state_val_44726 === (12))){
var state_44725__$1 = state_44725;
var statearr_44754_46639 = state_44725__$1;
(statearr_44754_46639[(2)] = null);

(statearr_44754_46639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (2))){
var state_44725__$1 = state_44725;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44725__$1,(4),from);
} else {
if((state_val_44726 === (11))){
var inst_44714 = (state_44725[(2)]);
var state_44725__$1 = state_44725;
if(cljs.core.truth_(inst_44714)){
var statearr_44755_46640 = state_44725__$1;
(statearr_44755_46640[(1)] = (12));

} else {
var statearr_44756_46641 = state_44725__$1;
(statearr_44756_46641[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (9))){
var state_44725__$1 = state_44725;
var statearr_44757_46642 = state_44725__$1;
(statearr_44757_46642[(2)] = null);

(statearr_44757_46642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (5))){
var state_44725__$1 = state_44725;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44758_46644 = state_44725__$1;
(statearr_44758_46644[(1)] = (8));

} else {
var statearr_44759_46645 = state_44725__$1;
(statearr_44759_46645[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (14))){
var inst_44719 = (state_44725[(2)]);
var state_44725__$1 = state_44725;
var statearr_44760_46647 = state_44725__$1;
(statearr_44760_46647[(2)] = inst_44719);

(statearr_44760_46647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (10))){
var inst_44711 = (state_44725[(2)]);
var state_44725__$1 = state_44725;
var statearr_44762_46648 = state_44725__$1;
(statearr_44762_46648[(2)] = inst_44711);

(statearr_44762_46648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44726 === (8))){
var inst_44707 = cljs.core.async.close_BANG_(to);
var state_44725__$1 = state_44725;
var statearr_44763_46649 = state_44725__$1;
(statearr_44763_46649[(2)] = inst_44707);

(statearr_44763_46649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44338__auto__ = null;
var cljs$core$async$state_machine__44338__auto____0 = (function (){
var statearr_44766 = [null,null,null,null,null,null,null,null];
(statearr_44766[(0)] = cljs$core$async$state_machine__44338__auto__);

(statearr_44766[(1)] = (1));

return statearr_44766;
});
var cljs$core$async$state_machine__44338__auto____1 = (function (state_44725){
while(true){
var ret_value__44339__auto__ = (function (){try{while(true){
var result__44340__auto__ = switch__44337__auto__(state_44725);
if(cljs.core.keyword_identical_QMARK_(result__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44340__auto__;
}
break;
}
}catch (e44767){var ex__44341__auto__ = e44767;
var statearr_44768_46650 = state_44725;
(statearr_44768_46650[(2)] = ex__44341__auto__);


if(cljs.core.seq((state_44725[(4)]))){
var statearr_44769_46651 = state_44725;
(statearr_44769_46651[(1)] = cljs.core.first((state_44725[(4)])));

} else {
throw ex__44341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46652 = state_44725;
state_44725 = G__46652;
continue;
} else {
return ret_value__44339__auto__;
}
break;
}
});
cljs$core$async$state_machine__44338__auto__ = function(state_44725){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44338__auto____1.call(this,state_44725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44338__auto____0;
cljs$core$async$state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44338__auto____1;
return cljs$core$async$state_machine__44338__auto__;
})()
})();
var state__44538__auto__ = (function (){var statearr_44775 = f__44537__auto__();
(statearr_44775[(6)] = c__44536__auto___46632);

return statearr_44775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44538__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__44784){
var vec__44785 = p__44784;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44785,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44785,(1),null);
var job = vec__44785;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__44536__auto___46655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44537__auto__ = (function (){var switch__44337__auto__ = (function (state_44796){
var state_val_44797 = (state_44796[(1)]);
if((state_val_44797 === (1))){
var state_44796__$1 = state_44796;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44796__$1,(2),res,v);
} else {
if((state_val_44797 === (2))){
var inst_44793 = (state_44796[(2)]);
var inst_44794 = cljs.core.async.close_BANG_(res);
var state_44796__$1 = (function (){var statearr_44798 = state_44796;
(statearr_44798[(7)] = inst_44793);

return statearr_44798;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44796__$1,inst_44794);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____0 = (function (){
var statearr_44800 = [null,null,null,null,null,null,null,null];
(statearr_44800[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__);

(statearr_44800[(1)] = (1));

return statearr_44800;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____1 = (function (state_44796){
while(true){
var ret_value__44339__auto__ = (function (){try{while(true){
var result__44340__auto__ = switch__44337__auto__(state_44796);
if(cljs.core.keyword_identical_QMARK_(result__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44340__auto__;
}
break;
}
}catch (e44802){var ex__44341__auto__ = e44802;
var statearr_44804_46657 = state_44796;
(statearr_44804_46657[(2)] = ex__44341__auto__);


if(cljs.core.seq((state_44796[(4)]))){
var statearr_44805_46658 = state_44796;
(statearr_44805_46658[(1)] = cljs.core.first((state_44796[(4)])));

} else {
throw ex__44341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46659 = state_44796;
state_44796 = G__46659;
continue;
} else {
return ret_value__44339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__ = function(state_44796){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____1.call(this,state_44796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__;
})()
})();
var state__44538__auto__ = (function (){var statearr_44814 = f__44537__auto__();
(statearr_44814[(6)] = c__44536__auto___46655);

return statearr_44814;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44538__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__44816){
var vec__44817 = p__44816;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44817,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44817,(1),null);
var job = vec__44817;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___46660 = n;
var __46661 = (0);
while(true){
if((__46661 < n__5636__auto___46660)){
var G__44824_46662 = type;
var G__44824_46663__$1 = (((G__44824_46662 instanceof cljs.core.Keyword))?G__44824_46662.fqn:null);
switch (G__44824_46663__$1) {
case "compute":
var c__44536__auto___46665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46661,c__44536__auto___46665,G__44824_46662,G__44824_46663__$1,n__5636__auto___46660,jobs,results,process__$1,async){
return (function (){
var f__44537__auto__ = (function (){var switch__44337__auto__ = ((function (__46661,c__44536__auto___46665,G__44824_46662,G__44824_46663__$1,n__5636__auto___46660,jobs,results,process__$1,async){
return (function (state_44838){
var state_val_44839 = (state_44838[(1)]);
if((state_val_44839 === (1))){
var state_44838__$1 = state_44838;
var statearr_44843_46666 = state_44838__$1;
(statearr_44843_46666[(2)] = null);

(statearr_44843_46666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44839 === (2))){
var state_44838__$1 = state_44838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44838__$1,(4),jobs);
} else {
if((state_val_44839 === (3))){
var inst_44836 = (state_44838[(2)]);
var state_44838__$1 = state_44838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44838__$1,inst_44836);
} else {
if((state_val_44839 === (4))){
var inst_44827 = (state_44838[(2)]);
var inst_44828 = process__$1(inst_44827);
var state_44838__$1 = state_44838;
if(cljs.core.truth_(inst_44828)){
var statearr_44846_46668 = state_44838__$1;
(statearr_44846_46668[(1)] = (5));

} else {
var statearr_44850_46669 = state_44838__$1;
(statearr_44850_46669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44839 === (5))){
var state_44838__$1 = state_44838;
var statearr_44851_46671 = state_44838__$1;
(statearr_44851_46671[(2)] = null);

(statearr_44851_46671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44839 === (6))){
var state_44838__$1 = state_44838;
var statearr_44852_46672 = state_44838__$1;
(statearr_44852_46672[(2)] = null);

(statearr_44852_46672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44839 === (7))){
var inst_44833 = (state_44838[(2)]);
var state_44838__$1 = state_44838;
var statearr_44853_46673 = state_44838__$1;
(statearr_44853_46673[(2)] = inst_44833);

(statearr_44853_46673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46661,c__44536__auto___46665,G__44824_46662,G__44824_46663__$1,n__5636__auto___46660,jobs,results,process__$1,async))
;
return ((function (__46661,switch__44337__auto__,c__44536__auto___46665,G__44824_46662,G__44824_46663__$1,n__5636__auto___46660,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____0 = (function (){
var statearr_44854 = [null,null,null,null,null,null,null];
(statearr_44854[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__);

(statearr_44854[(1)] = (1));

return statearr_44854;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____1 = (function (state_44838){
while(true){
var ret_value__44339__auto__ = (function (){try{while(true){
var result__44340__auto__ = switch__44337__auto__(state_44838);
if(cljs.core.keyword_identical_QMARK_(result__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44340__auto__;
}
break;
}
}catch (e44855){var ex__44341__auto__ = e44855;
var statearr_44856_46675 = state_44838;
(statearr_44856_46675[(2)] = ex__44341__auto__);


if(cljs.core.seq((state_44838[(4)]))){
var statearr_44858_46676 = state_44838;
(statearr_44858_46676[(1)] = cljs.core.first((state_44838[(4)])));

} else {
throw ex__44341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46677 = state_44838;
state_44838 = G__46677;
continue;
} else {
return ret_value__44339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__ = function(state_44838){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____1.call(this,state_44838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__;
})()
;})(__46661,switch__44337__auto__,c__44536__auto___46665,G__44824_46662,G__44824_46663__$1,n__5636__auto___46660,jobs,results,process__$1,async))
})();
var state__44538__auto__ = (function (){var statearr_44860 = f__44537__auto__();
(statearr_44860[(6)] = c__44536__auto___46665);

return statearr_44860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44538__auto__);
});})(__46661,c__44536__auto___46665,G__44824_46662,G__44824_46663__$1,n__5636__auto___46660,jobs,results,process__$1,async))
);


break;
case "async":
var c__44536__auto___46678 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46661,c__44536__auto___46678,G__44824_46662,G__44824_46663__$1,n__5636__auto___46660,jobs,results,process__$1,async){
return (function (){
var f__44537__auto__ = (function (){var switch__44337__auto__ = ((function (__46661,c__44536__auto___46678,G__44824_46662,G__44824_46663__$1,n__5636__auto___46660,jobs,results,process__$1,async){
return (function (state_44874){
var state_val_44875 = (state_44874[(1)]);
if((state_val_44875 === (1))){
var state_44874__$1 = state_44874;
var statearr_44878_46679 = state_44874__$1;
(statearr_44878_46679[(2)] = null);

(statearr_44878_46679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (2))){
var state_44874__$1 = state_44874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44874__$1,(4),jobs);
} else {
if((state_val_44875 === (3))){
var inst_44872 = (state_44874[(2)]);
var state_44874__$1 = state_44874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44874__$1,inst_44872);
} else {
if((state_val_44875 === (4))){
var inst_44864 = (state_44874[(2)]);
var inst_44865 = async(inst_44864);
var state_44874__$1 = state_44874;
if(cljs.core.truth_(inst_44865)){
var statearr_44881_46680 = state_44874__$1;
(statearr_44881_46680[(1)] = (5));

} else {
var statearr_44882_46681 = state_44874__$1;
(statearr_44882_46681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (5))){
var state_44874__$1 = state_44874;
var statearr_44883_46683 = state_44874__$1;
(statearr_44883_46683[(2)] = null);

(statearr_44883_46683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (6))){
var state_44874__$1 = state_44874;
var statearr_44884_46685 = state_44874__$1;
(statearr_44884_46685[(2)] = null);

(statearr_44884_46685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44875 === (7))){
var inst_44870 = (state_44874[(2)]);
var state_44874__$1 = state_44874;
var statearr_44885_46686 = state_44874__$1;
(statearr_44885_46686[(2)] = inst_44870);

(statearr_44885_46686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__46661,c__44536__auto___46678,G__44824_46662,G__44824_46663__$1,n__5636__auto___46660,jobs,results,process__$1,async))
;
return ((function (__46661,switch__44337__auto__,c__44536__auto___46678,G__44824_46662,G__44824_46663__$1,n__5636__auto___46660,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____0 = (function (){
var statearr_44890 = [null,null,null,null,null,null,null];
(statearr_44890[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__);

(statearr_44890[(1)] = (1));

return statearr_44890;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____1 = (function (state_44874){
while(true){
var ret_value__44339__auto__ = (function (){try{while(true){
var result__44340__auto__ = switch__44337__auto__(state_44874);
if(cljs.core.keyword_identical_QMARK_(result__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44340__auto__;
}
break;
}
}catch (e44891){var ex__44341__auto__ = e44891;
var statearr_44892_46687 = state_44874;
(statearr_44892_46687[(2)] = ex__44341__auto__);


if(cljs.core.seq((state_44874[(4)]))){
var statearr_44893_46688 = state_44874;
(statearr_44893_46688[(1)] = cljs.core.first((state_44874[(4)])));

} else {
throw ex__44341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46689 = state_44874;
state_44874 = G__46689;
continue;
} else {
return ret_value__44339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__ = function(state_44874){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____1.call(this,state_44874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__;
})()
;})(__46661,switch__44337__auto__,c__44536__auto___46678,G__44824_46662,G__44824_46663__$1,n__5636__auto___46660,jobs,results,process__$1,async))
})();
var state__44538__auto__ = (function (){var statearr_44895 = f__44537__auto__();
(statearr_44895[(6)] = c__44536__auto___46678);

return statearr_44895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44538__auto__);
});})(__46661,c__44536__auto___46678,G__44824_46662,G__44824_46663__$1,n__5636__auto___46660,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44824_46663__$1)].join('')));

}

var G__46690 = (__46661 + (1));
__46661 = G__46690;
continue;
} else {
}
break;
}

var c__44536__auto___46691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44537__auto__ = (function (){var switch__44337__auto__ = (function (state_44920){
var state_val_44921 = (state_44920[(1)]);
if((state_val_44921 === (7))){
var inst_44916 = (state_44920[(2)]);
var state_44920__$1 = state_44920;
var statearr_44923_46693 = state_44920__$1;
(statearr_44923_46693[(2)] = inst_44916);

(statearr_44923_46693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (1))){
var state_44920__$1 = state_44920;
var statearr_44924_46695 = state_44920__$1;
(statearr_44924_46695[(2)] = null);

(statearr_44924_46695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (4))){
var inst_44899 = (state_44920[(7)]);
var inst_44899__$1 = (state_44920[(2)]);
var inst_44900 = (inst_44899__$1 == null);
var state_44920__$1 = (function (){var statearr_44925 = state_44920;
(statearr_44925[(7)] = inst_44899__$1);

return statearr_44925;
})();
if(cljs.core.truth_(inst_44900)){
var statearr_44926_46697 = state_44920__$1;
(statearr_44926_46697[(1)] = (5));

} else {
var statearr_44928_46698 = state_44920__$1;
(statearr_44928_46698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (6))){
var inst_44899 = (state_44920[(7)]);
var inst_44904 = (state_44920[(8)]);
var inst_44904__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44905 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44906 = [inst_44899,inst_44904__$1];
var inst_44907 = (new cljs.core.PersistentVector(null,2,(5),inst_44905,inst_44906,null));
var state_44920__$1 = (function (){var statearr_44930 = state_44920;
(statearr_44930[(8)] = inst_44904__$1);

return statearr_44930;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44920__$1,(8),jobs,inst_44907);
} else {
if((state_val_44921 === (3))){
var inst_44918 = (state_44920[(2)]);
var state_44920__$1 = state_44920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44920__$1,inst_44918);
} else {
if((state_val_44921 === (2))){
var state_44920__$1 = state_44920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44920__$1,(4),from);
} else {
if((state_val_44921 === (9))){
var inst_44912 = (state_44920[(2)]);
var state_44920__$1 = (function (){var statearr_44934 = state_44920;
(statearr_44934[(9)] = inst_44912);

return statearr_44934;
})();
var statearr_44935_46699 = state_44920__$1;
(statearr_44935_46699[(2)] = null);

(statearr_44935_46699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (5))){
var inst_44902 = cljs.core.async.close_BANG_(jobs);
var state_44920__$1 = state_44920;
var statearr_44937_46700 = state_44920__$1;
(statearr_44937_46700[(2)] = inst_44902);

(statearr_44937_46700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44921 === (8))){
var inst_44904 = (state_44920[(8)]);
var inst_44909 = (state_44920[(2)]);
var state_44920__$1 = (function (){var statearr_44938 = state_44920;
(statearr_44938[(10)] = inst_44909);

return statearr_44938;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44920__$1,(9),results,inst_44904);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____0 = (function (){
var statearr_44939 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44939[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__);

(statearr_44939[(1)] = (1));

return statearr_44939;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____1 = (function (state_44920){
while(true){
var ret_value__44339__auto__ = (function (){try{while(true){
var result__44340__auto__ = switch__44337__auto__(state_44920);
if(cljs.core.keyword_identical_QMARK_(result__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44340__auto__;
}
break;
}
}catch (e44942){var ex__44341__auto__ = e44942;
var statearr_44943_46703 = state_44920;
(statearr_44943_46703[(2)] = ex__44341__auto__);


if(cljs.core.seq((state_44920[(4)]))){
var statearr_44944_46704 = state_44920;
(statearr_44944_46704[(1)] = cljs.core.first((state_44920[(4)])));

} else {
throw ex__44341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46706 = state_44920;
state_44920 = G__46706;
continue;
} else {
return ret_value__44339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__ = function(state_44920){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____1.call(this,state_44920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__;
})()
})();
var state__44538__auto__ = (function (){var statearr_44949 = f__44537__auto__();
(statearr_44949[(6)] = c__44536__auto___46691);

return statearr_44949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44538__auto__);
}));


var c__44536__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44537__auto__ = (function (){var switch__44337__auto__ = (function (state_44987){
var state_val_44991 = (state_44987[(1)]);
if((state_val_44991 === (7))){
var inst_44983 = (state_44987[(2)]);
var state_44987__$1 = state_44987;
var statearr_45004_46707 = state_44987__$1;
(statearr_45004_46707[(2)] = inst_44983);

(statearr_45004_46707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (20))){
var state_44987__$1 = state_44987;
var statearr_45005_46708 = state_44987__$1;
(statearr_45005_46708[(2)] = null);

(statearr_45005_46708[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (1))){
var state_44987__$1 = state_44987;
var statearr_45006_46711 = state_44987__$1;
(statearr_45006_46711[(2)] = null);

(statearr_45006_46711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (4))){
var inst_44952 = (state_44987[(7)]);
var inst_44952__$1 = (state_44987[(2)]);
var inst_44953 = (inst_44952__$1 == null);
var state_44987__$1 = (function (){var statearr_45007 = state_44987;
(statearr_45007[(7)] = inst_44952__$1);

return statearr_45007;
})();
if(cljs.core.truth_(inst_44953)){
var statearr_45008_46713 = state_44987__$1;
(statearr_45008_46713[(1)] = (5));

} else {
var statearr_45009_46714 = state_44987__$1;
(statearr_45009_46714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (15))){
var inst_44965 = (state_44987[(8)]);
var state_44987__$1 = state_44987;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44987__$1,(18),to,inst_44965);
} else {
if((state_val_44991 === (21))){
var inst_44978 = (state_44987[(2)]);
var state_44987__$1 = state_44987;
var statearr_45010_46715 = state_44987__$1;
(statearr_45010_46715[(2)] = inst_44978);

(statearr_45010_46715[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (13))){
var inst_44980 = (state_44987[(2)]);
var state_44987__$1 = (function (){var statearr_45011 = state_44987;
(statearr_45011[(9)] = inst_44980);

return statearr_45011;
})();
var statearr_45012_46717 = state_44987__$1;
(statearr_45012_46717[(2)] = null);

(statearr_45012_46717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (6))){
var inst_44952 = (state_44987[(7)]);
var state_44987__$1 = state_44987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44987__$1,(11),inst_44952);
} else {
if((state_val_44991 === (17))){
var inst_44973 = (state_44987[(2)]);
var state_44987__$1 = state_44987;
if(cljs.core.truth_(inst_44973)){
var statearr_45014_46718 = state_44987__$1;
(statearr_45014_46718[(1)] = (19));

} else {
var statearr_45015_46719 = state_44987__$1;
(statearr_45015_46719[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (3))){
var inst_44985 = (state_44987[(2)]);
var state_44987__$1 = state_44987;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44987__$1,inst_44985);
} else {
if((state_val_44991 === (12))){
var inst_44962 = (state_44987[(10)]);
var state_44987__$1 = state_44987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44987__$1,(14),inst_44962);
} else {
if((state_val_44991 === (2))){
var state_44987__$1 = state_44987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44987__$1,(4),results);
} else {
if((state_val_44991 === (19))){
var state_44987__$1 = state_44987;
var statearr_45018_46720 = state_44987__$1;
(statearr_45018_46720[(2)] = null);

(statearr_45018_46720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (11))){
var inst_44962 = (state_44987[(2)]);
var state_44987__$1 = (function (){var statearr_45019 = state_44987;
(statearr_45019[(10)] = inst_44962);

return statearr_45019;
})();
var statearr_45021_46721 = state_44987__$1;
(statearr_45021_46721[(2)] = null);

(statearr_45021_46721[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (9))){
var state_44987__$1 = state_44987;
var statearr_45022_46722 = state_44987__$1;
(statearr_45022_46722[(2)] = null);

(statearr_45022_46722[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (5))){
var state_44987__$1 = state_44987;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45023_46724 = state_44987__$1;
(statearr_45023_46724[(1)] = (8));

} else {
var statearr_45024_46725 = state_44987__$1;
(statearr_45024_46725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (14))){
var inst_44965 = (state_44987[(8)]);
var inst_44967 = (state_44987[(11)]);
var inst_44965__$1 = (state_44987[(2)]);
var inst_44966 = (inst_44965__$1 == null);
var inst_44967__$1 = cljs.core.not(inst_44966);
var state_44987__$1 = (function (){var statearr_45025 = state_44987;
(statearr_45025[(8)] = inst_44965__$1);

(statearr_45025[(11)] = inst_44967__$1);

return statearr_45025;
})();
if(inst_44967__$1){
var statearr_45026_46727 = state_44987__$1;
(statearr_45026_46727[(1)] = (15));

} else {
var statearr_45027_46728 = state_44987__$1;
(statearr_45027_46728[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (16))){
var inst_44967 = (state_44987[(11)]);
var state_44987__$1 = state_44987;
var statearr_45038_46729 = state_44987__$1;
(statearr_45038_46729[(2)] = inst_44967);

(statearr_45038_46729[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (10))){
var inst_44959 = (state_44987[(2)]);
var state_44987__$1 = state_44987;
var statearr_45039_46730 = state_44987__$1;
(statearr_45039_46730[(2)] = inst_44959);

(statearr_45039_46730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (18))){
var inst_44970 = (state_44987[(2)]);
var state_44987__$1 = state_44987;
var statearr_45040_46731 = state_44987__$1;
(statearr_45040_46731[(2)] = inst_44970);

(statearr_45040_46731[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44991 === (8))){
var inst_44956 = cljs.core.async.close_BANG_(to);
var state_44987__$1 = state_44987;
var statearr_45042_46732 = state_44987__$1;
(statearr_45042_46732[(2)] = inst_44956);

(statearr_45042_46732[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____0 = (function (){
var statearr_45043 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45043[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__);

(statearr_45043[(1)] = (1));

return statearr_45043;
});
var cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____1 = (function (state_44987){
while(true){
var ret_value__44339__auto__ = (function (){try{while(true){
var result__44340__auto__ = switch__44337__auto__(state_44987);
if(cljs.core.keyword_identical_QMARK_(result__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44340__auto__;
}
break;
}
}catch (e45044){var ex__44341__auto__ = e45044;
var statearr_45045_46733 = state_44987;
(statearr_45045_46733[(2)] = ex__44341__auto__);


if(cljs.core.seq((state_44987[(4)]))){
var statearr_45046_46734 = state_44987;
(statearr_45046_46734[(1)] = cljs.core.first((state_44987[(4)])));

} else {
throw ex__44341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46735 = state_44987;
state_44987 = G__46735;
continue;
} else {
return ret_value__44339__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__ = function(state_44987){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____1.call(this,state_44987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__44338__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__44338__auto__;
})()
})();
var state__44538__auto__ = (function (){var statearr_45047 = f__44537__auto__();
(statearr_45047[(6)] = c__44536__auto__);

return statearr_45047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44538__auto__);
}));

return c__44536__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__45049 = arguments.length;
switch (G__45049) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__45055 = arguments.length;
switch (G__45055) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__45064 = arguments.length;
switch (G__45064) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__44536__auto___46742 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44537__auto__ = (function (){var switch__44337__auto__ = (function (state_45095){
var state_val_45096 = (state_45095[(1)]);
if((state_val_45096 === (7))){
var inst_45091 = (state_45095[(2)]);
var state_45095__$1 = state_45095;
var statearr_45100_46743 = state_45095__$1;
(statearr_45100_46743[(2)] = inst_45091);

(statearr_45100_46743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45096 === (1))){
var state_45095__$1 = state_45095;
var statearr_45101_46745 = state_45095__$1;
(statearr_45101_46745[(2)] = null);

(statearr_45101_46745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45096 === (4))){
var inst_45072 = (state_45095[(7)]);
var inst_45072__$1 = (state_45095[(2)]);
var inst_45073 = (inst_45072__$1 == null);
var state_45095__$1 = (function (){var statearr_45102 = state_45095;
(statearr_45102[(7)] = inst_45072__$1);

return statearr_45102;
})();
if(cljs.core.truth_(inst_45073)){
var statearr_45103_46756 = state_45095__$1;
(statearr_45103_46756[(1)] = (5));

} else {
var statearr_45104_46761 = state_45095__$1;
(statearr_45104_46761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45096 === (13))){
var state_45095__$1 = state_45095;
var statearr_45105_46766 = state_45095__$1;
(statearr_45105_46766[(2)] = null);

(statearr_45105_46766[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45096 === (6))){
var inst_45072 = (state_45095[(7)]);
var inst_45078 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45072) : p.call(null,inst_45072));
var state_45095__$1 = state_45095;
if(cljs.core.truth_(inst_45078)){
var statearr_45109_46767 = state_45095__$1;
(statearr_45109_46767[(1)] = (9));

} else {
var statearr_45110_46768 = state_45095__$1;
(statearr_45110_46768[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45096 === (3))){
var inst_45093 = (state_45095[(2)]);
var state_45095__$1 = state_45095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45095__$1,inst_45093);
} else {
if((state_val_45096 === (12))){
var state_45095__$1 = state_45095;
var statearr_45111_46769 = state_45095__$1;
(statearr_45111_46769[(2)] = null);

(statearr_45111_46769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45096 === (2))){
var state_45095__$1 = state_45095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45095__$1,(4),ch);
} else {
if((state_val_45096 === (11))){
var inst_45072 = (state_45095[(7)]);
var inst_45082 = (state_45095[(2)]);
var state_45095__$1 = state_45095;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45095__$1,(8),inst_45082,inst_45072);
} else {
if((state_val_45096 === (9))){
var state_45095__$1 = state_45095;
var statearr_45112_46771 = state_45095__$1;
(statearr_45112_46771[(2)] = tc);

(statearr_45112_46771[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45096 === (5))){
var inst_45075 = cljs.core.async.close_BANG_(tc);
var inst_45076 = cljs.core.async.close_BANG_(fc);
var state_45095__$1 = (function (){var statearr_45113 = state_45095;
(statearr_45113[(8)] = inst_45075);

return statearr_45113;
})();
var statearr_45114_46772 = state_45095__$1;
(statearr_45114_46772[(2)] = inst_45076);

(statearr_45114_46772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45096 === (14))){
var inst_45089 = (state_45095[(2)]);
var state_45095__$1 = state_45095;
var statearr_45115_46773 = state_45095__$1;
(statearr_45115_46773[(2)] = inst_45089);

(statearr_45115_46773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45096 === (10))){
var state_45095__$1 = state_45095;
var statearr_45116_46774 = state_45095__$1;
(statearr_45116_46774[(2)] = fc);

(statearr_45116_46774[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45096 === (8))){
var inst_45084 = (state_45095[(2)]);
var state_45095__$1 = state_45095;
if(cljs.core.truth_(inst_45084)){
var statearr_45117_46775 = state_45095__$1;
(statearr_45117_46775[(1)] = (12));

} else {
var statearr_45118_46776 = state_45095__$1;
(statearr_45118_46776[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44338__auto__ = null;
var cljs$core$async$state_machine__44338__auto____0 = (function (){
var statearr_45120 = [null,null,null,null,null,null,null,null,null];
(statearr_45120[(0)] = cljs$core$async$state_machine__44338__auto__);

(statearr_45120[(1)] = (1));

return statearr_45120;
});
var cljs$core$async$state_machine__44338__auto____1 = (function (state_45095){
while(true){
var ret_value__44339__auto__ = (function (){try{while(true){
var result__44340__auto__ = switch__44337__auto__(state_45095);
if(cljs.core.keyword_identical_QMARK_(result__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44340__auto__;
}
break;
}
}catch (e45122){var ex__44341__auto__ = e45122;
var statearr_45123_46779 = state_45095;
(statearr_45123_46779[(2)] = ex__44341__auto__);


if(cljs.core.seq((state_45095[(4)]))){
var statearr_45127_46781 = state_45095;
(statearr_45127_46781[(1)] = cljs.core.first((state_45095[(4)])));

} else {
throw ex__44341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46782 = state_45095;
state_45095 = G__46782;
continue;
} else {
return ret_value__44339__auto__;
}
break;
}
});
cljs$core$async$state_machine__44338__auto__ = function(state_45095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44338__auto____1.call(this,state_45095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44338__auto____0;
cljs$core$async$state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44338__auto____1;
return cljs$core$async$state_machine__44338__auto__;
})()
})();
var state__44538__auto__ = (function (){var statearr_45128 = f__44537__auto__();
(statearr_45128[(6)] = c__44536__auto___46742);

return statearr_45128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44538__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__44536__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44537__auto__ = (function (){var switch__44337__auto__ = (function (state_45156){
var state_val_45157 = (state_45156[(1)]);
if((state_val_45157 === (7))){
var inst_45152 = (state_45156[(2)]);
var state_45156__$1 = state_45156;
var statearr_45158_46784 = state_45156__$1;
(statearr_45158_46784[(2)] = inst_45152);

(statearr_45158_46784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45157 === (1))){
var inst_45132 = init;
var inst_45133 = inst_45132;
var state_45156__$1 = (function (){var statearr_45159 = state_45156;
(statearr_45159[(7)] = inst_45133);

return statearr_45159;
})();
var statearr_45160_46786 = state_45156__$1;
(statearr_45160_46786[(2)] = null);

(statearr_45160_46786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45157 === (4))){
var inst_45136 = (state_45156[(8)]);
var inst_45136__$1 = (state_45156[(2)]);
var inst_45137 = (inst_45136__$1 == null);
var state_45156__$1 = (function (){var statearr_45161 = state_45156;
(statearr_45161[(8)] = inst_45136__$1);

return statearr_45161;
})();
if(cljs.core.truth_(inst_45137)){
var statearr_45162_46787 = state_45156__$1;
(statearr_45162_46787[(1)] = (5));

} else {
var statearr_45163_46788 = state_45156__$1;
(statearr_45163_46788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45157 === (6))){
var inst_45142 = (state_45156[(9)]);
var inst_45133 = (state_45156[(7)]);
var inst_45136 = (state_45156[(8)]);
var inst_45142__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_45133,inst_45136) : f.call(null,inst_45133,inst_45136));
var inst_45143 = cljs.core.reduced_QMARK_(inst_45142__$1);
var state_45156__$1 = (function (){var statearr_45165 = state_45156;
(statearr_45165[(9)] = inst_45142__$1);

return statearr_45165;
})();
if(inst_45143){
var statearr_45166_46790 = state_45156__$1;
(statearr_45166_46790[(1)] = (8));

} else {
var statearr_45170_46791 = state_45156__$1;
(statearr_45170_46791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45157 === (3))){
var inst_45154 = (state_45156[(2)]);
var state_45156__$1 = state_45156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45156__$1,inst_45154);
} else {
if((state_val_45157 === (2))){
var state_45156__$1 = state_45156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45156__$1,(4),ch);
} else {
if((state_val_45157 === (9))){
var inst_45142 = (state_45156[(9)]);
var inst_45133 = inst_45142;
var state_45156__$1 = (function (){var statearr_45171 = state_45156;
(statearr_45171[(7)] = inst_45133);

return statearr_45171;
})();
var statearr_45172_46794 = state_45156__$1;
(statearr_45172_46794[(2)] = null);

(statearr_45172_46794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45157 === (5))){
var inst_45133 = (state_45156[(7)]);
var state_45156__$1 = state_45156;
var statearr_45173_46795 = state_45156__$1;
(statearr_45173_46795[(2)] = inst_45133);

(statearr_45173_46795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45157 === (10))){
var inst_45150 = (state_45156[(2)]);
var state_45156__$1 = state_45156;
var statearr_45174_46796 = state_45156__$1;
(statearr_45174_46796[(2)] = inst_45150);

(statearr_45174_46796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45157 === (8))){
var inst_45142 = (state_45156[(9)]);
var inst_45146 = cljs.core.deref(inst_45142);
var state_45156__$1 = state_45156;
var statearr_45175_46797 = state_45156__$1;
(statearr_45175_46797[(2)] = inst_45146);

(statearr_45175_46797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__44338__auto__ = null;
var cljs$core$async$reduce_$_state_machine__44338__auto____0 = (function (){
var statearr_45176 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45176[(0)] = cljs$core$async$reduce_$_state_machine__44338__auto__);

(statearr_45176[(1)] = (1));

return statearr_45176;
});
var cljs$core$async$reduce_$_state_machine__44338__auto____1 = (function (state_45156){
while(true){
var ret_value__44339__auto__ = (function (){try{while(true){
var result__44340__auto__ = switch__44337__auto__(state_45156);
if(cljs.core.keyword_identical_QMARK_(result__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44340__auto__;
}
break;
}
}catch (e45177){var ex__44341__auto__ = e45177;
var statearr_45178_46799 = state_45156;
(statearr_45178_46799[(2)] = ex__44341__auto__);


if(cljs.core.seq((state_45156[(4)]))){
var statearr_45179_46801 = state_45156;
(statearr_45179_46801[(1)] = cljs.core.first((state_45156[(4)])));

} else {
throw ex__44341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46803 = state_45156;
state_45156 = G__46803;
continue;
} else {
return ret_value__44339__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__44338__auto__ = function(state_45156){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__44338__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__44338__auto____1.call(this,state_45156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__44338__auto____0;
cljs$core$async$reduce_$_state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__44338__auto____1;
return cljs$core$async$reduce_$_state_machine__44338__auto__;
})()
})();
var state__44538__auto__ = (function (){var statearr_45180 = f__44537__auto__();
(statearr_45180[(6)] = c__44536__auto__);

return statearr_45180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44538__auto__);
}));

return c__44536__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__44536__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44537__auto__ = (function (){var switch__44337__auto__ = (function (state_45186){
var state_val_45187 = (state_45186[(1)]);
if((state_val_45187 === (1))){
var inst_45181 = cljs.core.async.reduce(f__$1,init,ch);
var state_45186__$1 = state_45186;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45186__$1,(2),inst_45181);
} else {
if((state_val_45187 === (2))){
var inst_45183 = (state_45186[(2)]);
var inst_45184 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_45183) : f__$1.call(null,inst_45183));
var state_45186__$1 = state_45186;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45186__$1,inst_45184);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__44338__auto__ = null;
var cljs$core$async$transduce_$_state_machine__44338__auto____0 = (function (){
var statearr_45193 = [null,null,null,null,null,null,null];
(statearr_45193[(0)] = cljs$core$async$transduce_$_state_machine__44338__auto__);

(statearr_45193[(1)] = (1));

return statearr_45193;
});
var cljs$core$async$transduce_$_state_machine__44338__auto____1 = (function (state_45186){
while(true){
var ret_value__44339__auto__ = (function (){try{while(true){
var result__44340__auto__ = switch__44337__auto__(state_45186);
if(cljs.core.keyword_identical_QMARK_(result__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44340__auto__;
}
break;
}
}catch (e45194){var ex__44341__auto__ = e45194;
var statearr_45198_46806 = state_45186;
(statearr_45198_46806[(2)] = ex__44341__auto__);


if(cljs.core.seq((state_45186[(4)]))){
var statearr_45199_46808 = state_45186;
(statearr_45199_46808[(1)] = cljs.core.first((state_45186[(4)])));

} else {
throw ex__44341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46809 = state_45186;
state_45186 = G__46809;
continue;
} else {
return ret_value__44339__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__44338__auto__ = function(state_45186){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__44338__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__44338__auto____1.call(this,state_45186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__44338__auto____0;
cljs$core$async$transduce_$_state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__44338__auto____1;
return cljs$core$async$transduce_$_state_machine__44338__auto__;
})()
})();
var state__44538__auto__ = (function (){var statearr_45200 = f__44537__auto__();
(statearr_45200[(6)] = c__44536__auto__);

return statearr_45200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44538__auto__);
}));

return c__44536__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__45204 = arguments.length;
switch (G__45204) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__44536__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44537__auto__ = (function (){var switch__44337__auto__ = (function (state_45234){
var state_val_45235 = (state_45234[(1)]);
if((state_val_45235 === (7))){
var inst_45216 = (state_45234[(2)]);
var state_45234__$1 = state_45234;
var statearr_45237_46813 = state_45234__$1;
(statearr_45237_46813[(2)] = inst_45216);

(statearr_45237_46813[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45235 === (1))){
var inst_45209 = cljs.core.seq(coll);
var inst_45211 = inst_45209;
var state_45234__$1 = (function (){var statearr_45239 = state_45234;
(statearr_45239[(7)] = inst_45211);

return statearr_45239;
})();
var statearr_45240_46814 = state_45234__$1;
(statearr_45240_46814[(2)] = null);

(statearr_45240_46814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45235 === (4))){
var inst_45211 = (state_45234[(7)]);
var inst_45214 = cljs.core.first(inst_45211);
var state_45234__$1 = state_45234;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45234__$1,(7),ch,inst_45214);
} else {
if((state_val_45235 === (13))){
var inst_45228 = (state_45234[(2)]);
var state_45234__$1 = state_45234;
var statearr_45241_46818 = state_45234__$1;
(statearr_45241_46818[(2)] = inst_45228);

(statearr_45241_46818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45235 === (6))){
var inst_45219 = (state_45234[(2)]);
var state_45234__$1 = state_45234;
if(cljs.core.truth_(inst_45219)){
var statearr_45242_46819 = state_45234__$1;
(statearr_45242_46819[(1)] = (8));

} else {
var statearr_45243_46820 = state_45234__$1;
(statearr_45243_46820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45235 === (3))){
var inst_45232 = (state_45234[(2)]);
var state_45234__$1 = state_45234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45234__$1,inst_45232);
} else {
if((state_val_45235 === (12))){
var state_45234__$1 = state_45234;
var statearr_45244_46821 = state_45234__$1;
(statearr_45244_46821[(2)] = null);

(statearr_45244_46821[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45235 === (2))){
var inst_45211 = (state_45234[(7)]);
var state_45234__$1 = state_45234;
if(cljs.core.truth_(inst_45211)){
var statearr_45245_46822 = state_45234__$1;
(statearr_45245_46822[(1)] = (4));

} else {
var statearr_45246_46823 = state_45234__$1;
(statearr_45246_46823[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45235 === (11))){
var inst_45225 = cljs.core.async.close_BANG_(ch);
var state_45234__$1 = state_45234;
var statearr_45247_46824 = state_45234__$1;
(statearr_45247_46824[(2)] = inst_45225);

(statearr_45247_46824[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45235 === (9))){
var state_45234__$1 = state_45234;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45248_46825 = state_45234__$1;
(statearr_45248_46825[(1)] = (11));

} else {
var statearr_45249_46826 = state_45234__$1;
(statearr_45249_46826[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45235 === (5))){
var inst_45211 = (state_45234[(7)]);
var state_45234__$1 = state_45234;
var statearr_45250_46827 = state_45234__$1;
(statearr_45250_46827[(2)] = inst_45211);

(statearr_45250_46827[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45235 === (10))){
var inst_45230 = (state_45234[(2)]);
var state_45234__$1 = state_45234;
var statearr_45252_46828 = state_45234__$1;
(statearr_45252_46828[(2)] = inst_45230);

(statearr_45252_46828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45235 === (8))){
var inst_45211 = (state_45234[(7)]);
var inst_45221 = cljs.core.next(inst_45211);
var inst_45211__$1 = inst_45221;
var state_45234__$1 = (function (){var statearr_45253 = state_45234;
(statearr_45253[(7)] = inst_45211__$1);

return statearr_45253;
})();
var statearr_45254_46829 = state_45234__$1;
(statearr_45254_46829[(2)] = null);

(statearr_45254_46829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44338__auto__ = null;
var cljs$core$async$state_machine__44338__auto____0 = (function (){
var statearr_45255 = [null,null,null,null,null,null,null,null];
(statearr_45255[(0)] = cljs$core$async$state_machine__44338__auto__);

(statearr_45255[(1)] = (1));

return statearr_45255;
});
var cljs$core$async$state_machine__44338__auto____1 = (function (state_45234){
while(true){
var ret_value__44339__auto__ = (function (){try{while(true){
var result__44340__auto__ = switch__44337__auto__(state_45234);
if(cljs.core.keyword_identical_QMARK_(result__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44340__auto__;
}
break;
}
}catch (e45256){var ex__44341__auto__ = e45256;
var statearr_45257_46830 = state_45234;
(statearr_45257_46830[(2)] = ex__44341__auto__);


if(cljs.core.seq((state_45234[(4)]))){
var statearr_45258_46831 = state_45234;
(statearr_45258_46831[(1)] = cljs.core.first((state_45234[(4)])));

} else {
throw ex__44341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46833 = state_45234;
state_45234 = G__46833;
continue;
} else {
return ret_value__44339__auto__;
}
break;
}
});
cljs$core$async$state_machine__44338__auto__ = function(state_45234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44338__auto____1.call(this,state_45234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44338__auto____0;
cljs$core$async$state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44338__auto____1;
return cljs$core$async$state_machine__44338__auto__;
})()
})();
var state__44538__auto__ = (function (){var statearr_45259 = f__44537__auto__();
(statearr_45259[(6)] = c__44536__auto__);

return statearr_45259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44538__auto__);
}));

return c__44536__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__45265 = arguments.length;
switch (G__45265) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_46843 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_46843(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_46851 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_46851(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_46852 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_46852(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_46854 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_46854(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45268 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45268 = (function (ch,cs,meta45269){
this.ch = ch;
this.cs = cs;
this.meta45269 = meta45269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45270,meta45269__$1){
var self__ = this;
var _45270__$1 = this;
return (new cljs.core.async.t_cljs$core$async45268(self__.ch,self__.cs,meta45269__$1));
}));

(cljs.core.async.t_cljs$core$async45268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45270){
var self__ = this;
var _45270__$1 = this;
return self__.meta45269;
}));

(cljs.core.async.t_cljs$core$async45268.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45268.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45268.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45268.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async45268.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async45268.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async45268.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45269","meta45269",-1134894382,null)], null);
}));

(cljs.core.async.t_cljs$core$async45268.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45268");

(cljs.core.async.t_cljs$core$async45268.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45268");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45268.
 */
cljs.core.async.__GT_t_cljs$core$async45268 = (function cljs$core$async$mult_$___GT_t_cljs$core$async45268(ch__$1,cs__$1,meta45269){
return (new cljs.core.async.t_cljs$core$async45268(ch__$1,cs__$1,meta45269));
});

}

return (new cljs.core.async.t_cljs$core$async45268(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__44536__auto___46863 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44537__auto__ = (function (){var switch__44337__auto__ = (function (state_45412){
var state_val_45413 = (state_45412[(1)]);
if((state_val_45413 === (7))){
var inst_45406 = (state_45412[(2)]);
var state_45412__$1 = state_45412;
var statearr_45416_46864 = state_45412__$1;
(statearr_45416_46864[(2)] = inst_45406);

(statearr_45416_46864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (20))){
var inst_45307 = (state_45412[(7)]);
var inst_45319 = cljs.core.first(inst_45307);
var inst_45320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45319,(0),null);
var inst_45321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45319,(1),null);
var state_45412__$1 = (function (){var statearr_45418 = state_45412;
(statearr_45418[(8)] = inst_45320);

return statearr_45418;
})();
if(cljs.core.truth_(inst_45321)){
var statearr_45419_46869 = state_45412__$1;
(statearr_45419_46869[(1)] = (22));

} else {
var statearr_45421_46870 = state_45412__$1;
(statearr_45421_46870[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (27))){
var inst_45276 = (state_45412[(9)]);
var inst_45358 = (state_45412[(10)]);
var inst_45349 = (state_45412[(11)]);
var inst_45351 = (state_45412[(12)]);
var inst_45358__$1 = cljs.core._nth(inst_45349,inst_45351);
var inst_45359 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45358__$1,inst_45276,done);
var state_45412__$1 = (function (){var statearr_45422 = state_45412;
(statearr_45422[(10)] = inst_45358__$1);

return statearr_45422;
})();
if(cljs.core.truth_(inst_45359)){
var statearr_45423_46875 = state_45412__$1;
(statearr_45423_46875[(1)] = (30));

} else {
var statearr_45424_46876 = state_45412__$1;
(statearr_45424_46876[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (1))){
var state_45412__$1 = state_45412;
var statearr_45425_46877 = state_45412__$1;
(statearr_45425_46877[(2)] = null);

(statearr_45425_46877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (24))){
var inst_45307 = (state_45412[(7)]);
var inst_45326 = (state_45412[(2)]);
var inst_45327 = cljs.core.next(inst_45307);
var inst_45285 = inst_45327;
var inst_45286 = null;
var inst_45287 = (0);
var inst_45288 = (0);
var state_45412__$1 = (function (){var statearr_45427 = state_45412;
(statearr_45427[(13)] = inst_45287);

(statearr_45427[(14)] = inst_45286);

(statearr_45427[(15)] = inst_45288);

(statearr_45427[(16)] = inst_45285);

(statearr_45427[(17)] = inst_45326);

return statearr_45427;
})();
var statearr_45428_46878 = state_45412__$1;
(statearr_45428_46878[(2)] = null);

(statearr_45428_46878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (39))){
var state_45412__$1 = state_45412;
var statearr_45433_46879 = state_45412__$1;
(statearr_45433_46879[(2)] = null);

(statearr_45433_46879[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (4))){
var inst_45276 = (state_45412[(9)]);
var inst_45276__$1 = (state_45412[(2)]);
var inst_45277 = (inst_45276__$1 == null);
var state_45412__$1 = (function (){var statearr_45434 = state_45412;
(statearr_45434[(9)] = inst_45276__$1);

return statearr_45434;
})();
if(cljs.core.truth_(inst_45277)){
var statearr_45435_46881 = state_45412__$1;
(statearr_45435_46881[(1)] = (5));

} else {
var statearr_45437_46885 = state_45412__$1;
(statearr_45437_46885[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (15))){
var inst_45287 = (state_45412[(13)]);
var inst_45286 = (state_45412[(14)]);
var inst_45288 = (state_45412[(15)]);
var inst_45285 = (state_45412[(16)]);
var inst_45303 = (state_45412[(2)]);
var inst_45304 = (inst_45288 + (1));
var tmp45429 = inst_45287;
var tmp45430 = inst_45286;
var tmp45431 = inst_45285;
var inst_45285__$1 = tmp45431;
var inst_45286__$1 = tmp45430;
var inst_45287__$1 = tmp45429;
var inst_45288__$1 = inst_45304;
var state_45412__$1 = (function (){var statearr_45438 = state_45412;
(statearr_45438[(13)] = inst_45287__$1);

(statearr_45438[(18)] = inst_45303);

(statearr_45438[(14)] = inst_45286__$1);

(statearr_45438[(15)] = inst_45288__$1);

(statearr_45438[(16)] = inst_45285__$1);

return statearr_45438;
})();
var statearr_45439_46887 = state_45412__$1;
(statearr_45439_46887[(2)] = null);

(statearr_45439_46887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (21))){
var inst_45330 = (state_45412[(2)]);
var state_45412__$1 = state_45412;
var statearr_45443_46888 = state_45412__$1;
(statearr_45443_46888[(2)] = inst_45330);

(statearr_45443_46888[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (31))){
var inst_45358 = (state_45412[(10)]);
var inst_45362 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45358);
var state_45412__$1 = state_45412;
var statearr_45444_46889 = state_45412__$1;
(statearr_45444_46889[(2)] = inst_45362);

(statearr_45444_46889[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (32))){
var inst_45348 = (state_45412[(19)]);
var inst_45350 = (state_45412[(20)]);
var inst_45349 = (state_45412[(11)]);
var inst_45351 = (state_45412[(12)]);
var inst_45364 = (state_45412[(2)]);
var inst_45365 = (inst_45351 + (1));
var tmp45440 = inst_45348;
var tmp45441 = inst_45350;
var tmp45442 = inst_45349;
var inst_45348__$1 = tmp45440;
var inst_45349__$1 = tmp45442;
var inst_45350__$1 = tmp45441;
var inst_45351__$1 = inst_45365;
var state_45412__$1 = (function (){var statearr_45450 = state_45412;
(statearr_45450[(21)] = inst_45364);

(statearr_45450[(19)] = inst_45348__$1);

(statearr_45450[(20)] = inst_45350__$1);

(statearr_45450[(11)] = inst_45349__$1);

(statearr_45450[(12)] = inst_45351__$1);

return statearr_45450;
})();
var statearr_45451_46890 = state_45412__$1;
(statearr_45451_46890[(2)] = null);

(statearr_45451_46890[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (40))){
var inst_45379 = (state_45412[(22)]);
var inst_45383 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45379);
var state_45412__$1 = state_45412;
var statearr_45452_46892 = state_45412__$1;
(statearr_45452_46892[(2)] = inst_45383);

(statearr_45452_46892[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (33))){
var inst_45368 = (state_45412[(23)]);
var inst_45370 = cljs.core.chunked_seq_QMARK_(inst_45368);
var state_45412__$1 = state_45412;
if(inst_45370){
var statearr_45458_46893 = state_45412__$1;
(statearr_45458_46893[(1)] = (36));

} else {
var statearr_45459_46894 = state_45412__$1;
(statearr_45459_46894[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (13))){
var inst_45297 = (state_45412[(24)]);
var inst_45300 = cljs.core.async.close_BANG_(inst_45297);
var state_45412__$1 = state_45412;
var statearr_45460_46895 = state_45412__$1;
(statearr_45460_46895[(2)] = inst_45300);

(statearr_45460_46895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (22))){
var inst_45320 = (state_45412[(8)]);
var inst_45323 = cljs.core.async.close_BANG_(inst_45320);
var state_45412__$1 = state_45412;
var statearr_45461_46896 = state_45412__$1;
(statearr_45461_46896[(2)] = inst_45323);

(statearr_45461_46896[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (36))){
var inst_45368 = (state_45412[(23)]);
var inst_45372 = cljs.core.chunk_first(inst_45368);
var inst_45374 = cljs.core.chunk_rest(inst_45368);
var inst_45375 = cljs.core.count(inst_45372);
var inst_45348 = inst_45374;
var inst_45349 = inst_45372;
var inst_45350 = inst_45375;
var inst_45351 = (0);
var state_45412__$1 = (function (){var statearr_45467 = state_45412;
(statearr_45467[(19)] = inst_45348);

(statearr_45467[(20)] = inst_45350);

(statearr_45467[(11)] = inst_45349);

(statearr_45467[(12)] = inst_45351);

return statearr_45467;
})();
var statearr_45468_46901 = state_45412__$1;
(statearr_45468_46901[(2)] = null);

(statearr_45468_46901[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (41))){
var inst_45368 = (state_45412[(23)]);
var inst_45385 = (state_45412[(2)]);
var inst_45386 = cljs.core.next(inst_45368);
var inst_45348 = inst_45386;
var inst_45349 = null;
var inst_45350 = (0);
var inst_45351 = (0);
var state_45412__$1 = (function (){var statearr_45469 = state_45412;
(statearr_45469[(25)] = inst_45385);

(statearr_45469[(19)] = inst_45348);

(statearr_45469[(20)] = inst_45350);

(statearr_45469[(11)] = inst_45349);

(statearr_45469[(12)] = inst_45351);

return statearr_45469;
})();
var statearr_45470_46910 = state_45412__$1;
(statearr_45470_46910[(2)] = null);

(statearr_45470_46910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (43))){
var state_45412__$1 = state_45412;
var statearr_45472_46918 = state_45412__$1;
(statearr_45472_46918[(2)] = null);

(statearr_45472_46918[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (29))){
var inst_45394 = (state_45412[(2)]);
var state_45412__$1 = state_45412;
var statearr_45474_46919 = state_45412__$1;
(statearr_45474_46919[(2)] = inst_45394);

(statearr_45474_46919[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (44))){
var inst_45403 = (state_45412[(2)]);
var state_45412__$1 = (function (){var statearr_45477 = state_45412;
(statearr_45477[(26)] = inst_45403);

return statearr_45477;
})();
var statearr_45478_46924 = state_45412__$1;
(statearr_45478_46924[(2)] = null);

(statearr_45478_46924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (6))){
var inst_45340 = (state_45412[(27)]);
var inst_45339 = cljs.core.deref(cs);
var inst_45340__$1 = cljs.core.keys(inst_45339);
var inst_45341 = cljs.core.count(inst_45340__$1);
var inst_45342 = cljs.core.reset_BANG_(dctr,inst_45341);
var inst_45347 = cljs.core.seq(inst_45340__$1);
var inst_45348 = inst_45347;
var inst_45349 = null;
var inst_45350 = (0);
var inst_45351 = (0);
var state_45412__$1 = (function (){var statearr_45481 = state_45412;
(statearr_45481[(27)] = inst_45340__$1);

(statearr_45481[(28)] = inst_45342);

(statearr_45481[(19)] = inst_45348);

(statearr_45481[(20)] = inst_45350);

(statearr_45481[(11)] = inst_45349);

(statearr_45481[(12)] = inst_45351);

return statearr_45481;
})();
var statearr_45482_46937 = state_45412__$1;
(statearr_45482_46937[(2)] = null);

(statearr_45482_46937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (28))){
var inst_45348 = (state_45412[(19)]);
var inst_45368 = (state_45412[(23)]);
var inst_45368__$1 = cljs.core.seq(inst_45348);
var state_45412__$1 = (function (){var statearr_45483 = state_45412;
(statearr_45483[(23)] = inst_45368__$1);

return statearr_45483;
})();
if(inst_45368__$1){
var statearr_45484_46946 = state_45412__$1;
(statearr_45484_46946[(1)] = (33));

} else {
var statearr_45485_46949 = state_45412__$1;
(statearr_45485_46949[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (25))){
var inst_45350 = (state_45412[(20)]);
var inst_45351 = (state_45412[(12)]);
var inst_45354 = (inst_45351 < inst_45350);
var inst_45355 = inst_45354;
var state_45412__$1 = state_45412;
if(cljs.core.truth_(inst_45355)){
var statearr_45487_46961 = state_45412__$1;
(statearr_45487_46961[(1)] = (27));

} else {
var statearr_45488_46962 = state_45412__$1;
(statearr_45488_46962[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (34))){
var state_45412__$1 = state_45412;
var statearr_45490_46965 = state_45412__$1;
(statearr_45490_46965[(2)] = null);

(statearr_45490_46965[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (17))){
var state_45412__$1 = state_45412;
var statearr_45491_46966 = state_45412__$1;
(statearr_45491_46966[(2)] = null);

(statearr_45491_46966[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (3))){
var inst_45408 = (state_45412[(2)]);
var state_45412__$1 = state_45412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45412__$1,inst_45408);
} else {
if((state_val_45413 === (12))){
var inst_45335 = (state_45412[(2)]);
var state_45412__$1 = state_45412;
var statearr_45492_46967 = state_45412__$1;
(statearr_45492_46967[(2)] = inst_45335);

(statearr_45492_46967[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (2))){
var state_45412__$1 = state_45412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45412__$1,(4),ch);
} else {
if((state_val_45413 === (23))){
var state_45412__$1 = state_45412;
var statearr_45496_46968 = state_45412__$1;
(statearr_45496_46968[(2)] = null);

(statearr_45496_46968[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (35))){
var inst_45392 = (state_45412[(2)]);
var state_45412__$1 = state_45412;
var statearr_45500_46973 = state_45412__$1;
(statearr_45500_46973[(2)] = inst_45392);

(statearr_45500_46973[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (19))){
var inst_45307 = (state_45412[(7)]);
var inst_45311 = cljs.core.chunk_first(inst_45307);
var inst_45312 = cljs.core.chunk_rest(inst_45307);
var inst_45313 = cljs.core.count(inst_45311);
var inst_45285 = inst_45312;
var inst_45286 = inst_45311;
var inst_45287 = inst_45313;
var inst_45288 = (0);
var state_45412__$1 = (function (){var statearr_45503 = state_45412;
(statearr_45503[(13)] = inst_45287);

(statearr_45503[(14)] = inst_45286);

(statearr_45503[(15)] = inst_45288);

(statearr_45503[(16)] = inst_45285);

return statearr_45503;
})();
var statearr_45504_46974 = state_45412__$1;
(statearr_45504_46974[(2)] = null);

(statearr_45504_46974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (11))){
var inst_45285 = (state_45412[(16)]);
var inst_45307 = (state_45412[(7)]);
var inst_45307__$1 = cljs.core.seq(inst_45285);
var state_45412__$1 = (function (){var statearr_45505 = state_45412;
(statearr_45505[(7)] = inst_45307__$1);

return statearr_45505;
})();
if(inst_45307__$1){
var statearr_45506_46978 = state_45412__$1;
(statearr_45506_46978[(1)] = (16));

} else {
var statearr_45507_46979 = state_45412__$1;
(statearr_45507_46979[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (9))){
var inst_45337 = (state_45412[(2)]);
var state_45412__$1 = state_45412;
var statearr_45508_46980 = state_45412__$1;
(statearr_45508_46980[(2)] = inst_45337);

(statearr_45508_46980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (5))){
var inst_45283 = cljs.core.deref(cs);
var inst_45284 = cljs.core.seq(inst_45283);
var inst_45285 = inst_45284;
var inst_45286 = null;
var inst_45287 = (0);
var inst_45288 = (0);
var state_45412__$1 = (function (){var statearr_45511 = state_45412;
(statearr_45511[(13)] = inst_45287);

(statearr_45511[(14)] = inst_45286);

(statearr_45511[(15)] = inst_45288);

(statearr_45511[(16)] = inst_45285);

return statearr_45511;
})();
var statearr_45514_46982 = state_45412__$1;
(statearr_45514_46982[(2)] = null);

(statearr_45514_46982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (14))){
var state_45412__$1 = state_45412;
var statearr_45515_46984 = state_45412__$1;
(statearr_45515_46984[(2)] = null);

(statearr_45515_46984[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (45))){
var inst_45400 = (state_45412[(2)]);
var state_45412__$1 = state_45412;
var statearr_45520_46989 = state_45412__$1;
(statearr_45520_46989[(2)] = inst_45400);

(statearr_45520_46989[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (26))){
var inst_45340 = (state_45412[(27)]);
var inst_45396 = (state_45412[(2)]);
var inst_45397 = cljs.core.seq(inst_45340);
var state_45412__$1 = (function (){var statearr_45521 = state_45412;
(statearr_45521[(29)] = inst_45396);

return statearr_45521;
})();
if(inst_45397){
var statearr_45522_46993 = state_45412__$1;
(statearr_45522_46993[(1)] = (42));

} else {
var statearr_45526_46994 = state_45412__$1;
(statearr_45526_46994[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (16))){
var inst_45307 = (state_45412[(7)]);
var inst_45309 = cljs.core.chunked_seq_QMARK_(inst_45307);
var state_45412__$1 = state_45412;
if(inst_45309){
var statearr_45529_46995 = state_45412__$1;
(statearr_45529_46995[(1)] = (19));

} else {
var statearr_45532_46996 = state_45412__$1;
(statearr_45532_46996[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (38))){
var inst_45389 = (state_45412[(2)]);
var state_45412__$1 = state_45412;
var statearr_45536_46997 = state_45412__$1;
(statearr_45536_46997[(2)] = inst_45389);

(statearr_45536_46997[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (30))){
var state_45412__$1 = state_45412;
var statearr_45537_47000 = state_45412__$1;
(statearr_45537_47000[(2)] = null);

(statearr_45537_47000[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (10))){
var inst_45286 = (state_45412[(14)]);
var inst_45288 = (state_45412[(15)]);
var inst_45296 = cljs.core._nth(inst_45286,inst_45288);
var inst_45297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45296,(0),null);
var inst_45298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45296,(1),null);
var state_45412__$1 = (function (){var statearr_45539 = state_45412;
(statearr_45539[(24)] = inst_45297);

return statearr_45539;
})();
if(cljs.core.truth_(inst_45298)){
var statearr_45540_47002 = state_45412__$1;
(statearr_45540_47002[(1)] = (13));

} else {
var statearr_45541_47004 = state_45412__$1;
(statearr_45541_47004[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (18))){
var inst_45333 = (state_45412[(2)]);
var state_45412__$1 = state_45412;
var statearr_45547_47005 = state_45412__$1;
(statearr_45547_47005[(2)] = inst_45333);

(statearr_45547_47005[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (42))){
var state_45412__$1 = state_45412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45412__$1,(45),dchan);
} else {
if((state_val_45413 === (37))){
var inst_45368 = (state_45412[(23)]);
var inst_45276 = (state_45412[(9)]);
var inst_45379 = (state_45412[(22)]);
var inst_45379__$1 = cljs.core.first(inst_45368);
var inst_45380 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45379__$1,inst_45276,done);
var state_45412__$1 = (function (){var statearr_45548 = state_45412;
(statearr_45548[(22)] = inst_45379__$1);

return statearr_45548;
})();
if(cljs.core.truth_(inst_45380)){
var statearr_45549_47007 = state_45412__$1;
(statearr_45549_47007[(1)] = (39));

} else {
var statearr_45550_47009 = state_45412__$1;
(statearr_45550_47009[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45413 === (8))){
var inst_45287 = (state_45412[(13)]);
var inst_45288 = (state_45412[(15)]);
var inst_45290 = (inst_45288 < inst_45287);
var inst_45291 = inst_45290;
var state_45412__$1 = state_45412;
if(cljs.core.truth_(inst_45291)){
var statearr_45551_47011 = state_45412__$1;
(statearr_45551_47011[(1)] = (10));

} else {
var statearr_45553_47012 = state_45412__$1;
(statearr_45553_47012[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__44338__auto__ = null;
var cljs$core$async$mult_$_state_machine__44338__auto____0 = (function (){
var statearr_45555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45555[(0)] = cljs$core$async$mult_$_state_machine__44338__auto__);

(statearr_45555[(1)] = (1));

return statearr_45555;
});
var cljs$core$async$mult_$_state_machine__44338__auto____1 = (function (state_45412){
while(true){
var ret_value__44339__auto__ = (function (){try{while(true){
var result__44340__auto__ = switch__44337__auto__(state_45412);
if(cljs.core.keyword_identical_QMARK_(result__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44340__auto__;
}
break;
}
}catch (e45556){var ex__44341__auto__ = e45556;
var statearr_45557_47016 = state_45412;
(statearr_45557_47016[(2)] = ex__44341__auto__);


if(cljs.core.seq((state_45412[(4)]))){
var statearr_45558_47017 = state_45412;
(statearr_45558_47017[(1)] = cljs.core.first((state_45412[(4)])));

} else {
throw ex__44341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47018 = state_45412;
state_45412 = G__47018;
continue;
} else {
return ret_value__44339__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__44338__auto__ = function(state_45412){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__44338__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__44338__auto____1.call(this,state_45412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__44338__auto____0;
cljs$core$async$mult_$_state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__44338__auto____1;
return cljs$core$async$mult_$_state_machine__44338__auto__;
})()
})();
var state__44538__auto__ = (function (){var statearr_45563 = f__44537__auto__();
(statearr_45563[(6)] = c__44536__auto___46863);

return statearr_45563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44538__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45569 = arguments.length;
switch (G__45569) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_47026 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_47026(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_47028 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_47028(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_47030 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_47030(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_47032 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_47032(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_47038 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_47038(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47041 = arguments.length;
var i__5770__auto___47042 = (0);
while(true){
if((i__5770__auto___47042 < len__5769__auto___47041)){
args__5775__auto__.push((arguments[i__5770__auto___47042]));

var G__47043 = (i__5770__auto___47042 + (1));
i__5770__auto___47042 = G__47043;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45611){
var map__45612 = p__45611;
var map__45612__$1 = cljs.core.__destructure_map(map__45612);
var opts = map__45612__$1;
var statearr_45613_47044 = state;
(statearr_45613_47044[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45622_47045 = state;
(statearr_45622_47045[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_45623_47046 = state;
(statearr_45623_47046[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45605){
var G__45606 = cljs.core.first(seq45605);
var seq45605__$1 = cljs.core.next(seq45605);
var G__45607 = cljs.core.first(seq45605__$1);
var seq45605__$2 = cljs.core.next(seq45605__$1);
var G__45608 = cljs.core.first(seq45605__$2);
var seq45605__$3 = cljs.core.next(seq45605__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45606,G__45607,G__45608,seq45605__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45633 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45633 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45634){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45634 = meta45634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45635,meta45634__$1){
var self__ = this;
var _45635__$1 = this;
return (new cljs.core.async.t_cljs$core$async45633(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45634__$1));
}));

(cljs.core.async.t_cljs$core$async45633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45635){
var self__ = this;
var _45635__$1 = this;
return self__.meta45634;
}));

(cljs.core.async.t_cljs$core$async45633.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45633.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45633.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45633.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45633.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45633.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45633.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45633.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45633.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45634","meta45634",-1167793873,null)], null);
}));

(cljs.core.async.t_cljs$core$async45633.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45633");

(cljs.core.async.t_cljs$core$async45633.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45633");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45633.
 */
cljs.core.async.__GT_t_cljs$core$async45633 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45633(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45634){
return (new cljs.core.async.t_cljs$core$async45633(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45634));
});

}

return (new cljs.core.async.t_cljs$core$async45633(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44536__auto___47062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44537__auto__ = (function (){var switch__44337__auto__ = (function (state_45721){
var state_val_45722 = (state_45721[(1)]);
if((state_val_45722 === (7))){
var inst_45680 = (state_45721[(2)]);
var state_45721__$1 = state_45721;
if(cljs.core.truth_(inst_45680)){
var statearr_45725_47063 = state_45721__$1;
(statearr_45725_47063[(1)] = (8));

} else {
var statearr_45726_47064 = state_45721__$1;
(statearr_45726_47064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45722 === (20))){
var inst_45672 = (state_45721[(7)]);
var state_45721__$1 = state_45721;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45721__$1,(23),out,inst_45672);
} else {
if((state_val_45722 === (1))){
var inst_45654 = calc_state();
var inst_45655 = cljs.core.__destructure_map(inst_45654);
var inst_45656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45655,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45655,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45655,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45659 = inst_45654;
var state_45721__$1 = (function (){var statearr_45727 = state_45721;
(statearr_45727[(8)] = inst_45656);

(statearr_45727[(9)] = inst_45657);

(statearr_45727[(10)] = inst_45658);

(statearr_45727[(11)] = inst_45659);

return statearr_45727;
})();
var statearr_45728_47065 = state_45721__$1;
(statearr_45728_47065[(2)] = null);

(statearr_45728_47065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45722 === (24))){
var inst_45663 = (state_45721[(12)]);
var inst_45659 = inst_45663;
var state_45721__$1 = (function (){var statearr_45729 = state_45721;
(statearr_45729[(11)] = inst_45659);

return statearr_45729;
})();
var statearr_45730_47066 = state_45721__$1;
(statearr_45730_47066[(2)] = null);

(statearr_45730_47066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45722 === (4))){
var inst_45672 = (state_45721[(7)]);
var inst_45674 = (state_45721[(13)]);
var inst_45671 = (state_45721[(2)]);
var inst_45672__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45671,(0),null);
var inst_45673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45671,(1),null);
var inst_45674__$1 = (inst_45672__$1 == null);
var state_45721__$1 = (function (){var statearr_45731 = state_45721;
(statearr_45731[(14)] = inst_45673);

(statearr_45731[(7)] = inst_45672__$1);

(statearr_45731[(13)] = inst_45674__$1);

return statearr_45731;
})();
if(cljs.core.truth_(inst_45674__$1)){
var statearr_45732_47068 = state_45721__$1;
(statearr_45732_47068[(1)] = (5));

} else {
var statearr_45733_47069 = state_45721__$1;
(statearr_45733_47069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45722 === (15))){
var inst_45664 = (state_45721[(15)]);
var inst_45695 = (state_45721[(16)]);
var inst_45695__$1 = cljs.core.empty_QMARK_(inst_45664);
var state_45721__$1 = (function (){var statearr_45735 = state_45721;
(statearr_45735[(16)] = inst_45695__$1);

return statearr_45735;
})();
if(inst_45695__$1){
var statearr_45736_47070 = state_45721__$1;
(statearr_45736_47070[(1)] = (17));

} else {
var statearr_45737_47071 = state_45721__$1;
(statearr_45737_47071[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45722 === (21))){
var inst_45663 = (state_45721[(12)]);
var inst_45659 = inst_45663;
var state_45721__$1 = (function (){var statearr_45738 = state_45721;
(statearr_45738[(11)] = inst_45659);

return statearr_45738;
})();
var statearr_45739_47072 = state_45721__$1;
(statearr_45739_47072[(2)] = null);

(statearr_45739_47072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45722 === (13))){
var inst_45687 = (state_45721[(2)]);
var inst_45688 = calc_state();
var inst_45659 = inst_45688;
var state_45721__$1 = (function (){var statearr_45740 = state_45721;
(statearr_45740[(17)] = inst_45687);

(statearr_45740[(11)] = inst_45659);

return statearr_45740;
})();
var statearr_45741_47073 = state_45721__$1;
(statearr_45741_47073[(2)] = null);

(statearr_45741_47073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45722 === (22))){
var inst_45715 = (state_45721[(2)]);
var state_45721__$1 = state_45721;
var statearr_45744_47074 = state_45721__$1;
(statearr_45744_47074[(2)] = inst_45715);

(statearr_45744_47074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45722 === (6))){
var inst_45673 = (state_45721[(14)]);
var inst_45678 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45673,change);
var state_45721__$1 = state_45721;
var statearr_45748_47075 = state_45721__$1;
(statearr_45748_47075[(2)] = inst_45678);

(statearr_45748_47075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45722 === (25))){
var state_45721__$1 = state_45721;
var statearr_45749_47076 = state_45721__$1;
(statearr_45749_47076[(2)] = null);

(statearr_45749_47076[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45722 === (17))){
var inst_45665 = (state_45721[(18)]);
var inst_45673 = (state_45721[(14)]);
var inst_45697 = (inst_45665.cljs$core$IFn$_invoke$arity$1 ? inst_45665.cljs$core$IFn$_invoke$arity$1(inst_45673) : inst_45665.call(null,inst_45673));
var inst_45698 = cljs.core.not(inst_45697);
var state_45721__$1 = state_45721;
var statearr_45750_47077 = state_45721__$1;
(statearr_45750_47077[(2)] = inst_45698);

(statearr_45750_47077[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45722 === (3))){
var inst_45719 = (state_45721[(2)]);
var state_45721__$1 = state_45721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45721__$1,inst_45719);
} else {
if((state_val_45722 === (12))){
var state_45721__$1 = state_45721;
var statearr_45752_47078 = state_45721__$1;
(statearr_45752_47078[(2)] = null);

(statearr_45752_47078[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45722 === (2))){
var inst_45663 = (state_45721[(12)]);
var inst_45659 = (state_45721[(11)]);
var inst_45663__$1 = cljs.core.__destructure_map(inst_45659);
var inst_45664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45663__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45663__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45663__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45721__$1 = (function (){var statearr_45753 = state_45721;
(statearr_45753[(15)] = inst_45664);

(statearr_45753[(12)] = inst_45663__$1);

(statearr_45753[(18)] = inst_45665);

return statearr_45753;
})();
return cljs.core.async.ioc_alts_BANG_(state_45721__$1,(4),inst_45666);
} else {
if((state_val_45722 === (23))){
var inst_45706 = (state_45721[(2)]);
var state_45721__$1 = state_45721;
if(cljs.core.truth_(inst_45706)){
var statearr_45754_47080 = state_45721__$1;
(statearr_45754_47080[(1)] = (24));

} else {
var statearr_45755_47081 = state_45721__$1;
(statearr_45755_47081[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45722 === (19))){
var inst_45701 = (state_45721[(2)]);
var state_45721__$1 = state_45721;
var statearr_45756_47082 = state_45721__$1;
(statearr_45756_47082[(2)] = inst_45701);

(statearr_45756_47082[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45722 === (11))){
var inst_45673 = (state_45721[(14)]);
var inst_45684 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45673);
var state_45721__$1 = state_45721;
var statearr_45757_47083 = state_45721__$1;
(statearr_45757_47083[(2)] = inst_45684);

(statearr_45757_47083[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45722 === (9))){
var inst_45664 = (state_45721[(15)]);
var inst_45673 = (state_45721[(14)]);
var inst_45691 = (state_45721[(19)]);
var inst_45691__$1 = (inst_45664.cljs$core$IFn$_invoke$arity$1 ? inst_45664.cljs$core$IFn$_invoke$arity$1(inst_45673) : inst_45664.call(null,inst_45673));
var state_45721__$1 = (function (){var statearr_45759 = state_45721;
(statearr_45759[(19)] = inst_45691__$1);

return statearr_45759;
})();
if(cljs.core.truth_(inst_45691__$1)){
var statearr_45760_47089 = state_45721__$1;
(statearr_45760_47089[(1)] = (14));

} else {
var statearr_45761_47090 = state_45721__$1;
(statearr_45761_47090[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45722 === (5))){
var inst_45674 = (state_45721[(13)]);
var state_45721__$1 = state_45721;
var statearr_45762_47091 = state_45721__$1;
(statearr_45762_47091[(2)] = inst_45674);

(statearr_45762_47091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45722 === (14))){
var inst_45691 = (state_45721[(19)]);
var state_45721__$1 = state_45721;
var statearr_45763_47092 = state_45721__$1;
(statearr_45763_47092[(2)] = inst_45691);

(statearr_45763_47092[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45722 === (26))){
var inst_45711 = (state_45721[(2)]);
var state_45721__$1 = state_45721;
var statearr_45764_47094 = state_45721__$1;
(statearr_45764_47094[(2)] = inst_45711);

(statearr_45764_47094[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45722 === (16))){
var inst_45703 = (state_45721[(2)]);
var state_45721__$1 = state_45721;
if(cljs.core.truth_(inst_45703)){
var statearr_45765_47095 = state_45721__$1;
(statearr_45765_47095[(1)] = (20));

} else {
var statearr_45766_47096 = state_45721__$1;
(statearr_45766_47096[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45722 === (10))){
var inst_45717 = (state_45721[(2)]);
var state_45721__$1 = state_45721;
var statearr_45767_47097 = state_45721__$1;
(statearr_45767_47097[(2)] = inst_45717);

(statearr_45767_47097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45722 === (18))){
var inst_45695 = (state_45721[(16)]);
var state_45721__$1 = state_45721;
var statearr_45768_47098 = state_45721__$1;
(statearr_45768_47098[(2)] = inst_45695);

(statearr_45768_47098[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45722 === (8))){
var inst_45672 = (state_45721[(7)]);
var inst_45682 = (inst_45672 == null);
var state_45721__$1 = state_45721;
if(cljs.core.truth_(inst_45682)){
var statearr_45769_47099 = state_45721__$1;
(statearr_45769_47099[(1)] = (11));

} else {
var statearr_45770_47100 = state_45721__$1;
(statearr_45770_47100[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__44338__auto__ = null;
var cljs$core$async$mix_$_state_machine__44338__auto____0 = (function (){
var statearr_45771 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45771[(0)] = cljs$core$async$mix_$_state_machine__44338__auto__);

(statearr_45771[(1)] = (1));

return statearr_45771;
});
var cljs$core$async$mix_$_state_machine__44338__auto____1 = (function (state_45721){
while(true){
var ret_value__44339__auto__ = (function (){try{while(true){
var result__44340__auto__ = switch__44337__auto__(state_45721);
if(cljs.core.keyword_identical_QMARK_(result__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44340__auto__;
}
break;
}
}catch (e45772){var ex__44341__auto__ = e45772;
var statearr_45773_47101 = state_45721;
(statearr_45773_47101[(2)] = ex__44341__auto__);


if(cljs.core.seq((state_45721[(4)]))){
var statearr_45774_47102 = state_45721;
(statearr_45774_47102[(1)] = cljs.core.first((state_45721[(4)])));

} else {
throw ex__44341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47103 = state_45721;
state_45721 = G__47103;
continue;
} else {
return ret_value__44339__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__44338__auto__ = function(state_45721){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__44338__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__44338__auto____1.call(this,state_45721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__44338__auto____0;
cljs$core$async$mix_$_state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__44338__auto____1;
return cljs$core$async$mix_$_state_machine__44338__auto__;
})()
})();
var state__44538__auto__ = (function (){var statearr_45775 = f__44537__auto__();
(statearr_45775[(6)] = c__44536__auto___47062);

return statearr_45775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44538__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_47104 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_47104(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_47109 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_47109(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_47110 = (function() {
var G__47111 = null;
var G__47111__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__47111__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__47111 = function(p,v){
switch(arguments.length){
case 1:
return G__47111__1.call(this,p);
case 2:
return G__47111__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__47111.cljs$core$IFn$_invoke$arity$1 = G__47111__1;
G__47111.cljs$core$IFn$_invoke$arity$2 = G__47111__2;
return G__47111;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45825 = arguments.length;
switch (G__45825) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47110(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_47110(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__45844 = arguments.length;
switch (G__45844) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__45835_SHARP_){
if(cljs.core.truth_((p1__45835_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45835_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45835_SHARP_.call(null,topic)))){
return p1__45835_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45835_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45845 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45845 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45846){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45846 = meta45846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45847,meta45846__$1){
var self__ = this;
var _45847__$1 = this;
return (new cljs.core.async.t_cljs$core$async45845(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45846__$1));
}));

(cljs.core.async.t_cljs$core$async45845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45847){
var self__ = this;
var _45847__$1 = this;
return self__.meta45846;
}));

(cljs.core.async.t_cljs$core$async45845.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45845.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45845.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45845.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async45845.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async45845.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async45845.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async45845.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45846","meta45846",771453462,null)], null);
}));

(cljs.core.async.t_cljs$core$async45845.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45845.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45845");

(cljs.core.async.t_cljs$core$async45845.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async45845");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45845.
 */
cljs.core.async.__GT_t_cljs$core$async45845 = (function cljs$core$async$__GT_t_cljs$core$async45845(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45846){
return (new cljs.core.async.t_cljs$core$async45845(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45846));
});

}

return (new cljs.core.async.t_cljs$core$async45845(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44536__auto___47129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44537__auto__ = (function (){var switch__44337__auto__ = (function (state_45925){
var state_val_45927 = (state_45925[(1)]);
if((state_val_45927 === (7))){
var inst_45921 = (state_45925[(2)]);
var state_45925__$1 = state_45925;
var statearr_45929_47130 = state_45925__$1;
(statearr_45929_47130[(2)] = inst_45921);

(statearr_45929_47130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45927 === (20))){
var state_45925__$1 = state_45925;
var statearr_45930_47131 = state_45925__$1;
(statearr_45930_47131[(2)] = null);

(statearr_45930_47131[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45927 === (1))){
var state_45925__$1 = state_45925;
var statearr_45931_47132 = state_45925__$1;
(statearr_45931_47132[(2)] = null);

(statearr_45931_47132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45927 === (24))){
var inst_45904 = (state_45925[(7)]);
var inst_45913 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45904);
var state_45925__$1 = state_45925;
var statearr_45932_47134 = state_45925__$1;
(statearr_45932_47134[(2)] = inst_45913);

(statearr_45932_47134[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45927 === (4))){
var inst_45856 = (state_45925[(8)]);
var inst_45856__$1 = (state_45925[(2)]);
var inst_45857 = (inst_45856__$1 == null);
var state_45925__$1 = (function (){var statearr_45933 = state_45925;
(statearr_45933[(8)] = inst_45856__$1);

return statearr_45933;
})();
if(cljs.core.truth_(inst_45857)){
var statearr_45934_47135 = state_45925__$1;
(statearr_45934_47135[(1)] = (5));

} else {
var statearr_45935_47136 = state_45925__$1;
(statearr_45935_47136[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45927 === (15))){
var inst_45898 = (state_45925[(2)]);
var state_45925__$1 = state_45925;
var statearr_45936_47137 = state_45925__$1;
(statearr_45936_47137[(2)] = inst_45898);

(statearr_45936_47137[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45927 === (21))){
var inst_45918 = (state_45925[(2)]);
var state_45925__$1 = (function (){var statearr_45938 = state_45925;
(statearr_45938[(9)] = inst_45918);

return statearr_45938;
})();
var statearr_45939_47138 = state_45925__$1;
(statearr_45939_47138[(2)] = null);

(statearr_45939_47138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45927 === (13))){
var inst_45880 = (state_45925[(10)]);
var inst_45882 = cljs.core.chunked_seq_QMARK_(inst_45880);
var state_45925__$1 = state_45925;
if(inst_45882){
var statearr_45940_47140 = state_45925__$1;
(statearr_45940_47140[(1)] = (16));

} else {
var statearr_45941_47141 = state_45925__$1;
(statearr_45941_47141[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45927 === (22))){
var inst_45910 = (state_45925[(2)]);
var state_45925__$1 = state_45925;
if(cljs.core.truth_(inst_45910)){
var statearr_45942_47142 = state_45925__$1;
(statearr_45942_47142[(1)] = (23));

} else {
var statearr_45943_47143 = state_45925__$1;
(statearr_45943_47143[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45927 === (6))){
var inst_45856 = (state_45925[(8)]);
var inst_45906 = (state_45925[(11)]);
var inst_45904 = (state_45925[(7)]);
var inst_45904__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45856) : topic_fn.call(null,inst_45856));
var inst_45905 = cljs.core.deref(mults);
var inst_45906__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45905,inst_45904__$1);
var state_45925__$1 = (function (){var statearr_45946 = state_45925;
(statearr_45946[(11)] = inst_45906__$1);

(statearr_45946[(7)] = inst_45904__$1);

return statearr_45946;
})();
if(cljs.core.truth_(inst_45906__$1)){
var statearr_45947_47144 = state_45925__$1;
(statearr_45947_47144[(1)] = (19));

} else {
var statearr_45948_47145 = state_45925__$1;
(statearr_45948_47145[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45927 === (25))){
var inst_45915 = (state_45925[(2)]);
var state_45925__$1 = state_45925;
var statearr_45949_47146 = state_45925__$1;
(statearr_45949_47146[(2)] = inst_45915);

(statearr_45949_47146[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45927 === (17))){
var inst_45880 = (state_45925[(10)]);
var inst_45889 = cljs.core.first(inst_45880);
var inst_45890 = cljs.core.async.muxch_STAR_(inst_45889);
var inst_45891 = cljs.core.async.close_BANG_(inst_45890);
var inst_45892 = cljs.core.next(inst_45880);
var inst_45866 = inst_45892;
var inst_45867 = null;
var inst_45868 = (0);
var inst_45869 = (0);
var state_45925__$1 = (function (){var statearr_45951 = state_45925;
(statearr_45951[(12)] = inst_45891);

(statearr_45951[(13)] = inst_45868);

(statearr_45951[(14)] = inst_45869);

(statearr_45951[(15)] = inst_45866);

(statearr_45951[(16)] = inst_45867);

return statearr_45951;
})();
var statearr_45952_47147 = state_45925__$1;
(statearr_45952_47147[(2)] = null);

(statearr_45952_47147[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45927 === (3))){
var inst_45923 = (state_45925[(2)]);
var state_45925__$1 = state_45925;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45925__$1,inst_45923);
} else {
if((state_val_45927 === (12))){
var inst_45900 = (state_45925[(2)]);
var state_45925__$1 = state_45925;
var statearr_45953_47148 = state_45925__$1;
(statearr_45953_47148[(2)] = inst_45900);

(statearr_45953_47148[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45927 === (2))){
var state_45925__$1 = state_45925;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45925__$1,(4),ch);
} else {
if((state_val_45927 === (23))){
var state_45925__$1 = state_45925;
var statearr_45954_47149 = state_45925__$1;
(statearr_45954_47149[(2)] = null);

(statearr_45954_47149[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45927 === (19))){
var inst_45856 = (state_45925[(8)]);
var inst_45906 = (state_45925[(11)]);
var inst_45908 = cljs.core.async.muxch_STAR_(inst_45906);
var state_45925__$1 = state_45925;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45925__$1,(22),inst_45908,inst_45856);
} else {
if((state_val_45927 === (11))){
var inst_45880 = (state_45925[(10)]);
var inst_45866 = (state_45925[(15)]);
var inst_45880__$1 = cljs.core.seq(inst_45866);
var state_45925__$1 = (function (){var statearr_45955 = state_45925;
(statearr_45955[(10)] = inst_45880__$1);

return statearr_45955;
})();
if(inst_45880__$1){
var statearr_45956_47150 = state_45925__$1;
(statearr_45956_47150[(1)] = (13));

} else {
var statearr_45957_47151 = state_45925__$1;
(statearr_45957_47151[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45927 === (9))){
var inst_45902 = (state_45925[(2)]);
var state_45925__$1 = state_45925;
var statearr_45958_47155 = state_45925__$1;
(statearr_45958_47155[(2)] = inst_45902);

(statearr_45958_47155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45927 === (5))){
var inst_45863 = cljs.core.deref(mults);
var inst_45864 = cljs.core.vals(inst_45863);
var inst_45865 = cljs.core.seq(inst_45864);
var inst_45866 = inst_45865;
var inst_45867 = null;
var inst_45868 = (0);
var inst_45869 = (0);
var state_45925__$1 = (function (){var statearr_45961 = state_45925;
(statearr_45961[(13)] = inst_45868);

(statearr_45961[(14)] = inst_45869);

(statearr_45961[(15)] = inst_45866);

(statearr_45961[(16)] = inst_45867);

return statearr_45961;
})();
var statearr_45962_47158 = state_45925__$1;
(statearr_45962_47158[(2)] = null);

(statearr_45962_47158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45927 === (14))){
var state_45925__$1 = state_45925;
var statearr_45966_47159 = state_45925__$1;
(statearr_45966_47159[(2)] = null);

(statearr_45966_47159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45927 === (16))){
var inst_45880 = (state_45925[(10)]);
var inst_45884 = cljs.core.chunk_first(inst_45880);
var inst_45885 = cljs.core.chunk_rest(inst_45880);
var inst_45886 = cljs.core.count(inst_45884);
var inst_45866 = inst_45885;
var inst_45867 = inst_45884;
var inst_45868 = inst_45886;
var inst_45869 = (0);
var state_45925__$1 = (function (){var statearr_45967 = state_45925;
(statearr_45967[(13)] = inst_45868);

(statearr_45967[(14)] = inst_45869);

(statearr_45967[(15)] = inst_45866);

(statearr_45967[(16)] = inst_45867);

return statearr_45967;
})();
var statearr_45968_47169 = state_45925__$1;
(statearr_45968_47169[(2)] = null);

(statearr_45968_47169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45927 === (10))){
var inst_45868 = (state_45925[(13)]);
var inst_45869 = (state_45925[(14)]);
var inst_45866 = (state_45925[(15)]);
var inst_45867 = (state_45925[(16)]);
var inst_45874 = cljs.core._nth(inst_45867,inst_45869);
var inst_45875 = cljs.core.async.muxch_STAR_(inst_45874);
var inst_45876 = cljs.core.async.close_BANG_(inst_45875);
var inst_45877 = (inst_45869 + (1));
var tmp45963 = inst_45868;
var tmp45964 = inst_45866;
var tmp45965 = inst_45867;
var inst_45866__$1 = tmp45964;
var inst_45867__$1 = tmp45965;
var inst_45868__$1 = tmp45963;
var inst_45869__$1 = inst_45877;
var state_45925__$1 = (function (){var statearr_45972 = state_45925;
(statearr_45972[(17)] = inst_45876);

(statearr_45972[(13)] = inst_45868__$1);

(statearr_45972[(14)] = inst_45869__$1);

(statearr_45972[(15)] = inst_45866__$1);

(statearr_45972[(16)] = inst_45867__$1);

return statearr_45972;
})();
var statearr_45973_47187 = state_45925__$1;
(statearr_45973_47187[(2)] = null);

(statearr_45973_47187[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45927 === (18))){
var inst_45895 = (state_45925[(2)]);
var state_45925__$1 = state_45925;
var statearr_45974_47188 = state_45925__$1;
(statearr_45974_47188[(2)] = inst_45895);

(statearr_45974_47188[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45927 === (8))){
var inst_45868 = (state_45925[(13)]);
var inst_45869 = (state_45925[(14)]);
var inst_45871 = (inst_45869 < inst_45868);
var inst_45872 = inst_45871;
var state_45925__$1 = state_45925;
if(cljs.core.truth_(inst_45872)){
var statearr_45975_47193 = state_45925__$1;
(statearr_45975_47193[(1)] = (10));

} else {
var statearr_45976_47195 = state_45925__$1;
(statearr_45976_47195[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44338__auto__ = null;
var cljs$core$async$state_machine__44338__auto____0 = (function (){
var statearr_45977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45977[(0)] = cljs$core$async$state_machine__44338__auto__);

(statearr_45977[(1)] = (1));

return statearr_45977;
});
var cljs$core$async$state_machine__44338__auto____1 = (function (state_45925){
while(true){
var ret_value__44339__auto__ = (function (){try{while(true){
var result__44340__auto__ = switch__44337__auto__(state_45925);
if(cljs.core.keyword_identical_QMARK_(result__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44340__auto__;
}
break;
}
}catch (e45978){var ex__44341__auto__ = e45978;
var statearr_45979_47217 = state_45925;
(statearr_45979_47217[(2)] = ex__44341__auto__);


if(cljs.core.seq((state_45925[(4)]))){
var statearr_45980_47223 = state_45925;
(statearr_45980_47223[(1)] = cljs.core.first((state_45925[(4)])));

} else {
throw ex__44341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47225 = state_45925;
state_45925 = G__47225;
continue;
} else {
return ret_value__44339__auto__;
}
break;
}
});
cljs$core$async$state_machine__44338__auto__ = function(state_45925){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44338__auto____1.call(this,state_45925);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44338__auto____0;
cljs$core$async$state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44338__auto____1;
return cljs$core$async$state_machine__44338__auto__;
})()
})();
var state__44538__auto__ = (function (){var statearr_45981 = f__44537__auto__();
(statearr_45981[(6)] = c__44536__auto___47129);

return statearr_45981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44538__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__45985 = arguments.length;
switch (G__45985) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45989 = arguments.length;
switch (G__45989) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__45992 = arguments.length;
switch (G__45992) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__44536__auto___47280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44537__auto__ = (function (){var switch__44337__auto__ = (function (state_46044){
var state_val_46045 = (state_46044[(1)]);
if((state_val_46045 === (7))){
var state_46044__$1 = state_46044;
var statearr_46047_47287 = state_46044__$1;
(statearr_46047_47287[(2)] = null);

(statearr_46047_47287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46045 === (1))){
var state_46044__$1 = state_46044;
var statearr_46049_47294 = state_46044__$1;
(statearr_46049_47294[(2)] = null);

(statearr_46049_47294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46045 === (4))){
var inst_46002 = (state_46044[(7)]);
var inst_46003 = (state_46044[(8)]);
var inst_46005 = (inst_46003 < inst_46002);
var state_46044__$1 = state_46044;
if(cljs.core.truth_(inst_46005)){
var statearr_46050_47302 = state_46044__$1;
(statearr_46050_47302[(1)] = (6));

} else {
var statearr_46051_47304 = state_46044__$1;
(statearr_46051_47304[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46045 === (15))){
var inst_46028 = (state_46044[(9)]);
var inst_46035 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46028);
var state_46044__$1 = state_46044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46044__$1,(17),out,inst_46035);
} else {
if((state_val_46045 === (13))){
var inst_46028 = (state_46044[(9)]);
var inst_46028__$1 = (state_46044[(2)]);
var inst_46030 = cljs.core.some(cljs.core.nil_QMARK_,inst_46028__$1);
var state_46044__$1 = (function (){var statearr_46052 = state_46044;
(statearr_46052[(9)] = inst_46028__$1);

return statearr_46052;
})();
if(cljs.core.truth_(inst_46030)){
var statearr_46057_47324 = state_46044__$1;
(statearr_46057_47324[(1)] = (14));

} else {
var statearr_46058_47325 = state_46044__$1;
(statearr_46058_47325[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46045 === (6))){
var state_46044__$1 = state_46044;
var statearr_46059_47326 = state_46044__$1;
(statearr_46059_47326[(2)] = null);

(statearr_46059_47326[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46045 === (17))){
var inst_46037 = (state_46044[(2)]);
var state_46044__$1 = (function (){var statearr_46061 = state_46044;
(statearr_46061[(10)] = inst_46037);

return statearr_46061;
})();
var statearr_46066_47331 = state_46044__$1;
(statearr_46066_47331[(2)] = null);

(statearr_46066_47331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46045 === (3))){
var inst_46042 = (state_46044[(2)]);
var state_46044__$1 = state_46044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46044__$1,inst_46042);
} else {
if((state_val_46045 === (12))){
var _ = (function (){var statearr_46067 = state_46044;
(statearr_46067[(4)] = cljs.core.rest((state_46044[(4)])));

return statearr_46067;
})();
var state_46044__$1 = state_46044;
var ex46060 = (state_46044__$1[(2)]);
var statearr_46068_47345 = state_46044__$1;
(statearr_46068_47345[(5)] = ex46060);


if((ex46060 instanceof Object)){
var statearr_46070_47346 = state_46044__$1;
(statearr_46070_47346[(1)] = (11));

(statearr_46070_47346[(5)] = null);

} else {
throw ex46060;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46045 === (2))){
var inst_46001 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46002 = cnt;
var inst_46003 = (0);
var state_46044__$1 = (function (){var statearr_46072 = state_46044;
(statearr_46072[(7)] = inst_46002);

(statearr_46072[(11)] = inst_46001);

(statearr_46072[(8)] = inst_46003);

return statearr_46072;
})();
var statearr_46073_47355 = state_46044__$1;
(statearr_46073_47355[(2)] = null);

(statearr_46073_47355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46045 === (11))){
var inst_46007 = (state_46044[(2)]);
var inst_46008 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46044__$1 = (function (){var statearr_46074 = state_46044;
(statearr_46074[(12)] = inst_46007);

return statearr_46074;
})();
var statearr_46075_47356 = state_46044__$1;
(statearr_46075_47356[(2)] = inst_46008);

(statearr_46075_47356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46045 === (9))){
var inst_46003 = (state_46044[(8)]);
var _ = (function (){var statearr_46076 = state_46044;
(statearr_46076[(4)] = cljs.core.cons((12),(state_46044[(4)])));

return statearr_46076;
})();
var inst_46014 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46003) : chs__$1.call(null,inst_46003));
var inst_46015 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46003) : done.call(null,inst_46003));
var inst_46016 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46014,inst_46015);
var ___$1 = (function (){var statearr_46077 = state_46044;
(statearr_46077[(4)] = cljs.core.rest((state_46044[(4)])));

return statearr_46077;
})();
var state_46044__$1 = state_46044;
var statearr_46078_47358 = state_46044__$1;
(statearr_46078_47358[(2)] = inst_46016);

(statearr_46078_47358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46045 === (5))){
var inst_46026 = (state_46044[(2)]);
var state_46044__$1 = (function (){var statearr_46079 = state_46044;
(statearr_46079[(13)] = inst_46026);

return statearr_46079;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46044__$1,(13),dchan);
} else {
if((state_val_46045 === (14))){
var inst_46032 = cljs.core.async.close_BANG_(out);
var state_46044__$1 = state_46044;
var statearr_46080_47359 = state_46044__$1;
(statearr_46080_47359[(2)] = inst_46032);

(statearr_46080_47359[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46045 === (16))){
var inst_46040 = (state_46044[(2)]);
var state_46044__$1 = state_46044;
var statearr_46081_47361 = state_46044__$1;
(statearr_46081_47361[(2)] = inst_46040);

(statearr_46081_47361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46045 === (10))){
var inst_46003 = (state_46044[(8)]);
var inst_46019 = (state_46044[(2)]);
var inst_46020 = (inst_46003 + (1));
var inst_46003__$1 = inst_46020;
var state_46044__$1 = (function (){var statearr_46082 = state_46044;
(statearr_46082[(14)] = inst_46019);

(statearr_46082[(8)] = inst_46003__$1);

return statearr_46082;
})();
var statearr_46083_47363 = state_46044__$1;
(statearr_46083_47363[(2)] = null);

(statearr_46083_47363[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46045 === (8))){
var inst_46024 = (state_46044[(2)]);
var state_46044__$1 = state_46044;
var statearr_46084_47365 = state_46044__$1;
(statearr_46084_47365[(2)] = inst_46024);

(statearr_46084_47365[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44338__auto__ = null;
var cljs$core$async$state_machine__44338__auto____0 = (function (){
var statearr_46085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46085[(0)] = cljs$core$async$state_machine__44338__auto__);

(statearr_46085[(1)] = (1));

return statearr_46085;
});
var cljs$core$async$state_machine__44338__auto____1 = (function (state_46044){
while(true){
var ret_value__44339__auto__ = (function (){try{while(true){
var result__44340__auto__ = switch__44337__auto__(state_46044);
if(cljs.core.keyword_identical_QMARK_(result__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44340__auto__;
}
break;
}
}catch (e46086){var ex__44341__auto__ = e46086;
var statearr_46087_47369 = state_46044;
(statearr_46087_47369[(2)] = ex__44341__auto__);


if(cljs.core.seq((state_46044[(4)]))){
var statearr_46088_47370 = state_46044;
(statearr_46088_47370[(1)] = cljs.core.first((state_46044[(4)])));

} else {
throw ex__44341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47372 = state_46044;
state_46044 = G__47372;
continue;
} else {
return ret_value__44339__auto__;
}
break;
}
});
cljs$core$async$state_machine__44338__auto__ = function(state_46044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44338__auto____1.call(this,state_46044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44338__auto____0;
cljs$core$async$state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44338__auto____1;
return cljs$core$async$state_machine__44338__auto__;
})()
})();
var state__44538__auto__ = (function (){var statearr_46089 = f__44537__auto__();
(statearr_46089[(6)] = c__44536__auto___47280);

return statearr_46089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44538__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__46093 = arguments.length;
switch (G__46093) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44536__auto___47378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44537__auto__ = (function (){var switch__44337__auto__ = (function (state_46126){
var state_val_46127 = (state_46126[(1)]);
if((state_val_46127 === (7))){
var inst_46105 = (state_46126[(7)]);
var inst_46104 = (state_46126[(8)]);
var inst_46104__$1 = (state_46126[(2)]);
var inst_46105__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46104__$1,(0),null);
var inst_46106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46104__$1,(1),null);
var inst_46107 = (inst_46105__$1 == null);
var state_46126__$1 = (function (){var statearr_46128 = state_46126;
(statearr_46128[(7)] = inst_46105__$1);

(statearr_46128[(8)] = inst_46104__$1);

(statearr_46128[(9)] = inst_46106);

return statearr_46128;
})();
if(cljs.core.truth_(inst_46107)){
var statearr_46129_47380 = state_46126__$1;
(statearr_46129_47380[(1)] = (8));

} else {
var statearr_46130_47381 = state_46126__$1;
(statearr_46130_47381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46127 === (1))){
var inst_46094 = cljs.core.vec(chs);
var inst_46095 = inst_46094;
var state_46126__$1 = (function (){var statearr_46131 = state_46126;
(statearr_46131[(10)] = inst_46095);

return statearr_46131;
})();
var statearr_46132_47384 = state_46126__$1;
(statearr_46132_47384[(2)] = null);

(statearr_46132_47384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46127 === (4))){
var inst_46095 = (state_46126[(10)]);
var state_46126__$1 = state_46126;
return cljs.core.async.ioc_alts_BANG_(state_46126__$1,(7),inst_46095);
} else {
if((state_val_46127 === (6))){
var inst_46122 = (state_46126[(2)]);
var state_46126__$1 = state_46126;
var statearr_46133_47386 = state_46126__$1;
(statearr_46133_47386[(2)] = inst_46122);

(statearr_46133_47386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46127 === (3))){
var inst_46124 = (state_46126[(2)]);
var state_46126__$1 = state_46126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46126__$1,inst_46124);
} else {
if((state_val_46127 === (2))){
var inst_46095 = (state_46126[(10)]);
var inst_46097 = cljs.core.count(inst_46095);
var inst_46098 = (inst_46097 > (0));
var state_46126__$1 = state_46126;
if(cljs.core.truth_(inst_46098)){
var statearr_46135_47389 = state_46126__$1;
(statearr_46135_47389[(1)] = (4));

} else {
var statearr_46136_47390 = state_46126__$1;
(statearr_46136_47390[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46127 === (11))){
var inst_46095 = (state_46126[(10)]);
var inst_46115 = (state_46126[(2)]);
var tmp46134 = inst_46095;
var inst_46095__$1 = tmp46134;
var state_46126__$1 = (function (){var statearr_46137 = state_46126;
(statearr_46137[(10)] = inst_46095__$1);

(statearr_46137[(11)] = inst_46115);

return statearr_46137;
})();
var statearr_46138_47394 = state_46126__$1;
(statearr_46138_47394[(2)] = null);

(statearr_46138_47394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46127 === (9))){
var inst_46105 = (state_46126[(7)]);
var state_46126__$1 = state_46126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46126__$1,(11),out,inst_46105);
} else {
if((state_val_46127 === (5))){
var inst_46120 = cljs.core.async.close_BANG_(out);
var state_46126__$1 = state_46126;
var statearr_46139_47397 = state_46126__$1;
(statearr_46139_47397[(2)] = inst_46120);

(statearr_46139_47397[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46127 === (10))){
var inst_46118 = (state_46126[(2)]);
var state_46126__$1 = state_46126;
var statearr_46140_47399 = state_46126__$1;
(statearr_46140_47399[(2)] = inst_46118);

(statearr_46140_47399[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46127 === (8))){
var inst_46105 = (state_46126[(7)]);
var inst_46095 = (state_46126[(10)]);
var inst_46104 = (state_46126[(8)]);
var inst_46106 = (state_46126[(9)]);
var inst_46109 = (function (){var cs = inst_46095;
var vec__46100 = inst_46104;
var v = inst_46105;
var c = inst_46106;
return (function (p1__46090_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46090_SHARP_);
});
})();
var inst_46110 = cljs.core.filterv(inst_46109,inst_46095);
var inst_46095__$1 = inst_46110;
var state_46126__$1 = (function (){var statearr_46141 = state_46126;
(statearr_46141[(10)] = inst_46095__$1);

return statearr_46141;
})();
var statearr_46142_47403 = state_46126__$1;
(statearr_46142_47403[(2)] = null);

(statearr_46142_47403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44338__auto__ = null;
var cljs$core$async$state_machine__44338__auto____0 = (function (){
var statearr_46143 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46143[(0)] = cljs$core$async$state_machine__44338__auto__);

(statearr_46143[(1)] = (1));

return statearr_46143;
});
var cljs$core$async$state_machine__44338__auto____1 = (function (state_46126){
while(true){
var ret_value__44339__auto__ = (function (){try{while(true){
var result__44340__auto__ = switch__44337__auto__(state_46126);
if(cljs.core.keyword_identical_QMARK_(result__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44340__auto__;
}
break;
}
}catch (e46144){var ex__44341__auto__ = e46144;
var statearr_46145_47407 = state_46126;
(statearr_46145_47407[(2)] = ex__44341__auto__);


if(cljs.core.seq((state_46126[(4)]))){
var statearr_46146_47408 = state_46126;
(statearr_46146_47408[(1)] = cljs.core.first((state_46126[(4)])));

} else {
throw ex__44341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47410 = state_46126;
state_46126 = G__47410;
continue;
} else {
return ret_value__44339__auto__;
}
break;
}
});
cljs$core$async$state_machine__44338__auto__ = function(state_46126){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44338__auto____1.call(this,state_46126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44338__auto____0;
cljs$core$async$state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44338__auto____1;
return cljs$core$async$state_machine__44338__auto__;
})()
})();
var state__44538__auto__ = (function (){var statearr_46147 = f__44537__auto__();
(statearr_46147[(6)] = c__44536__auto___47378);

return statearr_46147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44538__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__46149 = arguments.length;
switch (G__46149) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44536__auto___47412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44537__auto__ = (function (){var switch__44337__auto__ = (function (state_46173){
var state_val_46174 = (state_46173[(1)]);
if((state_val_46174 === (7))){
var inst_46155 = (state_46173[(7)]);
var inst_46155__$1 = (state_46173[(2)]);
var inst_46156 = (inst_46155__$1 == null);
var inst_46157 = cljs.core.not(inst_46156);
var state_46173__$1 = (function (){var statearr_46176 = state_46173;
(statearr_46176[(7)] = inst_46155__$1);

return statearr_46176;
})();
if(inst_46157){
var statearr_46177_47413 = state_46173__$1;
(statearr_46177_47413[(1)] = (8));

} else {
var statearr_46178_47414 = state_46173__$1;
(statearr_46178_47414[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (1))){
var inst_46150 = (0);
var state_46173__$1 = (function (){var statearr_46179 = state_46173;
(statearr_46179[(8)] = inst_46150);

return statearr_46179;
})();
var statearr_46180_47415 = state_46173__$1;
(statearr_46180_47415[(2)] = null);

(statearr_46180_47415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (4))){
var state_46173__$1 = state_46173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46173__$1,(7),ch);
} else {
if((state_val_46174 === (6))){
var inst_46168 = (state_46173[(2)]);
var state_46173__$1 = state_46173;
var statearr_46181_47416 = state_46173__$1;
(statearr_46181_47416[(2)] = inst_46168);

(statearr_46181_47416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (3))){
var inst_46170 = (state_46173[(2)]);
var inst_46171 = cljs.core.async.close_BANG_(out);
var state_46173__$1 = (function (){var statearr_46182 = state_46173;
(statearr_46182[(9)] = inst_46170);

return statearr_46182;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46173__$1,inst_46171);
} else {
if((state_val_46174 === (2))){
var inst_46150 = (state_46173[(8)]);
var inst_46152 = (inst_46150 < n);
var state_46173__$1 = state_46173;
if(cljs.core.truth_(inst_46152)){
var statearr_46183_47417 = state_46173__$1;
(statearr_46183_47417[(1)] = (4));

} else {
var statearr_46184_47418 = state_46173__$1;
(statearr_46184_47418[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (11))){
var inst_46150 = (state_46173[(8)]);
var inst_46160 = (state_46173[(2)]);
var inst_46161 = (inst_46150 + (1));
var inst_46150__$1 = inst_46161;
var state_46173__$1 = (function (){var statearr_46185 = state_46173;
(statearr_46185[(10)] = inst_46160);

(statearr_46185[(8)] = inst_46150__$1);

return statearr_46185;
})();
var statearr_46186_47419 = state_46173__$1;
(statearr_46186_47419[(2)] = null);

(statearr_46186_47419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (9))){
var state_46173__$1 = state_46173;
var statearr_46188_47420 = state_46173__$1;
(statearr_46188_47420[(2)] = null);

(statearr_46188_47420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (5))){
var state_46173__$1 = state_46173;
var statearr_46189_47421 = state_46173__$1;
(statearr_46189_47421[(2)] = null);

(statearr_46189_47421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (10))){
var inst_46165 = (state_46173[(2)]);
var state_46173__$1 = state_46173;
var statearr_46191_47422 = state_46173__$1;
(statearr_46191_47422[(2)] = inst_46165);

(statearr_46191_47422[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (8))){
var inst_46155 = (state_46173[(7)]);
var state_46173__$1 = state_46173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46173__$1,(11),out,inst_46155);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44338__auto__ = null;
var cljs$core$async$state_machine__44338__auto____0 = (function (){
var statearr_46192 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46192[(0)] = cljs$core$async$state_machine__44338__auto__);

(statearr_46192[(1)] = (1));

return statearr_46192;
});
var cljs$core$async$state_machine__44338__auto____1 = (function (state_46173){
while(true){
var ret_value__44339__auto__ = (function (){try{while(true){
var result__44340__auto__ = switch__44337__auto__(state_46173);
if(cljs.core.keyword_identical_QMARK_(result__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44340__auto__;
}
break;
}
}catch (e46197){var ex__44341__auto__ = e46197;
var statearr_46198_47423 = state_46173;
(statearr_46198_47423[(2)] = ex__44341__auto__);


if(cljs.core.seq((state_46173[(4)]))){
var statearr_46199_47425 = state_46173;
(statearr_46199_47425[(1)] = cljs.core.first((state_46173[(4)])));

} else {
throw ex__44341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47426 = state_46173;
state_46173 = G__47426;
continue;
} else {
return ret_value__44339__auto__;
}
break;
}
});
cljs$core$async$state_machine__44338__auto__ = function(state_46173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44338__auto____1.call(this,state_46173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44338__auto____0;
cljs$core$async$state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44338__auto____1;
return cljs$core$async$state_machine__44338__auto__;
})()
})();
var state__44538__auto__ = (function (){var statearr_46200 = f__44537__auto__();
(statearr_46200[(6)] = c__44536__auto___47412);

return statearr_46200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44538__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46206 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46206 = (function (f,ch,meta46207){
this.f = f;
this.ch = ch;
this.meta46207 = meta46207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46208,meta46207__$1){
var self__ = this;
var _46208__$1 = this;
return (new cljs.core.async.t_cljs$core$async46206(self__.f,self__.ch,meta46207__$1));
}));

(cljs.core.async.t_cljs$core$async46206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46208){
var self__ = this;
var _46208__$1 = this;
return self__.meta46207;
}));

(cljs.core.async.t_cljs$core$async46206.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46206.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46206.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46206.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46206.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46213 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46213 = (function (f,ch,meta46207,_,fn1,meta46214){
this.f = f;
this.ch = ch;
this.meta46207 = meta46207;
this._ = _;
this.fn1 = fn1;
this.meta46214 = meta46214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46215,meta46214__$1){
var self__ = this;
var _46215__$1 = this;
return (new cljs.core.async.t_cljs$core$async46213(self__.f,self__.ch,self__.meta46207,self__._,self__.fn1,meta46214__$1));
}));

(cljs.core.async.t_cljs$core$async46213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46215){
var self__ = this;
var _46215__$1 = this;
return self__.meta46214;
}));

(cljs.core.async.t_cljs$core$async46213.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46213.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46213.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46213.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46205_SHARP_){
var G__46216 = (((p1__46205_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46205_SHARP_) : self__.f.call(null,p1__46205_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46216) : f1.call(null,G__46216));
});
}));

(cljs.core.async.t_cljs$core$async46213.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46207","meta46207",65455905,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46206","cljs.core.async/t_cljs$core$async46206",-1183641141,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46214","meta46214",234753066,null)], null);
}));

(cljs.core.async.t_cljs$core$async46213.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46213");

(cljs.core.async.t_cljs$core$async46213.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46213");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46213.
 */
cljs.core.async.__GT_t_cljs$core$async46213 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46213(f__$1,ch__$1,meta46207__$1,___$2,fn1__$1,meta46214){
return (new cljs.core.async.t_cljs$core$async46213(f__$1,ch__$1,meta46207__$1,___$2,fn1__$1,meta46214));
});

}

return (new cljs.core.async.t_cljs$core$async46213(self__.f,self__.ch,self__.meta46207,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46217 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46217) : self__.f.call(null,G__46217));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46206.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46206.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46206.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46207","meta46207",65455905,null)], null);
}));

(cljs.core.async.t_cljs$core$async46206.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46206.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46206");

(cljs.core.async.t_cljs$core$async46206.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46206");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46206.
 */
cljs.core.async.__GT_t_cljs$core$async46206 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46206(f__$1,ch__$1,meta46207){
return (new cljs.core.async.t_cljs$core$async46206(f__$1,ch__$1,meta46207));
});

}

return (new cljs.core.async.t_cljs$core$async46206(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46219 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46219 = (function (f,ch,meta46220){
this.f = f;
this.ch = ch;
this.meta46220 = meta46220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46221,meta46220__$1){
var self__ = this;
var _46221__$1 = this;
return (new cljs.core.async.t_cljs$core$async46219(self__.f,self__.ch,meta46220__$1));
}));

(cljs.core.async.t_cljs$core$async46219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46221){
var self__ = this;
var _46221__$1 = this;
return self__.meta46220;
}));

(cljs.core.async.t_cljs$core$async46219.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46219.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46219.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46219.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46219.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46219.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46220","meta46220",972477991,null)], null);
}));

(cljs.core.async.t_cljs$core$async46219.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46219");

(cljs.core.async.t_cljs$core$async46219.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46219");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46219.
 */
cljs.core.async.__GT_t_cljs$core$async46219 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46219(f__$1,ch__$1,meta46220){
return (new cljs.core.async.t_cljs$core$async46219(f__$1,ch__$1,meta46220));
});

}

return (new cljs.core.async.t_cljs$core$async46219(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46222 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46222 = (function (p,ch,meta46223){
this.p = p;
this.ch = ch;
this.meta46223 = meta46223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46224,meta46223__$1){
var self__ = this;
var _46224__$1 = this;
return (new cljs.core.async.t_cljs$core$async46222(self__.p,self__.ch,meta46223__$1));
}));

(cljs.core.async.t_cljs$core$async46222.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46224){
var self__ = this;
var _46224__$1 = this;
return self__.meta46223;
}));

(cljs.core.async.t_cljs$core$async46222.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46222.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46222.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46222.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46222.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46222.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46222.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46222.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46223","meta46223",-1543036824,null)], null);
}));

(cljs.core.async.t_cljs$core$async46222.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46222");

(cljs.core.async.t_cljs$core$async46222.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async46222");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46222.
 */
cljs.core.async.__GT_t_cljs$core$async46222 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46222(p__$1,ch__$1,meta46223){
return (new cljs.core.async.t_cljs$core$async46222(p__$1,ch__$1,meta46223));
});

}

return (new cljs.core.async.t_cljs$core$async46222(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__46226 = arguments.length;
switch (G__46226) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44536__auto___47438 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44537__auto__ = (function (){var switch__44337__auto__ = (function (state_46247){
var state_val_46248 = (state_46247[(1)]);
if((state_val_46248 === (7))){
var inst_46243 = (state_46247[(2)]);
var state_46247__$1 = state_46247;
var statearr_46249_47439 = state_46247__$1;
(statearr_46249_47439[(2)] = inst_46243);

(statearr_46249_47439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (1))){
var state_46247__$1 = state_46247;
var statearr_46250_47440 = state_46247__$1;
(statearr_46250_47440[(2)] = null);

(statearr_46250_47440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (4))){
var inst_46229 = (state_46247[(7)]);
var inst_46229__$1 = (state_46247[(2)]);
var inst_46230 = (inst_46229__$1 == null);
var state_46247__$1 = (function (){var statearr_46251 = state_46247;
(statearr_46251[(7)] = inst_46229__$1);

return statearr_46251;
})();
if(cljs.core.truth_(inst_46230)){
var statearr_46252_47441 = state_46247__$1;
(statearr_46252_47441[(1)] = (5));

} else {
var statearr_46253_47442 = state_46247__$1;
(statearr_46253_47442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (6))){
var inst_46229 = (state_46247[(7)]);
var inst_46234 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46229) : p.call(null,inst_46229));
var state_46247__$1 = state_46247;
if(cljs.core.truth_(inst_46234)){
var statearr_46254_47443 = state_46247__$1;
(statearr_46254_47443[(1)] = (8));

} else {
var statearr_46255_47444 = state_46247__$1;
(statearr_46255_47444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (3))){
var inst_46245 = (state_46247[(2)]);
var state_46247__$1 = state_46247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46247__$1,inst_46245);
} else {
if((state_val_46248 === (2))){
var state_46247__$1 = state_46247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46247__$1,(4),ch);
} else {
if((state_val_46248 === (11))){
var inst_46237 = (state_46247[(2)]);
var state_46247__$1 = state_46247;
var statearr_46256_47445 = state_46247__$1;
(statearr_46256_47445[(2)] = inst_46237);

(statearr_46256_47445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (9))){
var state_46247__$1 = state_46247;
var statearr_46257_47446 = state_46247__$1;
(statearr_46257_47446[(2)] = null);

(statearr_46257_47446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (5))){
var inst_46232 = cljs.core.async.close_BANG_(out);
var state_46247__$1 = state_46247;
var statearr_46258_47447 = state_46247__$1;
(statearr_46258_47447[(2)] = inst_46232);

(statearr_46258_47447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (10))){
var inst_46240 = (state_46247[(2)]);
var state_46247__$1 = (function (){var statearr_46259 = state_46247;
(statearr_46259[(8)] = inst_46240);

return statearr_46259;
})();
var statearr_46260_47452 = state_46247__$1;
(statearr_46260_47452[(2)] = null);

(statearr_46260_47452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (8))){
var inst_46229 = (state_46247[(7)]);
var state_46247__$1 = state_46247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46247__$1,(11),out,inst_46229);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44338__auto__ = null;
var cljs$core$async$state_machine__44338__auto____0 = (function (){
var statearr_46261 = [null,null,null,null,null,null,null,null,null];
(statearr_46261[(0)] = cljs$core$async$state_machine__44338__auto__);

(statearr_46261[(1)] = (1));

return statearr_46261;
});
var cljs$core$async$state_machine__44338__auto____1 = (function (state_46247){
while(true){
var ret_value__44339__auto__ = (function (){try{while(true){
var result__44340__auto__ = switch__44337__auto__(state_46247);
if(cljs.core.keyword_identical_QMARK_(result__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44340__auto__;
}
break;
}
}catch (e46262){var ex__44341__auto__ = e46262;
var statearr_46263_47453 = state_46247;
(statearr_46263_47453[(2)] = ex__44341__auto__);


if(cljs.core.seq((state_46247[(4)]))){
var statearr_46264_47454 = state_46247;
(statearr_46264_47454[(1)] = cljs.core.first((state_46247[(4)])));

} else {
throw ex__44341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47455 = state_46247;
state_46247 = G__47455;
continue;
} else {
return ret_value__44339__auto__;
}
break;
}
});
cljs$core$async$state_machine__44338__auto__ = function(state_46247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44338__auto____1.call(this,state_46247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44338__auto____0;
cljs$core$async$state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44338__auto____1;
return cljs$core$async$state_machine__44338__auto__;
})()
})();
var state__44538__auto__ = (function (){var statearr_46265 = f__44537__auto__();
(statearr_46265[(6)] = c__44536__auto___47438);

return statearr_46265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44538__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46267 = arguments.length;
switch (G__46267) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__44536__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44537__auto__ = (function (){var switch__44337__auto__ = (function (state_46329){
var state_val_46330 = (state_46329[(1)]);
if((state_val_46330 === (7))){
var inst_46325 = (state_46329[(2)]);
var state_46329__$1 = state_46329;
var statearr_46331_47457 = state_46329__$1;
(statearr_46331_47457[(2)] = inst_46325);

(statearr_46331_47457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (20))){
var inst_46295 = (state_46329[(7)]);
var inst_46306 = (state_46329[(2)]);
var inst_46307 = cljs.core.next(inst_46295);
var inst_46281 = inst_46307;
var inst_46282 = null;
var inst_46283 = (0);
var inst_46284 = (0);
var state_46329__$1 = (function (){var statearr_46332 = state_46329;
(statearr_46332[(8)] = inst_46284);

(statearr_46332[(9)] = inst_46283);

(statearr_46332[(10)] = inst_46281);

(statearr_46332[(11)] = inst_46306);

(statearr_46332[(12)] = inst_46282);

return statearr_46332;
})();
var statearr_46333_47458 = state_46329__$1;
(statearr_46333_47458[(2)] = null);

(statearr_46333_47458[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (1))){
var state_46329__$1 = state_46329;
var statearr_46334_47459 = state_46329__$1;
(statearr_46334_47459[(2)] = null);

(statearr_46334_47459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (4))){
var inst_46270 = (state_46329[(13)]);
var inst_46270__$1 = (state_46329[(2)]);
var inst_46271 = (inst_46270__$1 == null);
var state_46329__$1 = (function (){var statearr_46335 = state_46329;
(statearr_46335[(13)] = inst_46270__$1);

return statearr_46335;
})();
if(cljs.core.truth_(inst_46271)){
var statearr_46336_47460 = state_46329__$1;
(statearr_46336_47460[(1)] = (5));

} else {
var statearr_46337_47461 = state_46329__$1;
(statearr_46337_47461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (15))){
var state_46329__$1 = state_46329;
var statearr_46341_47462 = state_46329__$1;
(statearr_46341_47462[(2)] = null);

(statearr_46341_47462[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (21))){
var state_46329__$1 = state_46329;
var statearr_46342_47463 = state_46329__$1;
(statearr_46342_47463[(2)] = null);

(statearr_46342_47463[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (13))){
var inst_46284 = (state_46329[(8)]);
var inst_46283 = (state_46329[(9)]);
var inst_46281 = (state_46329[(10)]);
var inst_46282 = (state_46329[(12)]);
var inst_46291 = (state_46329[(2)]);
var inst_46292 = (inst_46284 + (1));
var tmp46338 = inst_46283;
var tmp46339 = inst_46281;
var tmp46340 = inst_46282;
var inst_46281__$1 = tmp46339;
var inst_46282__$1 = tmp46340;
var inst_46283__$1 = tmp46338;
var inst_46284__$1 = inst_46292;
var state_46329__$1 = (function (){var statearr_46343 = state_46329;
(statearr_46343[(8)] = inst_46284__$1);

(statearr_46343[(9)] = inst_46283__$1);

(statearr_46343[(10)] = inst_46281__$1);

(statearr_46343[(14)] = inst_46291);

(statearr_46343[(12)] = inst_46282__$1);

return statearr_46343;
})();
var statearr_46344_47464 = state_46329__$1;
(statearr_46344_47464[(2)] = null);

(statearr_46344_47464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (22))){
var state_46329__$1 = state_46329;
var statearr_46345_47465 = state_46329__$1;
(statearr_46345_47465[(2)] = null);

(statearr_46345_47465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (6))){
var inst_46270 = (state_46329[(13)]);
var inst_46279 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46270) : f.call(null,inst_46270));
var inst_46280 = cljs.core.seq(inst_46279);
var inst_46281 = inst_46280;
var inst_46282 = null;
var inst_46283 = (0);
var inst_46284 = (0);
var state_46329__$1 = (function (){var statearr_46346 = state_46329;
(statearr_46346[(8)] = inst_46284);

(statearr_46346[(9)] = inst_46283);

(statearr_46346[(10)] = inst_46281);

(statearr_46346[(12)] = inst_46282);

return statearr_46346;
})();
var statearr_46347_47466 = state_46329__$1;
(statearr_46347_47466[(2)] = null);

(statearr_46347_47466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (17))){
var inst_46295 = (state_46329[(7)]);
var inst_46299 = cljs.core.chunk_first(inst_46295);
var inst_46300 = cljs.core.chunk_rest(inst_46295);
var inst_46301 = cljs.core.count(inst_46299);
var inst_46281 = inst_46300;
var inst_46282 = inst_46299;
var inst_46283 = inst_46301;
var inst_46284 = (0);
var state_46329__$1 = (function (){var statearr_46348 = state_46329;
(statearr_46348[(8)] = inst_46284);

(statearr_46348[(9)] = inst_46283);

(statearr_46348[(10)] = inst_46281);

(statearr_46348[(12)] = inst_46282);

return statearr_46348;
})();
var statearr_46349_47467 = state_46329__$1;
(statearr_46349_47467[(2)] = null);

(statearr_46349_47467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (3))){
var inst_46327 = (state_46329[(2)]);
var state_46329__$1 = state_46329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46329__$1,inst_46327);
} else {
if((state_val_46330 === (12))){
var inst_46315 = (state_46329[(2)]);
var state_46329__$1 = state_46329;
var statearr_46350_47468 = state_46329__$1;
(statearr_46350_47468[(2)] = inst_46315);

(statearr_46350_47468[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (2))){
var state_46329__$1 = state_46329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46329__$1,(4),in$);
} else {
if((state_val_46330 === (23))){
var inst_46323 = (state_46329[(2)]);
var state_46329__$1 = state_46329;
var statearr_46351_47469 = state_46329__$1;
(statearr_46351_47469[(2)] = inst_46323);

(statearr_46351_47469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (19))){
var inst_46310 = (state_46329[(2)]);
var state_46329__$1 = state_46329;
var statearr_46352_47470 = state_46329__$1;
(statearr_46352_47470[(2)] = inst_46310);

(statearr_46352_47470[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (11))){
var inst_46295 = (state_46329[(7)]);
var inst_46281 = (state_46329[(10)]);
var inst_46295__$1 = cljs.core.seq(inst_46281);
var state_46329__$1 = (function (){var statearr_46353 = state_46329;
(statearr_46353[(7)] = inst_46295__$1);

return statearr_46353;
})();
if(inst_46295__$1){
var statearr_46354_47471 = state_46329__$1;
(statearr_46354_47471[(1)] = (14));

} else {
var statearr_46355_47472 = state_46329__$1;
(statearr_46355_47472[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (9))){
var inst_46317 = (state_46329[(2)]);
var inst_46318 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46329__$1 = (function (){var statearr_46356 = state_46329;
(statearr_46356[(15)] = inst_46317);

return statearr_46356;
})();
if(cljs.core.truth_(inst_46318)){
var statearr_46357_47473 = state_46329__$1;
(statearr_46357_47473[(1)] = (21));

} else {
var statearr_46358_47474 = state_46329__$1;
(statearr_46358_47474[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (5))){
var inst_46273 = cljs.core.async.close_BANG_(out);
var state_46329__$1 = state_46329;
var statearr_46359_47475 = state_46329__$1;
(statearr_46359_47475[(2)] = inst_46273);

(statearr_46359_47475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (14))){
var inst_46295 = (state_46329[(7)]);
var inst_46297 = cljs.core.chunked_seq_QMARK_(inst_46295);
var state_46329__$1 = state_46329;
if(inst_46297){
var statearr_46360_47476 = state_46329__$1;
(statearr_46360_47476[(1)] = (17));

} else {
var statearr_46361_47477 = state_46329__$1;
(statearr_46361_47477[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (16))){
var inst_46313 = (state_46329[(2)]);
var state_46329__$1 = state_46329;
var statearr_46362_47478 = state_46329__$1;
(statearr_46362_47478[(2)] = inst_46313);

(statearr_46362_47478[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46330 === (10))){
var inst_46284 = (state_46329[(8)]);
var inst_46282 = (state_46329[(12)]);
var inst_46289 = cljs.core._nth(inst_46282,inst_46284);
var state_46329__$1 = state_46329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46329__$1,(13),out,inst_46289);
} else {
if((state_val_46330 === (18))){
var inst_46295 = (state_46329[(7)]);
var inst_46304 = cljs.core.first(inst_46295);
var state_46329__$1 = state_46329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46329__$1,(20),out,inst_46304);
} else {
if((state_val_46330 === (8))){
var inst_46284 = (state_46329[(8)]);
var inst_46283 = (state_46329[(9)]);
var inst_46286 = (inst_46284 < inst_46283);
var inst_46287 = inst_46286;
var state_46329__$1 = state_46329;
if(cljs.core.truth_(inst_46287)){
var statearr_46363_47480 = state_46329__$1;
(statearr_46363_47480[(1)] = (10));

} else {
var statearr_46364_47481 = state_46329__$1;
(statearr_46364_47481[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__44338__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__44338__auto____0 = (function (){
var statearr_46365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46365[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__44338__auto__);

(statearr_46365[(1)] = (1));

return statearr_46365;
});
var cljs$core$async$mapcat_STAR__$_state_machine__44338__auto____1 = (function (state_46329){
while(true){
var ret_value__44339__auto__ = (function (){try{while(true){
var result__44340__auto__ = switch__44337__auto__(state_46329);
if(cljs.core.keyword_identical_QMARK_(result__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44340__auto__;
}
break;
}
}catch (e46366){var ex__44341__auto__ = e46366;
var statearr_46367_47482 = state_46329;
(statearr_46367_47482[(2)] = ex__44341__auto__);


if(cljs.core.seq((state_46329[(4)]))){
var statearr_46368_47483 = state_46329;
(statearr_46368_47483[(1)] = cljs.core.first((state_46329[(4)])));

} else {
throw ex__44341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47484 = state_46329;
state_46329 = G__47484;
continue;
} else {
return ret_value__44339__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__44338__auto__ = function(state_46329){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__44338__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__44338__auto____1.call(this,state_46329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__44338__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__44338__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__44338__auto__;
})()
})();
var state__44538__auto__ = (function (){var statearr_46369 = f__44537__auto__();
(statearr_46369[(6)] = c__44536__auto__);

return statearr_46369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44538__auto__);
}));

return c__44536__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46371 = arguments.length;
switch (G__46371) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__46375 = arguments.length;
switch (G__46375) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__46381 = arguments.length;
switch (G__46381) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44536__auto___47491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44537__auto__ = (function (){var switch__44337__auto__ = (function (state_46405){
var state_val_46406 = (state_46405[(1)]);
if((state_val_46406 === (7))){
var inst_46400 = (state_46405[(2)]);
var state_46405__$1 = state_46405;
var statearr_46407_47492 = state_46405__$1;
(statearr_46407_47492[(2)] = inst_46400);

(statearr_46407_47492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46406 === (1))){
var inst_46382 = null;
var state_46405__$1 = (function (){var statearr_46408 = state_46405;
(statearr_46408[(7)] = inst_46382);

return statearr_46408;
})();
var statearr_46409_47493 = state_46405__$1;
(statearr_46409_47493[(2)] = null);

(statearr_46409_47493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46406 === (4))){
var inst_46385 = (state_46405[(8)]);
var inst_46385__$1 = (state_46405[(2)]);
var inst_46386 = (inst_46385__$1 == null);
var inst_46387 = cljs.core.not(inst_46386);
var state_46405__$1 = (function (){var statearr_46410 = state_46405;
(statearr_46410[(8)] = inst_46385__$1);

return statearr_46410;
})();
if(inst_46387){
var statearr_46411_47495 = state_46405__$1;
(statearr_46411_47495[(1)] = (5));

} else {
var statearr_46412_47499 = state_46405__$1;
(statearr_46412_47499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46406 === (6))){
var state_46405__$1 = state_46405;
var statearr_46413_47500 = state_46405__$1;
(statearr_46413_47500[(2)] = null);

(statearr_46413_47500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46406 === (3))){
var inst_46402 = (state_46405[(2)]);
var inst_46403 = cljs.core.async.close_BANG_(out);
var state_46405__$1 = (function (){var statearr_46414 = state_46405;
(statearr_46414[(9)] = inst_46402);

return statearr_46414;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46405__$1,inst_46403);
} else {
if((state_val_46406 === (2))){
var state_46405__$1 = state_46405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46405__$1,(4),ch);
} else {
if((state_val_46406 === (11))){
var inst_46385 = (state_46405[(8)]);
var inst_46394 = (state_46405[(2)]);
var inst_46382 = inst_46385;
var state_46405__$1 = (function (){var statearr_46416 = state_46405;
(statearr_46416[(10)] = inst_46394);

(statearr_46416[(7)] = inst_46382);

return statearr_46416;
})();
var statearr_46417_47501 = state_46405__$1;
(statearr_46417_47501[(2)] = null);

(statearr_46417_47501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46406 === (9))){
var inst_46385 = (state_46405[(8)]);
var state_46405__$1 = state_46405;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46405__$1,(11),out,inst_46385);
} else {
if((state_val_46406 === (5))){
var inst_46385 = (state_46405[(8)]);
var inst_46382 = (state_46405[(7)]);
var inst_46389 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46385,inst_46382);
var state_46405__$1 = state_46405;
if(inst_46389){
var statearr_46419_47505 = state_46405__$1;
(statearr_46419_47505[(1)] = (8));

} else {
var statearr_46420_47506 = state_46405__$1;
(statearr_46420_47506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46406 === (10))){
var inst_46397 = (state_46405[(2)]);
var state_46405__$1 = state_46405;
var statearr_46421_47507 = state_46405__$1;
(statearr_46421_47507[(2)] = inst_46397);

(statearr_46421_47507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46406 === (8))){
var inst_46382 = (state_46405[(7)]);
var tmp46418 = inst_46382;
var inst_46382__$1 = tmp46418;
var state_46405__$1 = (function (){var statearr_46422 = state_46405;
(statearr_46422[(7)] = inst_46382__$1);

return statearr_46422;
})();
var statearr_46423_47508 = state_46405__$1;
(statearr_46423_47508[(2)] = null);

(statearr_46423_47508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44338__auto__ = null;
var cljs$core$async$state_machine__44338__auto____0 = (function (){
var statearr_46424 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46424[(0)] = cljs$core$async$state_machine__44338__auto__);

(statearr_46424[(1)] = (1));

return statearr_46424;
});
var cljs$core$async$state_machine__44338__auto____1 = (function (state_46405){
while(true){
var ret_value__44339__auto__ = (function (){try{while(true){
var result__44340__auto__ = switch__44337__auto__(state_46405);
if(cljs.core.keyword_identical_QMARK_(result__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44340__auto__;
}
break;
}
}catch (e46425){var ex__44341__auto__ = e46425;
var statearr_46426_47511 = state_46405;
(statearr_46426_47511[(2)] = ex__44341__auto__);


if(cljs.core.seq((state_46405[(4)]))){
var statearr_46427_47512 = state_46405;
(statearr_46427_47512[(1)] = cljs.core.first((state_46405[(4)])));

} else {
throw ex__44341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47513 = state_46405;
state_46405 = G__47513;
continue;
} else {
return ret_value__44339__auto__;
}
break;
}
});
cljs$core$async$state_machine__44338__auto__ = function(state_46405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44338__auto____1.call(this,state_46405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44338__auto____0;
cljs$core$async$state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44338__auto____1;
return cljs$core$async$state_machine__44338__auto__;
})()
})();
var state__44538__auto__ = (function (){var statearr_46428 = f__44537__auto__();
(statearr_46428[(6)] = c__44536__auto___47491);

return statearr_46428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44538__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46430 = arguments.length;
switch (G__46430) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44536__auto___47517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44537__auto__ = (function (){var switch__44337__auto__ = (function (state_46468){
var state_val_46469 = (state_46468[(1)]);
if((state_val_46469 === (7))){
var inst_46464 = (state_46468[(2)]);
var state_46468__$1 = state_46468;
var statearr_46470_47520 = state_46468__$1;
(statearr_46470_47520[(2)] = inst_46464);

(statearr_46470_47520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46469 === (1))){
var inst_46431 = (new Array(n));
var inst_46432 = inst_46431;
var inst_46433 = (0);
var state_46468__$1 = (function (){var statearr_46471 = state_46468;
(statearr_46471[(7)] = inst_46433);

(statearr_46471[(8)] = inst_46432);

return statearr_46471;
})();
var statearr_46472_47521 = state_46468__$1;
(statearr_46472_47521[(2)] = null);

(statearr_46472_47521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46469 === (4))){
var inst_46436 = (state_46468[(9)]);
var inst_46436__$1 = (state_46468[(2)]);
var inst_46437 = (inst_46436__$1 == null);
var inst_46438 = cljs.core.not(inst_46437);
var state_46468__$1 = (function (){var statearr_46473 = state_46468;
(statearr_46473[(9)] = inst_46436__$1);

return statearr_46473;
})();
if(inst_46438){
var statearr_46474_47522 = state_46468__$1;
(statearr_46474_47522[(1)] = (5));

} else {
var statearr_46475_47523 = state_46468__$1;
(statearr_46475_47523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46469 === (15))){
var inst_46458 = (state_46468[(2)]);
var state_46468__$1 = state_46468;
var statearr_46476_47526 = state_46468__$1;
(statearr_46476_47526[(2)] = inst_46458);

(statearr_46476_47526[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46469 === (13))){
var state_46468__$1 = state_46468;
var statearr_46477_47527 = state_46468__$1;
(statearr_46477_47527[(2)] = null);

(statearr_46477_47527[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46469 === (6))){
var inst_46433 = (state_46468[(7)]);
var inst_46454 = (inst_46433 > (0));
var state_46468__$1 = state_46468;
if(cljs.core.truth_(inst_46454)){
var statearr_46478_47528 = state_46468__$1;
(statearr_46478_47528[(1)] = (12));

} else {
var statearr_46479_47529 = state_46468__$1;
(statearr_46479_47529[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46469 === (3))){
var inst_46466 = (state_46468[(2)]);
var state_46468__$1 = state_46468;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46468__$1,inst_46466);
} else {
if((state_val_46469 === (12))){
var inst_46432 = (state_46468[(8)]);
var inst_46456 = cljs.core.vec(inst_46432);
var state_46468__$1 = state_46468;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46468__$1,(15),out,inst_46456);
} else {
if((state_val_46469 === (2))){
var state_46468__$1 = state_46468;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46468__$1,(4),ch);
} else {
if((state_val_46469 === (11))){
var inst_46448 = (state_46468[(2)]);
var inst_46449 = (new Array(n));
var inst_46432 = inst_46449;
var inst_46433 = (0);
var state_46468__$1 = (function (){var statearr_46480 = state_46468;
(statearr_46480[(7)] = inst_46433);

(statearr_46480[(8)] = inst_46432);

(statearr_46480[(10)] = inst_46448);

return statearr_46480;
})();
var statearr_46481_47530 = state_46468__$1;
(statearr_46481_47530[(2)] = null);

(statearr_46481_47530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46469 === (9))){
var inst_46432 = (state_46468[(8)]);
var inst_46446 = cljs.core.vec(inst_46432);
var state_46468__$1 = state_46468;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46468__$1,(11),out,inst_46446);
} else {
if((state_val_46469 === (5))){
var inst_46436 = (state_46468[(9)]);
var inst_46441 = (state_46468[(11)]);
var inst_46433 = (state_46468[(7)]);
var inst_46432 = (state_46468[(8)]);
var inst_46440 = (inst_46432[inst_46433] = inst_46436);
var inst_46441__$1 = (inst_46433 + (1));
var inst_46442 = (inst_46441__$1 < n);
var state_46468__$1 = (function (){var statearr_46482 = state_46468;
(statearr_46482[(12)] = inst_46440);

(statearr_46482[(11)] = inst_46441__$1);

return statearr_46482;
})();
if(cljs.core.truth_(inst_46442)){
var statearr_46483_47531 = state_46468__$1;
(statearr_46483_47531[(1)] = (8));

} else {
var statearr_46484_47532 = state_46468__$1;
(statearr_46484_47532[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46469 === (14))){
var inst_46461 = (state_46468[(2)]);
var inst_46462 = cljs.core.async.close_BANG_(out);
var state_46468__$1 = (function (){var statearr_46486 = state_46468;
(statearr_46486[(13)] = inst_46461);

return statearr_46486;
})();
var statearr_46487_47534 = state_46468__$1;
(statearr_46487_47534[(2)] = inst_46462);

(statearr_46487_47534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46469 === (10))){
var inst_46452 = (state_46468[(2)]);
var state_46468__$1 = state_46468;
var statearr_46488_47536 = state_46468__$1;
(statearr_46488_47536[(2)] = inst_46452);

(statearr_46488_47536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46469 === (8))){
var inst_46441 = (state_46468[(11)]);
var inst_46432 = (state_46468[(8)]);
var tmp46485 = inst_46432;
var inst_46432__$1 = tmp46485;
var inst_46433 = inst_46441;
var state_46468__$1 = (function (){var statearr_46489 = state_46468;
(statearr_46489[(7)] = inst_46433);

(statearr_46489[(8)] = inst_46432__$1);

return statearr_46489;
})();
var statearr_46490_47537 = state_46468__$1;
(statearr_46490_47537[(2)] = null);

(statearr_46490_47537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44338__auto__ = null;
var cljs$core$async$state_machine__44338__auto____0 = (function (){
var statearr_46491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46491[(0)] = cljs$core$async$state_machine__44338__auto__);

(statearr_46491[(1)] = (1));

return statearr_46491;
});
var cljs$core$async$state_machine__44338__auto____1 = (function (state_46468){
while(true){
var ret_value__44339__auto__ = (function (){try{while(true){
var result__44340__auto__ = switch__44337__auto__(state_46468);
if(cljs.core.keyword_identical_QMARK_(result__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44340__auto__;
}
break;
}
}catch (e46492){var ex__44341__auto__ = e46492;
var statearr_46493_47538 = state_46468;
(statearr_46493_47538[(2)] = ex__44341__auto__);


if(cljs.core.seq((state_46468[(4)]))){
var statearr_46494_47540 = state_46468;
(statearr_46494_47540[(1)] = cljs.core.first((state_46468[(4)])));

} else {
throw ex__44341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47541 = state_46468;
state_46468 = G__47541;
continue;
} else {
return ret_value__44339__auto__;
}
break;
}
});
cljs$core$async$state_machine__44338__auto__ = function(state_46468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44338__auto____1.call(this,state_46468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44338__auto____0;
cljs$core$async$state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44338__auto____1;
return cljs$core$async$state_machine__44338__auto__;
})()
})();
var state__44538__auto__ = (function (){var statearr_46495 = f__44537__auto__();
(statearr_46495[(6)] = c__44536__auto___47517);

return statearr_46495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44538__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46497 = arguments.length;
switch (G__46497) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44536__auto___47544 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__44537__auto__ = (function (){var switch__44337__auto__ = (function (state_46543){
var state_val_46544 = (state_46543[(1)]);
if((state_val_46544 === (7))){
var inst_46538 = (state_46543[(2)]);
var state_46543__$1 = state_46543;
var statearr_46548_47545 = state_46543__$1;
(statearr_46548_47545[(2)] = inst_46538);

(statearr_46548_47545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46544 === (1))){
var inst_46498 = [];
var inst_46499 = inst_46498;
var inst_46500 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46543__$1 = (function (){var statearr_46550 = state_46543;
(statearr_46550[(7)] = inst_46500);

(statearr_46550[(8)] = inst_46499);

return statearr_46550;
})();
var statearr_46551_47548 = state_46543__$1;
(statearr_46551_47548[(2)] = null);

(statearr_46551_47548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46544 === (4))){
var inst_46503 = (state_46543[(9)]);
var inst_46503__$1 = (state_46543[(2)]);
var inst_46504 = (inst_46503__$1 == null);
var inst_46505 = cljs.core.not(inst_46504);
var state_46543__$1 = (function (){var statearr_46552 = state_46543;
(statearr_46552[(9)] = inst_46503__$1);

return statearr_46552;
})();
if(inst_46505){
var statearr_46553_47551 = state_46543__$1;
(statearr_46553_47551[(1)] = (5));

} else {
var statearr_46554_47552 = state_46543__$1;
(statearr_46554_47552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46544 === (15))){
var inst_46499 = (state_46543[(8)]);
var inst_46530 = cljs.core.vec(inst_46499);
var state_46543__$1 = state_46543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46543__$1,(18),out,inst_46530);
} else {
if((state_val_46544 === (13))){
var inst_46525 = (state_46543[(2)]);
var state_46543__$1 = state_46543;
var statearr_46555_47555 = state_46543__$1;
(statearr_46555_47555[(2)] = inst_46525);

(statearr_46555_47555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46544 === (6))){
var inst_46499 = (state_46543[(8)]);
var inst_46527 = inst_46499.length;
var inst_46528 = (inst_46527 > (0));
var state_46543__$1 = state_46543;
if(cljs.core.truth_(inst_46528)){
var statearr_46558_47558 = state_46543__$1;
(statearr_46558_47558[(1)] = (15));

} else {
var statearr_46559_47560 = state_46543__$1;
(statearr_46559_47560[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46544 === (17))){
var inst_46535 = (state_46543[(2)]);
var inst_46536 = cljs.core.async.close_BANG_(out);
var state_46543__$1 = (function (){var statearr_46561 = state_46543;
(statearr_46561[(10)] = inst_46535);

return statearr_46561;
})();
var statearr_46562_47564 = state_46543__$1;
(statearr_46562_47564[(2)] = inst_46536);

(statearr_46562_47564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46544 === (3))){
var inst_46540 = (state_46543[(2)]);
var state_46543__$1 = state_46543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46543__$1,inst_46540);
} else {
if((state_val_46544 === (12))){
var inst_46499 = (state_46543[(8)]);
var inst_46518 = cljs.core.vec(inst_46499);
var state_46543__$1 = state_46543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46543__$1,(14),out,inst_46518);
} else {
if((state_val_46544 === (2))){
var state_46543__$1 = state_46543;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46543__$1,(4),ch);
} else {
if((state_val_46544 === (11))){
var inst_46507 = (state_46543[(11)]);
var inst_46499 = (state_46543[(8)]);
var inst_46503 = (state_46543[(9)]);
var inst_46515 = inst_46499.push(inst_46503);
var tmp46563 = inst_46499;
var inst_46499__$1 = tmp46563;
var inst_46500 = inst_46507;
var state_46543__$1 = (function (){var statearr_46565 = state_46543;
(statearr_46565[(7)] = inst_46500);

(statearr_46565[(8)] = inst_46499__$1);

(statearr_46565[(12)] = inst_46515);

return statearr_46565;
})();
var statearr_46566_47567 = state_46543__$1;
(statearr_46566_47567[(2)] = null);

(statearr_46566_47567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46544 === (9))){
var inst_46500 = (state_46543[(7)]);
var inst_46511 = cljs.core.keyword_identical_QMARK_(inst_46500,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_46543__$1 = state_46543;
var statearr_46567_47568 = state_46543__$1;
(statearr_46567_47568[(2)] = inst_46511);

(statearr_46567_47568[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46544 === (5))){
var inst_46500 = (state_46543[(7)]);
var inst_46507 = (state_46543[(11)]);
var inst_46508 = (state_46543[(13)]);
var inst_46503 = (state_46543[(9)]);
var inst_46507__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46503) : f.call(null,inst_46503));
var inst_46508__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46507__$1,inst_46500);
var state_46543__$1 = (function (){var statearr_46568 = state_46543;
(statearr_46568[(11)] = inst_46507__$1);

(statearr_46568[(13)] = inst_46508__$1);

return statearr_46568;
})();
if(inst_46508__$1){
var statearr_46569_47570 = state_46543__$1;
(statearr_46569_47570[(1)] = (8));

} else {
var statearr_46570_47571 = state_46543__$1;
(statearr_46570_47571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46544 === (14))){
var inst_46507 = (state_46543[(11)]);
var inst_46503 = (state_46543[(9)]);
var inst_46520 = (state_46543[(2)]);
var inst_46521 = [];
var inst_46522 = inst_46521.push(inst_46503);
var inst_46499 = inst_46521;
var inst_46500 = inst_46507;
var state_46543__$1 = (function (){var statearr_46571 = state_46543;
(statearr_46571[(7)] = inst_46500);

(statearr_46571[(14)] = inst_46522);

(statearr_46571[(8)] = inst_46499);

(statearr_46571[(15)] = inst_46520);

return statearr_46571;
})();
var statearr_46572_47572 = state_46543__$1;
(statearr_46572_47572[(2)] = null);

(statearr_46572_47572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46544 === (16))){
var state_46543__$1 = state_46543;
var statearr_46573_47573 = state_46543__$1;
(statearr_46573_47573[(2)] = null);

(statearr_46573_47573[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46544 === (10))){
var inst_46513 = (state_46543[(2)]);
var state_46543__$1 = state_46543;
if(cljs.core.truth_(inst_46513)){
var statearr_46574_47574 = state_46543__$1;
(statearr_46574_47574[(1)] = (11));

} else {
var statearr_46575_47575 = state_46543__$1;
(statearr_46575_47575[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46544 === (18))){
var inst_46532 = (state_46543[(2)]);
var state_46543__$1 = state_46543;
var statearr_46576_47585 = state_46543__$1;
(statearr_46576_47585[(2)] = inst_46532);

(statearr_46576_47585[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46544 === (8))){
var inst_46508 = (state_46543[(13)]);
var state_46543__$1 = state_46543;
var statearr_46577_47586 = state_46543__$1;
(statearr_46577_47586[(2)] = inst_46508);

(statearr_46577_47586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__44338__auto__ = null;
var cljs$core$async$state_machine__44338__auto____0 = (function (){
var statearr_46581 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46581[(0)] = cljs$core$async$state_machine__44338__auto__);

(statearr_46581[(1)] = (1));

return statearr_46581;
});
var cljs$core$async$state_machine__44338__auto____1 = (function (state_46543){
while(true){
var ret_value__44339__auto__ = (function (){try{while(true){
var result__44340__auto__ = switch__44337__auto__(state_46543);
if(cljs.core.keyword_identical_QMARK_(result__44340__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__44340__auto__;
}
break;
}
}catch (e46583){var ex__44341__auto__ = e46583;
var statearr_46585_47587 = state_46543;
(statearr_46585_47587[(2)] = ex__44341__auto__);


if(cljs.core.seq((state_46543[(4)]))){
var statearr_46587_47588 = state_46543;
(statearr_46587_47588[(1)] = cljs.core.first((state_46543[(4)])));

} else {
throw ex__44341__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__44339__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47589 = state_46543;
state_46543 = G__47589;
continue;
} else {
return ret_value__44339__auto__;
}
break;
}
});
cljs$core$async$state_machine__44338__auto__ = function(state_46543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__44338__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__44338__auto____1.call(this,state_46543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__44338__auto____0;
cljs$core$async$state_machine__44338__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__44338__auto____1;
return cljs$core$async$state_machine__44338__auto__;
})()
})();
var state__44538__auto__ = (function (){var statearr_46588 = f__44537__auto__();
(statearr_46588[(6)] = c__44536__auto___47544);

return statearr_46588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44538__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
