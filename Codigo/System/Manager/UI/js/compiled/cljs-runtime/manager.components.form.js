goog.provide('manager.components.form');
manager.components.form.select_did_update = (function manager$components$form$select_did_update(p__27026,_,clicked_index){
var map__27028 = p__27026;
var map__27028__$1 = cljs.core.__destructure_map(map__27028);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27028__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27028__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27028__$1,new cljs.core.Keyword(null,"options","options",99638489));
var flatten_options = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,options)));
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flatten_options,(clicked_index - (1)));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-resource","update-resource",-543563474),path,cljs.core.assoc,field,element], null));
});
manager.components.form.select_did_update_rename = (function manager$components$form$select_did_update_rename(p__27031,_,clicked_index){
var map__27032 = p__27031;
var map__27032__$1 = cljs.core.__destructure_map(map__27032);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27032__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27032__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27032__$1,new cljs.core.Keyword(null,"options","options",99638489));
var flatten_options = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,options)));
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flatten_options,(clicked_index - (1)));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-resource","update-resource",-543563474),path,clojure.set.rename_keys,cljs.core.PersistentArrayMap.createAsIfByAssoc([field,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(element)])], null));
});
manager.components.form.select_did_update_conj = (function manager$components$form$select_did_update_conj(p__27036,_,clicked_index){
var map__27037 = p__27036;
var map__27037__$1 = cljs.core.__destructure_map(map__27037);
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27037__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var multiple = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27037__$1,new cljs.core.Keyword(null,"multiple","multiple",1244445549));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27037__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27037__$1,new cljs.core.Keyword(null,"options","options",99638489));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27037__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var flatten_options = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,options)));
var element = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(flatten_options,(cljs.core.truth_(multiple)?clicked_index:(clicked_index - (1))));
var new_value = ((cljs.core.not(multiple))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["list",null,"non-null",null], null), null),selected)),element):((cljs.core.contains_QMARK_(selected,element))?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(selected,element):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selected,element)
));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-resource","update-resource",-543563474),path,cljs.core.assoc,field,new_value], null));
});
manager.components.form.select_did_mount = (function manager$components$form$select_did_mount(p__27038,first_render_QMARK_,query_selector,node){
var map__27039 = p__27038;
var map__27039__$1 = cljs.core.__destructure_map(map__27039);
var props = map__27039__$1;
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27039__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27039__$1,new cljs.core.Keyword(null,"action","action",-811238024));
if(cljs.core.truth_(node)){
cljs.core.reset_BANG_(first_render_QMARK_,false);

jQuery(query_selector).selectpicker();

jQuery(query_selector).selectpicker("val",cljs.core.clj__GT_js(selected));

return jQuery(query_selector).on("changed.bs.select",cljs.core.partial.cljs$core$IFn$_invoke$arity$2((function (){var G__27040 = action;
var G__27040__$1 = (((G__27040 instanceof cljs.core.Keyword))?G__27040.fqn:null);
switch (G__27040__$1) {
case "conj":
return manager.components.form.select_did_update_conj;

break;
case "rename":
return manager.components.form.select_did_update_rename;

break;
default:
return manager.components.form.select_did_update;

}
})(),props));
} else {
return null;
}
});
manager.components.form.select = (function manager$components$form$select(p__27041){
var map__27042 = p__27041;
var map__27042__$1 = cljs.core.__destructure_map(map__27042);
var props = map__27042__$1;
var multiple = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27042__$1,new cljs.core.Keyword(null,"multiple","multiple",1244445549));
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27042__$1,new cljs.core.Keyword(null,"options","options",99638489));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27042__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var with_let27043 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let27043","with-let27043",484083996));
var temp__5808__auto___27119 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___27119 == null)){
} else {
var c__9393__auto___27120 = temp__5808__auto___27119;
if((with_let27043.generation === c__9393__auto___27120.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let27043.generation = c__9393__auto___27120.ratomGeneration);
}

var init27044 = (with_let27043.length === (0));
var id = ((((init27044) || (cljs.core.not(with_let27043.hasOwnProperty((0))))))?(with_let27043[(0)] = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())):(with_let27043[(0)]));
var first_render_QMARK_ = ((((init27044) || (cljs.core.not(with_let27043.hasOwnProperty((1))))))?(with_let27043[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true)):(with_let27043[(1)]));
var query_selector = ((((init27044) || (cljs.core.not(with_let27043.hasOwnProperty((2))))))?(with_let27043[(2)] = ["#",cljs.core.name(id)].join('')):(with_let27043[(2)]));
var res27045 = (function (){
if(cljs.core.truth_(first_render_QMARK_)){
} else {
jQuery(query_selector).selectpicker("val",cljs.core.clj__GT_js(selected));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select.selectpicker.form-control","select.selectpicker.form-control",-1789454239),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"data-selected-text-format","data-selected-text-format",-1432125631),new cljs.core.Keyword(null,"data-live-search","data-live-search",-181231710),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"data-container","data-container",1473653353),new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.Keyword(null,"data-width","data-width",1861936239),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"id","id",-1388402092)],["count > 2","true",cljs.core.partial.cljs$core$IFn$_invoke$arity$4(manager.components.form.select_did_mount,props,first_render_QMARK_,query_selector),"body",multiple,"100.35%","(nothing selected)",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(0),new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"absolute","absolute",1655386478)], null),id]),(function (){var iter__5523__auto__ = (function manager$components$form$select_$_iter__27046(s__27047){
return (new cljs.core.LazySeq(null,(function (){
var s__27047__$1 = s__27047;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27047__$1);
if(temp__5804__auto__){
var s__27047__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27047__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27047__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27049 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27048 = (0);
while(true){
if((i__27048 < size__5522__auto__)){
var vec__27050 = cljs.core._nth(c__5521__auto__,i__27048);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27050,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27050,(1),null);
cljs.core.chunk_append(b__27049,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),kind,new cljs.core.Keyword(null,"label","label",1718410804),clojure.string.capitalize(cljs.core.name(kind))], null),(function (){var iter__5523__auto__ = ((function (i__27048,vec__27050,kind,items,c__5521__auto__,size__5522__auto__,b__27049,s__27047__$2,temp__5804__auto__,init27044,id,first_render_QMARK_,query_selector,with_let27043,map__27042,map__27042__$1,props,multiple,options,selected){
return (function manager$components$form$select_$_iter__27046_$_iter__27053(s__27054){
return (new cljs.core.LazySeq(null,((function (i__27048,vec__27050,kind,items,c__5521__auto__,size__5522__auto__,b__27049,s__27047__$2,temp__5804__auto__,init27044,id,first_render_QMARK_,query_selector,with_let27043,map__27042,map__27042__$1,props,multiple,options,selected){
return (function (){
var s__27054__$1 = s__27054;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__27054__$1);
if(temp__5804__auto____$1){
var s__27054__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27054__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__27054__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__27056 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__27055 = (0);
while(true){
if((i__27055 < size__5522__auto____$1)){
var item = cljs.core._nth(c__5521__auto____$1,i__27055);
cljs.core.chunk_append(b__27056,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null),(function (){var or__5045__auto__ = item;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "(nothing selected)";
}
})()], null));

var G__27121 = (i__27055 + (1));
i__27055 = G__27121;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27056),manager$components$form$select_$_iter__27046_$_iter__27053(cljs.core.chunk_rest(s__27054__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27056),null);
}
} else {
var item = cljs.core.first(s__27054__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null),(function (){var or__5045__auto__ = item;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "(nothing selected)";
}
})()], null),manager$components$form$select_$_iter__27046_$_iter__27053(cljs.core.rest(s__27054__$2)));
}
} else {
return null;
}
break;
}
});})(i__27048,vec__27050,kind,items,c__5521__auto__,size__5522__auto__,b__27049,s__27047__$2,temp__5804__auto__,init27044,id,first_render_QMARK_,query_selector,with_let27043,map__27042,map__27042__$1,props,multiple,options,selected))
,null,null));
});})(i__27048,vec__27050,kind,items,c__5521__auto__,size__5522__auto__,b__27049,s__27047__$2,temp__5804__auto__,init27044,id,first_render_QMARK_,query_selector,with_let27043,map__27042,map__27042__$1,props,multiple,options,selected))
;
return iter__5523__auto__(items);
})()], null));

var G__27122 = (i__27048 + (1));
i__27048 = G__27122;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27049),manager$components$form$select_$_iter__27046(cljs.core.chunk_rest(s__27047__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27049),null);
}
} else {
var vec__27057 = cljs.core.first(s__27047__$2);
var kind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27057,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27057,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),kind,new cljs.core.Keyword(null,"label","label",1718410804),clojure.string.capitalize(cljs.core.name(kind))], null),(function (){var iter__5523__auto__ = ((function (vec__27057,kind,items,s__27047__$2,temp__5804__auto__,init27044,id,first_render_QMARK_,query_selector,with_let27043,map__27042,map__27042__$1,props,multiple,options,selected){
return (function manager$components$form$select_$_iter__27046_$_iter__27060(s__27061){
return (new cljs.core.LazySeq(null,(function (){
var s__27061__$1 = s__27061;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__27061__$1);
if(temp__5804__auto____$1){
var s__27061__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27061__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27061__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27063 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27062 = (0);
while(true){
if((i__27062 < size__5522__auto__)){
var item = cljs.core._nth(c__5521__auto__,i__27062);
cljs.core.chunk_append(b__27063,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null),(function (){var or__5045__auto__ = item;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "(nothing selected)";
}
})()], null));

var G__27123 = (i__27062 + (1));
i__27062 = G__27123;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27063),manager$components$form$select_$_iter__27046_$_iter__27060(cljs.core.chunk_rest(s__27061__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27063),null);
}
} else {
var item = cljs.core.first(s__27061__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null),(function (){var or__5045__auto__ = item;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "(nothing selected)";
}
})()], null),manager$components$form$select_$_iter__27046_$_iter__27060(cljs.core.rest(s__27061__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__27057,kind,items,s__27047__$2,temp__5804__auto__,init27044,id,first_render_QMARK_,query_selector,with_let27043,map__27042,map__27042__$1,props,multiple,options,selected))
;
return iter__5523__auto__(items);
})()], null),manager$components$form$select_$_iter__27046(cljs.core.rest(s__27047__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(options);
})()], null);
})()
;
return res27045;
});
manager.components.form.name_input = (function manager$components$form$name_input(kind){
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-resource","get-resource",-2146213108)], null))),new cljs.core.Keyword(null,"name","name",1843675177),"");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),"Name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968),new cljs.core.Keyword(null,"false","false",1277713805),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27064_SHARP_){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-resource","update-resource",-543563474),cljs.core.PersistentVector.EMPTY,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),manager.utils.filter_characteres(p1__27064_SHARP_.target.value)], null));
})], null)], null),(cljs.core.truth_(kind)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),kind], null):null)], null);
});
manager.components.form.subname_input = (function manager$components$form$subname_input(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27124 = arguments.length;
var i__5770__auto___27125 = (0);
while(true){
if((i__5770__auto___27125 < len__5769__auto___27124)){
args__5775__auto__.push((arguments[i__5770__auto___27125]));

var G__27126 = (i__5770__auto___27125 + (1));
i__5770__auto___27125 = G__27126;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return manager.components.form.subname_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(manager.components.form.subname_input.cljs$core$IFn$_invoke$arity$variadic = (function (value,path,children){
var with_let27069 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let27069","with-let27069",-1127933014));
var temp__5808__auto___27127 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___27127 == null)){
} else {
var c__9393__auto___27128 = temp__5808__auto___27127;
if((with_let27069.generation === c__9393__auto___27128.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let27069.generation = c__9393__auto___27128.ratomGeneration);
}

var init27070 = (with_let27069.length === (0));
var buffer = ((((init27070) || (cljs.core.not(with_let27069.hasOwnProperty((0))))))?(with_let27069[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.name(value))):(with_let27069[(0)]));
var res27071 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),"Name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968),new cljs.core.Keyword(null,"false","false",1277713805),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(buffer),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"name",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27065_SHARP_){
return cljs.core.reset_BANG_(buffer,manager.utils.filter_characteres(p1__27065_SHARP_.target.value));
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-resource","update-resource",-543563474),path,clojure.set.rename_keys,cljs.core.PersistentArrayMap.createAsIfByAssoc([value,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(buffer))])], null));
})], null)], null),children], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),value], null));
return res27071;
}));

(manager.components.form.subname_input.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(manager.components.form.subname_input.cljs$lang$applyTo = (function (seq27066){
var G__27067 = cljs.core.first(seq27066);
var seq27066__$1 = cljs.core.next(seq27066);
var G__27068 = cljs.core.first(seq27066__$1);
var seq27066__$2 = cljs.core.next(seq27066__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27067,G__27068,seq27066__$2);
}));

manager.components.form.text_input = (function manager$components$form$text_input(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27129 = arguments.length;
var i__5770__auto___27130 = (0);
while(true){
if((i__5770__auto___27130 < len__5769__auto___27129)){
args__5775__auto__.push((arguments[i__5770__auto___27130]));

var G__27131 = (i__5770__auto___27130 + (1));
i__5770__auto___27130 = G__27131;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return manager.components.form.text_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(manager.components.form.text_input.cljs$core$IFn$_invoke$arity$variadic = (function (field,label,path,children){
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-resource","get-resource",-2146213108)], null))),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,field),"");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968),new cljs.core.Keyword(null,"false","false",1277713805),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),cljs.core.name(field),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27072_SHARP_){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-resource","update-resource",-543563474),path,cljs.core.assoc,field,p1__27072_SHARP_.target.value], null));
})], null)], null),children], null);
}));

(manager.components.form.text_input.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(manager.components.form.text_input.cljs$lang$applyTo = (function (seq27073){
var G__27074 = cljs.core.first(seq27073);
var seq27073__$1 = cljs.core.next(seq27073);
var G__27075 = cljs.core.first(seq27073__$1);
var seq27073__$2 = cljs.core.next(seq27073__$1);
var G__27076 = cljs.core.first(seq27073__$2);
var seq27073__$3 = cljs.core.next(seq27073__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27074,G__27075,G__27076,seq27073__$3);
}));

manager.components.form.multi_select_input = (function manager$components$form$multi_select_input(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27132 = arguments.length;
var i__5770__auto___27133 = (0);
while(true){
if((i__5770__auto___27133 < len__5769__auto___27132)){
args__5775__auto__.push((arguments[i__5770__auto___27133]));

var G__27134 = (i__5770__auto___27133 + (1));
i__5770__auto___27133 = G__27134;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return manager.components.form.multi_select_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(manager.components.form.multi_select_input.cljs$core$IFn$_invoke$arity$variadic = (function (field,label,kinds,path,children){
var options = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-names","get-names",-2077128247),kinds], null)));
var selected = cljs.core.set(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-resource","get-resource",-2146213108)], null))),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,field),cljs.core.PersistentVector.EMPTY));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.components.form.select,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"conj","conj",1527141827),new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)], null),children], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),field], null));
}));

(manager.components.form.multi_select_input.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(manager.components.form.multi_select_input.cljs$lang$applyTo = (function (seq27077){
var G__27078 = cljs.core.first(seq27077);
var seq27077__$1 = cljs.core.next(seq27077);
var G__27079 = cljs.core.first(seq27077__$1);
var seq27077__$2 = cljs.core.next(seq27077__$1);
var G__27080 = cljs.core.first(seq27077__$2);
var seq27077__$3 = cljs.core.next(seq27077__$2);
var G__27081 = cljs.core.first(seq27077__$3);
var seq27077__$4 = cljs.core.next(seq27077__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27078,G__27079,G__27080,G__27081,seq27077__$4);
}));

manager.components.form.composite_select_input = (function manager$components$form$composite_select_input(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27139 = arguments.length;
var i__5770__auto___27140 = (0);
while(true){
if((i__5770__auto___27140 < len__5769__auto___27139)){
args__5775__auto__.push((arguments[i__5770__auto___27140]));

var G__27141 = (i__5770__auto___27140 + (1));
i__5770__auto___27140 = G__27141;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return manager.components.form.composite_select_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(manager.components.form.composite_select_input.cljs$core$IFn$_invoke$arity$variadic = (function (field,label,kinds,path,children){
var options = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-names","get-names",-2077128247),kinds], null)));
var selected = cljs.core.set(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-resource","get-resource",-2146213108)], null))),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,field),cljs.core.PersistentVector.EMPTY));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.components.form.select,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"multiple","multiple",1244445549),false,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"conj","conj",1527141827),new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)], null),children], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),field], null));
}));

(manager.components.form.composite_select_input.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(manager.components.form.composite_select_input.cljs$lang$applyTo = (function (seq27082){
var G__27083 = cljs.core.first(seq27082);
var seq27082__$1 = cljs.core.next(seq27082);
var G__27084 = cljs.core.first(seq27082__$1);
var seq27082__$2 = cljs.core.next(seq27082__$1);
var G__27085 = cljs.core.first(seq27082__$2);
var seq27082__$3 = cljs.core.next(seq27082__$2);
var G__27086 = cljs.core.first(seq27082__$3);
var seq27082__$4 = cljs.core.next(seq27082__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27083,G__27084,G__27085,G__27086,seq27082__$4);
}));

manager.components.form.single_select_input = (function manager$components$form$single_select_input(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27142 = arguments.length;
var i__5770__auto___27143 = (0);
while(true){
if((i__5770__auto___27143 < len__5769__auto___27142)){
args__5775__auto__.push((arguments[i__5770__auto___27143]));

var G__27144 = (i__5770__auto___27143 + (1));
i__5770__auto___27143 = G__27144;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return manager.components.form.single_select_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(manager.components.form.single_select_input.cljs$core$IFn$_invoke$arity$variadic = (function (field,label,kinds,path,children){
var options = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-names","get-names",-2077128247),kinds], null)));
var selected = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-resource","get-resource",-2146213108)], null))),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,field));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.components.form.select,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"multiple","multiple",1244445549),false,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"selected","selected",574897764),selected], null)], null),children], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),field], null));
}));

(manager.components.form.single_select_input.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(manager.components.form.single_select_input.cljs$lang$applyTo = (function (seq27087){
var G__27088 = cljs.core.first(seq27087);
var seq27087__$1 = cljs.core.next(seq27087);
var G__27089 = cljs.core.first(seq27087__$1);
var seq27087__$2 = cljs.core.next(seq27087__$1);
var G__27090 = cljs.core.first(seq27087__$2);
var seq27087__$3 = cljs.core.next(seq27087__$2);
var G__27091 = cljs.core.first(seq27087__$3);
var seq27087__$4 = cljs.core.next(seq27087__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27088,G__27089,G__27090,G__27091,seq27087__$4);
}));

manager.components.form.subname_select_input = (function manager$components$form$subname_select_input(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27145 = arguments.length;
var i__5770__auto___27146 = (0);
while(true){
if((i__5770__auto___27146 < len__5769__auto___27145)){
args__5775__auto__.push((arguments[i__5770__auto___27146]));

var G__27147 = (i__5770__auto___27146 + (1));
i__5770__auto___27146 = G__27147;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return manager.components.form.subname_select_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(manager.components.form.subname_select_input.cljs$core$IFn$_invoke$arity$variadic = (function (field,label,kinds,path,children){
var options = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-names","get-names",-2077128247),kinds], null)));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.components.form.select,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"field","field",-1302436500),field,new cljs.core.Keyword(null,"multiple","multiple",1244445549),false,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"rename","rename",1508157613),new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"options","options",99638489),options,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.name(field)], null)], null),children], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),field], null));
}));

(manager.components.form.subname_select_input.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(manager.components.form.subname_select_input.cljs$lang$applyTo = (function (seq27092){
var G__27093 = cljs.core.first(seq27092);
var seq27092__$1 = cljs.core.next(seq27092);
var G__27094 = cljs.core.first(seq27092__$1);
var seq27092__$2 = cljs.core.next(seq27092__$1);
var G__27095 = cljs.core.first(seq27092__$2);
var seq27092__$3 = cljs.core.next(seq27092__$2);
var G__27096 = cljs.core.first(seq27092__$3);
var seq27092__$4 = cljs.core.next(seq27092__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27093,G__27094,G__27095,G__27096,seq27092__$4);
}));

manager.components.form.checkbox = (function manager$components$form$checkbox(field,label,item,path){
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-resource","get-resource",-2146213108)], null))),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,field),cljs.core.PersistentHashSet.EMPTY);
var checked_QMARK_ = cljs.core.contains_QMARK_(value,item);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"around","around",-265975553),new cljs.core.Keyword(null,"gap","gap",80255254),"0.5em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-resource","update-resource",-543563474),path,cljs.core.assoc,field,(function (){var fexpr__27097 = ((checked_QMARK_)?cljs.core.disj:cljs.core.conj);
return (fexpr__27097.cljs$core$IFn$_invoke$arity$2 ? fexpr__27097.cljs$core$IFn$_invoke$arity$2(value,item) : fexpr__27097.call(null,value,item));
})()], null));
})], null)], null)], null)], null)], null);
});
manager.components.form.text_input_with_toggle = (function manager$components$form$text_input_with_toggle(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27148 = arguments.length;
var i__5770__auto___27149 = (0);
while(true){
if((i__5770__auto___27149 < len__5769__auto___27148)){
args__5775__auto__.push((arguments[i__5770__auto___27149]));

var G__27150 = (i__5770__auto___27149 + (1));
i__5770__auto___27149 = G__27150;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((4) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((4)),(0),null)):null);
return manager.components.form.text_input_with_toggle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5776__auto__);
});

(manager.components.form.text_input_with_toggle.cljs$core$IFn$_invoke$arity$variadic = (function (field,label,toggle,path,children){
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-resource","get-resource",-2146213108)], null))),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,field),"");
var blank_value_QMARK_ = clojure.string.blank_QMARK_(value);
var toggle_checked_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-resource","get-resource",-2146213108)], null))),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,toggle));
var checked_QMARK_ = (function (){var or__5045__auto__ = toggle_checked_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (!(blank_value_QMARK_));
}
})();
if(cljs.core.truth_((function (){var and__5043__auto__ = toggle_checked_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return blank_value_QMARK_;
} else {
return and__5043__auto__;
}
})())){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-resource","update-resource",-543563474),path,cljs.core.assoc,field,"Please, do not use it anymore."], null));
} else {
if(cljs.core.every_QMARK_(cljs.core.false_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [toggle_checked_QMARK_,blank_value_QMARK_], null))){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-resource","update-resource",-543563474),path,cljs.core.dissoc,field], null));
} else {
}
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"around","around",-265975553),new cljs.core.Keyword(null,"gap","gap",80255254),"0.5em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-resource","update-resource",-543563474),path,cljs.core.assoc,toggle,cljs.core.not(checked_QMARK_)], null));
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968),new cljs.core.Keyword(null,"false","false",1277713805),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(checked_QMARK_),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"reason",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27098_SHARP_){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-resource","update-resource",-543563474),path,cljs.core.assoc,field,p1__27098_SHARP_.target.value], null));
})], null)], null),children], null);
}));

(manager.components.form.text_input_with_toggle.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(manager.components.form.text_input_with_toggle.cljs$lang$applyTo = (function (seq27099){
var G__27100 = cljs.core.first(seq27099);
var seq27099__$1 = cljs.core.next(seq27099);
var G__27101 = cljs.core.first(seq27099__$1);
var seq27099__$2 = cljs.core.next(seq27099__$1);
var G__27102 = cljs.core.first(seq27099__$2);
var seq27099__$3 = cljs.core.next(seq27099__$2);
var G__27103 = cljs.core.first(seq27099__$3);
var seq27099__$4 = cljs.core.next(seq27099__$3);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27100,G__27101,G__27102,G__27103,seq27099__$4);
}));

manager.components.form.button = (function manager$components$form$button(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27151 = arguments.length;
var i__5770__auto___27152 = (0);
while(true){
if((i__5770__auto___27152 < len__5769__auto___27151)){
args__5775__auto__.push((arguments[i__5770__auto___27152]));

var G__27153 = (i__5770__auto___27152 + (1));
i__5770__auto___27152 = G__27153;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return manager.components.form.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(manager.components.form.button.cljs$core$IFn$_invoke$arity$variadic = (function (p__27107,event,args){
var map__27108 = p__27107;
var map__27108__$1 = cljs.core.__destructure_map(map__27108);
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27108__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27108__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27108__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var reload_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27108__$1,new cljs.core.Keyword(null,"reload?","reload?",-1559406964));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn","button.btn",-661984613),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["btn-",cljs.core.name(style)].join(''),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,event,args));

if(cljs.core.truth_(reload_QMARK_)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-resources","reload-resources",827018663)], null));
} else {
return null;
}
})], null),label], null);
}));

(manager.components.form.button.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(manager.components.form.button.cljs$lang$applyTo = (function (seq27104){
var G__27105 = cljs.core.first(seq27104);
var seq27104__$1 = cljs.core.next(seq27104);
var G__27106 = cljs.core.first(seq27104__$1);
var seq27104__$2 = cljs.core.next(seq27104__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27105,G__27106,seq27104__$2);
}));

manager.components.form.alert = (function manager$components$form$alert(){
var map__27109 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-result","get-result",-1453831924)], null)));
var map__27109__$1 = cljs.core.__destructure_map(map__27109);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27109__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27109__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27109__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
if(cljs.core.truth_(type)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alert.alert-dismissible","div.alert.alert-dismissible",-1191842267),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),"alert",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"error","error",-978969032)))?"alert-danger":"alert-success"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 27px 5px 10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Close",new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-result","delete-result",-83682677)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),"\u00D7"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return status_text;
}
})()], null)], null);
} else {
return null;
}
});
manager.components.form.row = (function manager$components$form$row(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27154 = arguments.length;
var i__5770__auto___27155 = (0);
while(true){
if((i__5770__auto___27155 < len__5769__auto___27154)){
args__5775__auto__.push((arguments[i__5770__auto___27155]));

var G__27156 = (i__5770__auto___27155 + (1));
i__5770__auto___27155 = G__27156;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return manager.components.form.row.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(manager.components.form.row.cljs$core$IFn$_invoke$arity$variadic = (function (position,children){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"manager/components/form.cljs",new cljs.core.Keyword(null,"line","line",212345235),230], null)),new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"padding","padding",1660304693),(function (){var G__27112 = position;
var G__27112__$1 = (((G__27112 instanceof cljs.core.Keyword))?G__27112.fqn:null);
switch (G__27112__$1) {
case "top":
return "0 0 3.5vh 0";

break;
case "middle":
return "1vh 0 1.5vh 0";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27112__$1)].join('')));

}
})(),new cljs.core.Keyword(null,"children","children",-940561982),children], null);
}));

(manager.components.form.row.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(manager.components.form.row.cljs$lang$applyTo = (function (seq27110){
var G__27111 = cljs.core.first(seq27110);
var seq27110__$1 = cljs.core.next(seq27110);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27111,seq27110__$1);
}));

manager.components.form.scaffold = (function manager$components$form$scaffold(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27158 = arguments.length;
var i__5770__auto___27159 = (0);
while(true){
if((i__5770__auto___27159 < len__5769__auto___27158)){
args__5775__auto__.push((arguments[i__5770__auto___27159]));

var G__27160 = (i__5770__auto___27159 + (1));
i__5770__auto___27159 = G__27160;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return manager.components.form.scaffold.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(manager.components.form.scaffold.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"manager/components/form.cljs",new cljs.core.Keyword(null,"line","line",212345235),239], null)),new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"25%",new cljs.core.Keyword(null,"children","children",-940561982),children], null);
}));

(manager.components.form.scaffold.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(manager.components.form.scaffold.cljs$lang$applyTo = (function (seq27113){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27113));
}));

manager.components.form.inputs = (function manager$components$form$inputs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27161 = arguments.length;
var i__5770__auto___27162 = (0);
while(true){
if((i__5770__auto___27162 < len__5769__auto___27161)){
args__5775__auto__.push((arguments[i__5770__auto___27162]));

var G__27163 = (i__5770__auto___27162 + (1));
i__5770__auto___27162 = G__27163;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return manager.components.form.inputs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(manager.components.form.inputs.cljs$core$IFn$_invoke$arity$variadic = (function (gap,children){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),(function (){var or__5045__auto__ = gap;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "0.4vh";
}
})(),new cljs.core.Keyword(null,"children","children",-940561982),children], null);
}));

(manager.components.form.inputs.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(manager.components.form.inputs.cljs$lang$applyTo = (function (seq27114){
var G__27115 = cljs.core.first(seq27114);
var seq27114__$1 = cljs.core.next(seq27114);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27115,seq27114__$1);
}));

manager.components.form.subform = (function manager$components$form$subform(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27164 = arguments.length;
var i__5770__auto___27165 = (0);
while(true){
if((i__5770__auto___27165 < len__5769__auto___27164)){
args__5775__auto__.push((arguments[i__5770__auto___27165]));

var G__27166 = (i__5770__auto___27165 + (1));
i__5770__auto___27165 = G__27166;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return manager.components.form.subform.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(manager.components.form.subform.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"manager/components/form.cljs",new cljs.core.Keyword(null,"line","line",212345235),250], null)),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"0.1vh 0.2em",new cljs.core.Keyword(null,"gap","gap",80255254),"0.35vh",new cljs.core.Keyword(null,"children","children",-940561982),children], null);
}));

(manager.components.form.subform.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(manager.components.form.subform.cljs$lang$applyTo = (function (seq27116){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27116));
}));

manager.components.form.subform_list = (function manager$components$form$subform_list(size,items){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"manager/components/form.cljs",new cljs.core.Keyword(null,"line","line",212345235),257], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"2.5vh",new cljs.core.Keyword(null,"max-height","max-height",-612563804),(function (){var G__27117 = size;
var G__27117__$1 = (((G__27117 instanceof cljs.core.Keyword))?G__27117.fqn:null);
switch (G__27117__$1) {
case "sm":
return "35.3vh";

break;
case "md":
return "40.3vh";

break;
case "lg":
return "45.3vh";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27117__$1)].join('')));

}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"auto","auto",-566279492)], null),new cljs.core.Keyword(null,"children","children",-940561982),(function (){var or__5045__auto__ = cljs.core.not_empty(items);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.components.list.empty_list_alert], null)], null);
}
})()], null);
});
manager.components.form.header = (function manager$components$form$header(){
var old_resource_QMARK_ = new cljs.core.Keyword(null,"old-name","old-name",1289683869).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-resource","get-resource",-2146213108)], null))));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.components.form.row,new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.components.form.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"label","label",1718410804),"Create New"], null),new cljs.core.Keyword(null,"new-resource","new-resource",1705441095)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.components.form.alert], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.components.form.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"label","label",1718410804),"Delete",new cljs.core.Keyword(null,"reload?","reload?",-1559406964),true,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.not(old_resource_QMARK_)], null),new cljs.core.Keyword(null,"delete-resource","delete-resource",804001097)], null)], null);
});
manager.components.form.footer = (function manager$components$form$footer(){
var valid_resource_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"check-resource","check-resource",1098791556)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"margin","margin",-995903681),"2vh 0 0 0",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.components.form.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"label","label",1718410804),"Save",new cljs.core.Keyword(null,"reload?","reload?",-1559406964),true,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.not(valid_resource_QMARK_)], null),new cljs.core.Keyword(null,"save-resource","save-resource",715614660)], null)], null);
});
manager.components.form.root = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null);

//# sourceMappingURL=manager.components.form.js.map
