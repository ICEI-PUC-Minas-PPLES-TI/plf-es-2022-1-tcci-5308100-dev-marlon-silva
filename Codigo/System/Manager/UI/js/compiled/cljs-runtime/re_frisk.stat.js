goog.provide('re_frisk.stat');
re_frisk.stat.assoc_map = (function re_frisk$stat$assoc_map(acc,key){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cnt","cnt",283978798),(0),new cljs.core.Keyword(null,"ms","ms",-1152709733),(0)], null));
});
re_frisk.stat.get_re_frame_handlers = (function re_frisk$stat$get_re_frame_handlers(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fx","fx",-1237829572),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"fx","fx",-1237829572).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)),new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),new cljs.core.Keyword(null,"db","db",993250759)], 0)))),new cljs.core.Keyword(null,"cofx","cofx",2013202907),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cofx","cofx",2013202907).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)),new cljs.core.Keyword(null,"db","db",993250759)))),new cljs.core.Keyword(null,"event","event",301435442),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler)))),new cljs.core.Keyword(null,"sub","sub",-2093760025),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(re_frisk.stat.assoc_map,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler))))], null);
});
re_frisk.stat.init_stat = (function re_frisk$stat$init_stat(re_frame_data){
if(cljs.core.empty_QMARK_(cljs.core.deref(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data)))){
return cljs.core.reset_BANG_(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),re_frisk.stat.get_re_frame_handlers());
} else {
return null;
}
});
re_frisk.stat.update_trace_stat = (function re_frisk$stat$update_trace_stat(re_frame_data,traces){
var seq__46837 = cljs.core.seq(traces);
var chunk__46838 = null;
var count__46839 = (0);
var i__46840 = (0);
while(true){
if((i__46840 < count__46839)){
var map__47014 = chunk__46838.cljs$core$IIndexed$_nth$arity$2(null,i__46840);
var map__47014__$1 = cljs.core.__destructure_map(map__47014);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47014__$1,new cljs.core.Keyword(null,"event","event",301435442));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47014__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47014__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47014__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47014__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
if(cljs.core.truth_(event)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration], 0));

if((cljs.core.count(effects) > (0))){
var seq__47019_47160 = cljs.core.seq(cljs.core.keys(effects));
var chunk__47021_47161 = null;
var count__47022_47162 = (0);
var i__47023_47163 = (0);
while(true){
if((i__47023_47163 < count__47022_47162)){
var key_47164 = chunk__47021_47161.cljs$core$IIndexed$_nth$arity$2(null,i__47023_47163);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_47164,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__47165 = seq__47019_47160;
var G__47166 = chunk__47021_47161;
var G__47167 = count__47022_47162;
var G__47168 = (i__47023_47163 + (1));
seq__47019_47160 = G__47165;
chunk__47021_47161 = G__47166;
count__47022_47162 = G__47167;
i__47023_47163 = G__47168;
continue;
} else {
var temp__5804__auto___47170 = cljs.core.seq(seq__47019_47160);
if(temp__5804__auto___47170){
var seq__47019_47171__$1 = temp__5804__auto___47170;
if(cljs.core.chunked_seq_QMARK_(seq__47019_47171__$1)){
var c__5568__auto___47172 = cljs.core.chunk_first(seq__47019_47171__$1);
var G__47173 = cljs.core.chunk_rest(seq__47019_47171__$1);
var G__47174 = c__5568__auto___47172;
var G__47175 = cljs.core.count(c__5568__auto___47172);
var G__47176 = (0);
seq__47019_47160 = G__47173;
chunk__47021_47161 = G__47174;
count__47022_47162 = G__47175;
i__47023_47163 = G__47176;
continue;
} else {
var key_47177 = cljs.core.first(seq__47019_47171__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_47177,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__47178 = cljs.core.next(seq__47019_47171__$1);
var G__47179 = null;
var G__47180 = (0);
var G__47181 = (0);
seq__47019_47160 = G__47178;
chunk__47021_47161 = G__47179;
count__47022_47162 = G__47180;
i__47023_47163 = G__47181;
continue;
}
} else {
}
}
break;
}
} else {
}

if((cljs.core.count(coeffects) > (0))){
var seq__47033_47182 = cljs.core.seq(cljs.core.keys(coeffects));
var chunk__47034_47183 = null;
var count__47035_47184 = (0);
var i__47036_47185 = (0);
while(true){
if((i__47036_47185 < count__47035_47184)){
var key_47186 = chunk__47034_47183.cljs$core$IIndexed$_nth$arity$2(null,i__47036_47185);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_47186,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__47189 = seq__47033_47182;
var G__47190 = chunk__47034_47183;
var G__47191 = count__47035_47184;
var G__47192 = (i__47036_47185 + (1));
seq__47033_47182 = G__47189;
chunk__47034_47183 = G__47190;
count__47035_47184 = G__47191;
i__47036_47185 = G__47192;
continue;
} else {
var temp__5804__auto___47194 = cljs.core.seq(seq__47033_47182);
if(temp__5804__auto___47194){
var seq__47033_47196__$1 = temp__5804__auto___47194;
if(cljs.core.chunked_seq_QMARK_(seq__47033_47196__$1)){
var c__5568__auto___47197 = cljs.core.chunk_first(seq__47033_47196__$1);
var G__47203 = cljs.core.chunk_rest(seq__47033_47196__$1);
var G__47204 = c__5568__auto___47197;
var G__47205 = cljs.core.count(c__5568__auto___47197);
var G__47206 = (0);
seq__47033_47182 = G__47203;
chunk__47034_47183 = G__47204;
count__47035_47184 = G__47205;
i__47036_47185 = G__47206;
continue;
} else {
var key_47208 = cljs.core.first(seq__47033_47196__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_47208,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__47209 = cljs.core.next(seq__47033_47196__$1);
var G__47210 = null;
var G__47211 = (0);
var G__47212 = (0);
seq__47033_47182 = G__47209;
chunk__47034_47183 = G__47210;
count__47035_47184 = G__47211;
i__47036_47185 = G__47212;
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

if(cljs.core.seq(subs)){
var seq__47050_47213 = cljs.core.seq(subs);
var chunk__47051_47214 = null;
var count__47052_47215 = (0);
var i__47053_47216 = (0);
while(true){
if((i__47053_47216 < count__47052_47215)){
var map__47061_47218 = chunk__47051_47214.cljs$core$IIndexed$_nth$arity$2(null,i__47053_47216);
var map__47061_47219__$1 = cljs.core.__destructure_map(map__47061_47218);
var op_type_47220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47061_47219__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_47221 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47061_47219__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_47222__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47061_47219__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_47220,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_47221,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_47221,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_47222__$1], 0));
} else {
}


var G__47226 = seq__47050_47213;
var G__47227 = chunk__47051_47214;
var G__47228 = count__47052_47215;
var G__47229 = (i__47053_47216 + (1));
seq__47050_47213 = G__47226;
chunk__47051_47214 = G__47227;
count__47052_47215 = G__47228;
i__47053_47216 = G__47229;
continue;
} else {
var temp__5804__auto___47231 = cljs.core.seq(seq__47050_47213);
if(temp__5804__auto___47231){
var seq__47050_47233__$1 = temp__5804__auto___47231;
if(cljs.core.chunked_seq_QMARK_(seq__47050_47233__$1)){
var c__5568__auto___47234 = cljs.core.chunk_first(seq__47050_47233__$1);
var G__47235 = cljs.core.chunk_rest(seq__47050_47233__$1);
var G__47236 = c__5568__auto___47234;
var G__47237 = cljs.core.count(c__5568__auto___47234);
var G__47238 = (0);
seq__47050_47213 = G__47235;
chunk__47051_47214 = G__47236;
count__47052_47215 = G__47237;
i__47053_47216 = G__47238;
continue;
} else {
var map__47067_47239 = cljs.core.first(seq__47050_47233__$1);
var map__47067_47240__$1 = cljs.core.__destructure_map(map__47067_47239);
var op_type_47241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47067_47240__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_47242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47067_47240__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_47243__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47067_47240__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_47241,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_47242,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_47242,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_47243__$1], 0));
} else {
}


var G__47248 = cljs.core.next(seq__47050_47233__$1);
var G__47249 = null;
var G__47250 = (0);
var G__47251 = (0);
seq__47050_47213 = G__47248;
chunk__47051_47214 = G__47249;
count__47052_47215 = G__47250;
i__47053_47216 = G__47251;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__47252 = seq__46837;
var G__47253 = chunk__46838;
var G__47254 = count__46839;
var G__47255 = (i__46840 + (1));
seq__46837 = G__47252;
chunk__46838 = G__47253;
count__46839 = G__47254;
i__46840 = G__47255;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46837);
if(temp__5804__auto__){
var seq__46837__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46837__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46837__$1);
var G__47258 = cljs.core.chunk_rest(seq__46837__$1);
var G__47259 = c__5568__auto__;
var G__47260 = cljs.core.count(c__5568__auto__);
var G__47261 = (0);
seq__46837 = G__47258;
chunk__46838 = G__47259;
count__46839 = G__47260;
i__46840 = G__47261;
continue;
} else {
var map__47079 = cljs.core.first(seq__46837__$1);
var map__47079__$1 = cljs.core.__destructure_map(map__47079);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47079__$1,new cljs.core.Keyword(null,"event","event",301435442));
var subs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47079__$1,new cljs.core.Keyword(null,"subs","subs",-186681991));
var duration = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47079__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var effects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47079__$1,new cljs.core.Keyword(null,"effects","effects",-282369292));
var coeffects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47079__$1,new cljs.core.Keyword(null,"coeffects","coeffects",497912985));
if(cljs.core.truth_(event)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.first(event),new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration], 0));

if((cljs.core.count(effects) > (0))){
var seq__47085_47263 = cljs.core.seq(cljs.core.keys(effects));
var chunk__47086_47264 = null;
var count__47087_47265 = (0);
var i__47088_47266 = (0);
while(true){
if((i__47088_47266 < count__47087_47265)){
var key_47267 = chunk__47086_47264.cljs$core$IIndexed$_nth$arity$2(null,i__47088_47266);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_47267,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__47268 = seq__47085_47263;
var G__47269 = chunk__47086_47264;
var G__47270 = count__47087_47265;
var G__47271 = (i__47088_47266 + (1));
seq__47085_47263 = G__47268;
chunk__47086_47264 = G__47269;
count__47087_47265 = G__47270;
i__47088_47266 = G__47271;
continue;
} else {
var temp__5804__auto___47272__$1 = cljs.core.seq(seq__47085_47263);
if(temp__5804__auto___47272__$1){
var seq__47085_47273__$1 = temp__5804__auto___47272__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47085_47273__$1)){
var c__5568__auto___47274 = cljs.core.chunk_first(seq__47085_47273__$1);
var G__47276 = cljs.core.chunk_rest(seq__47085_47273__$1);
var G__47277 = c__5568__auto___47274;
var G__47278 = cljs.core.count(c__5568__auto___47274);
var G__47279 = (0);
seq__47085_47263 = G__47276;
chunk__47086_47264 = G__47277;
count__47087_47265 = G__47278;
i__47088_47266 = G__47279;
continue;
} else {
var key_47281 = cljs.core.first(seq__47085_47273__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fx","fx",-1237829572),key_47281,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__47283 = cljs.core.next(seq__47085_47273__$1);
var G__47284 = null;
var G__47285 = (0);
var G__47286 = (0);
seq__47085_47263 = G__47283;
chunk__47086_47264 = G__47284;
count__47087_47265 = G__47285;
i__47088_47266 = G__47286;
continue;
}
} else {
}
}
break;
}
} else {
}

if((cljs.core.count(coeffects) > (0))){
var seq__47105_47288 = cljs.core.seq(cljs.core.keys(coeffects));
var chunk__47106_47289 = null;
var count__47107_47290 = (0);
var i__47108_47291 = (0);
while(true){
if((i__47108_47291 < count__47107_47290)){
var key_47295 = chunk__47106_47289.cljs$core$IIndexed$_nth$arity$2(null,i__47108_47291);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_47295,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__47297 = seq__47105_47288;
var G__47298 = chunk__47106_47289;
var G__47299 = count__47107_47290;
var G__47300 = (i__47108_47291 + (1));
seq__47105_47288 = G__47297;
chunk__47106_47289 = G__47298;
count__47107_47290 = G__47299;
i__47108_47291 = G__47300;
continue;
} else {
var temp__5804__auto___47301__$1 = cljs.core.seq(seq__47105_47288);
if(temp__5804__auto___47301__$1){
var seq__47105_47303__$1 = temp__5804__auto___47301__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47105_47303__$1)){
var c__5568__auto___47305 = cljs.core.chunk_first(seq__47105_47303__$1);
var G__47306 = cljs.core.chunk_rest(seq__47105_47303__$1);
var G__47307 = c__5568__auto___47305;
var G__47308 = cljs.core.count(c__5568__auto___47305);
var G__47309 = (0);
seq__47105_47288 = G__47306;
chunk__47106_47289 = G__47307;
count__47107_47290 = G__47308;
i__47108_47291 = G__47309;
continue;
} else {
var key_47310 = cljs.core.first(seq__47105_47303__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cofx","cofx",2013202907),key_47310,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);


var G__47311 = cljs.core.next(seq__47105_47303__$1);
var G__47312 = null;
var G__47313 = (0);
var G__47314 = (0);
seq__47105_47288 = G__47311;
chunk__47106_47289 = G__47312;
count__47107_47290 = G__47313;
i__47108_47291 = G__47314;
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

if(cljs.core.seq(subs)){
var seq__47120_47315 = cljs.core.seq(subs);
var chunk__47121_47316 = null;
var count__47122_47317 = (0);
var i__47123_47318 = (0);
while(true){
if((i__47123_47318 < count__47122_47317)){
var map__47133_47319 = chunk__47121_47316.cljs$core$IIndexed$_nth$arity$2(null,i__47123_47318);
var map__47133_47320__$1 = cljs.core.__destructure_map(map__47133_47319);
var op_type_47321 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47133_47320__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_47322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47133_47320__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_47323__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47133_47320__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_47321,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_47322,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_47322,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_47323__$1], 0));
} else {
}


var G__47327 = seq__47120_47315;
var G__47328 = chunk__47121_47316;
var G__47329 = count__47122_47317;
var G__47330 = (i__47123_47318 + (1));
seq__47120_47315 = G__47327;
chunk__47121_47316 = G__47328;
count__47122_47317 = G__47329;
i__47123_47318 = G__47330;
continue;
} else {
var temp__5804__auto___47332__$1 = cljs.core.seq(seq__47120_47315);
if(temp__5804__auto___47332__$1){
var seq__47120_47334__$1 = temp__5804__auto___47332__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47120_47334__$1)){
var c__5568__auto___47335 = cljs.core.chunk_first(seq__47120_47334__$1);
var G__47336 = cljs.core.chunk_rest(seq__47120_47334__$1);
var G__47337 = c__5568__auto___47335;
var G__47338 = cljs.core.count(c__5568__auto___47335);
var G__47339 = (0);
seq__47120_47315 = G__47336;
chunk__47121_47316 = G__47337;
count__47122_47317 = G__47338;
i__47123_47318 = G__47339;
continue;
} else {
var map__47139_47340 = cljs.core.first(seq__47120_47334__$1);
var map__47139_47341__$1 = cljs.core.__destructure_map(map__47139_47340);
var op_type_47342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47139_47341__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var operation_47343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47139_47341__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var duration_47344__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47139_47341__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op_type_47342,new cljs.core.Keyword("sub","run","sub/run",-1821315581))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_47343,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sub","sub",-2093760025),operation_47343,new cljs.core.Keyword(null,"ms","ms",-1152709733)], null),cljs.core._PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([duration_47344__$1], 0));
} else {
}


var G__47347 = cljs.core.next(seq__47120_47334__$1);
var G__47348 = null;
var G__47349 = (0);
var G__47350 = (0);
seq__47120_47315 = G__47347;
chunk__47121_47316 = G__47348;
count__47122_47317 = G__47349;
i__47123_47318 = G__47350;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__47351 = cljs.core.next(seq__46837__$1);
var G__47352 = null;
var G__47353 = (0);
var G__47354 = (0);
seq__46837 = G__47351;
chunk__46838 = G__47352;
count__46839 = G__47353;
i__46840 = G__47354;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frisk.stat.update_event_stat = (function re_frisk$stat$update_event_stat(re_frame_data,event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"stat","stat",-1370599836).cljs$core$IFn$_invoke$arity$1(re_frame_data),cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"cnt","cnt",283978798)], null),cljs.core.inc);
});

//# sourceMappingURL=re_frisk.stat.js.map
