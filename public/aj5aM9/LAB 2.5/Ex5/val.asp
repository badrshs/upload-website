<!DOCTYPE html>
<html>
	<head>
		<title>Buy Your Way to a Better Education!</title>
		<link href="buy.css" type="text/css" rel="stylesheet" />
	</head>

	<body>
		<h1><%response.write("Thank You For Purchasing") %></h1>
        <br/>

        <%  name=request.form("name")
            section=request.form("section")
            ccnumber=request.form("ccnumber")
            ctype=request.form("cardtype")
            if(name="" or section="" or ccnumber="" or ctype="") then
            response.write("The Form is not Filled Completely")
            %>
            <a href="buy.html"><%response.write("Please Try Again") %></a>
            <%elseif len(ccnumber) <> 16 then
                response.write("The Credit Card Number you entered is incorrect")
                 %>
            <a href="buy.html"><%response.write("Please Try Again") %></a>
            <%elseif ctype="visa" and Mid(ccnumber,1,1) <> 4 then
              response.write("The Credit Card Number you entered is not for a visa")   %>
             <a href="buy.html"><%response.write("Please Try Again") %></a>
             <%elseif ctype="mastercard" and Mid(ccnumber,1,1) <> 5 then
              response.write("The Credit Card Number you entered is not for a mastercard")   %>
             <a href="buy.html"><%response.write("Please Try Again") %></a>
            <%else %>
            <p>Your Information are:</p>
            <dl>
			<dt>Name</dt>
			<dd><%response.write(name) %></dd>

			<dt>Section</dt>
			<dd><%response.write(section) %></dd>

			<dt>Credit Card</dt>
			<dd><%response.write(ccnumber & " Type: "& ctype) %></dd>
		</dl>
        <%
            set fs=Server.CreateObject("Scripting.FileSystemObject")
            set f=fs.OpenTextFile("C:\Users\user\Desktop\LAB 2.5/validate.txt",8,true)
            f.writeline(name&";"&section&";"&ccnumber&";"&ctype)
            f.close
            set f=nothing
            set fs=nothing
            End if
             %>
	</body>
</html>