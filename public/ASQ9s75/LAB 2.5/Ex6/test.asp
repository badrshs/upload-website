<!DOCTYPE html>
<html>
<head>
    <title>HELLO</title>
</head>
<body>
    <% dim num, sumodd,sumeven,sumall
       num="4916103096593865"
       sumodd=0
       sumeven=0
       for i=2 to 16 step 2
            sumeven=sumeven+mid(num,i,1)   
       next
       response.Write("sumeven="&sumeven&";")
       for i=1 to 15 step 2
            doub=mid(num,i,1)*2
        if(doub>=10) then
            sumodd=sumodd+mid(doub,1,1)+mid(doub,2,1)
        else
            sumodd=sumodd+doub    
        end if
        
       next
        response.Write("sumodd="&sumodd&";")
        sumall=sumodd+sumeven
        if sumall mod 10 = 0 then
            response.write("card is valid")
        else
            response.write("card is invalid")
        end if
        %>
</body>
</html>