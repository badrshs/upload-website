/*jslint browser:true */
/* Global consol alert */
/*jslint devel: true */
/*jslint evil: true */
/*jslint plusplus: true */
/*jslint sloppy:true, white:true, browser:true */
/*jshint boss:true */
/* jshint ignore:start */
/* jshint ignore:end */

/*
    Boleen
    array = ["Mohamed", "Galal", "bashir",]; = array[0]
    object = {myName:"Mohamed" ,firstName="Galal"}
    document.getElementById().innerHTML = ;
*/

/*
(function mGalal() {
    "use strict";
    var Amount = document.getElementById("price").innerHTML;

    return alert("$" + Amount * 500);
}());
*/
//This Function  To Change $ to Egyption bounds
function jarVis() {
    "use strict";
    var Product = document.getElementById("Price1").value,
        result = Product * 10,
        fPrice = document.getElementById("PriceProduct1"),
        isNAN = Product;

    if (Product === "0") {
        fPrice.innerHTML = "This Value Must not Be 0";
    } else if (Product === "") {
        fPrice.innerHTML = "This Field Can't Be Empty";
    } else if (Product < 1) {
        fPrice.innerHTML = "This Value Must not Be Negative";
    } else if (isNaN(Product)) {
        fPrice.innerHTML = "This Value Must not Be string";
    } else {
        fPrice.innerHTML = "Your dollars in bounds is " + result;
    }
}
