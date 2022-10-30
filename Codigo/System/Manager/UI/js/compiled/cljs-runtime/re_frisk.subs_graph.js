goog.provide('re_frisk.subs_graph');
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.network !== 'undefined')){
} else {
re_frisk.subs_graph.network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.reaction__GT_operation !== 'undefined')){
} else {
re_frisk.subs_graph.reaction__GT_operation = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.view__GT_reactions !== 'undefined')){
} else {
re_frisk.subs_graph.view__GT_reactions = re_frisk.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.vis !== 'undefined')){
} else {
re_frisk.subs_graph.vis = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.doc !== 'undefined')){
} else {
re_frisk.subs_graph.doc = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.nodes !== 'undefined')){
} else {
re_frisk.subs_graph.nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.edges !== 'undefined')){
} else {
re_frisk.subs_graph.edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.options !== 'undefined')){
} else {
re_frisk.subs_graph.options = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"physics","physics",-1254209137),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"solver","solver",-744421825),"forceAtlas2Based",new cljs.core.Keyword(null,"maxVelocity","maxVelocity",1721643083),(30),new cljs.core.Keyword(null,"minVelocity","minVelocity",-32716928),(10),new cljs.core.Keyword(null,"stabilization","stabilization",-1209068026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"iterations","iterations",-1402710890),(30)], null)], null)], null));
}
re_frisk.subs_graph.init = (function re_frisk$subs_graph$init(win,document){
cljs.core.reset_BANG_(re_frisk.subs_graph.vis,win.vis);

return cljs.core.reset_BANG_(re_frisk.subs_graph.doc,document);
});
re_frisk.subs_graph.set_root_node = (function re_frisk$subs_graph$set_root_node(reaction){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),reaction))){
return null;
} else {
var data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"app-db",new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,reaction,data);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction,"app-db");

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));
} else {
return null;
}
}
});
re_frisk.subs_graph.destroy = (function re_frisk$subs_graph$destroy(){
var temp__5804__auto__ = new cljs.core.Keyword(null,"network","network",2050004697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network));
if(cljs.core.truth_(temp__5804__auto__)){
var network_js = temp__5804__auto__;
network_js.destroy();

return cljs.core.reset_BANG_(re_frisk.subs_graph.network,null);
} else {
return null;
}
});
re_frisk.subs_graph.create = (function re_frisk$subs_graph$create(){
re_frisk.subs_graph.destroy();

if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__5043__auto__;
}
})())){
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.nodes)))));
var edges_ds = (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(re_frisk.subs_graph.edges)))));
var data = ({"nodes": nodes_ds, "edges": edges_ds});
var temp__5804__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("global-subs-graph-container");
if(cljs.core.truth_(temp__5804__auto__)){
var container = temp__5804__auto__;
return cljs.core.reset_BANG_(re_frisk.subs_graph.network,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"network","network",2050004697),(new Network(container,data,re_frisk.subs_graph.options))], null));
} else {
return null;
}
} else {
return null;
}
});
re_frisk.subs_graph.update_subs = (function re_frisk$subs_graph$update_subs(traces){
var temp__5804__auto___41570 = new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135).cljs$core$IFn$_invoke$arity$1(cljs.core.first(traces));
if(cljs.core.truth_(temp__5804__auto___41570)){
var app_db_reaction_41571 = temp__5804__auto___41570;
re_frisk.subs_graph.set_root_node(app_db_reaction_41571);
} else {
}

var seq__41084_41572 = cljs.core.seq(traces);
var chunk__41085_41573 = null;
var count__41086_41574 = (0);
var i__41087_41575 = (0);
while(true){
if((i__41087_41575 < count__41086_41574)){
var map__41169_41576 = chunk__41085_41573.cljs$core$IIndexed$_nth$arity$2(null,i__41087_41575);
var map__41169_41577__$1 = cljs.core.__destructure_map(map__41169_41576);
var subs_41578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41169_41577__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__41174_41579 = cljs.core.seq(subs_41578);
var chunk__41175_41580 = null;
var count__41176_41581 = (0);
var i__41177_41582 = (0);
while(true){
if((i__41177_41582 < count__41176_41581)){
var map__41200_41583 = chunk__41175_41580.cljs$core$IIndexed$_nth$arity$2(null,i__41177_41582);
var map__41200_41584__$1 = cljs.core.__destructure_map(map__41200_41583);
var operation_41585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41200_41584__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_41586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41200_41584__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_41586)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_41586,operation_41585);
} else {
}


var G__41587 = seq__41174_41579;
var G__41588 = chunk__41175_41580;
var G__41589 = count__41176_41581;
var G__41590 = (i__41177_41582 + (1));
seq__41174_41579 = G__41587;
chunk__41175_41580 = G__41588;
count__41176_41581 = G__41589;
i__41177_41582 = G__41590;
continue;
} else {
var temp__5804__auto___41591 = cljs.core.seq(seq__41174_41579);
if(temp__5804__auto___41591){
var seq__41174_41592__$1 = temp__5804__auto___41591;
if(cljs.core.chunked_seq_QMARK_(seq__41174_41592__$1)){
var c__5568__auto___41593 = cljs.core.chunk_first(seq__41174_41592__$1);
var G__41594 = cljs.core.chunk_rest(seq__41174_41592__$1);
var G__41595 = c__5568__auto___41593;
var G__41596 = cljs.core.count(c__5568__auto___41593);
var G__41597 = (0);
seq__41174_41579 = G__41594;
chunk__41175_41580 = G__41595;
count__41176_41581 = G__41596;
i__41177_41582 = G__41597;
continue;
} else {
var map__41201_41598 = cljs.core.first(seq__41174_41592__$1);
var map__41201_41599__$1 = cljs.core.__destructure_map(map__41201_41598);
var operation_41600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41201_41599__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_41601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41201_41599__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_41601)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_41601,operation_41600);
} else {
}


var G__41602 = cljs.core.next(seq__41174_41592__$1);
var G__41603 = null;
var G__41604 = (0);
var G__41605 = (0);
seq__41174_41579 = G__41602;
chunk__41175_41580 = G__41603;
count__41176_41581 = G__41604;
i__41177_41582 = G__41605;
continue;
}
} else {
}
}
break;
}


var G__41606 = seq__41084_41572;
var G__41607 = chunk__41085_41573;
var G__41608 = count__41086_41574;
var G__41609 = (i__41087_41575 + (1));
seq__41084_41572 = G__41606;
chunk__41085_41573 = G__41607;
count__41086_41574 = G__41608;
i__41087_41575 = G__41609;
continue;
} else {
var temp__5804__auto___41610 = cljs.core.seq(seq__41084_41572);
if(temp__5804__auto___41610){
var seq__41084_41611__$1 = temp__5804__auto___41610;
if(cljs.core.chunked_seq_QMARK_(seq__41084_41611__$1)){
var c__5568__auto___41612 = cljs.core.chunk_first(seq__41084_41611__$1);
var G__41613 = cljs.core.chunk_rest(seq__41084_41611__$1);
var G__41614 = c__5568__auto___41612;
var G__41615 = cljs.core.count(c__5568__auto___41612);
var G__41616 = (0);
seq__41084_41572 = G__41613;
chunk__41085_41573 = G__41614;
count__41086_41574 = G__41615;
i__41087_41575 = G__41616;
continue;
} else {
var map__41203_41617 = cljs.core.first(seq__41084_41611__$1);
var map__41203_41618__$1 = cljs.core.__destructure_map(map__41203_41617);
var subs_41619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41203_41618__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__41204_41620 = cljs.core.seq(subs_41619);
var chunk__41205_41621 = null;
var count__41206_41622 = (0);
var i__41207_41623 = (0);
while(true){
if((i__41207_41623 < count__41206_41622)){
var map__41212_41624 = chunk__41205_41621.cljs$core$IIndexed$_nth$arity$2(null,i__41207_41623);
var map__41212_41625__$1 = cljs.core.__destructure_map(map__41212_41624);
var operation_41626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41212_41625__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_41627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41212_41625__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_41627)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_41627,operation_41626);
} else {
}


var G__41628 = seq__41204_41620;
var G__41629 = chunk__41205_41621;
var G__41630 = count__41206_41622;
var G__41631 = (i__41207_41623 + (1));
seq__41204_41620 = G__41628;
chunk__41205_41621 = G__41629;
count__41206_41622 = G__41630;
i__41207_41623 = G__41631;
continue;
} else {
var temp__5804__auto___41632__$1 = cljs.core.seq(seq__41204_41620);
if(temp__5804__auto___41632__$1){
var seq__41204_41633__$1 = temp__5804__auto___41632__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41204_41633__$1)){
var c__5568__auto___41634 = cljs.core.chunk_first(seq__41204_41633__$1);
var G__41635 = cljs.core.chunk_rest(seq__41204_41633__$1);
var G__41636 = c__5568__auto___41634;
var G__41637 = cljs.core.count(c__5568__auto___41634);
var G__41638 = (0);
seq__41204_41620 = G__41635;
chunk__41205_41621 = G__41636;
count__41206_41622 = G__41637;
i__41207_41623 = G__41638;
continue;
} else {
var map__41213_41639 = cljs.core.first(seq__41204_41633__$1);
var map__41213_41640__$1 = cljs.core.__destructure_map(map__41213_41639);
var operation_41641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41213_41640__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_41642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41213_41640__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.truth_(reaction_41642)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.reaction__GT_operation,cljs.core.assoc,reaction_41642,operation_41641);
} else {
}


var G__41643 = cljs.core.next(seq__41204_41633__$1);
var G__41644 = null;
var G__41645 = (0);
var G__41646 = (0);
seq__41204_41620 = G__41643;
chunk__41205_41621 = G__41644;
count__41206_41622 = G__41645;
i__41207_41623 = G__41646;
continue;
}
} else {
}
}
break;
}


var G__41647 = cljs.core.next(seq__41084_41611__$1);
var G__41648 = null;
var G__41649 = (0);
var G__41650 = (0);
seq__41084_41572 = G__41647;
chunk__41085_41573 = G__41648;
count__41086_41574 = G__41649;
i__41087_41575 = G__41650;
continue;
}
} else {
}
}
break;
}

var new_nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__41214_41652 = cljs.core.seq(traces);
var chunk__41215_41653 = null;
var count__41216_41654 = (0);
var i__41217_41655 = (0);
while(true){
if((i__41217_41655 < count__41216_41654)){
var map__41391_41656 = chunk__41215_41653.cljs$core$IIndexed$_nth$arity$2(null,i__41217_41655);
var map__41391_41657__$1 = cljs.core.__destructure_map(map__41391_41656);
var subs_41658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41391_41657__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__41392_41659 = cljs.core.seq(subs_41658);
var chunk__41393_41660 = null;
var count__41394_41661 = (0);
var i__41395_41662 = (0);
while(true){
if((i__41395_41662 < count__41394_41661)){
var map__41412_41664 = chunk__41393_41660.cljs$core$IIndexed$_nth$arity$2(null,i__41395_41662);
var map__41412_41665__$1 = cljs.core.__destructure_map(map__41412_41664);
var op_type_41666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41412_41665__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_41667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41412_41665__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_41668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41412_41665__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_41669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41412_41665__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_41666,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_41666,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__5043__auto__){
return input_signals_41667;
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_41668,input_signals_41667);
} else {
}

var operation_41671__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_41668);
if(cljs.core.truth_(reaction_41669)){
var temp__5802__auto___41672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_41671__$1);
if(cljs.core.truth_(temp__5802__auto___41672)){
var old_reaction_41674 = temp__5802__auto___41672;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_41666,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_41674))){
var updated_node_41675 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_41674,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_41666,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_41666)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_41671__$1,updated_node_41675);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_41671__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_41671__$1,updated_node_41675);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_41675], null)));
}
} else {
}
} else {
}
} else {
var data_41680 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_41671__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_41671__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_41666)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_41666], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_41671__$1,data_41680);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_41671__$1,data_41680);
}
} else {
}

if(cljs.core.truth_(input_signals_41667)){
var seq__41415_41684 = cljs.core.seq(input_signals_41667);
var chunk__41416_41685 = null;
var count__41417_41686 = (0);
var i__41418_41687 = (0);
while(true){
if((i__41418_41687 < count__41417_41686)){
var input_reaction_41689 = chunk__41416_41685.cljs$core$IIndexed$_nth$arity$2(null,i__41418_41687);
var input_operation_41691 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_41689));
var reaction_path_41692 = [input_operation_41691,"-",operation_41671__$1].join('');
var temp__5802__auto___41694 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_41692);
if(cljs.core.truth_(temp__5802__auto___41694)){
var old_edge_41696 = temp__5802__auto___41694;
var updated_edge_41697 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_41696,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_41692,updated_edge_41697);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_41697], null)));
} else {
}
} else {
var data_41699 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_41692,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_41691,new cljs.core.Keyword(null,"to","to",192099007),operation_41671__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_41692,data_41699);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_41699));
} else {
}
}


var G__41701 = seq__41415_41684;
var G__41702 = chunk__41416_41685;
var G__41703 = count__41417_41686;
var G__41704 = (i__41418_41687 + (1));
seq__41415_41684 = G__41701;
chunk__41416_41685 = G__41702;
count__41417_41686 = G__41703;
i__41418_41687 = G__41704;
continue;
} else {
var temp__5804__auto___41708 = cljs.core.seq(seq__41415_41684);
if(temp__5804__auto___41708){
var seq__41415_41709__$1 = temp__5804__auto___41708;
if(cljs.core.chunked_seq_QMARK_(seq__41415_41709__$1)){
var c__5568__auto___41711 = cljs.core.chunk_first(seq__41415_41709__$1);
var G__41712 = cljs.core.chunk_rest(seq__41415_41709__$1);
var G__41713 = c__5568__auto___41711;
var G__41714 = cljs.core.count(c__5568__auto___41711);
var G__41715 = (0);
seq__41415_41684 = G__41712;
chunk__41416_41685 = G__41713;
count__41417_41686 = G__41714;
i__41418_41687 = G__41715;
continue;
} else {
var input_reaction_41716 = cljs.core.first(seq__41415_41709__$1);
var input_operation_41717 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_41716));
var reaction_path_41718 = [input_operation_41717,"-",operation_41671__$1].join('');
var temp__5802__auto___41719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_41718);
if(cljs.core.truth_(temp__5802__auto___41719)){
var old_edge_41721 = temp__5802__auto___41719;
var updated_edge_41722 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_41721,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_41718,updated_edge_41722);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_41722], null)));
} else {
}
} else {
var data_41723 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_41718,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_41717,new cljs.core.Keyword(null,"to","to",192099007),operation_41671__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_41718,data_41723);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_41723));
} else {
}
}


var G__41728 = cljs.core.next(seq__41415_41709__$1);
var G__41729 = null;
var G__41730 = (0);
var G__41731 = (0);
seq__41415_41684 = G__41728;
chunk__41416_41685 = G__41729;
count__41417_41686 = G__41730;
i__41418_41687 = G__41731;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}


var G__41733 = seq__41392_41659;
var G__41734 = chunk__41393_41660;
var G__41735 = count__41394_41661;
var G__41736 = (i__41395_41662 + (1));
seq__41392_41659 = G__41733;
chunk__41393_41660 = G__41734;
count__41394_41661 = G__41735;
i__41395_41662 = G__41736;
continue;
} else {
var temp__5804__auto___41738 = cljs.core.seq(seq__41392_41659);
if(temp__5804__auto___41738){
var seq__41392_41739__$1 = temp__5804__auto___41738;
if(cljs.core.chunked_seq_QMARK_(seq__41392_41739__$1)){
var c__5568__auto___41740 = cljs.core.chunk_first(seq__41392_41739__$1);
var G__41741 = cljs.core.chunk_rest(seq__41392_41739__$1);
var G__41742 = c__5568__auto___41740;
var G__41743 = cljs.core.count(c__5568__auto___41740);
var G__41744 = (0);
seq__41392_41659 = G__41741;
chunk__41393_41660 = G__41742;
count__41394_41661 = G__41743;
i__41395_41662 = G__41744;
continue;
} else {
var map__41423_41746 = cljs.core.first(seq__41392_41739__$1);
var map__41423_41747__$1 = cljs.core.__destructure_map(map__41423_41746);
var op_type_41748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41423_41747__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_41749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41423_41747__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_41750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41423_41747__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_41751 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41423_41747__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_41748,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_41748,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__5043__auto__){
return input_signals_41749;
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_41750,input_signals_41749);
} else {
}

var operation_41752__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_41750);
if(cljs.core.truth_(reaction_41751)){
var temp__5802__auto___41753 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_41752__$1);
if(cljs.core.truth_(temp__5802__auto___41753)){
var old_reaction_41755 = temp__5802__auto___41753;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_41748,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_41755))){
var updated_node_41756 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_41755,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_41748,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_41748)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_41752__$1,updated_node_41756);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_41752__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_41752__$1,updated_node_41756);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_41756], null)));
}
} else {
}
} else {
}
} else {
var data_41759 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_41752__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_41752__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_41748)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_41748], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_41752__$1,data_41759);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_41752__$1,data_41759);
}
} else {
}

if(cljs.core.truth_(input_signals_41749)){
var seq__41425_41761 = cljs.core.seq(input_signals_41749);
var chunk__41426_41762 = null;
var count__41427_41763 = (0);
var i__41428_41764 = (0);
while(true){
if((i__41428_41764 < count__41427_41763)){
var input_reaction_41765 = chunk__41426_41762.cljs$core$IIndexed$_nth$arity$2(null,i__41428_41764);
var input_operation_41766 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_41765));
var reaction_path_41767 = [input_operation_41766,"-",operation_41752__$1].join('');
var temp__5802__auto___41768 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_41767);
if(cljs.core.truth_(temp__5802__auto___41768)){
var old_edge_41769 = temp__5802__auto___41768;
var updated_edge_41770 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_41769,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_41767,updated_edge_41770);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_41770], null)));
} else {
}
} else {
var data_41772 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_41767,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_41766,new cljs.core.Keyword(null,"to","to",192099007),operation_41752__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_41767,data_41772);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_41772));
} else {
}
}


var G__41773 = seq__41425_41761;
var G__41774 = chunk__41426_41762;
var G__41775 = count__41427_41763;
var G__41776 = (i__41428_41764 + (1));
seq__41425_41761 = G__41773;
chunk__41426_41762 = G__41774;
count__41427_41763 = G__41775;
i__41428_41764 = G__41776;
continue;
} else {
var temp__5804__auto___41778__$1 = cljs.core.seq(seq__41425_41761);
if(temp__5804__auto___41778__$1){
var seq__41425_41779__$1 = temp__5804__auto___41778__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41425_41779__$1)){
var c__5568__auto___41780 = cljs.core.chunk_first(seq__41425_41779__$1);
var G__41781 = cljs.core.chunk_rest(seq__41425_41779__$1);
var G__41782 = c__5568__auto___41780;
var G__41783 = cljs.core.count(c__5568__auto___41780);
var G__41784 = (0);
seq__41425_41761 = G__41781;
chunk__41426_41762 = G__41782;
count__41427_41763 = G__41783;
i__41428_41764 = G__41784;
continue;
} else {
var input_reaction_41785 = cljs.core.first(seq__41425_41779__$1);
var input_operation_41786 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_41785));
var reaction_path_41787 = [input_operation_41786,"-",operation_41752__$1].join('');
var temp__5802__auto___41788 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_41787);
if(cljs.core.truth_(temp__5802__auto___41788)){
var old_edge_41790 = temp__5802__auto___41788;
var updated_edge_41791 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_41790,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_41787,updated_edge_41791);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_41791], null)));
} else {
}
} else {
var data_41792 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_41787,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_41786,new cljs.core.Keyword(null,"to","to",192099007),operation_41752__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_41787,data_41792);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_41792));
} else {
}
}


var G__41794 = cljs.core.next(seq__41425_41779__$1);
var G__41795 = null;
var G__41796 = (0);
var G__41797 = (0);
seq__41425_41761 = G__41794;
chunk__41426_41762 = G__41795;
count__41427_41763 = G__41796;
i__41428_41764 = G__41797;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}


var G__41798 = cljs.core.next(seq__41392_41739__$1);
var G__41799 = null;
var G__41800 = (0);
var G__41801 = (0);
seq__41392_41659 = G__41798;
chunk__41393_41660 = G__41799;
count__41394_41661 = G__41800;
i__41395_41662 = G__41801;
continue;
}
} else {
}
}
break;
}


var G__41802 = seq__41214_41652;
var G__41803 = chunk__41215_41653;
var G__41804 = count__41216_41654;
var G__41805 = (i__41217_41655 + (1));
seq__41214_41652 = G__41802;
chunk__41215_41653 = G__41803;
count__41216_41654 = G__41804;
i__41217_41655 = G__41805;
continue;
} else {
var temp__5804__auto___41806 = cljs.core.seq(seq__41214_41652);
if(temp__5804__auto___41806){
var seq__41214_41808__$1 = temp__5804__auto___41806;
if(cljs.core.chunked_seq_QMARK_(seq__41214_41808__$1)){
var c__5568__auto___41809 = cljs.core.chunk_first(seq__41214_41808__$1);
var G__41810 = cljs.core.chunk_rest(seq__41214_41808__$1);
var G__41811 = c__5568__auto___41809;
var G__41812 = cljs.core.count(c__5568__auto___41809);
var G__41813 = (0);
seq__41214_41652 = G__41810;
chunk__41215_41653 = G__41811;
count__41216_41654 = G__41812;
i__41217_41655 = G__41813;
continue;
} else {
var map__41441_41814 = cljs.core.first(seq__41214_41808__$1);
var map__41441_41815__$1 = cljs.core.__destructure_map(map__41441_41814);
var subs_41816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41441_41815__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var seq__41442_41817 = cljs.core.seq(subs_41816);
var chunk__41443_41818 = null;
var count__41444_41819 = (0);
var i__41445_41820 = (0);
while(true){
if((i__41445_41820 < count__41444_41819)){
var map__41487_41821 = chunk__41443_41818.cljs$core$IIndexed$_nth$arity$2(null,i__41445_41820);
var map__41487_41822__$1 = cljs.core.__destructure_map(map__41487_41821);
var op_type_41823 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41487_41822__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_41824 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41487_41822__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_41825 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41487_41822__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_41826 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41487_41822__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_41823,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_41823,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__5043__auto__){
return input_signals_41824;
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_41825,input_signals_41824);
} else {
}

var operation_41828__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_41825);
if(cljs.core.truth_(reaction_41826)){
var temp__5802__auto___41829 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_41828__$1);
if(cljs.core.truth_(temp__5802__auto___41829)){
var old_reaction_41831 = temp__5802__auto___41829;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_41823,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_41831))){
var updated_node_41836 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_41831,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_41823,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_41823)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_41828__$1,updated_node_41836);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_41828__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_41828__$1,updated_node_41836);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_41836], null)));
}
} else {
}
} else {
}
} else {
var data_41841 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_41828__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_41828__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_41823)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_41823], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_41828__$1,data_41841);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_41828__$1,data_41841);
}
} else {
}

if(cljs.core.truth_(input_signals_41824)){
var seq__41491_41843 = cljs.core.seq(input_signals_41824);
var chunk__41492_41844 = null;
var count__41493_41845 = (0);
var i__41494_41846 = (0);
while(true){
if((i__41494_41846 < count__41493_41845)){
var input_reaction_41847 = chunk__41492_41844.cljs$core$IIndexed$_nth$arity$2(null,i__41494_41846);
var input_operation_41848 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_41847));
var reaction_path_41849 = [input_operation_41848,"-",operation_41828__$1].join('');
var temp__5802__auto___41850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_41849);
if(cljs.core.truth_(temp__5802__auto___41850)){
var old_edge_41851 = temp__5802__auto___41850;
var updated_edge_41852 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_41851,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_41849,updated_edge_41852);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_41852], null)));
} else {
}
} else {
var data_41853 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_41849,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_41848,new cljs.core.Keyword(null,"to","to",192099007),operation_41828__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_41849,data_41853);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_41853));
} else {
}
}


var G__41855 = seq__41491_41843;
var G__41856 = chunk__41492_41844;
var G__41857 = count__41493_41845;
var G__41858 = (i__41494_41846 + (1));
seq__41491_41843 = G__41855;
chunk__41492_41844 = G__41856;
count__41493_41845 = G__41857;
i__41494_41846 = G__41858;
continue;
} else {
var temp__5804__auto___41859__$1 = cljs.core.seq(seq__41491_41843);
if(temp__5804__auto___41859__$1){
var seq__41491_41860__$1 = temp__5804__auto___41859__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41491_41860__$1)){
var c__5568__auto___41861 = cljs.core.chunk_first(seq__41491_41860__$1);
var G__41862 = cljs.core.chunk_rest(seq__41491_41860__$1);
var G__41863 = c__5568__auto___41861;
var G__41864 = cljs.core.count(c__5568__auto___41861);
var G__41865 = (0);
seq__41491_41843 = G__41862;
chunk__41492_41844 = G__41863;
count__41493_41845 = G__41864;
i__41494_41846 = G__41865;
continue;
} else {
var input_reaction_41866 = cljs.core.first(seq__41491_41860__$1);
var input_operation_41867 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_41866));
var reaction_path_41868 = [input_operation_41867,"-",operation_41828__$1].join('');
var temp__5802__auto___41869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_41868);
if(cljs.core.truth_(temp__5802__auto___41869)){
var old_edge_41870 = temp__5802__auto___41869;
var updated_edge_41871 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_41870,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_41868,updated_edge_41871);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_41871], null)));
} else {
}
} else {
var data_41872 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_41868,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_41867,new cljs.core.Keyword(null,"to","to",192099007),operation_41828__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_41868,data_41872);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_41872));
} else {
}
}


var G__41873 = cljs.core.next(seq__41491_41860__$1);
var G__41874 = null;
var G__41875 = (0);
var G__41876 = (0);
seq__41491_41843 = G__41873;
chunk__41492_41844 = G__41874;
count__41493_41845 = G__41875;
i__41494_41846 = G__41876;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}


var G__41877 = seq__41442_41817;
var G__41878 = chunk__41443_41818;
var G__41879 = count__41444_41819;
var G__41880 = (i__41445_41820 + (1));
seq__41442_41817 = G__41877;
chunk__41443_41818 = G__41878;
count__41444_41819 = G__41879;
i__41445_41820 = G__41880;
continue;
} else {
var temp__5804__auto___41881__$1 = cljs.core.seq(seq__41442_41817);
if(temp__5804__auto___41881__$1){
var seq__41442_41882__$1 = temp__5804__auto___41881__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41442_41882__$1)){
var c__5568__auto___41883 = cljs.core.chunk_first(seq__41442_41882__$1);
var G__41884 = cljs.core.chunk_rest(seq__41442_41882__$1);
var G__41885 = c__5568__auto___41883;
var G__41886 = cljs.core.count(c__5568__auto___41883);
var G__41887 = (0);
seq__41442_41817 = G__41884;
chunk__41443_41818 = G__41885;
count__41444_41819 = G__41886;
i__41445_41820 = G__41887;
continue;
} else {
var map__41504_41888 = cljs.core.first(seq__41442_41882__$1);
var map__41504_41889__$1 = cljs.core.__destructure_map(map__41504_41888);
var op_type_41890 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41504_41889__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var input_signals_41891 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41504_41889__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_41892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41504_41889__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var reaction_41893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41504_41889__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_41890,new cljs.core.Keyword(null,"create-class","create-class",1988524183))){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_41890,new cljs.core.Keyword(null,"render","render",-1408033454));
if(and__5043__auto__){
return input_signals_41891;
} else {
return and__5043__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.view__GT_reactions,cljs.core.assoc,operation_41892,input_signals_41891);
} else {
}

var operation_41894__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(operation_41892);
if(cljs.core.truth_(reaction_41893)){
var temp__5802__auto___41895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.nodes),operation_41894__$1);
if(cljs.core.truth_(temp__5802__auto___41895)){
var old_reaction_41896 = temp__5802__auto___41895;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_41890,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_41896))){
var updated_node_41897 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_41896,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_41890,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_41890)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_41894__$1,updated_node_41897);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(new_nodes),operation_41894__$1))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_41894__$1,updated_node_41897);
} else {
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_node_41897], null)));
}
} else {
}
} else {
}
} else {
var data_41899 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),operation_41894__$1,new cljs.core.Keyword(null,"label","label",1718410804),operation_41894__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_41890)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_41890], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.nodes,cljs.core.assoc,operation_41894__$1,data_41899);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new_nodes,cljs.core.assoc,operation_41894__$1,data_41899);
}
} else {
}

if(cljs.core.truth_(input_signals_41891)){
var seq__41505_41900 = cljs.core.seq(input_signals_41891);
var chunk__41506_41901 = null;
var count__41507_41902 = (0);
var i__41508_41903 = (0);
while(true){
if((i__41508_41903 < count__41507_41902)){
var input_reaction_41904 = chunk__41506_41901.cljs$core$IIndexed$_nth$arity$2(null,i__41508_41903);
var input_operation_41905 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_41904));
var reaction_path_41906 = [input_operation_41905,"-",operation_41894__$1].join('');
var temp__5802__auto___41907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_41906);
if(cljs.core.truth_(temp__5802__auto___41907)){
var old_edge_41908 = temp__5802__auto___41907;
var updated_edge_41909 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_41908,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_41906,updated_edge_41909);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_41909], null)));
} else {
}
} else {
var data_41910 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_41906,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_41905,new cljs.core.Keyword(null,"to","to",192099007),operation_41894__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_41906,data_41910);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_41910));
} else {
}
}


var G__41911 = seq__41505_41900;
var G__41912 = chunk__41506_41901;
var G__41913 = count__41507_41902;
var G__41914 = (i__41508_41903 + (1));
seq__41505_41900 = G__41911;
chunk__41506_41901 = G__41912;
count__41507_41902 = G__41913;
i__41508_41903 = G__41914;
continue;
} else {
var temp__5804__auto___41915__$2 = cljs.core.seq(seq__41505_41900);
if(temp__5804__auto___41915__$2){
var seq__41505_41916__$1 = temp__5804__auto___41915__$2;
if(cljs.core.chunked_seq_QMARK_(seq__41505_41916__$1)){
var c__5568__auto___41917 = cljs.core.chunk_first(seq__41505_41916__$1);
var G__41918 = cljs.core.chunk_rest(seq__41505_41916__$1);
var G__41919 = c__5568__auto___41917;
var G__41920 = cljs.core.count(c__5568__auto___41917);
var G__41921 = (0);
seq__41505_41900 = G__41918;
chunk__41506_41901 = G__41919;
count__41507_41902 = G__41920;
i__41508_41903 = G__41921;
continue;
} else {
var input_reaction_41922 = cljs.core.first(seq__41505_41916__$1);
var input_operation_41923 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.reaction__GT_operation),input_reaction_41922));
var reaction_path_41924 = [input_operation_41923,"-",operation_41894__$1].join('');
var temp__5802__auto___41925 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frisk.subs_graph.edges),reaction_path_41924);
if(cljs.core.truth_(temp__5802__auto___41925)){
var old_edge_41927 = temp__5802__auto___41925;
var updated_edge_41928 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(old_edge_41927,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.inc);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_41924,updated_edge_41928);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.update(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [updated_edge_41928], null)));
} else {
}
} else {
var data_41929 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_path_41924,new cljs.core.Keyword(null,"from","from",1815293044),input_operation_41923,new cljs.core.Keyword(null,"to","to",192099007),operation_41894__$1,new cljs.core.Keyword(null,"value","value",305978217),(1)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frisk.subs_graph.edges,cljs.core.assoc,reaction_path_41924,data_41929);

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).edges.add(cljs.core.clj__GT_js(data_41929));
} else {
}
}


var G__41930 = cljs.core.next(seq__41505_41916__$1);
var G__41931 = null;
var G__41932 = (0);
var G__41933 = (0);
seq__41505_41900 = G__41930;
chunk__41506_41901 = G__41931;
count__41507_41902 = G__41932;
i__41508_41903 = G__41933;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}


var G__41934 = cljs.core.next(seq__41442_41882__$1);
var G__41935 = null;
var G__41936 = (0);
var G__41937 = (0);
seq__41442_41817 = G__41934;
chunk__41443_41818 = G__41935;
count__41444_41819 = G__41936;
i__41445_41820 = G__41937;
continue;
}
} else {
}
}
break;
}


var G__41938 = cljs.core.next(seq__41214_41808__$1);
var G__41939 = null;
var G__41940 = (0);
var G__41941 = (0);
seq__41214_41652 = G__41938;
chunk__41215_41653 = G__41939;
count__41216_41654 = G__41940;
i__41217_41655 = G__41941;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.network))){
if((cljs.core.count(cljs.core.deref(new_nodes)) > (20))){
return re_frisk.subs_graph.create();
} else {
var seq__41521 = cljs.core.seq(cljs.core.vals(cljs.core.deref(new_nodes)));
var chunk__41522 = null;
var count__41523 = (0);
var i__41524 = (0);
while(true){
if((i__41524 < count__41523)){
var data = chunk__41522.cljs$core$IIndexed$_nth$arity$2(null,i__41524);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__41942 = seq__41521;
var G__41943 = chunk__41522;
var G__41944 = count__41523;
var G__41945 = (i__41524 + (1));
seq__41521 = G__41942;
chunk__41522 = G__41943;
count__41523 = G__41944;
i__41524 = G__41945;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__41521);
if(temp__5804__auto__){
var seq__41521__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41521__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__41521__$1);
var G__41946 = cljs.core.chunk_rest(seq__41521__$1);
var G__41947 = c__5568__auto__;
var G__41948 = cljs.core.count(c__5568__auto__);
var G__41949 = (0);
seq__41521 = G__41946;
chunk__41522 = G__41947;
count__41523 = G__41948;
i__41524 = G__41949;
continue;
} else {
var data = cljs.core.first(seq__41521__$1);
new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frisk.subs_graph.network)).nodes.add(cljs.core.clj__GT_js(data));


var G__41950 = cljs.core.next(seq__41521__$1);
var G__41951 = null;
var G__41952 = (0);
var G__41953 = (0);
seq__41521 = G__41950;
chunk__41522 = G__41951;
count__41523 = G__41952;
i__41524 = G__41953;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
return null;
}
});
if((typeof re_frisk !== 'undefined') && (typeof re_frisk.subs_graph !== 'undefined') && (typeof re_frisk.subs_graph.event_network !== 'undefined')){
} else {
re_frisk.subs_graph.event_network = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
re_frisk.subs_graph.create_event_subs = (function re_frisk$subs_graph$create_event_subs(p__41530){
var map__41531 = p__41530;
var map__41531__$1 = cljs.core.__destructure_map(map__41531);
var app_db_reaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41531__$1,new cljs.core.Keyword(null,"app-db-reaction","app-db-reaction",-269835135));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41531__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
if(cljs.core.truth_(cljs.core.deref(re_frisk.subs_graph.event_network))){
cljs.core.deref(re_frisk.subs_graph.event_network).destroy();

cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,null);
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(re_frisk.subs_graph.vis);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.deref(re_frisk.subs_graph.doc);
} else {
return and__5043__auto__;
}
})())){
var temp__5804__auto__ = cljs.core.deref(re_frisk.subs_graph.doc).getElementById("event-subs-graph-container");
if(cljs.core.truth_(temp__5804__auto__)){
var container = temp__5804__auto__;
var Network = cljs.core.deref(re_frisk.subs_graph.vis).Network;
var DataSet = cljs.core.deref(re_frisk.subs_graph.vis).DataSet;
var nodes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([app_db_reaction,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),app_db_reaction,new cljs.core.Keyword(null,"label","label",1718410804),"app-db",new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"yellow","yellow",-881035449)], null)], null)]));
var edges = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__41532_41954 = cljs.core.seq(subs);
var chunk__41533_41955 = null;
var count__41534_41956 = (0);
var i__41535_41957 = (0);
while(true){
if((i__41535_41957 < count__41534_41956)){
var map__41552_41958 = chunk__41533_41955.cljs$core$IIndexed$_nth$arity$2(null,i__41535_41957);
var map__41552_41959__$1 = cljs.core.__destructure_map(map__41552_41958);
var op_type_41960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41552_41959__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_41961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41552_41959__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_41962 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41552_41959__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_41963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41552_41959__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5802__auto___41964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_41961);
if(cljs.core.truth_(temp__5802__auto___41964)){
var old_reaction_41965 = temp__5802__auto___41964;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_41960,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_41965))){
var updated_node_41966 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_41965,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_41960,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_41960)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_41961,updated_node_41966);
} else {
}
} else {
var data_41968 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_41961,new cljs.core.Keyword(null,"label","label",1718410804),operation_41963,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_41960)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_41960], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_41961,data_41968);
}

if(cljs.core.truth_(input_signals_41962)){
var seq__41553_41969 = cljs.core.seq(input_signals_41962);
var chunk__41554_41970 = null;
var count__41555_41971 = (0);
var i__41556_41972 = (0);
while(true){
if((i__41556_41972 < count__41555_41971)){
var input_reaction_41973 = chunk__41554_41970.cljs$core$IIndexed$_nth$arity$2(null,i__41556_41972);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_41973),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_41961)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_41973),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_41961)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_41973,new cljs.core.Keyword(null,"to","to",192099007),reaction_41961], null));
}


var G__41975 = seq__41553_41969;
var G__41976 = chunk__41554_41970;
var G__41977 = count__41555_41971;
var G__41978 = (i__41556_41972 + (1));
seq__41553_41969 = G__41975;
chunk__41554_41970 = G__41976;
count__41555_41971 = G__41977;
i__41556_41972 = G__41978;
continue;
} else {
var temp__5804__auto___41979__$1 = cljs.core.seq(seq__41553_41969);
if(temp__5804__auto___41979__$1){
var seq__41553_41980__$1 = temp__5804__auto___41979__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41553_41980__$1)){
var c__5568__auto___41981 = cljs.core.chunk_first(seq__41553_41980__$1);
var G__41982 = cljs.core.chunk_rest(seq__41553_41980__$1);
var G__41983 = c__5568__auto___41981;
var G__41984 = cljs.core.count(c__5568__auto___41981);
var G__41985 = (0);
seq__41553_41969 = G__41982;
chunk__41554_41970 = G__41983;
count__41555_41971 = G__41984;
i__41556_41972 = G__41985;
continue;
} else {
var input_reaction_41986 = cljs.core.first(seq__41553_41980__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_41986),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_41961)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_41986),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_41961)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_41986,new cljs.core.Keyword(null,"to","to",192099007),reaction_41961], null));
}


var G__41987 = cljs.core.next(seq__41553_41980__$1);
var G__41988 = null;
var G__41989 = (0);
var G__41990 = (0);
seq__41553_41969 = G__41987;
chunk__41554_41970 = G__41988;
count__41555_41971 = G__41989;
i__41556_41972 = G__41990;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__41991 = seq__41532_41954;
var G__41992 = chunk__41533_41955;
var G__41993 = count__41534_41956;
var G__41994 = (i__41535_41957 + (1));
seq__41532_41954 = G__41991;
chunk__41533_41955 = G__41992;
count__41534_41956 = G__41993;
i__41535_41957 = G__41994;
continue;
} else {
var temp__5804__auto___41995__$1 = cljs.core.seq(seq__41532_41954);
if(temp__5804__auto___41995__$1){
var seq__41532_41996__$1 = temp__5804__auto___41995__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41532_41996__$1)){
var c__5568__auto___41997 = cljs.core.chunk_first(seq__41532_41996__$1);
var G__41998 = cljs.core.chunk_rest(seq__41532_41996__$1);
var G__41999 = c__5568__auto___41997;
var G__42000 = cljs.core.count(c__5568__auto___41997);
var G__42001 = (0);
seq__41532_41954 = G__41998;
chunk__41533_41955 = G__41999;
count__41534_41956 = G__42000;
i__41535_41957 = G__42001;
continue;
} else {
var map__41560_42002 = cljs.core.first(seq__41532_41996__$1);
var map__41560_42003__$1 = cljs.core.__destructure_map(map__41560_42002);
var op_type_42004 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41560_42003__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var reaction_42005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41560_42003__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788));
var input_signals_42006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41560_42003__$1,new cljs.core.Keyword(null,"input-signals","input-signals",563633497));
var operation_42007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41560_42003__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var temp__5802__auto___42008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nodes),reaction_42005);
if(cljs.core.truth_(temp__5802__auto___42008)){
var old_reaction_42009 = temp__5802__auto___42008;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(op_type_42004,new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(old_reaction_42009))){
var updated_node_42010 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(old_reaction_42009,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_42004,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_42004)], null)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_42005,updated_node_42010);
} else {
}
} else {
var data_42011 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),reaction_42005,new cljs.core.Keyword(null,"label","label",1718410804),operation_42007,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_frisk.ui.components.colors.sub_colors,op_type_42004)], null),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type_42004], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nodes,cljs.core.assoc,reaction_42005,data_42011);
}

if(cljs.core.truth_(input_signals_42006)){
var seq__41561_42012 = cljs.core.seq(input_signals_42006);
var chunk__41562_42013 = null;
var count__41563_42014 = (0);
var i__41564_42015 = (0);
while(true){
if((i__41564_42015 < count__41563_42014)){
var input_reaction_42016 = chunk__41562_42013.cljs$core$IIndexed$_nth$arity$2(null,i__41564_42015);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_42016),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_42005)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_42016),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_42005)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_42016,new cljs.core.Keyword(null,"to","to",192099007),reaction_42005], null));
}


var G__42017 = seq__41561_42012;
var G__42018 = chunk__41562_42013;
var G__42019 = count__41563_42014;
var G__42020 = (i__41564_42015 + (1));
seq__41561_42012 = G__42017;
chunk__41562_42013 = G__42018;
count__41563_42014 = G__42019;
i__41564_42015 = G__42020;
continue;
} else {
var temp__5804__auto___42021__$2 = cljs.core.seq(seq__41561_42012);
if(temp__5804__auto___42021__$2){
var seq__41561_42022__$1 = temp__5804__auto___42021__$2;
if(cljs.core.chunked_seq_QMARK_(seq__41561_42022__$1)){
var c__5568__auto___42023 = cljs.core.chunk_first(seq__41561_42022__$1);
var G__42024 = cljs.core.chunk_rest(seq__41561_42022__$1);
var G__42025 = c__5568__auto___42023;
var G__42026 = cljs.core.count(c__5568__auto___42023);
var G__42027 = (0);
seq__41561_42012 = G__42024;
chunk__41562_42013 = G__42025;
count__41563_42014 = G__42026;
i__41564_42015 = G__42027;
continue;
} else {
var input_reaction_42028 = cljs.core.first(seq__41561_42022__$1);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(edges),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_42028),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_42005)].join('')))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(edges,cljs.core.assoc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(input_reaction_42028),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reaction_42005)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"from","from",1815293044),input_reaction_42028,new cljs.core.Keyword(null,"to","to",192099007),reaction_42005], null));
}


var G__42029 = cljs.core.next(seq__41561_42022__$1);
var G__42030 = null;
var G__42031 = (0);
var G__42032 = (0);
seq__41561_42012 = G__42029;
chunk__41562_42013 = G__42030;
count__41563_42014 = G__42031;
i__41564_42015 = G__42032;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__42033 = cljs.core.next(seq__41532_41996__$1);
var G__42034 = null;
var G__42035 = (0);
var G__42036 = (0);
seq__41532_41954 = G__42033;
chunk__41533_41955 = G__42034;
count__41534_41956 = G__42035;
i__41535_41957 = G__42036;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frisk.subs_graph.event_network,(new Network(container,({"nodes": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(nodes))))), "edges": (new DataSet(cljs.core.clj__GT_js(cljs.core.vals(cljs.core.deref(edges)))))}),re_frisk.subs_graph.options)));
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=re_frisk.subs_graph.js.map
