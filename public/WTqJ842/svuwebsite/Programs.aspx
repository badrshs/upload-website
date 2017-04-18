<asp:objectdatasource runat="server"></asp:objectdatasource>
<!DOCTYPE html>
<html>
<head>
	<title>Programs</title>
	<link rel="svu" type="text/css" href="css/svu.css">

</head>
<body>

<h1>Programs in the SVU</h1>
<br>

<tr> 
	<td><a href="login.aspx">login</a></td>
	<td><a href="Home.aspx">Home</a></td>
	<td><a href="Reg_Student.aspx">Reg_Student</a></td>
	<td><a href="View_Student.aspx">View_Student</a></td>
	<td><a href="Programs.aspx">Programs</a></td>
	

</tr>


<br>
<table border="1">
<tr style="background-color: blue">
<td>Cod</td><td>Programs</td></tr>
<tr><td>ISE</td><td>B. S. in Information Systems Engineering</td></tr>
<tr><td>BAIT</td><td>Bachelor in Informations Technology</td></tr>
<tr><td>BACT</td><td>Bachelor in CommunicationsTechnology</td></tr>
<tr><td>BIT</td><td>Bachelor in Information Technology</td></tr>
<tr><td>BL</td><td>Bachelor in Law Sciences</td></tr>

</table>


  
<script type = "text/javascript">

    var name_list = new Array("ISE", "BAIT", "BACT",
        "BIT", "BL");
    var new_name, index, last;
    
    while (new_name = prompt("Please type a new name", "")) {
      
        last = name_list.length - 1;
        while (last >= 0 && name_list[last] > new_name) {
            name_list[last + 1] = name_list[last];
            last--;
        }
        
        name_list[last + 1] = new_name;
      
        document.write("<p><b>The new name list is:</b> ",
            "<br />");
        for (index = 0; index < name_list.length; index++)
            document.write(name_list[index], "<br />");
        document.write("</p>");
    }


</script>














</body>
</html>