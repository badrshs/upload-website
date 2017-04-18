/*global $*/
$(document).ready(function () {
    "use strict";
    $("div").click(function () {
        $("nav").toggleClass("out");
        $(this).toggleClass("open");
    });
});