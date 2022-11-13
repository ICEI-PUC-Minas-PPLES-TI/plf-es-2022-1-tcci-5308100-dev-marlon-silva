goog.provide('cljs.nodejs');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_((function() { 
var G__25864__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__25864 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25865__i = 0, G__25865__a = new Array(arguments.length -  0);
while (G__25865__i < G__25865__a.length) {G__25865__a[G__25865__i] = arguments[G__25865__i + 0]; ++G__25865__i;}
  args = new cljs.core.IndexedSeq(G__25865__a,0,null);
} 
return G__25864__delegate.call(this,args);};
G__25864.cljs$lang$maxFixedArity = 0;
G__25864.cljs$lang$applyTo = (function (arglist__25866){
var args = cljs.core.seq(arglist__25866);
return G__25864__delegate(args);
});
G__25864.cljs$core$IFn$_invoke$arity$variadic = G__25864__delegate;
return G__25864;
})()
);

cljs.core.set_print_err_fn_BANG_((function() { 
var G__25867__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__25867 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25868__i = 0, G__25868__a = new Array(arguments.length -  0);
while (G__25868__i < G__25868__a.length) {G__25868__a[G__25868__i] = arguments[G__25868__i + 0]; ++G__25868__i;}
  args = new cljs.core.IndexedSeq(G__25868__a,0,null);
} 
return G__25867__delegate.call(this,args);};
G__25867.cljs$lang$maxFixedArity = 0;
G__25867.cljs$lang$applyTo = (function (arglist__25869){
var args = cljs.core.seq(arglist__25869);
return G__25867__delegate(args);
});
G__25867.cljs$core$IFn$_invoke$arity$variadic = G__25867__delegate;
return G__25867;
})()
);

return null;
});

//# sourceMappingURL=cljs.nodejs.js.map