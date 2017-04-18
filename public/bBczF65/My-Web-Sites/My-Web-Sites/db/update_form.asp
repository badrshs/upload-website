<%
Dim adoCon 			'Holds the Database Connection Object
Dim rsGuestbook			'Holds the recordset for the record to be updated
Dim strSQL			'Holds the SQL query for the database
Dim lngRecordNo			'Holds the record number to be updated

lngRecordNo = CLng(Request.QueryString("plate"))


Set adoCon = Server.CreateObject("ADODB.Connection")


adoCon.Open "DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=" & Server.MapPath("db.mdb")




Set rsGuestbook = Server.CreateObject("ADODB.Recordset")

strSQL = "SELECT food.* FROM food WHERE plate=" & lngRecordNo


rsGuestbook.Open strSQL, adoCon
%>
<html>
<head>
<title>Guestbook Update Form</title>
</head>
<body bgcolor="white" text="black">
<!-- Begin form code -->
<form name="form" method="post" action="update_entry.asp">
  Name: <input type="text" name="name" maxlength="20" value="<% = rsGuestbook("Name") %>">  
  <br>
  Comments: <input type="text" name="comments" maxlength="60" value="<% = rsGuestbook("Comments") %>">
  <input type="hidden" name="plate" value="<% = rsGuestbook("plate") %>">
  <input type="submit" name="Submit" value="Submit">
</form>
<!-- End form code -->
</body>
</html>
<%

rsGuestbook.Close
Set rsGuestbook = Nothing
Set adoCon = Nothing
%>
