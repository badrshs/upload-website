//2015-03-20 11:00AM
var VNPCDomain='adnetwork.vn';var VNPCProt=(document.location.protocol=='https:')?'https://':'http://';var VNPCMedia=(document.location.protocol=='https:')?'https://ambient.cachefly.net/':'http://cdn.ambientplatform.vn/';var VNPCDel=VNPCProt+'delivery.'+VNPCDomain+'/247/';var VNPCImp=VNPCProt+'imp.'+VNPCDomain+'/247/';var VNPCCli=VNPCProt+'track.'+VNPCDomain+'/247/';var VNPCConv=VNPCProt+'conv.'+VNPCDomain+'/247/';var VNPCVideo=VNPCProt+'metrics.'+VNPCDomain+'/247/';var swfobjectAbd=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var a=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var b=new ActiveXObject(W);if(b){ab=b.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:a,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var b=C(r);b.setAttribute("type",q);var Z=X.appendChild(b);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var a=Z.GetVariable("$version");if(a){a=a.split(" ")[1].split(",");M.pv=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(b);Z=null;H()})()}else{H()}}function H(){var a=o.length;if(a>0){for(var b=0;b<a;b++){var Y=o[b].id;var d=o[b].callbackFn;var e={success:false,id:Y};if(M.pv[0]>0){var f=c(Y);if(f){if(F(o[b].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(d){e.success=true;e.ref=z(Y);d(e)}}else{if(o[b].expressInstall&&A()){var g={};g.data=o[b].expressInstall;g.width=f.getAttribute("width")||"0";g.height=f.getAttribute("height")||"0";if(f.getAttribute("class")){g.styleclass=f.getAttribute("class")}if(f.getAttribute("align")){g.align=f.getAttribute("align")}var h={};var X=f.getElementsByTagName("param");var i=X.length;for(var j=0;j<i;j++){if(X[j].getAttribute("name").toLowerCase()!="movie"){h[X[j].getAttribute("name")]=X[j].getAttribute("value")}}P(g,h,Y,d)}else{p(f);if(d){d(e)}}}}}else{w(Y,true);if(d){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){e.success=true;e.ref=Z}d(e)}}}}}function z(a){var X=null;var Y=c(a);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return!a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(b,d,X,Z){a=true;E=Z||null;B={success:false,id:X};var e=c(X);if(e){if(e.nodeName=="OBJECT"){l=g(e);Q=null}else{l=e;Q=X}b.id=R;if(typeof b.width==D||(!/%$/.test(b.width)&&parseInt(b.width,10)<310)){b.width="310"}if(typeof b.height==D||(!/%$/.test(b.height)&&parseInt(b.height,10)<137)){b.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var f=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+f+"&MMdoctitle="+j.title;if(typeof d.flashvars!=D){d.flashvars+="&"+ac}else{d.flashvars=ac}if(M.ie&&M.win&&e.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);e.parentNode.insertBefore(Y,e);e.style.display="none";(function(){if(e.readyState==4){e.parentNode.removeChild(e)}else{setTimeout(arguments.callee,10)}})()}u(b,d,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(a){var b=C("div");if(M.win&&M.ie){b.innerHTML=a.innerHTML}else{var Y=a.getElementsByTagName(r)[0];if(Y){var c=Y.childNodes;if(c){var X=c.length;for(var Z=0;Z<X;Z++){if(!(c[Z].nodeType==1&&c[Z].nodeName=="PARAM")&&!(c[Z].nodeType==8)){b.appendChild(c[Z].cloneNode(true))}}}}}return b}function u(a,b,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof a.id==D){a.id=Y}if(M.ie&&M.win){var d="";for(var f in a){if(a[f]!=Object.prototype[f]){if(f.toLowerCase()=="data"){b.movie=a[f]}else{if(f.toLowerCase()=="styleclass"){d+=' class="'+a[f]+'"'}else{if(f.toLowerCase()!="classid"){d+=" "+f+'="'+a[f]+'"'}}}}}var g="";for(var h in b){if(b[h]!=Object.prototype[h]){g+='<param name="'+h+'" value="'+b[h]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+d+">"+g+"</object>";N[N.length]=a.id;X=c(a.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var i in a){if(a[i]!=Object.prototype[i]){if(i.toLowerCase()=="styleclass"){Z.setAttribute("class",a[i])}else{if(i.toLowerCase()!="classid"){Z.setAttribute(i,a[i])}}}}for(var j in b){if(b[j]!=Object.prototype[j]&&j.toLowerCase()!="movie"){e(Z,j,b[j])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var a=C("param");a.setAttribute("name",X);a.setAttribute("value",Y);Z.appendChild(a)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(a,Y,b,c){if(M.ie&&M.mac){return}var d=j.getElementsByTagName("head")[0];if(!d){return}var X=(b&&typeof b=="string")?b:"screen";if(c){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=d.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(a,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(a+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var a=I.length;for(var b=0;b<a;b++){I[b][0].detachEvent(I[b][1],I[b][2])}var Z=N.length;for(var c=0;c<Z;c++){y(N[c])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobjectAbd){swfobjectAbd[X]=null}swfobjectAbd=null})}}();return{registerObject:function(a,X,b,Z){if(M.w3&&a&&X){var Y={};Y.id=a;Y.swfVersion=X;Y.expressInstall=b;Y.callbackFn=Z;o[o.length]=Y;w(a,false)}else{if(Z){Z({success:false,id:a})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(g,h,i,j,Y,k,Z,l,m,n){var X={success:false,id:h};if(M.w3&&!(M.wk&&M.wk<312)&&g&&h&&i&&j&&Y){w(h,false);K(function(){i+="";j+="";var a={};if(m&&typeof m===r){for(var b in m){a[b]=m[b]}}a.data=g;a.width=i;a.height=j;var c={};if(l&&typeof l===r){for(var d in l){c[d]=l[d]}}if(Z&&typeof Z===r){for(var e in Z){if(typeof c.flashvars!=D){c.flashvars+="&"+e+"="+Z[e]}else{c.flashvars=e+"="+Z[e]}}}if(F(Y)){var f=u(a,c,h);if(a.id==h){w(h,true)}X.success=true;X.ref=f}else{if(k&&A()){a.data=k;P(a,c,h,n);return}else{w(h,true)}}if(n){n(X)}})}else{if(n){n(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,a,X,Y){if(M.w3&&A()){P(Z,a,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(a,Z,Y,X){if(M.w3){v(a,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(a){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(a==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==a){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(a){var b="";var c,chr2,chr3,enc1,enc2,enc3,enc4;var i=0;a=Base64._utf8_encode(a);while(i<a.length){c=a.charCodeAt(i++);chr2=a.charCodeAt(i++);chr3=a.charCodeAt(i++);enc1=c>>2;enc2=((c&3)<<4)|(chr2>>4);enc3=((chr2&15)<<2)|(chr3>>6);enc4=chr3&63;if(isNaN(chr2)){enc3=enc4=64}else if(isNaN(chr3)){enc4=64}b=b+this._keyStr.charAt(enc1)+this._keyStr.charAt(enc2)+this._keyStr.charAt(enc3)+this._keyStr.charAt(enc4)}return b},decode:function(a){var b="";var c,chr2,chr3;var d,enc2,enc3,enc4;var i=0;a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(i<a.length){d=this._keyStr.indexOf(a.charAt(i++));enc2=this._keyStr.indexOf(a.charAt(i++));enc3=this._keyStr.indexOf(a.charAt(i++));enc4=this._keyStr.indexOf(a.charAt(i++));c=(d<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;b=b+String.fromCharCode(c);if(enc3!=64){b=b+String.fromCharCode(chr2)}if(enc4!=64){b=b+String.fromCharCode(chr3)}}b=Base64._utf8_decode(b);return b},_utf8_encode:function(a){a=a.replace(/\r\n/g,"\n");var b="";for(var n=0;n<a.length;n++){var c=a.charCodeAt(n);if(c<128){b+=String.fromCharCode(c)}else if((c>127)&&(c<2048)){b+=String.fromCharCode((c>>6)|192);b+=String.fromCharCode((c&63)|128)}else{b+=String.fromCharCode((c>>12)|224);b+=String.fromCharCode(((c>>6)&63)|128);b+=String.fromCharCode((c&63)|128)}}return b},_utf8_decode:function(a){var b="";var i=0;var c=c1=c2=0;while(i<a.length){c=a.charCodeAt(i);if(c<128){b+=String.fromCharCode(c);i++}else if((c>191)&&(c<224)){c2=a.charCodeAt(i+1);b+=String.fromCharCode(((c&31)<<6)|(c2&63));i+=2}else{c2=a.charCodeAt(i+1);c3=a.charCodeAt(i+2);b+=String.fromCharCode(((c&15)<<12)|((c2&63)<<6)|(c3&63));i+=3}}return b}};(function(){var d='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');Math.uuid=function(a,b){var c=d,uuid=[],i;b=b||c.length;if(a){for(i=0;i<a;i++)uuid[i]=c[0|Math.random()*b]}else{var r;uuid[8]=uuid[13]=uuid[18]=uuid[23]='-';uuid[14]='4';for(i=0;i<36;i++){if(!uuid[i]){r=0|Math.random()*16;uuid[i]=c[(i==19)?(r&0x3)|0x8:r]}}}return uuid.join('')};Math.uuidFast=function(){var a=d,uuid=new Array(36),rnd=0,r;for(var i=0;i<36;i++){if(i==8||i==13||i==18||i==23){uuid[i]='-'}else if(i==14){uuid[i]='4'}else{if(rnd<=0x02)rnd=0x2000000+(Math.random()*0x1000000)|0;r=rnd&0xf;rnd=rnd>>4;uuid[i]=a[(i==19)?(r&0x3)|0x8:r]}}return uuid.join('')};Math.uuidCompact=function(){return'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){var r=Math.random()*16|0,v=c=='x'?r:(r&0x3|0x8);return v.toString(16)})}})();(function(){CClass=function(){};CClass.create=function(constructor){var k=this;c=function(){this._super=k;var c=constructor.apply(this,arguments),self=this;for(key in c)(function(a,b){self[key]=typeof a!="function"||typeof b!="function"?a:function(){this._super=b;return a.apply(this,arguments)}})(c[key],self[key])};c.prototype=new this;c.prototype.constructor=c;c.extend=this.extend||this.create;return c}})();var AmbientVNPCControl=CClass.create(function(){var t;var bf=false;var bg=document.documentElement.clientWidth;var bh=window.innerHeight||document.documentElement.clientHeight;var bi='AbdPopupMaxBottom';var bj='AbdPopupAdLeftBottom';var bk='AbdPopupAdRightBottom';var bl='AbdPopupAdWrapperBottom';var bm='AbdPopupAdMinBottom';var bn='AbdFloatingAd';var bo='FloatingAdImage';var bp='FloatingAdControl';var bq='ControlMin';var br='ControlClose';var bs='AbdSlidingAd';var bt='SlidingAdImage';var bu='SlidingAdControl';var bv='ControlBar';var bw='AbdOverlay';var bx='AbdPopupAdOverLay';var by='myContent';var bz='';var bA=VNPCMedia+'flash/expressInstall.swf';var bB='likeFaceAmbientCover';var bC='120';var bD='20';var bE='followTwitterAmbientCover';var bF='60';var bG='20';var bH='http://ambientdigitalgroup.com';var bI='abdInfo';return{rotatorAd:function(c,a){var b=this.getCookie(c);var l=a.length;b=new Number(b);if(b>=l)b=0;document.write(a[b]);this.setCookie(c,b+1,365)},rotatorPercentAd:function(c,a,p,b){var d=this.getCookie(c);var e=new Array();var l=a.length;var n=0;for(var i=0;i<l;i++){for(var j=0;j<p[i];j++){e[n]=a[i];n++}}if(d===null||d=='')d=0;d=new Number(d);if(d>=e.length)d=0;if(e.length>0){if(b!=''){AbdVNPC.remove(b);document.write('<div id="'+b+'">'+e[d]+'</div>')}else document.write(e[d]);this.setCookie(c,d+1,365)}},randS:function(j){var r='';for(i=0;i<j;i++){r+=Math.floor(Math.random()*9)}return r},setCookie:function(c,v,a){var b=new Date();b.setDate(b.getDate()+a);document.cookie=c+"="+escape(v)+((a==null)?"":"; expires="+b.toUTCString())},getCookie:function(c){if(document.cookie.length>0){cs=document.cookie.indexOf(c+"=");if(cs!=-1){cs=cs+c.length+1;ce=document.cookie.indexOf(";",cs);if(ce==-1)ce=document.cookie.length;return unescape(document.cookie.substring(cs,ce))}}return""},setControl:function(a,b){var a=swfobjectAbd.getObjectById(a);if(a&&typeof a.JStoASviaExternalInterface!="undefined")a.JStoASviaExternalInterface(b);return},callControl:function(a,b,c,d){ract=(b=='min')?'max':'min';time=(b=='min')?d:c;this.setControl(a,b);clearTimeout(t);t=setTimeout("AbdVNPC.callControl('"+a+"', '"+ract+"', "+c+", "+d+");",time)},rectClip:function(a,b){AbdVNPC.style(a).clip='rect('+b+')'},rectExpand:function(a,b,c,w,h,d,e){var f=c.split('-');if(f.length==1){var g=(b=='pre')?w:d;var i=0;if(f[0]=='top'){var j=0;var k=(b=='pre')?h:e}else{var j=(b=='pre')?e-h:0;var k=e}}else{if(f[0]=='left'){var g=(b=='pre')?w:d;var i=0}else{var g=d;var i=(b=='pre')?d-w:0}if(f[1]=='top'){var j=0;var k=(b=='pre')?h:e}else if(f[1]=='bottom'){var j=(b=='pre')?e-h:0;var k=e}else{var j=(b=='pre')?(e-h)/2:0;var k=(b=='pre')?(e-h)/2+h:e}}this.rectClip(a,j+'px '+g+'px '+k+'px '+i+'px')},rectAd:function(a,b,c,d,w,h,e,f,g){var i=c.split('-');var e=(e==0)?w:e;var f=(f==0)?h:f;if(i.length==1){var j=w;var k=0;if(i[0]=='top'){var l=0;var m=(d=='min')?g:h}else{var l=(d=='min')?f-g:f-h;var m=f}}else{if(i[0]=='left'){var j=(b=='top-down')?w:((d=='min')?g:w);var k=0}else{var j=e;var k=(b=='top-down')?e-w:((d=='min')?e-g:e-w)}if(i[1]=='top'){var l=0;var m=(b=='top-down')?((d=='min')?g:h):h}else if(i[1]=='bottom'){var l=(b=='top-down')?((d=='min')?f-g:f-h):f-h;var m=f}else{var l=(f-h)/2;var m=(f-h)/2+h}}this.rectClip(a,l+'px '+j+'px '+m+'px '+k+'px')},generatorFlashAd:function(a,b,w,h,c,e,f,g,i,j,k,l,m,n,o,p,q,r,s,t,u,v,x,y){var z=bz;if(g!=''){var A='<a href="javascript: trackingAbdClick'+k+'();"><img src="'+g+'" width="'+w+'" height="'+h+'" border="0" /></a>';switch(o){case'background':var B=g.split('$');var C=B[0];var D=B[0].substring(0,B[0].length-14)+B[1];z='<div id="AbdBackgroundLeftAd" style="display:block;">'+'<img src="'+C+'" width='+w+' height='+h+' />'+'</div>'+'<div id="AbdBackgroundRightAd" style="display:block;">'+'<img src="'+D+'" width='+w+' height='+h+' />'+'</div>';break;case'in_page':z='<div id="abdInPageAdNoFlash">'+A+'</div>';break;case'popup':var E=y.split('-');var F=(E[0]=='left')?'right':'left';var G=(E[1]=='top')?'bottom':'top';var H=(E[0]=='left')?((E[1]=='top')?'right':'left'):((E[1]=='top')?'left':'right');var I='<a id = "'+bI+'" style = "'+H+':0px;" onmouseover = "AbdVNPC.showInfo(\''+H+'\');" onmouseout = "AbdVNPC.hideInfo(\''+H+'\');" href="'+bH+'" target="_blank" class="'+bI+H+'"></a>';if(p=='top-down'){var J='<div id="ControlClose" class="FloatingAdClose'+E[0]+'" onclick="AbdVNPC.closeFloatingAd(\''+a+'\');"></div>';var K='<div id="'+bq+'" class="FloatingAdMax'+E[0]+'" onclick="AbdVNPC.maxFloatingAd(\''+a+'\', \''+y+'\');"></div>';var L='<div class="FloatingAdMaxAdd'+E[0]+'" style="width:'+(w-260)+'px;"></div>';var M=(E[0]=='left')?K+L+J:J+L+K;var N='<div id="'+bp+'" style="width:'+w+'px;">'+M+'</div>';if(E.length==1)var O='';else var O='<a href="javascript:void(0)" onclick="AbdVNPC.minFloatingAd(\''+a+'\', 0);" id="abdMinButton'+E[1]+'" class= "abdMinButton" title="Min Ads" style="'+G+':0px;'+F+':0px;"></a>';var P='<div id="'+bo+'" style="width:'+w+'px;height:'+h+'px">'+A+O+I+'</div>';z='<div id="'+bn+'" style="overflow:hidden;width:'+w+'px;height:'+h+'px" onmouseover = "AbdVNPC.mouseStatus(true);" onmouseout = "AbdVNPC.mouseStatus(false);">'+P+N+'</div>'}else{var Q=(E[1]=='center')?'bottom':E[1];var R='<div id="'+br+'" class="SlidingAdClose'+Q+'" onclick="AbdVNPC.closeSlidingAd(\''+a+'\');"></div>';var S='<div id="'+bv+'" class="SlidingAdBarMin'+Q+'" onclick="AbdVNPC.maxSlidingAd(\''+a+'\', \''+y+'\');"></div>';var T='<div class="SlidingAdBarMinAdd'+Q+'" style="height:'+(h-230)+'px;"></div>';var M=(E[1]=='top')?S+T+R:R+T+S;var U='<div id="'+bu+'" style="height:'+h+'px">'+M+'</div>';var V='<a href="javascript:void(0)" onclick="AbdVNPC.minSlidingAd(\''+a+'\', \''+y+'\', 0);" id="abdMinButton'+E[0]+'" class="abdMinButton" title="Min Ads" style="'+G+':0px;"></a>';var W='<div id="'+bt+'" style="width:'+w+'px;height:'+h+'px">'+A+V+I+'</div>';z='<div id="'+bs+'" style="overflow:hidden;width:'+w+'px;height:'+h+'px" onmouseover = "AbdVNPC.mouseStatus(true);" onmouseout = "AbdVNPC.mouseStatus(false);">'+W+U+'</div>'}break}}var M='<div id="'+by+a+'">'+z+'</div>';if(o=='in_page'){if(i==''){var d=AbdVNPC.create('div',a,'display:none;width:'+w+'px;height:'+h+'px;',M);AbdVNPC.append(d)}else{var d=AbdVNPC.get(a);AbdVNPC.setStyle(a,"width:"+w+"px; height:"+h+"px;position:relative;background-image:url("+g+");overflow:hidden");if(u){M+='<div class="abdAdsBy"><a class="abdButtonLink" href=" '+bH+' " target="_blank">AdsByAmbientDigital</a></div>'}d.innerHTML=M}}else{if(y=='bottom'||y=='top'){if(y=='top'){bl='AbdPopupAdWrapperTop';bj='AbdPopupAdLeftTop';bk='AbdPopupAdRightTop';bm='AbdPopupAdMinTop';bi='AbdPopupMaxTop'}if(!AbdVNPC.get(bi)){var X=AbdVNPC.create('div',bi);X.className='AbdPopupMax';AbdVNPC.append(X);X.onclick=function(){AbdVNPC.maxPopupBottom(a)}}if(!AbdVNPC.get(bj)){var Y=AbdVNPC.create('div',bj);Y.className='AbdPopupAdLeft';AbdVNPC.append(Y)}if(!AbdVNPC.get(bk)){var Z=AbdVNPC.create('div',bk);Z.className='AbdPopupAdRight';AbdVNPC.append(Z)}if(!AbdVNPC.get(bl)){var bJ=AbdVNPC.create('div',bl);bJ.className='AbdPopupAdWrapper';AbdVNPC.append(bJ)}if(!AbdVNPC.get(bm)){var bK=AbdVNPC.create('div',bm);bK.className='AbdPopupAdMin';AbdVNPC.append(bK);bK.onclick=function(){AbdVNPC.minPopupBottom(a,0)}}if(AbdVNPC.get(a))AbdVNPC.remove(a);var d=AbdVNPC.create('div',a);var bJ=AbdVNPC.get(bl);bJ.appendChild(d)}else{if(AbdVNPC.get(a))AbdVNPC.remove(a);var d=AbdVNPC.create('div',a);AbdVNPC.append(d)}if(v!='')d.onmouseover=v;if(x!='')d.onmouseout=x;AbdVNPC.setStyle(a,"display:none;min-width:"+w+"px;min-height:"+h+"px;");d.innerHTML=M}if(c!=0)w=c;if(e!=0)h=e;var bL={abdTitle:i,abdCId:j,abdBId:k,abdPId:l,abdWId:m,abdZId:n,abdEffect:o,abdShowAdsLink:u,abdGeo:t,abdDomain:Base64.encode(q),abdLandingPage:Base64.encode(r)};var bM={allowScriptAccess:"always",allowDomain:"*",quality:"high",wmode:s};var bN={id:b,name:b};swfobjectAbd.embedSWF(f,by+a,w,h,"9.0.0",bA,bL,bM,bN)},minPopupBottom:function(a,b){if(b==0||bf==false){AbdVNPC.hide(bj);AbdVNPC.hide(bl);AbdVNPC.hide(bm);AbdVNPC.hide(bk);AbdVNPC.hide(a);AbdVNPC.show(bi);AbdVNPC.hideButtonSocial()}else{clearTimeout(t);t=setTimeout("AbdVNPC.minPopupBottom('"+a+"', '"+b+"');",b)}},maxPopupBottom:function(a){AbdVNPC.show(bj);AbdVNPC.show(bl);AbdVNPC.show(bm);AbdVNPC.show(bk);AbdVNPC.show(a);AbdVNPC.hide(bi);AbdVNPC.showButtonSocial()},showInfo:function(a){var b='ads_info_ambient_button_'+a;AbdVNPC.style(bI).background="url('"+VNPCMedia+"pic/"+b+".png') no-repeat";AbdVNPC.style(bI).width='110px'},hideInfo:function(a){var b='ads_info_button_'+a;AbdVNPC.style(bI).background="url('"+VNPCMedia+"pic/"+b+".png') no-repeat";AbdVNPC.style(bI).width='19px'},generatorFlashDefault:function(a,b,w,h,c,d,e,f){var g=bz;if(d!='')g='<div id="abdDefaultNoFlash"><img src="'+d+'" width="'+w+'" height="'+h+'" border="0" /></div>';var i='<div id="'+by+a+'">'+g+'</div>';AbdVNPC.html(a,i);AbdVNPC.setStyle(a,'width:'+w+'px;height:'+h+'px;');var j={abdUserPhone:e,abdGeo:f};var k={allowScriptAccess:"always",allowDomain:"*",quality:"high",wmode:"transparent"};var l={id:b,name:b};swfobjectAbd.embedSWF(c,by+a,w,h,"9.0.0",bA,j,k,l)},generatorHtmlAd:function(a,b,c,w,h){if(c=='in_page')document.write('<div id="'+a+'">'+b+'</div>');else if(c=='popup')document.write('<div id="'+a+'">'+b);else document.write('<div id="'+a+'">'+b);if(w>0){var d=this.isFlash();if(d==false)this.fixHtmlBkads(a,w,h)}},fixHtmlBkads:function(a,w,h){var b=document.getElementById(a).getElementsByTagName('img')[0];if(b!=null){b.style.width=w+'px';b.style.height=h+'px'}else{setTimeout('AbdVNPC.fixHtmlBkads("'+a+'", '+w+', '+h+');',500)}},generatorImageAd:function(a,w,h,b,c){var s='<a href="javascript:void(0)" onclick="trackingAbdClick'+c+'();"><img src="'+b+'" width="'+w+'" height="'+h+'" border="0" /></a>';AbdVNPC.html(a,s)},generatorSSP:function(s){document.write('<script type="text/javascript" src="'+s+'"></script>')},getPosition:function(b,w,h){var c=0;var d='right';var e='px';var f=0;var g='bottom';var i='px';switch(b){case'right-center':f=((bh-h)/2)/bh*100;i='%';break;case'right-top':g='top';break;case'top':c=((bg-w)/2)/bg*100;e='%';g='top';break;case'left-top':d='left';g='top';break;case'left-center':f=((bh-h)/2)/bh*100;i='%';d='left';break;case'left-bottom':d='left';break;case'bottom':c=((bg-w)/2)/bg*100;e='%';break}a=new Array(d,c,e,g,f,i);return a},showPopupAd:function(b,c,w,h,d,e,f,g,i,j){var k=(d>0)?d:w;var l=(e>0)?e:h;var m=this.isFlash();if(m==true)var a=AbdVNPC.getPosition(c,k,l);else var a=AbdVNPC.getPosition(c,w,h);var n=a[0]+':'+a[1]+a[2]+';'+a[3]+':'+a[4]+a[5]+';display:block;line-height:normal;';var s=AbdVNPC.get(b).getAttribute('style');AbdVNPC.setStyle(b,n);AbdVNPC.show(b);clearTimeout(t);if(m==true){t=setTimeout("AbdVNPC.callControl('"+f+"', '"+g+"', "+i+", "+j+");",i)}else{if(AbdVNPC.get(bn)!=null){var o=c.split('-');if(o.length==1)t=setTimeout("AbdVNPC.minPopupBottom('"+b+"', '"+i+"');",i);else t=setTimeout("AbdVNPC.minFloatingAd('"+b+"', '"+i+"');",i)}else if(AbdVNPC.get(bs)!=null){t=setTimeout("AbdVNPC.minSlidingAd('"+b+"', '"+c+"', '"+i+"');",i)}}},isFlash:function(){if(typeof navigator.plugins!="undefined"&&typeof navigator.plugins["Shockwave Flash"]=="object"){return true}else if(typeof window.ActiveXObject!="undefined"){try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash");return true}catch(e){}};return false},closeAd:function(a,b,c){AbdVNPC.hide(a);AbdVNPC.hideButtonSocial();clearTimeout(t);t=setTimeout(c+"()",b)},minFloatingAd:function(a,b){if(b==0||bf==false){AbdVNPC.hide(bo);AbdVNPC.show(bp);var c=AbdVNPC.get(bp).offsetHeight;var w=AbdVNPC.get(bn).offsetWidth;AbdVNPC.style(bn).height=c+'px';AbdVNPC.rectClip(a,'0px '+w+'px '+c+'px '+'0px');AbdVNPC.hideButtonSocial()}else{clearTimeout(t);t=setTimeout("AbdVNPC.minFloatingAd('"+a+"', '"+b+"');",b)}},maxFloatingAd:function(a,b){AbdVNPC.hide(bp);AbdVNPC.show(bo);var w=AbdVNPC.get(bn).offsetWidth;var h=AbdVNPC.get(bo).offsetHeight;AbdVNPC.style(bn).height=h+'px';AbdVNPC.rectClip(a,'0px '+w+'px '+h+'px '+'0px');AbdVNPC.showButtonSocial();clearTimeout(t);t=setTimeout("AbdVNPC.minFloatingAd('"+a+"', 9000);",9000)},closeFloatingAd:function(a){AbdVNPC.hide(a);AbdVNPC.hideButtonSocial();clearTimeout(t)},mouseStatus:function(a){bf=a},minSlidingAd:function(a,b,c){if(c==0||bf==false){AbdVNPC.show(bu);var d=AbdVNPC.get(bu).offsetWidth;var h=AbdVNPC.get(bs).offsetHeight;var e=b.split('-');if(e[0]=='right')AbdVNPC.style(bs).width=d+'px';AbdVNPC.hide(bt);AbdVNPC.rectClip(a,'0px '+d+'px '+h+'px '+'0px');AbdVNPC.hideButtonSocial()}else{clearTimeout(t);t=setTimeout("AbdVNPC.minSlidingAd('"+a+"', '"+b+"', '"+c+"');",c)}},maxSlidingAd:function(a,b){AbdVNPC.show(bt);var w=AbdVNPC.get(bt).offsetWidth;var h=AbdVNPC.get(bs).offsetHeight;var c=b.split('-');if(c[0]=='right')AbdVNPC.style(bs).width=w+'px';AbdVNPC.rectClip(a,'0px '+w+'px '+h+'px '+'0px');AbdVNPC.hide(bu);AbdVNPC.showButtonSocial();clearTimeout(t);t=setTimeout("AbdVNPC.minSlidingAd('"+a+"', '"+b+"', 9000)",9000)},closeSlidingAd:function(a){AbdVNPC.hide(a);AbdVNPC.hideButtonSocial();clearTimeout(t)},setDelay:function(a,b,c,d){t=setTimeout("AbdVNPC.callControl('"+a+"', '"+b+"', "+c+", "+d+");",c)},clearDelay:function(){clearTimeout(t)},getOverlay:function(o){if(o==10){var a=1;var b=100}else{var a='0.'+o;var b=o+'0'}var c=new Array(a,b);return c},showOverlay:function(a,b,c,d,e,f){var g=bh-d;var r=(bg-c)/2;switch(b){case'top':g=0;break;case'center':g=(bh-d)/2;break;case'bottom_right':r=0;break;case'top_right':g=0;r=0;break}var h=AbdVNPC.getOverlay(e);AbdVNPC.setStyle(bw,'top:'+g+'px;right:'+r+'px;width:'+c+'px;height:'+d+'px;display:block;');var i=AbdVNPC.create('div',bx,'opacity:'+h[0]+';filter: alpha(opacity='+h[1]+');display:block;');AbdVNPC.append(i);if(f!='')setTimeout(f+"()",60)},replayOverlay:function(a,b,c,d){if(d!='in_page')AbdVNPC.hide(a);clearTimeout(t);if(c!='')setTimeout(c+"()",b)},changeBgOverlay:function(a,b,s,c,d,e){var f=AbdVNPC.getOverlay(b);AbdVNPC.setStyle(bx,'opacity:'+f[0]+';filter:alpha(opacity='+f[1]+');');if(s){setTimeout("AbdVNPC.remove('"+bw+"');",a);setTimeout("AbdVNPC.remove('"+bx+"');",a)}if(c!=''){if(d=='in_page')c+"()";else setTimeout(c+"()",a)}},showBgAd:function(a,b){AbdVNPC.show(a);AbdVNPC.show(b)},showExpand:function(a,b,c){var d=AbdVNPC.get(a);var e=AbdVNPC.get(b);var w=parseInt(e.style.width)-parseInt(d.style.width);var f=0;var g=0;do{f+=d.offsetLeft;g+=d.offsetTop}while(d=d.offsetParent);var h=parseInt(g);switch(c){case'left':var l=parseInt(f)-w;break;default:var l=parseInt(f)}AbdVNPC.setStyle(b,'left:'+l+'px;top:'+h+'px;position:absolute;display:block;z-index:2147483640 !important')},create:function(a,b,s,c){var d=document.createElement(a);if(b)d.id=b;if(s)d.setAttribute('style',s);if(c)d.innerHTML=c;return d},get:function(a){return document.getElementById(a)},style:function(a){return document.getElementById(a).style},setClass:function(a,c){AbdVNPC.get(a).setAttribute('class',c)},setStyle:function(a,s){AbdVNPC.get(a).setAttribute('style',s)},remove:function(a){e=AbdVNPC.get(a);e.parentNode.removeChild(e)},show:function(a){AbdVNPC.style(a).display='block'},hide:function(a){AbdVNPC.style(a).display='none'},html:function(a,s){AbdVNPC.get(a).innerHTML=s},append:function(d,a){if(a){var r=a.parentNode;r.insertBefore(d,a)}else document.body.appendChild(d)},initVideoInline:function(a,w,h,b,c,e,f,g,i,j,k,l,m,n){var d=AbdVNPC.create('div',b,'position:relative;top:0;bottom:0;');var o=AbdVNPC.get(a);var p=AbdVNPC.create('div','AbdPlayer'+b,'position:relative;width:'+w+'px;height:'+h+'px;','<div id="'+by+b+'"><p>'+bz+'</p></div>');AbdVNPC.append(d,o);d.appendChild(p);d.appendChild(o);var s=o.getAttribute('style');if(s==null)s='';s='display: none;'+s;AbdVNPC.setStyle(a,s);var q=VNPCDel+'ovavideoad/wid_'+e+'/zid_'+c+'/cid_'+f+'/bid_'+g+'/eff_div/';if(n!="")q=VNPCDel+'ovavideoadAS/wid_'+e+'/zid_'+c+'/eff_div/as_'+n+'/';var r={autostart:''+i+'',volume:j,duration:k,controlbar:'none',stretching:'exactfit',plugins:m+'flash/jwplayer/ova-jw.swf',config:(l!='')?l:q,height:'100%',width:'100%'};var t={allowScriptAccess:'always',allowDomain:'*',quality:'high',wmode:'opaque',allowfullscreen:'true',seamlesstabbing:'true'};var u={id:'Abd'+b+'',name:'Abd'+b+''};swfobjectAbd.embedSWF(m+'flash/jwplayer/player.swf',by+b,'100%','100%',"9.0.0",bA,r,t,u)},removeVideoInline:function(a,b){var c=AbdVNPC.get(a).innerHTML;var s=AbdVNPC.get(a).getAttribute('style');s=s.replace('DISPLAY','display');s=s.replace('display: none','display: block');var e=AbdVNPC.create('div',a,s,c);var d=AbdVNPC.get(b);AbdVNPC.append(e,d);AbdVNPC.remove(b)},initVideoOverlay:function(a,w,h,b,c,e,f,g,i){var j=AbdVNPC.get(a);AbdVNPC.setStyle(a,'position:relative;width:'+w+'px;height:'+h+'px');var k=(b>w)?w:b;var l=(c>h)?c:h;switch(i){case'image':var m='<a href="javascript: trackingAbdClick'+f+'();"><img src="'+g+'" width="'+k+'" height="'+l+'" border="0"></a>';break;case'flash':var m='<div id="'+by+e+'"><p>'+bz+'</p></div>';break;case'html':var m='<center><a href="javascript: trackingAbdClick'+f+'();">'+g+'</a></center>';break}m+='</div>';var d=AbdVNPC.create('div',e,'position:absolute; bottom:40px; text-align:center; width:100%',m);AbdVNPC.append(d,j.firstChild);if(i=='flash'){var n={abdBId:f};var o={allowScriptAccess:"always",allowDomain:"*",quality:"high",wmode:'transparent'};var p={id:"Overlay"+f,name:"Overlay"+f};swfobjectAbd.embedSWF(g,by+e,k,l,"9.0.0",bA,n,o,p)}setTimeout('AbdVNPC.remove("'+e+'");',15000)},createButtonSocial:function(b,c,d,e,w,h,f){var a=AbdVNPC.getPosition(e,w,h);var g=(a[0]=='left')?'margin-left:5px;':'margin-right:-35px;';var i='margin-'+a[3]+':5px;';if(a[3]=='top')a[4]=h-30;var j=AbdVNPC.get(bB);var k='';switch(c){case'facebook':var s=a[0]+':'+a[1]+a[2]+';'+a[3]+':'+a[4]+a[5]+';'+g+i;if(f){s+='width:'+bC+'px !important; height:'+bD+'px; position:fixed; z-index: 2147483646; overflow:hidden;padding:0px; border:none;text-align:left;';var k='class="fb-like" data-href="'+d+'" data-send="false" data-layout="button_count" data-width="120" data-show-faces="false"';var d=''}break;case'twitter':if(f)var d='<a href="'+d+'" class="twitter-follow-button" data-show-count="false" data-show-screen-name="false" data-lang="en"></a>';g=(j!=null)?'margin-'+a[0]+':90px;':'margin-'+a[0]+':10px;';var s=a[0]+':'+a[1]+a[2]+';'+a[3]+':'+a[4]+a[5]+';'+g+i;break}document.write('<div id="'+b+'" style="'+s+'" '+k+'>'+d+'</div>')},initButtonLike:function(a,w,h,s,b,x,y){if(s=='true'){AbdVNPC.style(a).width=w+'px';AbdVNPC.style(a).height=h+'px';var c=b.substr(0,b.indexOf('-'));switch(c){case'left':AbdVNPC.style(a).marginLeft=x+'px';break;case'right':AbdVNPC.style(a).marginRight=x+'px';break}AbdVNPC.style(a).marginBottom=y+'px'}else{AbdVNPC.style(a).width='1px';AbdVNPC.style(a).height='1px'}},toggleButtonSocial:function(a,w,h){AbdVNPC.style(a).width=w+'px';AbdVNPC.style(a).height=h+'px'},initFB:function(a,b,c,d,e,f){document.write('<div id="fb-root"></div>');document.write('<script>(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//connect.facebook.net/en_US/all.js#xfbml=1"; fjs.parentNode.insertBefore(js, fjs);}(document, "script", "facebook-jssdk"));</script>');setTimeout('AbdVNPC.trackFB("'+a+'", '+b+', '+c+', '+d+', '+e+', '+f+');',1500)},trackFB:function(a,b,c,d,e,f){var g='FB.Event.subscribe("edge.create", function(targetUrl) { '+'if (targetUrl == "'+a+'") '+'AbdVNPCTracking.Interaction({"cid": '+b+', "bid": '+c+', "pid": '+d+', "wid": '+e+', "zid": '+f+', "sname": "Like", "icustom": 1, "rd": 0}); '+'}); '+'FB.Event.subscribe("edge.remove", function(targetUrl) { '+'if (targetUrl == "'+a+'") '+'AbdVNPCTracking.Interaction({"cid": '+b+', "bid": '+c+', "pid": '+d+', "wid": '+e+', "zid": '+f+', "sname": "Dislike", "icustom": 1, "rd": 0}); '+'});';var h=AbdVNPC.create('script','','',g);AbdVNPC.append(h)},initTW:function(a,b,c,d,e,f){document.write('<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>');setTimeout('AbdVNPC.trackTW("'+a+'", '+b+', '+c+', '+d+', '+e+', '+f+');',1500)},trackTW:function(a,b,c,d,e,f){var g='twttr.ready(function (twttr) { '+'twttr.events.bind("follow", function(ev){ '+'if (ev.data.screen_name == "'+a+'") '+'AbdVNPCTracking.Interaction({"cid": '+b+', "bid": '+c+', "pid": '+d+', "wid": '+e+', "zid": '+f+', "sname": "Follow", "icustom": 1, "rd": 0}); '+'}); '+'twttr.events.bind("unfollow", function(ev){ '+'if (ev.data.screen_name == "'+a+'") '+'AbdVNPCTracking.Interaction({"cid": '+b+', "bid": '+c+', "pid": '+d+', "wid": '+e+', "zid": '+f+', "sname": "Unfollow", "icustom": 1, "rd": 0}); '+'}); '+'});';var h=AbdVNPC.create('script','','',g);AbdVNPC.append(h)},initButtonSocial:function(a,w,h,s,b,x,y){if(s=='false'){AbdVNPC.style(a).width='0px';AbdVNPC.style(a).height='0px'}else{AbdVNPC.style(a).width=w+'px';AbdVNPC.style(a).height=h+'px';var c=b.split('-');var d=(c.length==1)?'right':c[0];switch(d){case'left':AbdVNPC.style(a).marginLeft=x+'px';break;case'right':AbdVNPC.style(a).marginRight=x+'px';break}AbdVNPC.style(a).marginBottom=y+'px'}},hideButtonSocial:function(){if(AbdVNPC.get(bB)!=null)AbdVNPC.toggleButtonSocial(bB,0,0);if(AbdVNPC.get(bE)!=null)AbdVNPC.toggleButtonSocial(bE,0,0)},showButtonSocial:function(){if(AbdVNPC.get(bB)!=null)AbdVNPC.toggleButtonSocial(bB,bC,bD);if(AbdVNPC.get(bE)!=null)AbdVNPC.toggleButtonSocial(bE,bF,bG)},trackingLink:function(a,b){if(document.location.protocol!='https:'){var c=document.createElement("iframe");c.id='trackIFrame';c.setAttribute('name','track'+a);c.setAttribute('frameborder','0');c.setAttribute('allowtransparency','true');c.setAttribute('height','0');c.setAttribute('width','0');c.setAttribute('marginheight','0');c.setAttribute('marginwidth','0');c.setAttribute('vspace','0');c.setAttribute('hspace','0');c.setAttribute('src',b);document.body.appendChild(c)}},getParentUrl:function(){var a=(parent!==window),parentUrl=null;if(a){parentUrl=document.referrer}return parentUrl}}});AbdVNPC=new AmbientVNPCControl;var AmbientVNPCTracking=CClass.create(function(){var d=function(s){var a=document.createElement("script");a.type="text/javascript";a.src=s;AbdVNPC.append(a)};var e=function(s){var a=new Image();a.src=s};return{Impression:function(a){var b='';for(x in a){b+=x+'_'+a[x]+'/'}link=VNPCImp+'adServer/act_impression/'+b+'cb_'+AbdVNPC.randS(6)+'/';return e(link)},Click:function(a){var b=false;var c='';for(x in a){if(x=='rd'&&a[x]==1){b=true}else{c+=x+'_'+a[x]+'/'}}link=VNPCCli+'adServer/act_click/'+c+'cb_'+AbdVNPC.randS(6)+'/';if(b)return window.open(link,'_blank');else return e(link)},Conversion:function(a){var b='';for(x in a){b+=x+'_'+a[x]+'/'}link=VNPCConv+'adServer/act_conversion/'+b+'cb_'+AbdVNPC.randS(6)+'/';return e(link)},VideoMetric:function(a){var b='';for(x in a){b+=x+'_'+a[x]+'/'}link=VNPCVideo+'adServer/act_video_metric/'+b+'cb_'+AbdVNPC.randS(6)+'/';return e(link)},Interaction:function(a){var b=false;var c='';for(x in a){if(x=='rd'&&a[x]==1){b=true}else{c+=x+'_'+a[x]+'/'}}link=VNPCVideo+'adServer/act_interaction/'+c+'cb_'+AbdVNPC.randS(6)+'/';if(b)return window.open(link,'_blank');else return e(link)},Link:function(a){link=a;return e(link)},Html:function(a){link=a;document.write(link)}}});AbdVNPCTracking=new AmbientVNPCTracking();var AmbientVNPCDelivery=CClass.create(function(){var c=(typeof swfobjectAbd!=='undefined')?swfobjectAbd.getFlashPlayerVersion():null;var d=(typeof swfobjectAbd!==null)?c.major:'';var e=Base64.encode(navigator.language||navigator.userLanguage);var f=(navigator.javaEnabled())?1:0;var g=Base64.encode(document.referrer);var h=encodeURIComponent(g);var i='';var j=AbdVNPC.getParentUrl();if(j!=null){var k=Base64.encode(j);var l=encodeURIComponent(k);i='purl_'+l+'/'}var m='sc_'+screen.width+'x'+screen.height+'/cd_'+screen.colorDepth+'/fl_'+d+'/lg_'+e+'/jv_'+f+'/urf_'+h+'/';var n=function(s){var a=true;if(navigator.appVersion.indexOf("MSIE 7.")!=-1)a=false;if(a){document.write('<script type="text/javascript" src="'+s+'"></script>')}};return{InPageAd:function(a){var b='';for(x in a){b+=x+"_"+a[x]+"/"}link=VNPCDel+'inpagead/'+b+m+'cb_'+AbdVNPC.randS(6)+'/';return n(link)},PopupAd:function(a){var b='';for(x in a){b+=x+"_"+a[x]+"/"}link=VNPCDel+'popupad/'+b+m+i+'cb_'+AbdVNPC.randS(6)+'/';return n(link)},BackgroundAd:function(a){var b='';for(x in a){b+=x+"_"+a[x]+"/"}link=VNPCDel+'backgroundad/'+b+m+'cb_'+AbdVNPC.randS(6)+'/';return n(link)},VideoAd:function(a){var b='';for(x in a){b+=x+"_"+a[x]+"/"}link=VNPCDel+'videoad/'+b+m+'cb_'+AbdVNPC.randS(6)+'/';return n(link)}}});AbdVNPCDelivery=new AmbientVNPCDelivery();if(typeof _abd!=='undefined'&&navigator.cookieEnabled){if(_abd.length>0){var i=_abd.length-1;var WebId=_abd[i][0];switch(_abd[i][1]){case'InPage':var ZoneId=_abd[i][2];var DivId=_abd[i][3];_abd.pop();try{AbdVNPCDelivery.InPageAd({"zid":ZoneId,"wid":WebId,"div":DivId})}catch(e){}break;case'Popup':var ZoneId=_abd[i][2];_abd.pop();try{AbdVNPCDelivery.PopupAd({"zid":ZoneId,"wid":WebId})}catch(e){}break;case'Video':var ZoneId=_abd[i][2];var DivId=_abd[i][3];var Width=_abd[i][4];var Height=_abd[i][5];_abd.pop();try{AbdVNPCDelivery.VideoAd({"zid":ZoneId,"wid":WebId,"div":DivId,"w":Width,"h":Height})}catch(e){}break;case'Background':var ZoneId=_abd[i][2];_abd.pop();try{AbdVNPCDelivery.BackgroundAd({"zid":ZoneId,"wid":WebId})}catch(e){}break}}}function rotatorAdNetwork(c,a){AbdVNPC.rotatorAd(c,a)};
//2015-03-20 11:00AM