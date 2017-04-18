<%@ LANGUAGE = VBScript %>
<html> <head><title>Validate File</title></head>
<body>

<p>
<%
name = Request.Form("name")
creditcard = Request.Form("creditcard")
cardtype = Request.Form("cardtype")
section = Request.Form("section")

If name = "" Then
Response.write("<h1>Empty Fields</h1>")
Response.write("<h2><a href=""buy.html"">Try Again</a></h2>")

ElseIf creditcard = "" Then
Response.write("<h1>Empty Fields</h1>")
Response.write("<h2><a href=""buy.html"">Try Again</a></h2>")

Else

If len(creditcard) <> 16 Then
Response.write("<h1>Invalid CreditCard</h1>")
Response.write("<h2><a href=""buy.html"">Try Again</a></h2>")

Else




If (cardtype = "MasterCard") And (Left(creditcard, 1) <> "5") Then

Response.write("<h1>Invalid CreditCard</h1>")
Response.write("<h2><a href=""buy.html"">Try Again</a></h2>")

ElseIf (cardtype = "Visa") And (Left(creditcard, 1) <> "4") Then

Response.write("<h1>Invalid CreditCard</h1>")
Response.write("<h2><a href=""buy.html"">Try Again</a></h2>")

Else


Response.Write("Name: " & name & "<br>")

Response.Write("CreditCard: " & creditcard & "<br>")

If cardtype = "MasterCard" Then

Response.Write("Card Type: MasterCard <br>")

Else

Response.Write("Card Type: Visa <br>")

End If

Dim OpenFileobj, FSOobj

Set FSOobj = Server.CreateObject("Scripting.FileSystemObject")

Set OpenFileobj = FSOobj.OpenTextFile("h:\root\home\endabed-001\www\site1\validate.txt",8)


OpenFileobj.Write(name & ";")
OpenFileobj.Write(section & ";")
OpenFileobj.Write(creditcard & ";")
OpenFileobj.Write(cardtype)
OpenFileobj.WriteBlankLines(1)


Set OpenFileobj = Nothing
Set FSOobj = Nothing


End If
End If
End If




%>
</p>

</body>
</html>