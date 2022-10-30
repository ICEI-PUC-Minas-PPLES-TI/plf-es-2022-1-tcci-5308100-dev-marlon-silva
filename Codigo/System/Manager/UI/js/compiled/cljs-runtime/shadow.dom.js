goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_26826 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_26826(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_26827 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_26827(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__25831 = coll;
var G__25832 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__25831,G__25832) : shadow.dom.lazy_native_coll_seq.call(null,G__25831,G__25832));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__25890 = arguments.length;
switch (G__25890) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__25911 = arguments.length;
switch (G__25911) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__25914 = arguments.length;
switch (G__25914) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__25916 = arguments.length;
switch (G__25916) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__25923 = arguments.length;
switch (G__25923) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__25930 = arguments.length;
switch (G__25930) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e25939){if((e25939 instanceof Object)){
var e = e25939;
return console.log("didnt support attachEvent",el,e);
} else {
throw e25939;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__25949 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__25950 = null;
var count__25951 = (0);
var i__25952 = (0);
while(true){
if((i__25952 < count__25951)){
var el = chunk__25950.cljs$core$IIndexed$_nth$arity$2(null,i__25952);
var handler_26879__$1 = ((function (seq__25949,chunk__25950,count__25951,i__25952,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__25949,chunk__25950,count__25951,i__25952,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_26879__$1);


var G__26883 = seq__25949;
var G__26884 = chunk__25950;
var G__26885 = count__25951;
var G__26886 = (i__25952 + (1));
seq__25949 = G__26883;
chunk__25950 = G__26884;
count__25951 = G__26885;
i__25952 = G__26886;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25949);
if(temp__5804__auto__){
var seq__25949__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25949__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25949__$1);
var G__26887 = cljs.core.chunk_rest(seq__25949__$1);
var G__26888 = c__5568__auto__;
var G__26889 = cljs.core.count(c__5568__auto__);
var G__26890 = (0);
seq__25949 = G__26887;
chunk__25950 = G__26888;
count__25951 = G__26889;
i__25952 = G__26890;
continue;
} else {
var el = cljs.core.first(seq__25949__$1);
var handler_26891__$1 = ((function (seq__25949,chunk__25950,count__25951,i__25952,el,seq__25949__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__25949,chunk__25950,count__25951,i__25952,el,seq__25949__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_26891__$1);


var G__26892 = cljs.core.next(seq__25949__$1);
var G__26893 = null;
var G__26894 = (0);
var G__26895 = (0);
seq__25949 = G__26892;
chunk__25950 = G__26893;
count__25951 = G__26894;
i__25952 = G__26895;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__25964 = arguments.length;
switch (G__25964) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__25970 = cljs.core.seq(events);
var chunk__25971 = null;
var count__25972 = (0);
var i__25973 = (0);
while(true){
if((i__25973 < count__25972)){
var vec__25995 = chunk__25971.cljs$core$IIndexed$_nth$arity$2(null,i__25973);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25995,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25995,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__26903 = seq__25970;
var G__26904 = chunk__25971;
var G__26905 = count__25972;
var G__26906 = (i__25973 + (1));
seq__25970 = G__26903;
chunk__25971 = G__26904;
count__25972 = G__26905;
i__25973 = G__26906;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__25970);
if(temp__5804__auto__){
var seq__25970__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25970__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__25970__$1);
var G__26910 = cljs.core.chunk_rest(seq__25970__$1);
var G__26911 = c__5568__auto__;
var G__26912 = cljs.core.count(c__5568__auto__);
var G__26913 = (0);
seq__25970 = G__26910;
chunk__25971 = G__26911;
count__25972 = G__26912;
i__25973 = G__26913;
continue;
} else {
var vec__26005 = cljs.core.first(seq__25970__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26005,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26005,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__26914 = cljs.core.next(seq__25970__$1);
var G__26915 = null;
var G__26916 = (0);
var G__26917 = (0);
seq__25970 = G__26914;
chunk__25971 = G__26915;
count__25972 = G__26916;
i__25973 = G__26917;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__26009 = cljs.core.seq(styles);
var chunk__26010 = null;
var count__26011 = (0);
var i__26012 = (0);
while(true){
if((i__26012 < count__26011)){
var vec__26063 = chunk__26010.cljs$core$IIndexed$_nth$arity$2(null,i__26012);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26063,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26063,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__26918 = seq__26009;
var G__26919 = chunk__26010;
var G__26920 = count__26011;
var G__26921 = (i__26012 + (1));
seq__26009 = G__26918;
chunk__26010 = G__26919;
count__26011 = G__26920;
i__26012 = G__26921;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26009);
if(temp__5804__auto__){
var seq__26009__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26009__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26009__$1);
var G__26924 = cljs.core.chunk_rest(seq__26009__$1);
var G__26925 = c__5568__auto__;
var G__26926 = cljs.core.count(c__5568__auto__);
var G__26927 = (0);
seq__26009 = G__26924;
chunk__26010 = G__26925;
count__26011 = G__26926;
i__26012 = G__26927;
continue;
} else {
var vec__26066 = cljs.core.first(seq__26009__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26066,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26066,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__26928 = cljs.core.next(seq__26009__$1);
var G__26929 = null;
var G__26930 = (0);
var G__26931 = (0);
seq__26009 = G__26928;
chunk__26010 = G__26929;
count__26011 = G__26930;
i__26012 = G__26931;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__26069_26932 = key;
var G__26069_26933__$1 = (((G__26069_26932 instanceof cljs.core.Keyword))?G__26069_26932.fqn:null);
switch (G__26069_26933__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_26938 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_26938,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_26938,"aria-");
}
})())){
el.setAttribute(ks_26938,value);
} else {
(el[ks_26938] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__26081){
var map__26082 = p__26081;
var map__26082__$1 = cljs.core.__destructure_map(map__26082);
var props = map__26082__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26082__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__26084 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26084,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26084,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26084,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__26087 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__26087,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__26087;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__26090 = arguments.length;
switch (G__26090) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__26103){
var vec__26104 = p__26103;
var seq__26105 = cljs.core.seq(vec__26104);
var first__26106 = cljs.core.first(seq__26105);
var seq__26105__$1 = cljs.core.next(seq__26105);
var nn = first__26106;
var first__26106__$1 = cljs.core.first(seq__26105__$1);
var seq__26105__$2 = cljs.core.next(seq__26105__$1);
var np = first__26106__$1;
var nc = seq__26105__$2;
var node = vec__26104;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26111 = nn;
var G__26112 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__26111,G__26112) : create_fn.call(null,G__26111,G__26112));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__26113 = nn;
var G__26114 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__26113,G__26114) : create_fn.call(null,G__26113,G__26114));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__26115 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26115,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26115,(1),null);
var seq__26124_26950 = cljs.core.seq(node_children);
var chunk__26125_26951 = null;
var count__26126_26952 = (0);
var i__26127_26953 = (0);
while(true){
if((i__26127_26953 < count__26126_26952)){
var child_struct_26955 = chunk__26125_26951.cljs$core$IIndexed$_nth$arity$2(null,i__26127_26953);
var children_26956 = shadow.dom.dom_node(child_struct_26955);
if(cljs.core.seq_QMARK_(children_26956)){
var seq__26146_26957 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_26956));
var chunk__26148_26958 = null;
var count__26149_26959 = (0);
var i__26150_26960 = (0);
while(true){
if((i__26150_26960 < count__26149_26959)){
var child_26961 = chunk__26148_26958.cljs$core$IIndexed$_nth$arity$2(null,i__26150_26960);
if(cljs.core.truth_(child_26961)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_26961);


var G__26962 = seq__26146_26957;
var G__26963 = chunk__26148_26958;
var G__26964 = count__26149_26959;
var G__26965 = (i__26150_26960 + (1));
seq__26146_26957 = G__26962;
chunk__26148_26958 = G__26963;
count__26149_26959 = G__26964;
i__26150_26960 = G__26965;
continue;
} else {
var G__26966 = seq__26146_26957;
var G__26967 = chunk__26148_26958;
var G__26968 = count__26149_26959;
var G__26969 = (i__26150_26960 + (1));
seq__26146_26957 = G__26966;
chunk__26148_26958 = G__26967;
count__26149_26959 = G__26968;
i__26150_26960 = G__26969;
continue;
}
} else {
var temp__5804__auto___26970 = cljs.core.seq(seq__26146_26957);
if(temp__5804__auto___26970){
var seq__26146_26971__$1 = temp__5804__auto___26970;
if(cljs.core.chunked_seq_QMARK_(seq__26146_26971__$1)){
var c__5568__auto___26972 = cljs.core.chunk_first(seq__26146_26971__$1);
var G__26973 = cljs.core.chunk_rest(seq__26146_26971__$1);
var G__26974 = c__5568__auto___26972;
var G__26975 = cljs.core.count(c__5568__auto___26972);
var G__26976 = (0);
seq__26146_26957 = G__26973;
chunk__26148_26958 = G__26974;
count__26149_26959 = G__26975;
i__26150_26960 = G__26976;
continue;
} else {
var child_26977 = cljs.core.first(seq__26146_26971__$1);
if(cljs.core.truth_(child_26977)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_26977);


var G__26978 = cljs.core.next(seq__26146_26971__$1);
var G__26979 = null;
var G__26980 = (0);
var G__26981 = (0);
seq__26146_26957 = G__26978;
chunk__26148_26958 = G__26979;
count__26149_26959 = G__26980;
i__26150_26960 = G__26981;
continue;
} else {
var G__26982 = cljs.core.next(seq__26146_26971__$1);
var G__26983 = null;
var G__26984 = (0);
var G__26985 = (0);
seq__26146_26957 = G__26982;
chunk__26148_26958 = G__26983;
count__26149_26959 = G__26984;
i__26150_26960 = G__26985;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_26956);
}


var G__26986 = seq__26124_26950;
var G__26987 = chunk__26125_26951;
var G__26988 = count__26126_26952;
var G__26989 = (i__26127_26953 + (1));
seq__26124_26950 = G__26986;
chunk__26125_26951 = G__26987;
count__26126_26952 = G__26988;
i__26127_26953 = G__26989;
continue;
} else {
var temp__5804__auto___26991 = cljs.core.seq(seq__26124_26950);
if(temp__5804__auto___26991){
var seq__26124_26992__$1 = temp__5804__auto___26991;
if(cljs.core.chunked_seq_QMARK_(seq__26124_26992__$1)){
var c__5568__auto___26993 = cljs.core.chunk_first(seq__26124_26992__$1);
var G__26994 = cljs.core.chunk_rest(seq__26124_26992__$1);
var G__26995 = c__5568__auto___26993;
var G__26996 = cljs.core.count(c__5568__auto___26993);
var G__26997 = (0);
seq__26124_26950 = G__26994;
chunk__26125_26951 = G__26995;
count__26126_26952 = G__26996;
i__26127_26953 = G__26997;
continue;
} else {
var child_struct_27002 = cljs.core.first(seq__26124_26992__$1);
var children_27003 = shadow.dom.dom_node(child_struct_27002);
if(cljs.core.seq_QMARK_(children_27003)){
var seq__26156_27004 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_27003));
var chunk__26158_27005 = null;
var count__26159_27006 = (0);
var i__26160_27007 = (0);
while(true){
if((i__26160_27007 < count__26159_27006)){
var child_27008 = chunk__26158_27005.cljs$core$IIndexed$_nth$arity$2(null,i__26160_27007);
if(cljs.core.truth_(child_27008)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_27008);


var G__27009 = seq__26156_27004;
var G__27010 = chunk__26158_27005;
var G__27011 = count__26159_27006;
var G__27012 = (i__26160_27007 + (1));
seq__26156_27004 = G__27009;
chunk__26158_27005 = G__27010;
count__26159_27006 = G__27011;
i__26160_27007 = G__27012;
continue;
} else {
var G__27013 = seq__26156_27004;
var G__27014 = chunk__26158_27005;
var G__27015 = count__26159_27006;
var G__27016 = (i__26160_27007 + (1));
seq__26156_27004 = G__27013;
chunk__26158_27005 = G__27014;
count__26159_27006 = G__27015;
i__26160_27007 = G__27016;
continue;
}
} else {
var temp__5804__auto___27017__$1 = cljs.core.seq(seq__26156_27004);
if(temp__5804__auto___27017__$1){
var seq__26156_27018__$1 = temp__5804__auto___27017__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26156_27018__$1)){
var c__5568__auto___27019 = cljs.core.chunk_first(seq__26156_27018__$1);
var G__27020 = cljs.core.chunk_rest(seq__26156_27018__$1);
var G__27021 = c__5568__auto___27019;
var G__27022 = cljs.core.count(c__5568__auto___27019);
var G__27023 = (0);
seq__26156_27004 = G__27020;
chunk__26158_27005 = G__27021;
count__26159_27006 = G__27022;
i__26160_27007 = G__27023;
continue;
} else {
var child_27024 = cljs.core.first(seq__26156_27018__$1);
if(cljs.core.truth_(child_27024)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_27024);


var G__27025 = cljs.core.next(seq__26156_27018__$1);
var G__27026 = null;
var G__27027 = (0);
var G__27028 = (0);
seq__26156_27004 = G__27025;
chunk__26158_27005 = G__27026;
count__26159_27006 = G__27027;
i__26160_27007 = G__27028;
continue;
} else {
var G__27029 = cljs.core.next(seq__26156_27018__$1);
var G__27030 = null;
var G__27031 = (0);
var G__27032 = (0);
seq__26156_27004 = G__27029;
chunk__26158_27005 = G__27030;
count__26159_27006 = G__27031;
i__26160_27007 = G__27032;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_27003);
}


var G__27033 = cljs.core.next(seq__26124_26992__$1);
var G__27034 = null;
var G__27035 = (0);
var G__27036 = (0);
seq__26124_26950 = G__27033;
chunk__26125_26951 = G__27034;
count__26126_26952 = G__27035;
i__26127_26953 = G__27036;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__26166 = cljs.core.seq(node);
var chunk__26167 = null;
var count__26168 = (0);
var i__26169 = (0);
while(true){
if((i__26169 < count__26168)){
var n = chunk__26167.cljs$core$IIndexed$_nth$arity$2(null,i__26169);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__27037 = seq__26166;
var G__27038 = chunk__26167;
var G__27039 = count__26168;
var G__27040 = (i__26169 + (1));
seq__26166 = G__27037;
chunk__26167 = G__27038;
count__26168 = G__27039;
i__26169 = G__27040;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26166);
if(temp__5804__auto__){
var seq__26166__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26166__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26166__$1);
var G__27041 = cljs.core.chunk_rest(seq__26166__$1);
var G__27042 = c__5568__auto__;
var G__27043 = cljs.core.count(c__5568__auto__);
var G__27044 = (0);
seq__26166 = G__27041;
chunk__26167 = G__27042;
count__26168 = G__27043;
i__26169 = G__27044;
continue;
} else {
var n = cljs.core.first(seq__26166__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__27045 = cljs.core.next(seq__26166__$1);
var G__27046 = null;
var G__27047 = (0);
var G__27048 = (0);
seq__26166 = G__27045;
chunk__26167 = G__27046;
count__26168 = G__27047;
i__26169 = G__27048;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__26184 = arguments.length;
switch (G__26184) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__26201 = arguments.length;
switch (G__26201) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__26219 = arguments.length;
switch (G__26219) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27052 = arguments.length;
var i__5770__auto___27053 = (0);
while(true){
if((i__5770__auto___27053 < len__5769__auto___27052)){
args__5775__auto__.push((arguments[i__5770__auto___27053]));

var G__27054 = (i__5770__auto___27053 + (1));
i__5770__auto___27053 = G__27054;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__26230_27055 = cljs.core.seq(nodes);
var chunk__26231_27056 = null;
var count__26232_27057 = (0);
var i__26233_27058 = (0);
while(true){
if((i__26233_27058 < count__26232_27057)){
var node_27059 = chunk__26231_27056.cljs$core$IIndexed$_nth$arity$2(null,i__26233_27058);
fragment.appendChild(shadow.dom._to_dom(node_27059));


var G__27060 = seq__26230_27055;
var G__27061 = chunk__26231_27056;
var G__27062 = count__26232_27057;
var G__27063 = (i__26233_27058 + (1));
seq__26230_27055 = G__27060;
chunk__26231_27056 = G__27061;
count__26232_27057 = G__27062;
i__26233_27058 = G__27063;
continue;
} else {
var temp__5804__auto___27064 = cljs.core.seq(seq__26230_27055);
if(temp__5804__auto___27064){
var seq__26230_27065__$1 = temp__5804__auto___27064;
if(cljs.core.chunked_seq_QMARK_(seq__26230_27065__$1)){
var c__5568__auto___27066 = cljs.core.chunk_first(seq__26230_27065__$1);
var G__27067 = cljs.core.chunk_rest(seq__26230_27065__$1);
var G__27068 = c__5568__auto___27066;
var G__27069 = cljs.core.count(c__5568__auto___27066);
var G__27070 = (0);
seq__26230_27055 = G__27067;
chunk__26231_27056 = G__27068;
count__26232_27057 = G__27069;
i__26233_27058 = G__27070;
continue;
} else {
var node_27071 = cljs.core.first(seq__26230_27065__$1);
fragment.appendChild(shadow.dom._to_dom(node_27071));


var G__27072 = cljs.core.next(seq__26230_27065__$1);
var G__27073 = null;
var G__27074 = (0);
var G__27075 = (0);
seq__26230_27055 = G__27072;
chunk__26231_27056 = G__27073;
count__26232_27057 = G__27074;
i__26233_27058 = G__27075;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq26225){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq26225));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__26248_27076 = cljs.core.seq(scripts);
var chunk__26249_27077 = null;
var count__26250_27078 = (0);
var i__26251_27079 = (0);
while(true){
if((i__26251_27079 < count__26250_27078)){
var vec__26264_27080 = chunk__26249_27077.cljs$core$IIndexed$_nth$arity$2(null,i__26251_27079);
var script_tag_27081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26264_27080,(0),null);
var script_body_27082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26264_27080,(1),null);
eval(script_body_27082);


var G__27083 = seq__26248_27076;
var G__27084 = chunk__26249_27077;
var G__27085 = count__26250_27078;
var G__27086 = (i__26251_27079 + (1));
seq__26248_27076 = G__27083;
chunk__26249_27077 = G__27084;
count__26250_27078 = G__27085;
i__26251_27079 = G__27086;
continue;
} else {
var temp__5804__auto___27087 = cljs.core.seq(seq__26248_27076);
if(temp__5804__auto___27087){
var seq__26248_27088__$1 = temp__5804__auto___27087;
if(cljs.core.chunked_seq_QMARK_(seq__26248_27088__$1)){
var c__5568__auto___27089 = cljs.core.chunk_first(seq__26248_27088__$1);
var G__27090 = cljs.core.chunk_rest(seq__26248_27088__$1);
var G__27091 = c__5568__auto___27089;
var G__27092 = cljs.core.count(c__5568__auto___27089);
var G__27093 = (0);
seq__26248_27076 = G__27090;
chunk__26249_27077 = G__27091;
count__26250_27078 = G__27092;
i__26251_27079 = G__27093;
continue;
} else {
var vec__26271_27094 = cljs.core.first(seq__26248_27088__$1);
var script_tag_27095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26271_27094,(0),null);
var script_body_27096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26271_27094,(1),null);
eval(script_body_27096);


var G__27097 = cljs.core.next(seq__26248_27088__$1);
var G__27098 = null;
var G__27099 = (0);
var G__27100 = (0);
seq__26248_27076 = G__27097;
chunk__26249_27077 = G__27098;
count__26250_27078 = G__27099;
i__26251_27079 = G__27100;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__26282){
var vec__26283 = p__26282;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26283,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26283,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__26321 = arguments.length;
switch (G__26321) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__26333 = cljs.core.seq(style_keys);
var chunk__26334 = null;
var count__26335 = (0);
var i__26336 = (0);
while(true){
if((i__26336 < count__26335)){
var it = chunk__26334.cljs$core$IIndexed$_nth$arity$2(null,i__26336);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__27102 = seq__26333;
var G__27103 = chunk__26334;
var G__27104 = count__26335;
var G__27105 = (i__26336 + (1));
seq__26333 = G__27102;
chunk__26334 = G__27103;
count__26335 = G__27104;
i__26336 = G__27105;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26333);
if(temp__5804__auto__){
var seq__26333__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26333__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__26333__$1);
var G__27106 = cljs.core.chunk_rest(seq__26333__$1);
var G__27107 = c__5568__auto__;
var G__27108 = cljs.core.count(c__5568__auto__);
var G__27109 = (0);
seq__26333 = G__27106;
chunk__26334 = G__27107;
count__26335 = G__27108;
i__26336 = G__27109;
continue;
} else {
var it = cljs.core.first(seq__26333__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__27110 = cljs.core.next(seq__26333__$1);
var G__27111 = null;
var G__27112 = (0);
var G__27113 = (0);
seq__26333 = G__27110;
chunk__26334 = G__27111;
count__26335 = G__27112;
i__26336 = G__27113;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k26385,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__26427 = k26385;
var G__26427__$1 = (((G__26427 instanceof cljs.core.Keyword))?G__26427.fqn:null);
switch (G__26427__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26385,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__26433){
var vec__26434 = p__26433;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26434,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26434,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26384){
var self__ = this;
var G__26384__$1 = this;
return (new cljs.core.RecordIter((0),G__26384__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26386,other26387){
var self__ = this;
var this26386__$1 = this;
return (((!((other26387 == null)))) && ((((this26386__$1.constructor === other26387.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26386__$1.x,other26387.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26386__$1.y,other26387.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26386__$1.__extmap,other26387.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k26385){
var self__ = this;
var this__5350__auto____$1 = this;
var G__26483 = k26385;
var G__26483__$1 = (((G__26483 instanceof cljs.core.Keyword))?G__26483.fqn:null);
switch (G__26483__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k26385);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__26384){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__26484 = cljs.core.keyword_identical_QMARK_;
var expr__26485 = k__5352__auto__;
if(cljs.core.truth_((pred__26484.cljs$core$IFn$_invoke$arity$2 ? pred__26484.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__26485) : pred__26484.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__26485)))){
return (new shadow.dom.Coordinate(G__26384,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26484.cljs$core$IFn$_invoke$arity$2 ? pred__26484.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__26485) : pred__26484.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__26485)))){
return (new shadow.dom.Coordinate(self__.x,G__26384,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__26384),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__26384){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__26384,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__26416){
var extmap__5385__auto__ = (function (){var G__26544 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26416,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__26416)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26544);
} else {
return G__26544;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__26416),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__26416),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k26555,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__26582 = k26555;
var G__26582__$1 = (((G__26582 instanceof cljs.core.Keyword))?G__26582.fqn:null);
switch (G__26582__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k26555,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__26604){
var vec__26605 = p__26604;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26605,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26605,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26554){
var self__ = this;
var G__26554__$1 = this;
return (new cljs.core.RecordIter((0),G__26554__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this26556,other26557){
var self__ = this;
var this26556__$1 = this;
return (((!((other26557 == null)))) && ((((this26556__$1.constructor === other26557.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26556__$1.w,other26557.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26556__$1.h,other26557.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this26556__$1.__extmap,other26557.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k26555){
var self__ = this;
var this__5350__auto____$1 = this;
var G__26637 = k26555;
var G__26637__$1 = (((G__26637 instanceof cljs.core.Keyword))?G__26637.fqn:null);
switch (G__26637__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k26555);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__26554){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__26638 = cljs.core.keyword_identical_QMARK_;
var expr__26639 = k__5352__auto__;
if(cljs.core.truth_((pred__26638.cljs$core$IFn$_invoke$arity$2 ? pred__26638.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__26639) : pred__26638.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__26639)))){
return (new shadow.dom.Size(G__26554,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__26638.cljs$core$IFn$_invoke$arity$2 ? pred__26638.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__26639) : pred__26638.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__26639)))){
return (new shadow.dom.Size(self__.w,G__26554,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__26554),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__26554){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__26554,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__26570){
var extmap__5385__auto__ = (function (){var G__26641 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__26570,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__26570)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__26641);
} else {
return G__26641;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__26570),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__26570),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__27134 = (i + (1));
var G__27135 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__27134;
ret = G__27135;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__26660){
var vec__26661 = p__26660;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26661,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26661,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__26665 = arguments.length;
switch (G__26665) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__27140 = ps;
var G__27141 = (i + (1));
el__$1 = G__27140;
i = G__27141;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__26677 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26677,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26677,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26677,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__26680_27147 = cljs.core.seq(props);
var chunk__26681_27148 = null;
var count__26682_27149 = (0);
var i__26683_27150 = (0);
while(true){
if((i__26683_27150 < count__26682_27149)){
var vec__26696_27151 = chunk__26681_27148.cljs$core$IIndexed$_nth$arity$2(null,i__26683_27150);
var k_27152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26696_27151,(0),null);
var v_27153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26696_27151,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_27152);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_27152),v_27153);


var G__27154 = seq__26680_27147;
var G__27155 = chunk__26681_27148;
var G__27156 = count__26682_27149;
var G__27157 = (i__26683_27150 + (1));
seq__26680_27147 = G__27154;
chunk__26681_27148 = G__27155;
count__26682_27149 = G__27156;
i__26683_27150 = G__27157;
continue;
} else {
var temp__5804__auto___27158 = cljs.core.seq(seq__26680_27147);
if(temp__5804__auto___27158){
var seq__26680_27159__$1 = temp__5804__auto___27158;
if(cljs.core.chunked_seq_QMARK_(seq__26680_27159__$1)){
var c__5568__auto___27160 = cljs.core.chunk_first(seq__26680_27159__$1);
var G__27161 = cljs.core.chunk_rest(seq__26680_27159__$1);
var G__27162 = c__5568__auto___27160;
var G__27163 = cljs.core.count(c__5568__auto___27160);
var G__27164 = (0);
seq__26680_27147 = G__27161;
chunk__26681_27148 = G__27162;
count__26682_27149 = G__27163;
i__26683_27150 = G__27164;
continue;
} else {
var vec__26701_27165 = cljs.core.first(seq__26680_27159__$1);
var k_27166 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26701_27165,(0),null);
var v_27167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26701_27165,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_27166);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_27166),v_27167);


var G__27168 = cljs.core.next(seq__26680_27159__$1);
var G__27169 = null;
var G__27170 = (0);
var G__27171 = (0);
seq__26680_27147 = G__27168;
chunk__26681_27148 = G__27169;
count__26682_27149 = G__27170;
i__26683_27150 = G__27171;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__26711 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26711,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26711,(1),null);
var seq__26714_27172 = cljs.core.seq(node_children);
var chunk__26716_27173 = null;
var count__26717_27174 = (0);
var i__26718_27175 = (0);
while(true){
if((i__26718_27175 < count__26717_27174)){
var child_struct_27176 = chunk__26716_27173.cljs$core$IIndexed$_nth$arity$2(null,i__26718_27175);
if((!((child_struct_27176 == null)))){
if(typeof child_struct_27176 === 'string'){
var text_27177 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_27177),child_struct_27176].join(''));
} else {
var children_27178 = shadow.dom.svg_node(child_struct_27176);
if(cljs.core.seq_QMARK_(children_27178)){
var seq__26748_27179 = cljs.core.seq(children_27178);
var chunk__26750_27180 = null;
var count__26751_27181 = (0);
var i__26752_27182 = (0);
while(true){
if((i__26752_27182 < count__26751_27181)){
var child_27183 = chunk__26750_27180.cljs$core$IIndexed$_nth$arity$2(null,i__26752_27182);
if(cljs.core.truth_(child_27183)){
node.appendChild(child_27183);


var G__27188 = seq__26748_27179;
var G__27189 = chunk__26750_27180;
var G__27190 = count__26751_27181;
var G__27191 = (i__26752_27182 + (1));
seq__26748_27179 = G__27188;
chunk__26750_27180 = G__27189;
count__26751_27181 = G__27190;
i__26752_27182 = G__27191;
continue;
} else {
var G__27192 = seq__26748_27179;
var G__27193 = chunk__26750_27180;
var G__27194 = count__26751_27181;
var G__27195 = (i__26752_27182 + (1));
seq__26748_27179 = G__27192;
chunk__26750_27180 = G__27193;
count__26751_27181 = G__27194;
i__26752_27182 = G__27195;
continue;
}
} else {
var temp__5804__auto___27196 = cljs.core.seq(seq__26748_27179);
if(temp__5804__auto___27196){
var seq__26748_27197__$1 = temp__5804__auto___27196;
if(cljs.core.chunked_seq_QMARK_(seq__26748_27197__$1)){
var c__5568__auto___27198 = cljs.core.chunk_first(seq__26748_27197__$1);
var G__27199 = cljs.core.chunk_rest(seq__26748_27197__$1);
var G__27200 = c__5568__auto___27198;
var G__27201 = cljs.core.count(c__5568__auto___27198);
var G__27202 = (0);
seq__26748_27179 = G__27199;
chunk__26750_27180 = G__27200;
count__26751_27181 = G__27201;
i__26752_27182 = G__27202;
continue;
} else {
var child_27203 = cljs.core.first(seq__26748_27197__$1);
if(cljs.core.truth_(child_27203)){
node.appendChild(child_27203);


var G__27204 = cljs.core.next(seq__26748_27197__$1);
var G__27205 = null;
var G__27206 = (0);
var G__27207 = (0);
seq__26748_27179 = G__27204;
chunk__26750_27180 = G__27205;
count__26751_27181 = G__27206;
i__26752_27182 = G__27207;
continue;
} else {
var G__27208 = cljs.core.next(seq__26748_27197__$1);
var G__27209 = null;
var G__27210 = (0);
var G__27211 = (0);
seq__26748_27179 = G__27208;
chunk__26750_27180 = G__27209;
count__26751_27181 = G__27210;
i__26752_27182 = G__27211;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_27178);
}
}


var G__27212 = seq__26714_27172;
var G__27213 = chunk__26716_27173;
var G__27214 = count__26717_27174;
var G__27215 = (i__26718_27175 + (1));
seq__26714_27172 = G__27212;
chunk__26716_27173 = G__27213;
count__26717_27174 = G__27214;
i__26718_27175 = G__27215;
continue;
} else {
var G__27216 = seq__26714_27172;
var G__27217 = chunk__26716_27173;
var G__27218 = count__26717_27174;
var G__27219 = (i__26718_27175 + (1));
seq__26714_27172 = G__27216;
chunk__26716_27173 = G__27217;
count__26717_27174 = G__27218;
i__26718_27175 = G__27219;
continue;
}
} else {
var temp__5804__auto___27220 = cljs.core.seq(seq__26714_27172);
if(temp__5804__auto___27220){
var seq__26714_27221__$1 = temp__5804__auto___27220;
if(cljs.core.chunked_seq_QMARK_(seq__26714_27221__$1)){
var c__5568__auto___27222 = cljs.core.chunk_first(seq__26714_27221__$1);
var G__27223 = cljs.core.chunk_rest(seq__26714_27221__$1);
var G__27224 = c__5568__auto___27222;
var G__27225 = cljs.core.count(c__5568__auto___27222);
var G__27226 = (0);
seq__26714_27172 = G__27223;
chunk__26716_27173 = G__27224;
count__26717_27174 = G__27225;
i__26718_27175 = G__27226;
continue;
} else {
var child_struct_27227 = cljs.core.first(seq__26714_27221__$1);
if((!((child_struct_27227 == null)))){
if(typeof child_struct_27227 === 'string'){
var text_27228 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_27228),child_struct_27227].join(''));
} else {
var children_27229 = shadow.dom.svg_node(child_struct_27227);
if(cljs.core.seq_QMARK_(children_27229)){
var seq__26757_27230 = cljs.core.seq(children_27229);
var chunk__26759_27231 = null;
var count__26760_27232 = (0);
var i__26761_27233 = (0);
while(true){
if((i__26761_27233 < count__26760_27232)){
var child_27234 = chunk__26759_27231.cljs$core$IIndexed$_nth$arity$2(null,i__26761_27233);
if(cljs.core.truth_(child_27234)){
node.appendChild(child_27234);


var G__27235 = seq__26757_27230;
var G__27236 = chunk__26759_27231;
var G__27237 = count__26760_27232;
var G__27238 = (i__26761_27233 + (1));
seq__26757_27230 = G__27235;
chunk__26759_27231 = G__27236;
count__26760_27232 = G__27237;
i__26761_27233 = G__27238;
continue;
} else {
var G__27239 = seq__26757_27230;
var G__27240 = chunk__26759_27231;
var G__27241 = count__26760_27232;
var G__27242 = (i__26761_27233 + (1));
seq__26757_27230 = G__27239;
chunk__26759_27231 = G__27240;
count__26760_27232 = G__27241;
i__26761_27233 = G__27242;
continue;
}
} else {
var temp__5804__auto___27243__$1 = cljs.core.seq(seq__26757_27230);
if(temp__5804__auto___27243__$1){
var seq__26757_27244__$1 = temp__5804__auto___27243__$1;
if(cljs.core.chunked_seq_QMARK_(seq__26757_27244__$1)){
var c__5568__auto___27245 = cljs.core.chunk_first(seq__26757_27244__$1);
var G__27246 = cljs.core.chunk_rest(seq__26757_27244__$1);
var G__27247 = c__5568__auto___27245;
var G__27248 = cljs.core.count(c__5568__auto___27245);
var G__27249 = (0);
seq__26757_27230 = G__27246;
chunk__26759_27231 = G__27247;
count__26760_27232 = G__27248;
i__26761_27233 = G__27249;
continue;
} else {
var child_27250 = cljs.core.first(seq__26757_27244__$1);
if(cljs.core.truth_(child_27250)){
node.appendChild(child_27250);


var G__27251 = cljs.core.next(seq__26757_27244__$1);
var G__27252 = null;
var G__27253 = (0);
var G__27254 = (0);
seq__26757_27230 = G__27251;
chunk__26759_27231 = G__27252;
count__26760_27232 = G__27253;
i__26761_27233 = G__27254;
continue;
} else {
var G__27255 = cljs.core.next(seq__26757_27244__$1);
var G__27256 = null;
var G__27257 = (0);
var G__27258 = (0);
seq__26757_27230 = G__27255;
chunk__26759_27231 = G__27256;
count__26760_27232 = G__27257;
i__26761_27233 = G__27258;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_27229);
}
}


var G__27259 = cljs.core.next(seq__26714_27221__$1);
var G__27260 = null;
var G__27261 = (0);
var G__27262 = (0);
seq__26714_27172 = G__27259;
chunk__26716_27173 = G__27260;
count__26717_27174 = G__27261;
i__26718_27175 = G__27262;
continue;
} else {
var G__27263 = cljs.core.next(seq__26714_27221__$1);
var G__27264 = null;
var G__27265 = (0);
var G__27266 = (0);
seq__26714_27172 = G__27263;
chunk__26716_27173 = G__27264;
count__26717_27174 = G__27265;
i__26718_27175 = G__27266;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27268 = arguments.length;
var i__5770__auto___27269 = (0);
while(true){
if((i__5770__auto___27269 < len__5769__auto___27268)){
args__5775__auto__.push((arguments[i__5770__auto___27269]));

var G__27271 = (i__5770__auto___27269 + (1));
i__5770__auto___27269 = G__27271;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq26771){
var G__26773 = cljs.core.first(seq26771);
var seq26771__$1 = cljs.core.next(seq26771);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26773,seq26771__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__26784 = arguments.length;
switch (G__26784) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__25726__auto___27277 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25727__auto__ = (function (){var switch__25703__auto__ = (function (state_26804){
var state_val_26807 = (state_26804[(1)]);
if((state_val_26807 === (1))){
var state_26804__$1 = state_26804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26804__$1,(2),once_or_cleanup);
} else {
if((state_val_26807 === (2))){
var inst_26799 = (state_26804[(2)]);
var inst_26800 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_26804__$1 = (function (){var statearr_26810 = state_26804;
(statearr_26810[(7)] = inst_26799);

return statearr_26810;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_26804__$1,inst_26800);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__25704__auto__ = null;
var shadow$dom$state_machine__25704__auto____0 = (function (){
var statearr_26815 = [null,null,null,null,null,null,null,null];
(statearr_26815[(0)] = shadow$dom$state_machine__25704__auto__);

(statearr_26815[(1)] = (1));

return statearr_26815;
});
var shadow$dom$state_machine__25704__auto____1 = (function (state_26804){
while(true){
var ret_value__25705__auto__ = (function (){try{while(true){
var result__25706__auto__ = switch__25703__auto__(state_26804);
if(cljs.core.keyword_identical_QMARK_(result__25706__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25706__auto__;
}
break;
}
}catch (e26816){var ex__25707__auto__ = e26816;
var statearr_26817_27281 = state_26804;
(statearr_26817_27281[(2)] = ex__25707__auto__);


if(cljs.core.seq((state_26804[(4)]))){
var statearr_26818_27282 = state_26804;
(statearr_26818_27282[(1)] = cljs.core.first((state_26804[(4)])));

} else {
throw ex__25707__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25705__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27283 = state_26804;
state_26804 = G__27283;
continue;
} else {
return ret_value__25705__auto__;
}
break;
}
});
shadow$dom$state_machine__25704__auto__ = function(state_26804){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__25704__auto____0.call(this);
case 1:
return shadow$dom$state_machine__25704__auto____1.call(this,state_26804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__25704__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__25704__auto____0;
shadow$dom$state_machine__25704__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__25704__auto____1;
return shadow$dom$state_machine__25704__auto__;
})()
})();
var state__25728__auto__ = (function (){var statearr_26819 = f__25727__auto__();
(statearr_26819[(6)] = c__25726__auto___27277);

return statearr_26819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25728__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
