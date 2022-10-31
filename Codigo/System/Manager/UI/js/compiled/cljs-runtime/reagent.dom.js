goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__18227 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__18228 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__18228);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__18231 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__18232 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__18232);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__18231);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__18227);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__18240 = arguments.length;
switch (G__18240) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__18247 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18247,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18247,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__18264_18288 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__18265_18289 = null;
var count__18266_18290 = (0);
var i__18267_18291 = (0);
while(true){
if((i__18267_18291 < count__18266_18290)){
var vec__18277_18292 = chunk__18265_18289.cljs$core$IIndexed$_nth$arity$2(null,i__18267_18291);
var container_18293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18277_18292,(0),null);
var comp_18294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18277_18292,(1),null);
reagent.dom.re_render_component(comp_18294,container_18293);


var G__18295 = seq__18264_18288;
var G__18296 = chunk__18265_18289;
var G__18297 = count__18266_18290;
var G__18298 = (i__18267_18291 + (1));
seq__18264_18288 = G__18295;
chunk__18265_18289 = G__18296;
count__18266_18290 = G__18297;
i__18267_18291 = G__18298;
continue;
} else {
var temp__5804__auto___18301 = cljs.core.seq(seq__18264_18288);
if(temp__5804__auto___18301){
var seq__18264_18302__$1 = temp__5804__auto___18301;
if(cljs.core.chunked_seq_QMARK_(seq__18264_18302__$1)){
var c__5568__auto___18304 = cljs.core.chunk_first(seq__18264_18302__$1);
var G__18305 = cljs.core.chunk_rest(seq__18264_18302__$1);
var G__18306 = c__5568__auto___18304;
var G__18307 = cljs.core.count(c__5568__auto___18304);
var G__18308 = (0);
seq__18264_18288 = G__18305;
chunk__18265_18289 = G__18306;
count__18266_18290 = G__18307;
i__18267_18291 = G__18308;
continue;
} else {
var vec__18280_18309 = cljs.core.first(seq__18264_18302__$1);
var container_18310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18280_18309,(0),null);
var comp_18311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18280_18309,(1),null);
reagent.dom.re_render_component(comp_18311,container_18310);


var G__18312 = cljs.core.next(seq__18264_18302__$1);
var G__18313 = null;
var G__18314 = (0);
var G__18315 = (0);
seq__18264_18288 = G__18312;
chunk__18265_18289 = G__18313;
count__18266_18290 = G__18314;
i__18267_18291 = G__18315;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
