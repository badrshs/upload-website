<!DOCTYPE html>
<html>
<head>
	<title>Reg_Student</title>
	<link rel="svu" type="text/css" href="css/svu.css">
    
<script type = "text/javascript">

</script>
</head>
<body>

<h1>Reg_Student in the SVU</h1>
<br>

<tr> 
	<td><a href="login.aspx">login</a></td>
	<td><a href="Home.aspx">Home</a></td>
	<td><a href="Reg_Student.aspx">Reg_Student</a></td>
	<td><a href="View_Student.aspx">View_Student</a></td>
	<td><a href="Programs.aspx">Programs</a></td>
	

</tr>
    <script type = "text/javascript">
 <!--
    var helpers = ["Your name must be in the form: \n \
first name, middle initial., last name",
        "Your email address must have the form: \
user@domain",
        "Your user ID must have at least six characters",
        "Your password must have at least six \
characters and it must include one digit",
        "This box provides advice on filling out\
the form on this page. Put the mouse cursor over any \
input field to get advice"]
    function messages(adviceNumber) {
        document.getElementById("adviceBox").value =
            helpers[adviceNumber];
    }
// -->
</script>
<br>
    <form action="/cgi-bin/html5.cgi" method="get">
    


		<p>first name:<input type="text" name="firstname" required autofocus></p> 
	<p>last name:
	     <input type="text" name="lastname" required autofocus></p>

<p>Username:
		<input type="text" name="Username" required autofocus ></p>
    <p> Email:<input type="Email" name="Email" size="10" oninput="." required autofocus onmouseover = "messages(1)"
onmouseout = "messages(4)"></p>   
	    
	</form>

     <form action="Programs.aspx">
        <p>
            <select name="Programs"><option>ISE</option><option>BACT</option>
                <option>BAIT</option><option>BIT</option><option>BL</option></select>
        
               

                </form>

         


    


      <script type = "text/javascript">         
                 
function chkPasswords() {
var init=document.getElementById("initial");
var sec=document.getElementById("second");
if (init.value==""){
                        alert("You did not enter a password");
                    init.focus();
return false;
}
if (init.value != sec.value) {
                        alert("The two passwords are not the same");
init.focus();
init.select();
return false;
} else
return true;
}
// -->
</script>



<form id = "myForm" action = "">
<p>
Your password
<input type = "password" id = "initial" size = "10" />
<br /><br />
Verify password
<input type = "password" id = "second" size = "10"/>
<br /><br />
<input type = "reset" name = "reset" />
<input type = "submit" name = "submit" />
</p>
</form>
   
<script type = "text/javascript">

document.getElementById("second").onblur = chkPasswords;
document.getElementById("myForm").onsubmit=chkPasswords;


 </script>


</body>
</html >







   