goog.provide('day8.re_frame_10x.panels.event.views');
/**
 * Like re-seq but returns matches and indices
 */
day8.re_frame_10x.panels.event.views.re_seq_idx = (function day8$re_frame_10x$panels$event$views$re_seq_idx(var_args){
var G__39898 = arguments.length;
switch (G__39898) {
case 2:
return day8.re_frame_10x.panels.event.views.re_seq_idx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.panels.event.views.re_seq_idx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.panels.event.views.re_seq_idx.cljs$core$IFn$_invoke$arity$2 = (function (re,s){
return day8.re_frame_10x.panels.event.views.re_seq_idx.cljs$core$IFn$_invoke$arity$3(re,s,(0));
}));

(day8.re_frame_10x.panels.event.views.re_seq_idx.cljs$core$IFn$_invoke$arity$3 = (function (re,s,offset){
var temp__5808__auto__ = re.exec(s);
if((temp__5808__auto__ == null)){
return null;
} else {
var matches = temp__5808__auto__;
var match_str = (matches[(0)]);
var match_vals = (((matches.length === (1)))?match_str:cljs.core.vec(matches));
var match_index = matches.index;
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [match_vals,(offset + match_index)], null),(new cljs.core.LazySeq(null,(function (){
var post_idx = (matches.index + (function (){var x__5130__auto__ = (1);
var y__5131__auto__ = match_str.length;
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());
if((post_idx <= s.length)){
return day8.re_frame_10x.panels.event.views.re_seq_idx.cljs$core$IFn$_invoke$arity$3(re,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,post_idx),(offset + post_idx));
} else {
return null;
}
}),null,null)));
}
}));

(day8.re_frame_10x.panels.event.views.re_seq_idx.cljs$lang$maxFixedArity = 3);

/**
 * given a string argument `s` it will return a vector of two values:
 *   - a modified version of `s`, call it s'
 *   - a vector of indexes, v
 * s' will be a copy of s in which all consecutive whitespace is collapsed to one whitespace
 * v  will be a vector of index for characters in s' back to the original s
 * For example:
 *    (collapse-whitespace-and-index "a b  c")
 * will return
 *     ["a b c" [0 1 2 3 5]]     ;; notice that the 4 is not there
 * 
 */
day8.re_frame_10x.panels.event.views.collapse_whitespace_and_index = (function day8$re_frame_10x$panels$event$views$collapse_whitespace_and_index(s){
var s_SINGLEQUOTE_ = clojure.string.replace(s,/\s+/," ");
var v = (function (){var v = cljs.core.PersistentVector.EMPTY;
var i_s = (0);
var i_s_SINGLEQUOTE_ = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(((s_SINGLEQUOTE_).length),i_s_SINGLEQUOTE_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.count(s));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,i_s),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s_SINGLEQUOTE_,i_s_SINGLEQUOTE_))){
var G__40043 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,i_s);
var G__40044 = (i_s + (1));
var G__40045 = (i_s_SINGLEQUOTE_ + (1));
v = G__40043;
i_s = G__40044;
i_s_SINGLEQUOTE_ = G__40045;
continue;
} else {
var G__40046 = v;
var G__40047 = (i_s + (1));
var G__40048 = i_s_SINGLEQUOTE_;
v = G__40046;
i_s = G__40047;
i_s_SINGLEQUOTE_ = G__40048;
continue;

}
}
break;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_SINGLEQUOTE_,v], null);
});
/**
 * Try and find the bounds of the form we are searching for. Uses some heuristics to
 *   try and avoid matching partial forms, e.g. 'default-|weeks| for the form 'weeks.
 */
day8.re_frame_10x.panels.event.views.find_bounds = (function day8$re_frame_10x$panels$event$views$find_bounds(form_str,search_str,num_seen){
if((search_str == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
var vec__39914 = day8.re_frame_10x.panels.event.views.collapse_whitespace_and_index(form_str);
var form_str__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39914,(0),null);
var reindex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39914,(1),null);
var esc_str = goog.string.regExpEscape(search_str);
var regex = ["(\\s|\\(|\\[|\\{)","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(esc_str),")(\\s|\\)|\\]|\\})"].join('');
var re = cljs.core.re_pattern(regex);
var results = day8.re_frame_10x.panels.event.views.re_seq_idx.cljs$core$IFn$_invoke$arity$2(re,form_str__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = search_str;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = num_seen;
if(cljs.core.truth_(and__5043__auto____$1)){
return ((cljs.core.seq(results)) && ((cljs.core.count(results) >= num_seen)));
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(results,(num_seen - (1)));
var vec__39920 = result;
var vec__39923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39920,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39923,(0),null);
var pre_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39923,(1),null);
var matched_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39923,(2),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39920,(1),null);
var index__$1 = (index + cljs.core.count(pre_match));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reindex,index__$1);
var stop = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reindex,(index__$1 + cljs.core.count(matched_form)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,stop], null);
} else {
var start = (function (){var G__39926 = form_str__$1;
var G__39926__$1 = (((G__39926 == null))?null:clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([search_str], 0)),G__39926));
if((G__39926__$1 == null)){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reindex,G__39926__$1);
}
})();
var length = (((!((start == null))))?((cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([search_str], 0))).length):(1));
var end = (function (){var G__39931 = start;
var G__39931__$1 = (((G__39931 == null))?null:(length + G__39931));
if((G__39931__$1 == null)){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(reindex,G__39931__$1);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,end], null);
}
}
});
day8.re_frame_10x.panels.event.views.code_style_factory$ = (function day8$re_frame_10x$panels$event$views$code_style_factory$(style_name39932,params39933,ambiance,syntax_color_scheme,show_all_code_QMARK_){
var base_style39937 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),(cljs.core.truth_(show_all_code_QMARK_)?null:day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px(((10) * (17)))),new cljs.core.Keyword(null,"padding","padding",1660304693),day8.re_frame_10x.styles.gs_5,new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),day8.re_frame_10x.styles.gs_5], null)], null);
var key__17172__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(base_style39937)));
var name39936 = (function (){var fexpr__39938 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util/build-style-name",-749415777,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util",-1712623293,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"day8/re_frame_10x/inlined_deps/spade/git_sha_93ef290/util.cljc",23,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name.cljs$lang$test:null)]));
return (fexpr__39938.cljs$core$IFn$_invoke$arity$3 ? fexpr__39938.cljs$core$IFn$_invoke$arity$3(style_name39932,key__17172__auto__,params39933) : fexpr__39938.call(null,style_name39932,key__17172__auto__,params39933));
})();
var style39935 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name39936)].join('')], null),base_style39937);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css(style39935),new cljs.core.Keyword(null,"name","name",1843675177),name39936,new cljs.core.Keyword(null,"composes","composes",-378837833),day8.re_frame_10x.styles.hljs(ambiance,syntax_color_scheme)], null);
});

var factory_name39934_40053 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name(day8.re_frame_10x.panels.event.views.code_style_factory$);
day8.re_frame_10x.panels.event.views.code_style = (function day8$re_frame_10x$panels$event$views$code_style(ambiance,syntax_color_scheme,show_all_code_QMARK_){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name39934_40053,day8.re_frame_10x.panels.event.views.code_style_factory$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ambiance,syntax_color_scheme,show_all_code_QMARK_], null));
});
day8.re_frame_10x.panels.event.views.hljs_error_style_factory$ = (function day8$re_frame_10x$panels$event$views$hljs_error_style_factory$(style_name39949,params39950,ambiance,syntax_color_scheme){
var base_style39955 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.nord11,new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.nord4,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"3px",new cljs.core.Keyword(null,"padding","padding",1660304693),day8.re_frame_10x.styles.gs_12s,new cljs.core.Keyword(null,"margin-right","margin-right",809689658),day8.re_frame_10x.styles.gs_31s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0px"], null)], null)], null);
var key__17172__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(base_style39955)));
var name39954 = (function (){var fexpr__39957 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util/build-style-name",-749415777,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util",-1712623293,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"day8/re_frame_10x/inlined_deps/spade/git_sha_93ef290/util.cljc",23,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name.cljs$lang$test:null)]));
return (fexpr__39957.cljs$core$IFn$_invoke$arity$3 ? fexpr__39957.cljs$core$IFn$_invoke$arity$3(style_name39949,key__17172__auto__,params39950) : fexpr__39957.call(null,style_name39949,key__17172__auto__,params39950));
})();
var style39952 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name39954)].join('')], null),base_style39955);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css(style39952),new cljs.core.Keyword(null,"name","name",1843675177),name39954], null);
});

var factory_name39951_40066 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name(day8.re_frame_10x.panels.event.views.hljs_error_style_factory$);
day8.re_frame_10x.panels.event.views.hljs_error_style = (function day8$re_frame_10x$panels$event$views$hljs_error_style(ambiance,syntax_color_scheme){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name39951_40066,day8.re_frame_10x.panels.event.views.hljs_error_style_factory$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ambiance,syntax_color_scheme], null));
});
day8.re_frame_10x.panels.event.views.code = (function day8$re_frame_10x$panels$event$views$code(){
var scroll_pos = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null));
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"code",new cljs.core.Keyword(null,"get-snapshot-before-update","get-snapshot-before-update",1307878330),(function day8$re_frame_10x$panels$event$views$code_$_code_get_snapshot_before_update(this$,_,___$1){
var node = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.dom_node(this$);
return cljs.core.reset_BANG_(scroll_pos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),node.scrollTop,new cljs.core.Keyword(null,"left","left",-399115937),node.scrollLeft], null));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function day8$re_frame_10x$panels$event$views$code_$_code_component_did_update(this$){
var node = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.dom_node(this$);
(node.scrollTop = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scroll_pos)));

return (node.scrollLeft = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scroll_pos)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var ambiance = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
var syntax_color_scheme = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","syntax-color-scheme","day8.re-frame-10x.panels.settings.subs/syntax-color-scheme",-661033240)], null)));
var highlighted_form = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","highlighted-form","day8.re-frame-10x.panels.event.subs/highlighted-form",1402683478)], null)));
var form_str = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","zprint-form-for-epoch","day8.re-frame-10x.panels.event.subs/zprint-form-for-epoch",279472373)], null)));
var show_all_code_QMARK_ = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","show-all-code?","day8.re-frame-10x.panels.event.subs/show-all-code?",1829719373)], null)));
var vec__39960 = day8.re_frame_10x.panels.event.views.find_bounds(form_str,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(highlighted_form),new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431).cljs$core$IFn$_invoke$arity$1(highlighted_form));
var start_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39960,(0),null);
var end_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39960,(1),null);
var before = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(form_str,(0),start_index);
var highlight = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(form_str,start_index,end_index);
var after = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(form_str,end_index);
if(re_highlight.core.hljs_compatible_QMARK_()){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.panels.event.views.code_style(ambiance,syntax_color_scheme,show_all_code_QMARK_),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-double-click","on-double-click",1434856980),(function (event){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.events","set-show-all-code?","day8.re-frame-10x.panels.event.events/set-show-all-code?",-768255405),cljs.core.not(show_all_code_QMARK_)], null));

return null;
})], null),new cljs.core.Keyword(null,"child","child",623967545),(((!((highlighted_form == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_highlight.core.highlight,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"language","language",-1591107564),"clojure"], null),(new cljs.core.List(null,before,(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.code-listing--highlighted","span.code-listing--highlighted",-1247793188),highlight], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"hl"], null)),(new cljs.core.List(null,after,null,(1),null)),(2),null)),(3),null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_highlight.core.highlight,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"language","language",-1591107564),"clojure"], null),form_str], null))], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.panels.event.views.hljs_error_style(ambiance,syntax_color_scheme),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.p,"re-frame-10x found a version mismatch between the Highlight.js loaded and the one that it expects to use."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.p,"As a result, it can't display the source code for this function."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.p,"To fix this, please examine this application's dependency tree to see how an old version of Highlight.js is being pulled in (probably transitively) and perhaps then use an appropriate exclusion for that dependency."], null)], null)], null);
}
})], null));
});
day8.re_frame_10x.panels.event.views.clipboard_notification_style_factory$ = (function day8$re_frame_10x$panels$event$views$clipboard_notification_style_factory$(style_name39963,params39964,_){
var base_style39968 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.nord6,new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.styles.nord12,new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.styles.gs_5], null)], null),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"nowrap","nowrap",457264988),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"animation-duration","animation-duration",-1261077706),day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.ms((5000)),new cljs.core.Keyword(null,"animation-name","animation-name",-302195330),new cljs.core.Keyword(null,"fade-clipboard-msg-re-frame-10x","fade-clipboard-msg-re-frame-10x",1743865185)], null)], null);
var key__17172__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(base_style39968)));
var name39967 = (function (){var fexpr__39969 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util/build-style-name",-749415777,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util",-1712623293,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"day8/re_frame_10x/inlined_deps/spade/git_sha_93ef290/util.cljc",23,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name.cljs$lang$test:null)]));
return (fexpr__39969.cljs$core$IFn$_invoke$arity$3 ? fexpr__39969.cljs$core$IFn$_invoke$arity$3(style_name39963,key__17172__auto__,params39964) : fexpr__39969.call(null,style_name39963,key__17172__auto__,params39964));
})();
var style39966 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name39967)].join('')], null),base_style39968);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css(style39966),new cljs.core.Keyword(null,"name","name",1843675177),name39967], null);
});

var factory_name39965_40085 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name(day8.re_frame_10x.panels.event.views.clipboard_notification_style_factory$);
day8.re_frame_10x.panels.event.views.clipboard_notification_style = (function day8$re_frame_10x$panels$event$views$clipboard_notification_style(_){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name39965_40085,day8.re_frame_10x.panels.event.views.clipboard_notification_style_factory$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_], null));
});
day8.re_frame_10x.panels.event.views.clipboard_notification = (function day8$re_frame_10x$panels$event$views$clipboard_notification(){
var ambiance = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
var repl_msg_state = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","repl-msg-state","day8.re-frame-10x.panels.event.subs/repl-msg-state",1012951853)], null)));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-running","re-running",-97387070),null,new cljs.core.Keyword(null,"running","running",1554969103),null], null), null),repl_msg_state))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.panels.event.views.clipboard_notification_style(ambiance),new cljs.core.Keyword(null,"on-animation-end","on-animation-end",-1927132329),(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.events","repl-msg-state","day8.re-frame-10x.panels.event.events/repl-msg-state",728773015),new cljs.core.Keyword(null,"end","end",-268185958)], null));
})], null),"Clipboard now contains text for pasting into your REPL"], null);
} else {
return null;
}
});
day8.re_frame_10x.panels.event.views.copy_button_style_factory$ = (function day8$re_frame_10x$panels$event$views$copy_button_style_factory$(style_name39970,params39971,ambiance){
var base_style39975 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bright","bright",-1876684577),ambiance))?day8.re_frame_10x.styles.nord_ghost_white:day8.re_frame_10x.styles.nord1),new cljs.core.Keyword(null,"border-top","border-top",-158897573),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),new cljs.core.Keyword(null,"none","none",1333468478),new cljs.core.Keyword(null,"border-right","border-right",-668932860),new cljs.core.Keyword(null,"none","none",1333468478)], null)], null);
var key__17172__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(base_style39975)));
var name39974 = (function (){var fexpr__39976 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util/build-style-name",-749415777,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util",-1712623293,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"day8/re_frame_10x/inlined_deps/spade/git_sha_93ef290/util.cljc",23,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name.cljs$lang$test:null)]));
return (fexpr__39976.cljs$core$IFn$_invoke$arity$3 ? fexpr__39976.cljs$core$IFn$_invoke$arity$3(style_name39970,key__17172__auto__,params39971) : fexpr__39976.call(null,style_name39970,key__17172__auto__,params39971));
})();
var style39973 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name39974)].join('')], null),base_style39975);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css(style39973),new cljs.core.Keyword(null,"name","name",1843675177),name39974], null);
});

var factory_name39972_40096 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name(day8.re_frame_10x.panels.event.views.copy_button_style_factory$);
day8.re_frame_10x.panels.event.views.copy_button_style = (function day8$re_frame_10x$panels$event$views$copy_button_style(ambiance){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name39972_40096,day8.re_frame_10x.panels.event.views.copy_button_style_factory$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ambiance], null));
});
day8.re_frame_10x.panels.event.views.controls_style_factory$ = (function day8$re_frame_10x$panels$event$views$controls_style_factory$(style_name39977,params39978,_){
var base_style39982 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),day8.re_frame_10x.styles.gs_5], null)], null);
var key__17172__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(base_style39982)));
var name39981 = (function (){var fexpr__39983 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util/build-style-name",-749415777,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util",-1712623293,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"day8/re_frame_10x/inlined_deps/spade/git_sha_93ef290/util.cljc",23,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name.cljs$lang$test:null)]));
return (fexpr__39983.cljs$core$IFn$_invoke$arity$3 ? fexpr__39983.cljs$core$IFn$_invoke$arity$3(style_name39977,key__17172__auto__,params39978) : fexpr__39983.call(null,style_name39977,key__17172__auto__,params39978));
})();
var style39980 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name39981)].join('')], null),base_style39982);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css(style39980),new cljs.core.Keyword(null,"name","name",1843675177),name39981], null);
});

var factory_name39979_40100 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name(day8.re_frame_10x.panels.event.views.controls_style_factory$);
day8.re_frame_10x.panels.event.views.controls_style = (function day8$re_frame_10x$panels$event$views$controls_style(_){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name39979_40100,day8.re_frame_10x.panels.event.views.controls_style_factory$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_], null));
});
day8.re_frame_10x.panels.event.views.controls = (function day8$re_frame_10x$panels$event$views$controls(){
var ambiance = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
var execution_order_QMARK_ = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","execution-order?","day8.re-frame-10x.panels.event.subs/execution-order?",1536487585)], null)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.panels.event.views.controls_style(ambiance),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.inputs.checkbox,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"model","model",331153215),execution_order_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.events","set-execution-order","day8.re-frame-10x.panels.event.events/set-execution-order",1927582331),cljs.core.not(execution_order_QMARK_)], null));

return null;
}),new cljs.core.Keyword(null,"label","label",1718410804),"show trace in execution order"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"child","child",623967545),""], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.event.views.clipboard_notification], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"child","child",623967545),""], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.buttons.icon,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.content_copy], null),new cljs.core.Keyword(null,"label","label",1718410804),"requires",new cljs.core.Keyword(null,"title","title",636505583),"Copy to the clipboard, the require form to set things up for the \"repl\" links below",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
day8.re_frame_10x.fx.clipboard.copy_BANG_("(require '[day8.re-frame-10x])");

return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.events","repl-msg-state","day8.re-frame-10x.panels.event.events/repl-msg-state",728773015),new cljs.core.Keyword(null,"start","start",-355208981)], null));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.styles.gs_7s], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.hyperlinks.info,"https://github.com/day8/re-frame-10x/blob/master/docs/HyperlinkedInformation/UsingTheRepl.md"], null)], null)], null);
});
day8.re_frame_10x.panels.event.views.indent_block_style_factory$ = (function day8$re_frame_10x$panels$event$views$indent_block_style_factory$(style_name39984,params39985,ambiance,first_QMARK_){
var base_style39989 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-left","border-left",-1150760178),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),new cljs.core.Keyword(null,"solid","solid",-2023773691),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bright","bright",-1876684577),ambiance))?day8.re_frame_10x.styles.nord4:day8.re_frame_10x.styles.nord3)], null)], null),new cljs.core.Keyword(null,"border-top","border-top",-158897573),(cljs.core.truth_(first_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((1)),new cljs.core.Keyword(null,"solid","solid",-2023773691),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bright","bright",-1876684577),ambiance))?day8.re_frame_10x.styles.nord4:day8.re_frame_10x.styles.nord3)], null)], null):null)], null)], null);
var key__17172__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(base_style39989)));
var name39988 = (function (){var fexpr__39990 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util/build-style-name",-749415777,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util",-1712623293,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"day8/re_frame_10x/inlined_deps/spade/git_sha_93ef290/util.cljc",23,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name.cljs$lang$test:null)]));
return (fexpr__39990.cljs$core$IFn$_invoke$arity$3 ? fexpr__39990.cljs$core$IFn$_invoke$arity$3(style_name39984,key__17172__auto__,params39985) : fexpr__39990.call(null,style_name39984,key__17172__auto__,params39985));
})();
var style39987 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name39988)].join('')], null),base_style39989);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css(style39987),new cljs.core.Keyword(null,"name","name",1843675177),name39988,new cljs.core.Keyword(null,"composes","composes",-378837833),day8.re_frame_10x.styles.colors_2(ambiance)], null);
});

var factory_name39986_40120 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name(day8.re_frame_10x.panels.event.views.indent_block_style_factory$);
day8.re_frame_10x.panels.event.views.indent_block_style = (function day8$re_frame_10x$panels$event$views$indent_block_style(ambiance,first_QMARK_){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name39986_40120,day8.re_frame_10x.panels.event.views.indent_block_style_factory$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ambiance,first_QMARK_], null));
});
day8.re_frame_10x.panels.event.views.indent_block = (function day8$re_frame_10x$panels$event$views$indent_block(indent_level,first_QMARK_){
var ambiance = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,(function (){var iter__5523__auto__ = (function day8$re_frame_10x$panels$event$views$indent_block_$_iter__39991(s__39992){
return (new cljs.core.LazySeq(null,(function (){
var s__39992__$1 = s__39992;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__39992__$1);
if(temp__5804__auto__){
var s__39992__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39992__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__39992__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__39994 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__39993 = (0);
while(true){
if((i__39993 < size__5522__auto__)){
var _ = cljs.core._nth(c__5521__auto__,i__39993);
cljs.core.chunk_append(b__39994,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.styles.gs_12s,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.panels.event.views.indent_block_style(ambiance,first_QMARK_),new cljs.core.Keyword(null,"child","child",623967545),""], null));

var G__40125 = (i__39993 + (1));
i__39993 = G__40125;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39994),day8$re_frame_10x$panels$event$views$indent_block_$_iter__39991(cljs.core.chunk_rest(s__39992__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39994),null);
}
} else {
var _ = cljs.core.first(s__39992__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.styles.gs_12s,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.panels.event.views.indent_block_style(ambiance,first_QMARK_),new cljs.core.Keyword(null,"child","child",623967545),""], null),day8$re_frame_10x$panels$event$views$indent_block_$_iter__39991(cljs.core.rest(s__39992__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(indent_level));
})())], null);
});
day8.re_frame_10x.panels.event.views.fragment_header_style_factory$ = (function day8$re_frame_10x$panels$event$views$fragment_header_style_factory$(style_name39995,params39996,ambiance,first_QMARK_){
var base_style40000 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),day8.re_frame_10x.styles.gs_19,new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(cljs.core.truth_(first_QMARK_)?null:day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.units.px((-1)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".code",".code",1254796539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),day8.re_frame_10x.styles.gs_2,new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"nowrap","nowrap",457264988)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".result",".result",-1099494943),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.styles.nord10,new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),day8.re_frame_10x.styles.gs_7,new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"nowrap","nowrap",457264988),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bright","bright",-1876684577),ambiance))?day8.re_frame_10x.styles.nord6:day8.re_frame_10x.styles.nord2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".result",".result",-1099494943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"visible","visible",-1024216805)], null)], null)], null)], null);
var key__17172__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(base_style40000)));
var name39999 = (function (){var fexpr__40001 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util/build-style-name",-749415777,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util",-1712623293,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"day8/re_frame_10x/inlined_deps/spade/git_sha_93ef290/util.cljc",23,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name.cljs$lang$test:null)]));
return (fexpr__40001.cljs$core$IFn$_invoke$arity$3 ? fexpr__40001.cljs$core$IFn$_invoke$arity$3(style_name39995,key__17172__auto__,params39996) : fexpr__40001.call(null,style_name39995,key__17172__auto__,params39996));
})();
var style39998 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name39999)].join('')], null),base_style40000);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css(style39998),new cljs.core.Keyword(null,"name","name",1843675177),name39999,new cljs.core.Keyword(null,"composes","composes",-378837833),day8.re_frame_10x.styles.frame_1(ambiance)], null);
});

var factory_name39997_40136 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name(day8.re_frame_10x.panels.event.views.fragment_header_style_factory$);
day8.re_frame_10x.panels.event.views.fragment_header_style = (function day8$re_frame_10x$panels$event$views$fragment_header_style(ambiance,first_QMARK_){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name39997_40136,day8.re_frame_10x.panels.event.views.fragment_header_style_factory$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ambiance,first_QMARK_], null));
});
day8.re_frame_10x.panels.event.views.fragment_header = (function day8$re_frame_10x$panels$event$views$fragment_header(p__40002){
var map__40003 = p__40002;
var map__40003__$1 = cljs.core.__destructure_map(map__40003);
var frag = map__40003__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40003__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40003__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40003__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var ambiance = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
var trace_id = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","trace-id-for-epoch","day8.re-frame-10x.panels.event.subs/trace-id-for-epoch",728519790)], null)));
var open_QMARK__path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-epoch-id","day8.re-frame-10x.navigation.epochs.subs/selected-epoch-id",279200032)], null))),trace_id,id], null);
var max_column_width = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","max-column-width","day8.re-frame-10x.panels.event.subs/max-column-width",-1175866341)], null)));
var open_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-open?","day8.re-frame-10x.panels.event.subs/code-open?",1956666991)], null))),open_QMARK__path);
var line_str = day8.re_frame_10x.tools.pretty_print_condensed.pr_str_truncated.cljs$core$IFn$_invoke$arity$variadic(max_column_width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0));
var _EQ__GT_str = "=> ";
var result_length = ((max_column_width - ((_EQ__GT_str).length)) - cljs.core.count(line_str));
var first_QMARK_ = (id === (0));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.panels.event.views.fragment_header_style(ambiance,first_QMARK_),new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.events","set-code-visibility","day8.re-frame-10x.panels.event.events/set-code-visibility",-1896421952),open_QMARK__path,cljs.core.not(open_QMARK_)], null));

return null;
})], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.buttons.expansion,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),open_QMARK_,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.styles.gs_19s], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),"code",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),line_str], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),"result",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),_EQ__GT_str,(((result_length > (0)))?day8.re_frame_10x.tools.pretty_print_condensed.pr_str_truncated.cljs$core$IFn$_invoke$arity$variadic(result_length,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0)):null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.styles.gs_19s,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.buttons.icon,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.panels.event.views.copy_button_style(ambiance),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.content_copy,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"14px"], null)], null),new cljs.core.Keyword(null,"title","title",636505583),"Copy to the clipboard, an expression that will return this form's value in the cljs repl",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
day8.re_frame_10x.fx.clipboard.copy_BANG_(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("day8.re-frame-10x","traced-result","day8.re-frame-10x/traced-result",1860750250,null),(new cljs.core.List(null,trace_id,(new cljs.core.List(null,frag,null,(1),null)),(2),null)),(3),null))], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.events","repl-msg-state","day8.re-frame-10x.panels.event.events/repl-msg-state",728773015),new cljs.core.Keyword(null,"start","start",-355208981)], null));

return null;
})], null)], null)], null)], null)], null);
});
day8.re_frame_10x.panels.event.views.fragment_body_style_factory$ = (function day8$re_frame_10x$panels$event$views$fragment_body_style_factory$(style_name40004,params40005,ambiance,syntax_color_scheme){
var base_style40009 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"padding","padding",1660304693),day8.re_frame_10x.styles.gs_5], null)], null);
var key__17172__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(base_style40009)));
var name40008 = (function (){var fexpr__40010 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util/build-style-name",-749415777,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util",-1712623293,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"day8/re_frame_10x/inlined_deps/spade/git_sha_93ef290/util.cljc",23,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name.cljs$lang$test:null)]));
return (fexpr__40010.cljs$core$IFn$_invoke$arity$3 ? fexpr__40010.cljs$core$IFn$_invoke$arity$3(style_name40004,key__17172__auto__,params40005) : fexpr__40010.call(null,style_name40004,key__17172__auto__,params40005));
})();
var style40007 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name40008)].join('')], null),base_style40009);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css(style40007),new cljs.core.Keyword(null,"name","name",1843675177),name40008,new cljs.core.Keyword(null,"composes","composes",-378837833),day8.re_frame_10x.styles.code(ambiance,syntax_color_scheme)], null);
});

var factory_name40006_40163 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name(day8.re_frame_10x.panels.event.views.fragment_body_style_factory$);
day8.re_frame_10x.panels.event.views.fragment_body_style = (function day8$re_frame_10x$panels$event$views$fragment_body_style(ambiance,syntax_color_scheme){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name40006_40163,day8.re_frame_10x.panels.event.views.fragment_body_style_factory$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ambiance,syntax_color_scheme], null));
});
day8.re_frame_10x.panels.event.views.fragment_body = (function day8$re_frame_10x$panels$event$views$fragment_body(p__40011){
var map__40012 = p__40011;
var map__40012__$1 = cljs.core.__destructure_map(map__40012);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40012__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40012__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var ambiance = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
var syntax_color_scheme = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","syntax-color-scheme","day8.re-frame-10x.panels.settings.subs/syntax-color-scheme",-661033240)], null)));
var trace_id = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","trace-id-for-epoch","day8.re-frame-10x.panels.event.subs/trace-id-for-epoch",728519790)], null)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.panels.event.views.fragment_body_style(ambiance,syntax_color_scheme),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.cljs_devtools.simple_render,result,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-epoch-id","day8.re-frame-10x.navigation.epochs.subs/selected-epoch-id",279200032)], null))),trace_id,id], null)], null)], null);
});
day8.re_frame_10x.panels.event.views.fragment_style_factory$ = (function day8$re_frame_10x$panels$event$views$fragment_style_factory$(style_name40013,params40014,_){
var base_style40018 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null);
var key__17172__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(base_style40018)));
var name40017 = (function (){var fexpr__40019 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util/build-style-name",-749415777,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util",-1712623293,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"day8/re_frame_10x/inlined_deps/spade/git_sha_93ef290/util.cljc",23,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name.cljs$lang$test:null)]));
return (fexpr__40019.cljs$core$IFn$_invoke$arity$3 ? fexpr__40019.cljs$core$IFn$_invoke$arity$3(style_name40013,key__17172__auto__,params40014) : fexpr__40019.call(null,style_name40013,key__17172__auto__,params40014));
})();
var style40016 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name40017)].join('')], null),base_style40018);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css(style40016),new cljs.core.Keyword(null,"name","name",1843675177),name40017], null);
});

var factory_name40015_40174 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name(day8.re_frame_10x.panels.event.views.fragment_style_factory$);
day8.re_frame_10x.panels.event.views.fragment_style = (function day8$re_frame_10x$panels$event$views$fragment_style(_){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name40015_40174,day8.re_frame_10x.panels.event.views.fragment_style_factory$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_], null));
});
day8.re_frame_10x.panels.event.views.fragment = (function day8$re_frame_10x$panels$event$views$fragment(p__40020){
var map__40021 = p__40020;
var map__40021__$1 = cljs.core.__destructure_map(map__40021);
var frag = map__40021__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40021__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var indent_level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40021__$1,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684));
var ambiance = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
var code_open_QMARK_ = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-open?","day8.re-frame-10x.panels.event.subs/code-open?",1956666991)], null)));
var trace_id = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","trace-id-for-epoch","day8.re-frame-10x.panels.event.subs/trace-id-for-epoch",728519790)], null)));
var first_QMARK_ = (id === (0));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.panels.event.views.fragment_style(ambiance),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (event){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.events","hover-form","day8.re-frame-10x.panels.event.events/hover-form",-1402377056),frag], null));

return null;
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (event){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.events","exit-hover-form","day8.re-frame-10x.panels.event.events/exit-hover-form",-1201587279),frag], null));

return null;
})], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.event.views.indent_block,indent_level,first_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.event.views.fragment_header,frag], null)], null)], null),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(code_open_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-epoch-id","day8.re-frame-10x.navigation.epochs.subs/selected-epoch-id",279200032)], null))),trace_id,id], null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.event.views.indent_block,indent_level,false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.event.views.fragment_body,frag], null)], null)], null):null)], null)], null);
});
day8.re_frame_10x.panels.event.views.fragments_style_factory$ = (function day8$re_frame_10x$panels$event$views$fragments_style_factory$(style_name40022,params40023,_){
var base_style40027 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"margin-right","margin-right",809689658),day8.re_frame_10x.styles.gs_5], null)], null);
var key__17172__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(base_style40027)));
var name40026 = (function (){var fexpr__40028 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util/build-style-name",-749415777,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util","day8.re-frame-10x.inlined-deps.spade.git-sha-93ef290.util",-1712623293,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"day8/re_frame_10x/inlined_deps/spade/git_sha_93ef290/util.cljc",23,1,37,37,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.build_style_name.cljs$lang$test:null)]));
return (fexpr__40028.cljs$core$IFn$_invoke$arity$3 ? fexpr__40028.cljs$core$IFn$_invoke$arity$3(style_name40022,key__17172__auto__,params40023) : fexpr__40028.call(null,style_name40022,key__17172__auto__,params40023));
})();
var style40025 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name40026)].join('')], null),base_style40027);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.compile_css(style40025),new cljs.core.Keyword(null,"name","name",1843675177),name40026], null);
});

var factory_name40024_40188 = day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.util.factory__GT_name(day8.re_frame_10x.panels.event.views.fragments_style_factory$);
day8.re_frame_10x.panels.event.views.fragments_style = (function day8$re_frame_10x$panels$event$views$fragments_style(_){
return day8.re_frame_10x.inlined_deps.spade.git_sha_93ef290.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name40024_40188,day8.re_frame_10x.panels.event.views.fragments_style_factory$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_], null));
});
day8.re_frame_10x.panels.event.views.fragments = (function day8$re_frame_10x$panels$event$views$fragments(){
var ambiance = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
var fragments = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","fragments-for-epoch","day8.re-frame-10x.panels.event.subs/fragments-for-epoch",-10362729)], null)));
var max_fragments = (50);
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.panels.event.views.fragments_style(ambiance),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),(function (){var iter__5523__auto__ = (function day8$re_frame_10x$panels$event$views$fragments_$_iter__40029(s__40030){
return (new cljs.core.LazySeq(null,(function (){
var s__40030__$1 = s__40030;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__40030__$1);
if(temp__5804__auto__){
var s__40030__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__40030__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__40030__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__40032 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__40031 = (0);
while(true){
if((i__40031 < size__5522__auto__)){
var frag = cljs.core._nth(c__5521__auto__,i__40031);
cljs.core.chunk_append(b__40032,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.event.views.fragment,frag], null));

var G__40190 = (i__40031 + (1));
i__40031 = G__40190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__40032),day8$re_frame_10x$panels$event$views$fragments_$_iter__40029(cljs.core.chunk_rest(s__40030__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__40032),null);
}
} else {
var frag = cljs.core.first(s__40030__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.event.views.fragment,frag], null),day8$re_frame_10x$panels$event$views$fragments_$_iter__40029(cljs.core.rest(s__40030__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2(max_fragments,fragments));
})()),(((cljs.core.count(fragments) > max_fragments))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),["(only showing first ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_fragments)," of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(fragments))," traces)"].join('')], null):null)], null)], null);
});
day8.re_frame_10x.panels.event.views.instructions = (function day8$re_frame_10x$panels$event$views$instructions(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.p,"Code trace is not available for this event"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"Instructions for enabling Event Code Tracing",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer"], null),new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/day8/re-frame-10x/blob/master/docs/HyperlinkedInformation/EventCodeTracing.md"], null)], null)], null);
});
day8.re_frame_10x.panels.event.views.panel = (function day8$re_frame_10x$panels$event$views$panel(){
var epoch_id = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-epoch-id","day8.re-frame-10x.navigation.epochs.subs/selected-epoch-id",279200032)], null)));
var exists_QMARK_ = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-for-epoch-exists?","day8.re-frame-10x.panels.event.subs/code-for-epoch-exists?",929098522)], null)));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.styles.gs_19s,new cljs.core.Keyword(null,"children","children",-940561982),((cljs.core.not(exists_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.event.views.instructions], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.event.views.code], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.event.views.controls], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.panels.event.views.fragments], null)], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),epoch_id], null));
});

//# sourceMappingURL=day8.re_frame_10x.panels.event.views.js.map
