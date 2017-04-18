<%
Dim adoCon 			'Holds the Database Connection Object
Dim rsAddComments		'Holds the recordset for the new record to be added to the database
Dim strSQL		'Holds the SQL query for the database
Set adoCon = Server.CreateObject("ADODB.Connection")
adoCon.Open "DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=" & Server.MapPath("db.mdb")
Set rsAddComments = Server.CreateObject("ADODB.Recordset")
strSQL = "SELECT*food.plate, food.desc, food.price FROM food;"
rsAddComments.CursorType = 2
rsAddComments.LockType = 3


rsAddComments.Open strSQL, adoCon

rsAddComments.AddNew
rsAddComments.Fields("plate") = Request.Form("plate")
rsAddComments.Fields("desc") = Request.Form("desc")
rsAddComments.Fields("price") = Request.Form("price")
rsAddComments.Update
rsAddComments.Close
Set rsAddComments = Nothing
Set adoCon = Nothing
Response.Redirect "guestbook.asp"
%>