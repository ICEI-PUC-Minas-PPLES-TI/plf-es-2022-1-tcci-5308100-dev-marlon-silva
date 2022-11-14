goog.provide('manager.views');
manager.views.home_title = (function manager$views$home_title(){
var name = "API Valve";
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"manager/views.cljs",new cljs.core.Keyword(null,"line","line",212345235),11], null)),new cljs.core.Keyword(null,"label","label",1718410804),["Hello from ",name,". This is the Home Page."].join(''),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
manager.views.link_to_about_page = (function manager$views$link_to_about_page(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"manager/views.cljs",new cljs.core.Keyword(null,"line","line",212345235),17], null)),new cljs.core.Keyword(null,"label","label",1718410804),"go to About Page",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redirect","redirect",-1975673286),new cljs.core.Keyword(null,"about","about",1423892543)], null));
})], null);
});
manager.views.home_panel = (function manager$views$home_panel(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"manager/views.cljs",new cljs.core.Keyword(null,"line","line",212345235),23], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.views.home_title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.views.link_to_about_page], null)], null)], null);
});
manager.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"home-panel","home-panel",1226198754),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.views.home_panel], null);
}));
manager.views.about_title = (function manager$views$about_title(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"manager/views.cljs",new cljs.core.Keyword(null,"line","line",212345235),35], null)),new cljs.core.Keyword(null,"label","label",1718410804),"This is the About Page.",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
manager.views.link_to_home_page = (function manager$views$link_to_home_page(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.hyperlink,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"manager/views.cljs",new cljs.core.Keyword(null,"line","line",212345235),41], null)),new cljs.core.Keyword(null,"label","label",1718410804),"go to Home Page",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redirect","redirect",-1975673286),new cljs.core.Keyword(null,"home","home",-74557309)], null));
})], null);
});
manager.views.about_panel = (function manager$views$about_panel(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"manager/views.cljs",new cljs.core.Keyword(null,"line","line",212345235),47], null)),new cljs.core.Keyword(null,"gap","gap",80255254),"1em",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.views.about_title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.views.link_to_home_page], null)], null)], null);
});
manager.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"about-panel","about-panel",334628515),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.views.about_panel], null);
}));
manager.views.main_panel = (function manager$views$main_panel(){
var active_panel = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-active-panel","get-active-panel",1506046163)], null));
var _ = re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-resource-list","get-resource-list",-1312836838),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graphql","graphql",-218428840),new cljs.core.Keyword(null,"queries","queries",1446291995)], null)], null));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"manager/views.cljs",new cljs.core.Keyword(null,"line","line",212345235),60], null)),new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.routes.panels.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(active_panel))], null)], null);
});

//# sourceMappingURL=manager.views.js.map
