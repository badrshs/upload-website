<!DOCTYPE html>
<html>
	<head>
		<title>Buy Your Way to a Better Education!</title>
		<link href="buy.css" type="text/css" rel="stylesheet" />
	</head>
	
	<body>
		<h1><%response.write("Thank You For Purchasing") %></h1>
        <br/>
        <p>Your Information are:</p>
        <%  name=request.form("name")
            section=request.form("section")
            ccnumber=request.form("ccnumber")
            ctype=request.form("cardtype")
            %>
            <dl>
			<dt>Name</dt>
			<dd><%response.write(name) %></dd>

			<dt>Section</dt>
			<dd><%response.write(section) %></dd>

			<dt>Credit Card</dt>
			<dd><%response.write(ccnumber & " Type: "& ctype) %></dd>
		</dl>
            
	</body>
</html>