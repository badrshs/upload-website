/*!CK:422132732!*//*1427225388,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["vBSAO"]); }

__d("focusWithinLayer",["DOMQuery","Focus","TabbableElements","getActiveElement"],function(a,b,c,d,e,f,g,h,i,j){b.__markCompiled&&b.__markCompiled();function k(l){var m=g.scry(l,'.autofocus')[0],n=true;if(!m){var o=j();if(g.isNodeOfType(o,['input','textarea']))return;var p=i.find(l);for(var q=0;q<p.length;q++){var r=p[q];if(r.tagName!=='A'){m=p[q];break;}}}else if(m.tabIndex!==0)n=false;if(m){n?h.set(m):h.setWithoutOutline(m);}else if(!(l).offsetWidth){(l).tabIndex=0;h.setWithoutOutline(l);}}e.exports=k;},null);