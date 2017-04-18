<body>
Welcome
<% =response.write(request.Form("fname")) %>
<br>
<% =response.write(request.Form("section")) %>
<br>
<% =response.write(request.Form("credit_card")) %>
<br>
<% =response.write(request.Form("type")) %>

<%

If IsEmpty(email) = True Then
    'uninitialized
ElseIf IsNull(email) = True Then
    'contains null value
ElseIf email = ""
    'contains zero length string
Else
    'Response.Write email
    'MsgBox email
End If


dim fs,f
set fs=Server.CreateObject("Scripting.FileSystemObject")
set f=fs.OpenTextFile(Server.MapPath("validates.txt"),8,true)
f.WriteLine(request.Form("fname") & ";" & request.Form("section") & ";" & request.Form("credit_card") & ";" & request.Form("type"))
f.Close
 %>
 
 
<% 
dim lineData
set fso = Server.CreateObject("Scripting.FileSystemObject") 
set fs = fso.OpenTextFile(Server.MapPath("validates.txt"), 1, true) 
Do Until fs.AtEndOfStream 
    lineData = fs.ReadLine
    'do some parsing on lineData to get image data
    'output parsed data to screen
    Response.WriteLine lineData
Loop 
%>
 
 
</body>