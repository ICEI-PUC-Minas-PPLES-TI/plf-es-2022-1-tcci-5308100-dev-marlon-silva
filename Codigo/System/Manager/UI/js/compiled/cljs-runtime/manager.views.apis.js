goog.provide('manager.views.apis');
manager.views.apis.form = (function manager$views$apis$form(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.components.form.scaffold,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.components.form.header], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.components.form.inputs,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.components.form.name_input,"API"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.components.form.text_input,new cljs.core.Keyword(null,"description","description",-1428560544),"Description:",manager.components.form.root], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.components.form.single_select_input,new cljs.core.Keyword(null,"method","method",55703592),"Method:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"methods","methods",453930866)], null),manager.components.form.root], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.components.form.text_input,new cljs.core.Keyword(null,"uri","uri",-774711847),"URI:",manager.components.form.root], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.components.form.footer], null)], null);
});
manager.views.apis.apis_panel = (function manager$views$apis$apis_panel(){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"manager/views/apis.cljs",new cljs.core.Keyword(null,"line","line",212345235),18], null)),new cljs.core.Keyword(null,"padding","padding",1660304693),"3vh 5em 0 5em",new cljs.core.Keyword(null,"gap","gap",80255254),"5em",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"36.4%",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.components.list.single_resource], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.views.apis.form], null)], null)], null);
});
manager.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"apis","apis",876742295),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manager.views.apis.apis_panel], null);
}));

//# sourceMappingURL=manager.views.apis.js.map