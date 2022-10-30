goog.provide('manager.express');
manager.express.express = (cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1 ? cljs.nodejs.require.cljs$core$IFn$_invoke$arity$1("express") : cljs.nodejs.require.call(null,"express"));
manager.express.app = manager.express.express.createServer();
manager.express.start_server = (function manager$express$start_server(){
var G__25902_25980 = manager.express.app;
G__25902_25980.use(manager.express.express.logger());

G__25902_25980.get("/write",(function (req,res){
var G__25920_25986 = (function (){var G__25921 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((manager.express.read_definition.cljs$core$IFn$_invoke$arity$0 ? manager.express.read_definition.cljs$core$IFn$_invoke$arity$0() : manager.express.read_definition.call(null)),new cljs.core.Keyword(null,"param","param",2013631823),req.query().a());
return (cljs.core.unquote.cljs$core$IFn$_invoke$arity$1 ? cljs.core.unquote.cljs$core$IFn$_invoke$arity$1(G__25921) : cljs.core.unquote.call(null,G__25921));
})();
(manager.express.write_definition.cljs$core$IFn$_invoke$arity$1 ? manager.express.write_definition.cljs$core$IFn$_invoke$arity$1(G__25920_25986) : manager.express.write_definition.call(null,G__25920_25986));

return res.send((manager.express.read_definition.cljs$core$IFn$_invoke$arity$0 ? manager.express.read_definition.cljs$core$IFn$_invoke$arity$0() : manager.express.read_definition.call(null)));
}));

G__25902_25980.get("/read",(function (req,res){
return res.send((manager.express.read_definition.cljs$core$IFn$_invoke$arity$0 ? manager.express.read_definition.cljs$core$IFn$_invoke$arity$0() : manager.express.read_definition.call(null)));
}));

G__25902_25980.listen((3000));


return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Express server started on port: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(manager.express.app.address().port())].join('')], 0));
});

//# sourceMappingURL=manager.express.js.map
