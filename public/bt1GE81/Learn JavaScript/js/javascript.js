// if condition .. else if //



var name = prompt("whats your name ?");
   

if(name == "fatma") 
    
{ document.getElementById("am").innerHTML = "Hello " + name;
 
} else if (name == "فاطمة") { document.getElementById("am").innerHTML = " مرحباً  " + name;

    
} else {
                                
document.getElementById("am").innerHTML = "sorry you are not fatma";
  
                                
}