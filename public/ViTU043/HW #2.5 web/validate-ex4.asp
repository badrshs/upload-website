<%
If IsEmpty(request.Form("fname")) = TRUE OR request.Form("fname") = "" Then
    Response.Write("Name field is empty" & "<br>")
    Response.Write("<a href='http://tamadour-001-site1.atempurl.com/buy-ex4.html'>Try again</a>")
    Response.End
End If

If IsEmpty(request.Form("credit_card")) = TRUE OR request.Form("credit_card") = "" Then
    Response.Write("Credit Card field is empty"  & "<br>")
    Response.Write("<a href='http://tamadour-001-site1.atempurl.com/buy-ex4.html'>Try again</a>")
    Response.End
End If





dim fs,f
set fs=Server.CreateObject("Scripting.FileSystemObject")
set f=fs.OpenTextFile(Server.MapPath("validates.txt"),8,true)
f.WriteLine(request.Form("fname") & ";" & request.Form("section") & ";" & request.Form("credit_card") & ";" & request.Form("type"))
f.Close




dim lineData
set fso = Server.CreateObject("Scripting.FileSystemObject") 
set fs = fso.OpenTextFile(Server.MapPath("validates.txt"), 1, true) 
Do Until fs.AtEndOfStream 
    lineData = fs.ReadLine
    'do some parsing on lineData to get image data
    'output parsed data to screen
    Response.Write (lineData & "<br>")
Loop 
%>








