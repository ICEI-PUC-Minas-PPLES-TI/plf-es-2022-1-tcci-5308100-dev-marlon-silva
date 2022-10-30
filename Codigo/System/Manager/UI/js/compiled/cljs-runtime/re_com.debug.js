goog.provide('re_com.debug');
goog.scope(function(){
  re_com.debug.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Returns the interesting part of component-name
 */
re_com.debug.short_component_name = (function re_com$debug$short_component_name(component_name){
return clojure.string.replace(clojure.string.replace(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(component_name,/\./)),/_render/,""),/_/,"-");
});
/**
 * Return a version of args which is stripped of uninteresting values, suitable for logging.
 */
re_com.debug.loggable_args = (function re_com$debug$loggable_args(args){
if(cljs.core.map_QMARK_(args)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.Keyword(null,"debug-as","debug-as",283322354)], 0))));
} else {
return args;
}
});
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__40976){
var map__40977 = p__40976;
var map__40977__$1 = cljs.core.__destructure_map(map__40977);
var args = map__40977__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40977__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40977__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
if(cljs.core.not(re_com.config.debug_QMARK_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var rc_component = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component()));
}
})();
var rc_args = re_com.debug.loggable_args((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return args;
}
})());
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
re_com.debug.goog$module$goog$object.set(el,"__rc-args",rc_args);
} else {
}

var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ref","ref",1289896967)], null));
if(cljs.core.truth_(temp__5804__auto__)){
var user_ref_fn = temp__5804__auto__;
if(cljs.core.fn_QMARK_(user_ref_fn)){
return (user_ref_fn.cljs$core$IFn$_invoke$arity$1 ? user_ref_fn.cljs$core$IFn$_invoke$arity$1(el) : user_ref_fn.call(null,el));
} else {
return null;
}
} else {
return null;
}
});
var map__40978 = src;
var map__40978__$1 = cljs.core.__destructure_map(map__40978);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40978__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40978__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__40984 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn,new cljs.core.Keyword(null,"data-rc","data-rc",1949262543),rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40984,new cljs.core.Keyword(null,"data-rc-src","data-rc-src",-344701880),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__40984;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__40988 = arguments.length;
switch (G__40988) {
case 1:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1 = (function (el){
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,el);
}));

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2 = (function (stack,el){
if(cljs.core.not(el)){
return stack;
} else {
var component = el.dataset.rc;
var parent = el.parentElement;
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("stack-spy",component))?stack:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"src","src",-1651076051),el.dataset.rcSrc,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"args","args",1315556576),re_com.debug.goog$module$goog$object.get(el,"__rc-args")], null))),parent);
}
}));

(re_com.debug.component_stack.cljs$lang$maxFixedArity = 2);

re_com.debug.validate_args_problems_style = (function re_com$debug$validate_args_problems_style(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"32px",new cljs.core.Keyword(null,"min-height","min-height",398480837),"32px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.4em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#FF4136"], null);
});
re_com.debug.h1_style = "background: #FF4136; color: white; font-size: 1.4em; padding: 3px";
re_com.debug.h2_style = "background: #0074D9; color: white; padding: 0.25em";
re_com.debug.code_style = "font-family: monospace; font-weight: bold; background: #eee; color: #333; padding: 3px";
re_com.debug.error_style = "font-weight: bold";
re_com.debug.index_style = "font-weight: bold; font-size: 1.1em";
re_com.debug.collision_icon = "\uD83D\uDCA5";
re_com.debug.gear_icon = "\u2699\uFE0F";
re_com.debug.blue_book_icon = "\uD83D\uDCD8";
re_com.debug.confused_icon = "\uD83D\uDE15";
re_com.debug.globe_icon = "\uD83C\uDF10";
re_com.debug.log_component_stack = (function re_com$debug$log_component_stack(stack){
console.groupCollapsed("\u2022 %c Component stack (click me)",re_com.debug.h2_style);

var seq__40996_41104 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__40995_SHARP_,p2__40994_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__40994_SHARP_,new cljs.core.Keyword(null,"i","i",-1386841315),(p1__40995_SHARP_ + (1)));
}),stack));
var chunk__40997_41105 = null;
var count__40998_41106 = (0);
var i__40999_41107 = (0);
while(true){
if((i__40999_41107 < count__40998_41106)){
var map__41014_41111 = chunk__40997_41105.cljs$core$IIndexed$_nth$arity$2(null,i__40999_41107);
var map__41014_41112__$1 = cljs.core.__destructure_map(map__41014_41111);
var i_41113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41014_41112__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_41114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41014_41112__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_41115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41014_41112__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_41116 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41014_41112__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_41117 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41014_41112__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_41115)){
if(cljs.core.truth_(src_41116)){
var vec__41015_41119 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_41116,/:/);
var file_41120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41015_41119,(0),null);
var line_41121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41015_41119,(1),null);
if(cljs.core.truth_(args_41117)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_41113),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_41115)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_41120),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41121),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_41117,el_41114);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_41113),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_41115)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_41120),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41121),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_41114);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_41113),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_41115)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_41117,el_41114);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_41113),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_41114);
}


var G__41131 = seq__40996_41104;
var G__41132 = chunk__40997_41105;
var G__41133 = count__40998_41106;
var G__41134 = (i__40999_41107 + (1));
seq__40996_41104 = G__41131;
chunk__40997_41105 = G__41132;
count__40998_41106 = G__41133;
i__40999_41107 = G__41134;
continue;
} else {
var temp__5804__auto___41135 = cljs.core.seq(seq__40996_41104);
if(temp__5804__auto___41135){
var seq__40996_41136__$1 = temp__5804__auto___41135;
if(cljs.core.chunked_seq_QMARK_(seq__40996_41136__$1)){
var c__5568__auto___41137 = cljs.core.chunk_first(seq__40996_41136__$1);
var G__41138 = cljs.core.chunk_rest(seq__40996_41136__$1);
var G__41139 = c__5568__auto___41137;
var G__41140 = cljs.core.count(c__5568__auto___41137);
var G__41141 = (0);
seq__40996_41104 = G__41138;
chunk__40997_41105 = G__41139;
count__40998_41106 = G__41140;
i__40999_41107 = G__41141;
continue;
} else {
var map__41020_41142 = cljs.core.first(seq__40996_41136__$1);
var map__41020_41143__$1 = cljs.core.__destructure_map(map__41020_41142);
var i_41144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41020_41143__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_41145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41020_41143__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_41146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41020_41143__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_41147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41020_41143__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_41148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41020_41143__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_41146)){
if(cljs.core.truth_(src_41147)){
var vec__41021_41149 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_41147,/:/);
var file_41150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41021_41149,(0),null);
var line_41151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41021_41149,(1),null);
if(cljs.core.truth_(args_41148)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_41144),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_41146)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_41150),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41151),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_41148,el_41145);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_41144),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_41146)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_41150),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_41151),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_41145);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_41144),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_41146)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_41148,el_41145);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_41144),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_41145);
}


var G__41155 = cljs.core.next(seq__40996_41136__$1);
var G__41156 = null;
var G__41157 = (0);
var G__41158 = (0);
seq__40996_41104 = G__41155;
chunk__40997_41105 = G__41156;
count__40998_41106 = G__41157;
i__40999_41107 = G__41158;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
re_com.debug.log_validate_args_error_problems = (function re_com$debug$log_validate_args_error_problems(problems){
var seq__41027 = cljs.core.seq(problems);
var chunk__41028 = null;
var count__41029 = (0);
var i__41030 = (0);
while(true){
if((i__41030 < count__41029)){
var map__41039 = chunk__41028.cljs$core$IIndexed$_nth$arity$2(null,i__41030);
var map__41039__$1 = cljs.core.__destructure_map(map__41039);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41039__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41039__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41039__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41039__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41039__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__41040_41163 = problem;
var G__41040_41164__$1 = (((G__41040_41163 instanceof cljs.core.Keyword))?G__41040_41163.fqn:null);
switch (G__41040_41164__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__41170 = seq__41027;
var G__41171 = chunk__41028;
var G__41172 = count__41029;
var G__41173 = (i__41030 + (1));
seq__41027 = G__41170;
chunk__41028 = G__41171;
count__41029 = G__41172;
i__41030 = G__41173;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41027);
if(temp__5804__auto__){
var seq__41027__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41027__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41027__$1);
var G__41178 = cljs.core.chunk_rest(seq__41027__$1);
var G__41179 = c__5568__auto__;
var G__41180 = cljs.core.count(c__5568__auto__);
var G__41181 = (0);
seq__41027 = G__41178;
chunk__41028 = G__41179;
count__41029 = G__41180;
i__41030 = G__41181;
continue;
} else {
var map__41041 = cljs.core.first(seq__41027__$1);
var map__41041__$1 = cljs.core.__destructure_map(map__41041);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41041__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41041__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41041__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41041__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41041__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__41043_41183 = problem;
var G__41043_41184__$1 = (((G__41043_41183 instanceof cljs.core.Keyword))?G__41043_41183.fqn:null);
switch (G__41043_41184__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__41186 = cljs.core.next(seq__41027__$1);
var G__41187 = null;
var G__41188 = (0);
var G__41189 = (0);
seq__41027 = G__41186;
chunk__41028 = G__41187;
count__41029 = G__41188;
i__41030 = G__41189;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__41046){
var map__41047 = p__41046;
var map__41047__$1 = cljs.core.__destructure_map(map__41047);
var src = map__41047__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41047__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41047__$1,new cljs.core.Keyword(null,"line","line",212345235));
var source_url = (((!(cljs.core.empty_QMARK_(re_com.config.root_url_for_compiler_output))))?[re_com.config.root_url_for_compiler_output,cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):null);
console.group(["%c",re_com.debug.collision_icon," re-com validation error "].join(''),re_com.debug.h1_style);

if(cljs.core.truth_(src)){
if(cljs.core.truth_(source_url)){
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"%c see ",source_url].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"");
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Add %cre-com.config/root-url-for-compiler-output%c to your %c:closure-defines%c to enable clickable source urls"].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"");
}
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name(component_name)," ...]"].join(''),re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Learn how to add source coordinates to your components at https://re-com.day8.com.au/#/debug"].join(''));
}

re_com.debug.log_validate_args_error_problems(problems);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(element)));

return console.groupEnd();
});
re_com.debug.validate_args_error = (function re_com$debug$validate_args_error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41190 = arguments.length;
var i__5770__auto___41191 = (0);
while(true){
if((i__5770__auto___41191 < len__5769__auto___41190)){
args__5775__auto__.push((arguments[i__5770__auto___41191]));

var G__41192 = (i__5770__auto___41191 + (1));
i__5770__auto___41191 = G__41192;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__41049){
var map__41050 = p__41049;
var map__41050__$1 = cljs.core.__destructure_map(map__41050);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41050__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41050__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41050__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var internal_problems = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(problems);
var internal_component = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(component);
var internal_args = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(args);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"validate-args-error",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,argv,old_state,snapshot){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__41193__delegate = function (p__41055){
var map__41056 = p__41055;
var map__41056__$1 = cljs.core.__destructure_map(map__41056);
var problems__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41056__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41056__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41056__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_(internal_problems,problems__$1);

cljs.core.reset_BANG_(internal_component,component__$1);

cljs.core.reset_BANG_(internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args__$1),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"re-com validation error. Look in the DevTools console.",new cljs.core.Keyword(null,"style","style",-496642736),re_com.debug.validate_args_problems_style()], null)], 0)),re_com.debug.collision_icon], null);
};
var G__41193 = function (var_args){
var p__41055 = null;
if (arguments.length > 0) {
var G__41195__i = 0, G__41195__a = new Array(arguments.length -  0);
while (G__41195__i < G__41195__a.length) {G__41195__a[G__41195__i] = arguments[G__41195__i + 0]; ++G__41195__i;}
  p__41055 = new cljs.core.IndexedSeq(G__41195__a,0,null);
} 
return G__41193__delegate.call(this,p__41055);};
G__41193.cljs$lang$maxFixedArity = 0;
G__41193.cljs$lang$applyTo = (function (arglist__41196){
var p__41055 = cljs.core.seq(arglist__41196);
return G__41193__delegate(p__41055);
});
G__41193.cljs$core$IFn$_invoke$arity$variadic = G__41193__delegate;
return G__41193;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq41048){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41048));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__5775__auto__ = [];
var len__5769__auto___41197 = arguments.length;
var i__5770__auto___41198 = (0);
while(true){
if((i__5770__auto___41198 < len__5769__auto___41197)){
args__5775__auto__.push((arguments[i__5770__auto___41198]));

var G__41199 = (i__5770__auto___41198 + (1));
i__5770__auto___41198 = G__41199;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__41064){
var map__41065 = p__41064;
var map__41065__$1 = cljs.core.__destructure_map(map__41065);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41065__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41065__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var log_fn = (function (){
var el = cljs.core.deref(element);
if(cljs.core.truth_(el)){
var first_child = cljs.core.first(el.children);
console.group("%c[stack-spy ...]",re_com.debug.code_style);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(first_child));

return console.groupEnd();
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"stack-spy",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),log_fn,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),log_fn,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__41202__delegate = function (p__41066){
var map__41067 = p__41066;
var map__41067__$1 = cljs.core.__destructure_map(map__41067);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41067__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41067__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),component__$1], null);
};
var G__41202 = function (var_args){
var p__41066 = null;
if (arguments.length > 0) {
var G__41209__i = 0, G__41209__a = new Array(arguments.length -  0);
while (G__41209__i < G__41209__a.length) {G__41209__a[G__41209__i] = arguments[G__41209__i + 0]; ++G__41209__i;}
  p__41066 = new cljs.core.IndexedSeq(G__41209__a,0,null);
} 
return G__41202__delegate.call(this,p__41066);};
G__41202.cljs$lang$maxFixedArity = 0;
G__41202.cljs$lang$applyTo = (function (arglist__41210){
var p__41066 = cljs.core.seq(arglist__41210);
return G__41202__delegate(p__41066);
});
G__41202.cljs$core$IFn$_invoke$arity$variadic = G__41202__delegate;
return G__41202;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq41061){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41061));
}));


//# sourceMappingURL=re_com.debug.js.map
