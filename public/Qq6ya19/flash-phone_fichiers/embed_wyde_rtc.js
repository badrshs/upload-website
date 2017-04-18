(function() {
  // Localize jQuery variable
  var jQuery;
  var $;
  var paths = {"embed":"https://rtc.wydevoice.com/js/embed.7e710bb5d9c8af24821b2ed4e140a46f.js","jsclient_js":"https://rtc.wydevoice.com/js/jsclient.b2453fa68561845de61522054a74fcac.js","browser_info_js":"https://rtc.wydevoice.com/js/browser_info.4b1cfe160b8ed3367bd9345f6606ac4a.js","app_js":"https://rtc.wydevoice.com/js/app.049deee51a45172270a65bf5f4455754.js","app_css":"https://rtc.wydevoice.com/css/app.896276e5f4b0e723a35994a5e62b556b.css","widget_html":"https://rtc.wydevoice.com/widget.006eb64358a50d4066d3095cc7309764.js","theme_css":{"red":"https://rtc.wydevoice.com/css/theme_red.58f0760e6d0c64ff934ac7bfc225edd3.css","blue":"https://rtc.wydevoice.com/css/theme_blue.6ab1057ead90186ff721a4461371e93c.css","fcc":"https://rtc.wydevoice.com/css/theme_fcc.bb524c33b7e3a0abf21165624947ad5b.css"},"spinner_img":"https://rtc.wydevoice.com/images/spinner.gif"};
  var sbc = "wss://owfcc2.freeconferencecall.com/";

  /******** Load jQuery if not present *********/
  if (window.jQuery === undefined) {
      var script_tag = document.createElement('script');
      script_tag.setAttribute("type","text/javascript");
      script_tag.setAttribute("src",
          "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js");
      if (script_tag.readyState) {
        script_tag.onreadystatechange = function () { // For old versions of IE
            if (this.readyState == 'complete' || this.readyState == 'loaded') {
                scriptLoadHandler();
            }
        };
      } else { // Other browsers
        script_tag.onload = scriptLoadHandler;
      }
      // Try to find the head, otherwise default to the documentElement
      (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
  } else {
      // The jQuery version on the window is the one we want to use
      jQuery = window.jQuery;
      $ = window.$;
      main();
  }

  /******** Called once jQuery has loaded ******/
  function scriptLoadHandler() {
      // Restore $ and window.jQuery to their previous values and store the
      // new jQuery in our local jQuery variable
      jQuery = window.jQuery.noConflict(true);
      // Call our main function
      main(); 
  }


  function main() { 
    jQuery(document).ready(function($) { 
      var options = {
        dataType: "script", 
        cache: true, 
        url: paths.embed
      };
      jQuery.ajax(options)
      .done(function() {
        var embeder = new WydeRTCEmbed(jQuery, paths, sbc);
        embeder.embed();
      });
    });
  }
})();
