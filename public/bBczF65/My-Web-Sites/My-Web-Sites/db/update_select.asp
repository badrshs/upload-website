<%
Dim adoCon 			'Holds the Database Connection Object
Dim rsGuestbook			'Holds the recordset for the records in the database
Dim strSQL			'Holds the SQL query for the database
Set adoCon = Server.CreateObject("ADODB.Connection")
adoCon.Open "DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=" & Server.MapPath("db.mdb")
Set rsGuestbook = Server.CreateObject("ADODB.Recordset")
strSQL = "SELECT tblComments.* FROM tblComments;"



rsAddComments.Open strSQL, adoCon
Do While not rsGuestbook.EOF
	Response.Write ("<br>")
	Response.Write ("<a href=""update_form.asp?ID=" & rsGuestbook("ID_no") & """>")
	Response.Write (rsGuestbook("Name")) 
	Response.Write ("</a>")
	Response.Write ("<br>")
	Response.Write (rsGuestbook("Comments"))
	Response.Write ("<br>")

	'Move to the next record in the recordset
	rsGuestbook.MoveNext

Loop
rsGuestbook.Close
Set rsGuestbook = Nothing
Set adoCon = Nothing
%>
</body>
</html>