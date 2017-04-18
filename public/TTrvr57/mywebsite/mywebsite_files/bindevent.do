
try {
 InterYieldNativeAddEventListener = window.addEventListener;
 InterYieldNativeWindowOpen = window.open;
} catch (e) { }

var params='';
try {
 var ref = '', host = '', r = document.referrer;
 if(/\/\/([^\/]+)/.test(r)) {
  ref = RegExp.$1;
  if(/\/\/([^\/]+)/.test(window.location.href)) host = RegExp.$1;
  if(ref!=host) params+='&ref='+escape(r);
 }
 params+='&affiliate='+escape("bitkibble4");
} catch (e) {}
try {
    var tm = 10;
    if(typeof InterYieldOptions !== "object") {
        InterYieldOptions=new Array();
    } else {
        tm=1000 * InterYieldOptions.length;
    } 
    setTimeout(function(){
            InterYieldOptions.push({"e":"click","debug":"false","affiliate":"bitkibble4","subid":"99D95A08-8586-41CA-A887-AE941D53699D","ecpm":"1","snoozeMinutes":"3","maxAdCountsPerInterval":"15","adCountIntervalHours":"24","attributionHTML":"<table class='boxes' cellpadding='5'><tr><td width='33%' align='center'><a href='http://www.termblazer.com/privacy-policy'>Privacy<\/a><\/td><td width='33%' align='center'><a href='http://www.termblazer.com/about-this-ad'>Sponsored Ad by TermBlazer<\/a><\/td><td width='33%' align='center'><a href='http://www.termblazer.com/about-this-ad'>Why is this here?<\/a><\/td><\/tr><\/table><style>.iya-widget .bottom.container.box-count-1 .boxes, .iya-widget .bottom.container.box-count-1 .menu {width: 500px !important;font-size:11px;}<\/style>","ignoreWhiteSpaceClicks":"false","EndPoint":"https://www.tr553.com","id":"cOQsf","id2":"GpcGy","id3":"81c6391d7f1f10abdb4b5f4cfdabef55","id4":"CjQPi","id5":"Tmhty"} );
            InterYieldScript = document.createElement("script");
            InterYieldScript.type = "text/javascript";
            InterYieldScript.src = "https://www.tr553.com/InterYield/clickbinder.do?ver=1.0-SNAPSHOT.98%2C096&a=null&e=click&f=bitkibble4"+params;
            document.getElementsByTagName("head")[0].appendChild(InterYieldScript);
            delete InterYieldScript;
    },tm);

} catch (e) { 
    console.log("init error " + e.toString());
}

