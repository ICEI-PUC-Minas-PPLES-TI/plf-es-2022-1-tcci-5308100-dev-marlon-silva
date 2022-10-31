
shadow.cljs.devtools.client.env.module_loaded('app');

try { manager.core.init(); } catch (e) { console.error("An error occurred when calling (manager.core/init)"); throw(e); }