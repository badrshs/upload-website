/* global console, alert, prompet*/


//Example For Using Function 



function convertUsdToRiyals (){
    
    var amount = document.getElementById("dollar").value,
        
        result = amount * 3.75,
        
        am =  document.getElementById("messege");
    
    
    if (amount === "") {
        
       am .innerHTML = " this field Can't be clear";
        
        
        
    } else if (amount < 0 ) {
    
    am .innerHTML = "This feild can't be less than zero ";
        
    
    }else if (amount === "0") {
        
        am .innerHTML = " this field must be more than zero ";
    
    
    } else if (isNaN(amount)) {
        
        
         am .innerHTML = " this field must be number";
        
        
    } else {
        
            am .innerHTML = (amount + " Dollar Equal " +  result + " Riyals");

    }
    
}
