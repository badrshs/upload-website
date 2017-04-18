/*jslint plusplus: true, evil: true*/
/*global console, alert, prompt*/

/*var your_date = (document.getElementById('d').value + "/" + document.getElementById('m').value + "/" + document.getElementById('y').value).toString();*/

function get_your_age() {
    "use strict";
    var todate = new Date(),
        age_year = todate.getFullYear() - document.getElementById("y").value,
        age_mounth = (todate.getMonth() - document.getElementById("m").value) + 1,
        age_day = todate.getDate() - document.getElementById("d").value;
    return (document.getElementById("r").innerHTML = "Your Age Is: " + age_year + " years: " + age_mounth + " months " + age_day + " days");
}
/*
/////////////////////////////////////////////////////////////////////////////////
////////////////(((html + js عمل مشروع حساب العمر علي الويب بلغة)))//////////////
/////////////////////////////////////////////////////////////////////////////////
///////////////////المشروع بالكامل من تصميمي وبرمجتي مستر ابرام//////////////////
/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////لا تنسي من صالح الدعاء/////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////جميع الحقوق محفوظة//////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
//Coding By Mr Abram Youssef
//Page In Facebook:https://www.facebook.com/Learn.Programming.With.Mrr.Abram/
*/