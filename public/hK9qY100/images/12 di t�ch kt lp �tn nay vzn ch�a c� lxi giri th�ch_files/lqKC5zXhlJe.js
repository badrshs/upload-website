/*!CK:2711491924!*//*1427196105,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["zSOGU"]); }

__d("PluginEmbedConnectButton",["Arbiter","CSS","DOM","Plugin"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();var k={init:function(l,m){g.subscribe(j.ERROR,function(event,n){i.setContent(m,n.content);h.show(m);h.hide(l);});g.subscribe(j.CONNECT,function(event,n){h.show(l);h.hide(m);});},autoconnect:function(l,m){l.click();}};e.exports=k;},null);
__d("XDeveloperAppPlatformSetupController",["XController"],function(a,b,c,d,e,f){b.__markCompiled&&b.__markCompiled();e.exports=b("XController").create("\/quickstarts\/{?app_id}\/",{app_id:{type:"Int"},platform:{type:"String"}});},null);