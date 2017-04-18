var theValue = document.getElementById("text"),
    theChange = document.getElementById("div");

function change() {
   theChange.innerHTML = theValue.value + "$    =   " + theValue.value * 17 + " L.e";
}

if (theValue==0) {
    
   theChange.innerHTML ="Stop fuckin joking with my proggram bitch!";

    
}
