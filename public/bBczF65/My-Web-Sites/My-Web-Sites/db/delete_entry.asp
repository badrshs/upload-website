<%
Dim adoCon 			'Holds the Database Connection Object
Dim rsDeleteEntry		'Holds the recordset for the record to be deleted
Dim strSQL			'Holds the SQL query for the database
Dim lngRecordNo			'Holds the record number to be deleted
lngRecordNo = CLng(Request.QueryString("ID"))
Set adoCon = Server.CreateObject("ADODB.Connection")
adoCon.Open "DRIVER={Microsoft Access Driver (*.mdb)}; DBQ=" & Server.MapPath("db.mdb")
Set rsDeleteEntry = Server.CreateObject("ADODB.Recordset")
strSQL = "SELECT tblComments.* FROM tblComments WHERE ID_no=" & lngRecordNo
rsDeleteEntry.LockType = 3 

rsDeleteEntry.Open strSQL, adoCon
rsDeleteEntry.Delete
rsDeleteEntry.Close
Set rsDeleteEntry = Nothing
Set adoCon = Nothing
Response.Redirect "delete_select.asp"
%>