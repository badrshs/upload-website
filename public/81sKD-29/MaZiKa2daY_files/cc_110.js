(function(){var n="0.1.37",a,e="undefined",t=25,r=parseInt(1e3/t),i=a,o={"function":!0,object:!0},s={DEBUG_MODE:!1,counterID:"110",instanceID:"externalConf###Instanceid"},u=function(n){return typeof n!==e},c="HISTATS_CANVAS_DEBUG_ON";s.DEBUG_MODE=u(window[c])&&1==window[c];var l=function(){return s.instanceID},d="_HistatsCounterGraphics_",f,h=function(){return d+s.counterID},v=function(n){return!("string"!=typeof n||""==n)},A=function(){try{s.DEBUG_MODE&&u(console)&&console.log.apply(this,arguments)}catch(n){}},g=function(e,t){var o=e||{};try{var c=function(n){var a="autostart";return"undefined"!=typeof n[a]&&n[a]===!0},l={ANIMATION_RUNNING_STATUS:!0,ANIMATION_STARTED:!1,AUTOSTART:c(o),_STOPPED:!1,INSTANCE_ID:"-"+parseInt(1e4*Math.random())},d=function(){return l.INSTANCE_ID},v=100,g=1,m=function(){return t.document},b=function(n){return u(n)&&!!m().getElementById(n)},p=function(n){i=t.setTimeout(n,r)},w=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||t.oRequestAnimationFrame||p,I=t["Date"]||{},O=function(n,a){for(var e in n)a.hasOwnProperty(e)&&(a[e]=n[e])};o.getInstanceID=d;var T=h();o.IS_HISTATS_CANVAS=!0,o.globalObjectName=T,o.$window=t;var B=function(n){return b(n)?m().getElementById(n):a},x={w:0,h:0,yBase:0,xBase:0,hasShadow:!1,hasLabel:!1,shadowOffsetX:2,shadowOffsetY:2,shadowBlur:1,doMouseOverOut:1},C={msLastFrameDrawn:0,msPerFrame:r,frameCounter:0,isInAnimationTransition:!1,animation_duration_inFrames:20,waitframesBetweenTwoAnimations:80,framesBetweenTwoAnimations:100,currentLoopFrame:0,autoTriggerTextChange_onFrame:a,customization:{}},N={domCanvasObject:null,canvas2dContext:null,canvasProperties:x},S=function(){var n={},e=n.hasOwnProperty,t=0,r=0,i={blockMessages:!1,recordMessages:!1,messageLog:[],printMessages:!1,messagePassedCount:0,subscribersCount:0,topicsCount:0,_topics:n},o=function(a){return e.call(n,a)},s=function(a){return i.printMessages&&console.log(d(),"addTopic",a),r++,i.topicsCount++,r>50&&A(d(),"Lot of topics registered!",a),n[a]=[]},u=function(a){return n[a]},c=function(a,e,r){i.printMessages&&console.log(d(),"subscribe",a,e,r),i.recordMessages&&i.messageLog.push(["subscribe",a,e,r]),r=r||v,o(a)||s(a);var c=u(a).push({callback:e,priority:e})-1;return t++,i.subscribersCount++,t>50&&A(d(),"Lot of topics registered!",a),{remove:function(){delete n[a][c]}}},l=function(n,a){var e="no-topic-found";n!=e&&f(e,{topic:n,info:a})},f=function(e,t){return i.messagePassedCount++,i.printMessages&&console.log(d(),"publish",e,t),i.recordMessages&&i.messageLog.push(["publish",e,t]),i.blockMessages?void 0:o(e)?(n[e].slice().sort(function(n,a){return n.priority-a.priority}).forEach(function(n){n.callback(t!=a?t:{})}),void 0):(l(e,t),void 0)},h=function(n,a){w(function(){f(n,a)})};return{subscribe:c,publish:f,publishAsync:h,debugObj:i}}(),y=function(){return s.counterID},F=function(){var n="siteId";return o[n]=o[n]||0},M=function(){var n="main_div_name";return o[n]||"histats_counter_"+F()+"_"+y()},E=[],_=function(){return f=M(),f},D=function(){return _()+"_canvas"},k=function(){return"http://www.histats.com/viewstats/?sid="+F()+"&ccid="+y()},L=function(){t.location=k()},P=function(){if(1==N.canvasProperties.doMouseOverOut){var n=z().canvasProperties;n.yBase=2,n.xBase=2,n.shadowOffsetX=0,n.shadowOffsetY=0}z().domCanvasObject.style.cursor="pointer"},R=function(){if(1==N.canvasProperties.doMouseOverOut){var n=z().canvasProperties;n.yBase=0,n.xBase=0,n.shadowOffsetX=2,n.shadowOffsetY=2}},U=function(){var n=z(),a=n.canvasProperties,e=n.canvas2dContext;e.shadowOffsetX=a.shadowOffsetX,e.shadowOffsetY=a.shadowOffsetY,e.shadowBlur=a.shadowBlur,e.shadowColor="rgba(0,0,0,0.2)"},H=function(){return B(_())},J=function(){var n=!!H();return n},G=function(){try{if(!J())return S.publish("error",{msg:"validateDomcontainer not found"}),void 0;var n=H(),a=z().canvasProperties,e='<canvas id="'+D()+'" width="'+a.w+'" height="'+a.h+'" ></canvas>',r='<a href="'+k()+'" target="_blank">'+e+"</a>";n.innerHTML=r,z().domCanvasObject=B(D());var i=z().domCanvasObject;z().canvas2dContext=i.getContext("2d"),"addEventListener"in t?(i.addEventListener("mouseover",function(){P()}),i.addEventListener("mouseout",function(){R()})):i.onclick=function(){L()}}catch(o){A(d(),"drawCanvas",o)}},V=function(){try{if(l.ANIMATION_STARTED)return;if(l._STOPPED)return;S.publish("draw-callback-requested-reconfiguration",{}),S.publish("starting_pre",{context:o}),l.ANIMATION_STARTED=!0,S.publish("started",{context:o}),S.publish("drawcanvas_pre",{context:o}),G(),S.publish("drawcanvas_post",{context:o}),Z(),S.publish("animationLoop_started",{context:o})}catch(n){A(d(),"startNow",n,n.message)}},Y=function(n,a,e){a.addEventListener?a.addEventListener(n,e,!1):a.attachEvent?a.attachEvent("on"+n,e):a[n]=e},X=function(){try{S.publish("appendedStart",{context:o,type:"animFrame"}),w(V)}catch(n){A(d(),"startAsap",n.message,n)}},j=function(n,a){E.push({name:n,callback:a})},K=function(){},q=function(){E.forEach(function(n){n.callback(o.getCanvas2dContext(),C,z())})},Q=function(){u(i)&&t.clearTimeout(i)},Z=function(){l._STOPPED||w(function(){an(q),l.ANIMATION_RUNNING_STATUS&&Z()})};S.subscribe("setAnimationProperties",function(n){O(n,C)}),S.subscribe("draw-callback-publish-reconfiguration",function(n){try{n.canvasCallbacks.forEach(function(n){E.push({name:n.name,callback:n.cb,priority:n.priority})}),E=E.slice().sort(function(n,a){return n.priority-a.priority})}catch(a){A(d(),"animationLoop",a.message,a)}}),S.subscribe("configuration-changed",function(n){E=[],S.publish("draw-callback-requested-reconfiguration",{})});var W=function(n){var a=n!=l.ANIMATION_RUNNING_STATUS;return a&&(0==l.ANIMATION_RUNNING_STATUS&&1==n,1==l.ANIMATION_RUNNING_STATUS&&0==n&&Q(),l.ANIMATION_RUNNING_STATUS=n),a},z=function(){return N},$=function(){var n=!1;0==C.frameCounter&&S.publish("FIRST-FRAME",{});var a=I.now(),e=a-C.msLastFrameDrawn;if(e>C.msPerFrame){var t=e%C.msPerFrame;C.msLastFrameDrawn=a-t,n=!0}return n},nn=function(){if(!(C.animation_duration_inFrames<1)){var n=C.animation_duration_inFrames+C.waitframesBetweenTwoAnimations;C.currentLoopFrame=C.frameCounter%n;var a=0==C.currentLoopFrame,e=C.currentLoopFrame>=C.animation_duration_inFrames;a&&(C.isInAnimationTransition=!0,S.publish("drawing-triggered-animation-start",C)),e&&C.isInAnimationTransition&&(C.isInAnimationTransition=!1,S.publish("drawing-triggered-animation-end",C))}},an=function(n){var a=$();a&&(C.frameCounter++,nn(),n())},en=function(n){return n(o.getCanvas2dContext())},tn=function(){var n=17,a=2,e=1,t=z().canvasProperties,r=0;t.hasShadow&&(r=r+a+e),t.hasLabel&&(t.h=t.h+n),t.w=t.w+r,t.h=t.h+r},rn=function(n){O(n,z().canvasProperties),tn()};S.subscribe("setCanvasProperties",rn,10);var on=function(){o.onCanvas2dContext(function(n){var a=z().canvasProperties;n.clearRect(0,0,a.w,a.h),a.hasShadow&&U()})};S.subscribe("clear-canvas-rectangle",on,10);var sn=function(n,a){z().hasShadow&&(n.shadowOffsetX=0,n.shadowOffsetY=0,n.shadowBlur=0,n.shadowColor="transparent")},un=function(n,e){e.autoTriggerTextChange_onFrame!==a&&e.currentLoopFrame==e.autoTriggerTextChange_onFrame&&S.publish("drawing-change-text",{})},cn=function(n){S.publish("draw-callback-publish-reconfiguration",{canvasCallbacks:[{cb:sn,priority:14,name:"stopApplyingShadowOnCanvas"},{cb:un,priority:5,name:"autoUpdateText"}]})};S.subscribe("draw-callback-requested-reconfiguration",cn,15),o.__CODE_VERSION=n,o.getCanvasObject=z,o.getCanvas2dContext=function(){return z().canvas2dContext},o.onCanvas2dContext=en,o.getXYCanvas=function(){return{x:z().canvasProperties.xBase,y:z().canvasProperties.yBase}},o.addDrawCallback=j,o.getCanvasProperties=function(){return z().canvasProperties},o.setCanvasProperties=function(n){for(var a in n)n.hasOwnProperty(a)&&(N.canvasProperties[a]=n[a])},o.updateCanvasProperties=function(n){o.setCanvasProperties(n(z().canvasProperties))},o.getAnimationFrames=function(){return C.frameCounter},o.getAnimationControl=function(){return C},o.setAnimationControl=function(n){for(var a in n)n.hasOwnProperty(a)&&(C[a]=n[a])},o.start=X,o.changeRunningStatus=W,o.getRunningStatus=function(){return l.ANIMATION_RUNNING_STATUS},o.eventBus=S,o.getDebugMode=function(){return s.DEBUG_MODE},function(){var n=this;n.IS_HISTATS_CANVAS||(n={});var a=n.bars={},e=!1,t=3,r=1,i=0,o=[2,5,10];n.eventBus.subscribe("set-bars-params",function(a){l(a),n.eventBus.publish("configuration-changed",{})});var s=[],u={xBase:5,yBase:13,hMin:2,hMax:10,w:4,barsColours:[["#3e8bfd","#2572e4"],["#feb23f","#dc901d"],["#d83f3f","#b41b1b"]],parent:n},c=function(){return u},l=function(n){for(var a in n)n.hasOwnProperty(a)&&(u[a]=n[a])},d=function(n){e=!0;for(var a=0;t>a;a++)n.push({x:a*(u.w+1),y:0,width:u.w,height:o[a],animateDirection:r,gradient:null,gradientStart:u.barsColours[a][0],gradientEnd:u.barsColours[a][1]})},f=function(a){var e=.5,t=a.height,o=n.getXYCanvas();a.animateDirection==r&&t>=u.hMax?a.animateDirection=i:a.animateDirection==i&&t<=u.hMin&&(a.animateDirection=r),t+=e*(a.animateDirection==r?1:-1),a.y=u.yBase-t+o.y,a.height=t},h=function(a){return function(e){var t=n.getXYCanvas();e.shadowOffsetX=0,e.shadowOffsetY=0,e.shadowBlur=0,e.beginPath(),e.fillStyle=g(a,e),e.fillRect(t.x+u.xBase+a.x,a.y,a.width,a.height)}},v=function(a){n.eventBus.publish("draw-callback-publish-reconfiguration",{canvasCallbacks:[{cb:A,priority:20,name:"bars_draw"}]})};n.eventBus.subscribe("draw-callback-requested-reconfiguration",v,11);var A=function(){e||d(s);for(var a in s)if(s.hasOwnProperty(a)){var t=s[a];f(t),n.onCanvas2dContext(h(t))}},g=function(a,e){var t=n.getXYCanvas(),r=u.xBase,i=e.createLinearGradient(r+a.x+t.x,a.y,r+a.x+a.width,a.height+a.y);return i.addColorStop(0,a.gradientStart),i.addColorStop(1,a.gradientEnd),i};a.getBoxProperties=c,a.setBoxProperties=l,a.transformBarsColour=function(n){barsColours=n(u.barsColours)},a.draw=A}.call(o),function(){var n=this;n.IS_HISTATS_CANVAS||(n={});var e=n.statsText={},t={xBase:0,yBase:0},r=function(){return t},i=function(){var a=n.getXYCanvas();return t.xBase=a.x,t.yBase=a.y,t},o=[],s={stats_values:[],indexStatToShow:0,drawValueCallback:a,drawValueCallbackWithValue:a,drawMetricCallback:a},u=25,c=0,l=function(){return c%u==1},d=function(n){o=n};n.eventBus.subscribe("set-textbox-style",function(a){o=a,n.eventBus.publish("configuration-changed",{})}),n.eventBus.subscribe("canvas-drawValueFunction",function(n){"undefined"!=typeof n["transformationFunction"]&&(s.drawValueCallback=n["transformationFunction"])});function f(n,a,e,t){n=(n+"").replace(/[^0-9+\-Ee.]/g,"");var r=isFinite(+n)?+n:0,i=isFinite(+a)?Math.abs(a):0,o="undefined"==typeof t?",":t,s="undefined"==typeof e?".":e,u="",c=function(n,a){var e=Math.pow(10,a);return""+(Math.round(n*e)/e).toFixed(a)};return u=(i?c(r,i):""+Math.round(r)).split("."),u[0].length>3&&(u[0]=u[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,o)),(u[1]||"").length<i&&(u[1]=u[1]||"",u[1]+=new Array(i-u[1].length+1).join("0")),u.join(s)}var h=function(e){if(s.stats_values=e,s.drawValueCallback!=a){var t=e[0].value;s.drawValueCallbackWithValue=s.drawValueCallback(t)}n.eventBus.publish("configuration-changed",{})},v=function(){return s.stats_values},A=function(n){if(n===s.stats_values)return!1;if(typeof n==typeof[])for(var a in n)if(n.hasOwnProperty(a)&&typeof n[a]!=typeof{})return!1;return!0},g=function(){return n.globalObjectName+"_setValues"},m=function(){if(l()){var a=g();if("undefined"!=typeof n.$window&&"undefined"!=typeof n.$window[a]){var e=n.$window[a];A(e)&&h(e)}}},b=function(n){return(""+n).match(/^\s*[0-9]+\s*$/)?f(n,0,""," "):n},p=function(a,e){return function(t){t.shadowColor="transparent",t.font=a.name.font,t.textAlign=a.name.align,t.fillStyle=a.name.color,t.fillText(e.name,a.name.x+r().xBase,a.name.y+r().yBase),t.font=a.value.font,t.textAlign=a.value.align,t.fillStyle=a.value.color;var i=e.value;try{i=b(e.value)}catch(o){n.debug(o)}t.fillText(i,a.value.x+r().xBase,a.value.y+r().yBase)}},w=function(){s.indexStatToShow+=o.length,s.indexStatToShow>=s.stats_values.length&&(s.indexStatToShow=0)},I=!1;n.eventBus.subscribe("draw-hideText",function(n){I=!0},11),n.eventBus.subscribe("draw-unHideText",function(n){I=!1},11);var O=function(n){if(!I){var a,e,t=s.indexStatToShow,r=v(),i=r.length;r.length>o.length&&(i=o.length);for(var u=0;i>u&&(t>=r.length&&(t=0),r[t]);u++)a=o[u],e=r[t],p(a,e)(n),t++}},T=function(n,e){return c++,m(),i(),s.drawValueCallbackWithValue!=a?(s.drawValueCallbackWithValue(n),void 0):(O(n),void 0)},B=function(a){n.eventBus.publish("draw-callback-publish-reconfiguration",{canvasCallbacks:[{cb:T,priority:15,name:"show_stats_draw"}]})};n.eventBus.subscribe("draw-callback-requested-reconfiguration",B,11);var x=n.eventBus.subscribe("drawing-change-text",w,10);e.draw=T,e.setBoxes=d,e.setValues=h}.call(o),function(){var n=this;n.IS_HISTATS_CANVAS||(n={});var e={main:"",source:a,loaded:!1};e.main="data:image/png;base64,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";var t=function(a){var t=e.source=new Image;t.onload=function(){e.loaded=!0,n.eventBus.publish("background-image-loaded",e),n.eventBus.publish("configuration-changed",{})},t.src=e.main};n.eventBus.subscribe("FIRST-FRAME",t,5),n.image_base64_src=e}.call(o),function(){var n=this;n.IS_HISTATS_CANVAS||(n={});var e=n.counter={};e.ID="110",e.properties={w:143,h:19,hasShadow:!0};var t=!1,r={backgroundImageObject:a},i={xBase:4,yBase:15,barsColours:[["#8ab9fd","#117ae3"],["#fec745","#eb8a26"],["#76fd1c","#3db31c"]]},o={animation_duration_inFrames:20,autoTriggerTextChange_onFrame:10,waitframesBetweenTwoAnimations:110},s=[{name:{x:26,y:13,align:"left",color:"#fff",font:"11px Arial"},value:{x:138,y:13,align:"right",color:"#fff",font:"11px Arial"}}];n.eventBus.publish("set-textbox-style",s),n.eventBus.publish("setCanvasProperties",e.properties),n.eventBus.publish("setAnimationProperties",o),n.eventBus.publish("set-bars-params",i);var u={alpha:{movementsPerFrame:1,min:0,max:100,cur:0}},c=function(n){var a=u;a.alpha.movementsPerFrame=(u.alpha.max-u.alpha.min)/(o.animation_duration_inFrames/2)};c(o.animation_duration_inFrames);var l=function(n){var a=n,e=0;if(!a.isInAnimationTransition)return e;var t=a.currentLoopFrame<a.animation_duration_inFrames/2,r=!t;return t&&(e=1),r&&(e=-1),e},d=function(n,a){var e=u,t=l(a);0==t?e.alpha.cur=e.alpha.min:f(n,t)},f=function(a,e){var t=u,i=n.getXYCanvas(),o=t.alpha.movementsPerFrame*e;t.alpha.cur=Math.max(Math.min(t.alpha.cur+o,t.alpha.max),t.alpha.min),a.save(),a.globalAlpha=t.alpha.cur/100,a.drawImage(r.backgroundImageObject.source,i.x,i.y),a.restore()},h=function(a,e){n.eventBus.publish("clear-canvas-rectangle",{});var t=n.getXYCanvas();a.drawImage(r.backgroundImageObject.source,t.x,t.y)},v=function(e){r.backgroundImageObject!=a&&n.eventBus.publish("draw-callback-publish-reconfiguration",{canvasCallbacks:[{cb:h,priority:10,name:"drawBackground"},{cb:d,priority:19,name:"drawAnimation"}]})};return n.eventBus.subscribe("draw-callback-requested-reconfiguration",v,13),n.eventBus.subscribe("background-image-loaded",function(n){r.backgroundImageObject=n},13),n}.call(o),l.AUTOSTART&&o.start()}catch(ln){}return o},m="base.js",b=window,p="_DEBUG_HISTATSCANVAS_RETURN_BUILDER";_value_RETURN_BUILDER=u(window[p])&&window[p]===!0,window[h()]=g,window["histats_canvascounters_"+m]=g}).call(this);