<%
Dim adoCon 			'Holds the Database Connection Object
Dim rsUpdateEntry		'Holds the recordset for the record to be updated
Dim strSQL			'Holds the SQL query for the database
Dim lngRecordNo			'Holds the record number to be updated

lngRecordNo = CLng(Request.Form("ID_no"))
Set adoCon = Server.CreateObject("ADODB.Connection")
adoCon.Open "DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=" & Server.MapPath("db.mdb")
Set rsUpdateEntry = Server.CreateObject("ADODB.Recordset")
strSQL = "SELECT tblComments.* FROM tblComments WHERE ID_no=" & lngRecordNo
rsUpdateEntry.CursorType = 2
rsUpdateEntry.Open strSQL, adoCon
rsUpdateEntry.Fields("Name") = Request.Form("name")
rsUpdateEntry.Fields("Comments") = Request.Form("comments")
rsUpdateEntry.Update
rsUpdateEntry.Close
Set rsUpdateEntry = Nothing
Set adoCon = Nothing
Response.Redirect "update_select.asp"
%>