<%
function CheckCC(CCNo)
 
Dim i, w, x, y
y = 0
 
'Ensure the proper format of the input
CCNo = Replace(Replace(Replace(CStr(CCNo), "-", ""), " ", ""), ".", "")
 
'Process digits from right to left, drop last digit if total length is even
w = 2 * (Len(CCNo) Mod 2)
For i = Len(CCNo) - 1 To 1 Step -1
x = Mid(CCNo, i, 1)
if IsNumeric(x) Then
Select Case (i Mod 2) + w
Case 0, 3 'Even Digit - Odd where total length is odd (eg. Visa vs. Amx)
y = y + CInt(x)
Case 1, 2 'Odd Digit - Even where total length is odd (eg. Visa vs. Amx)
x = CInt(x) * 2
if x > 9 Then
 
'Break the digits (eg. 19 becomes 1 + 9)
y = y + (x \ 10) + (x - 10)
Else
y = y + x
End if
End Select
End if
Next
 
'Return the 10's complement of the total    
y = 10 - (y Mod 10)
if y > 9 Then y = 0
CheckCC = (CStr(y) = Right(CCNo, 1))
 
End function

If IsEmpty(request.Form("fname")) = TRUE OR request.Form("fname") = "" Then
    Response.Write("Name field is empty" & "<br>")
    Response.Write("<a href='http://tamadour-001-site1.atempurl.com/buy-ex6.html'>Try again</a>")
    Response.End
End If

If IsEmpty(request.Form("credit_card")) = TRUE OR request.Form("credit_card") = "" Then
    Response.Write("Credit Card field is empty"  & "<br>")
    Response.Write("<a href='http://tamadour-001-site1.atempurl.com/buy-ex6.html'>Try again</a>")
    Response.End
End If

If Len(request.Form("credit_card"))  <> 16 Then
    Response.Write("Credit Card field must consist of 16 charactors"  & "<br>")
    Response.Write("<a href='http://tamadour-001-site1.atempurl.com/buy-ex6.html'>Try again</a>")
    Response.End
End If

If request.Form("type") = "VISA" Then
	If InStr(1, request.Form("credit_card"), "4", 1) <> 1 Then
              Response.Write("VISA Credit Card should start with 4"  & "<br>")
              Response.Write("<a href='http://tamadour-001-site1.atempurl.com/buy-ex6.html'>Try again</a>")
              Response.End
    End If
End If

If request.Form("type") = "MASTERCARD" Then
	If InStr(1, request.Form("credit_card"), "5", 1) <> 1 Then
              Response.Write("MASTER CARD Credit Card should start with 5"  & "<br>")
              Response.Write("<a href='http://tamadour-001-site1.atempurl.com/buy-ex6.html'>Try again</a>")
              Response.End
    End If
End If

if CheckCC(request.Form("credit_card")) = FALSE Then
	Response.Write("Invalid Credit Card Number"  & "<br>")
	Response.Write("<a href='http://tamadour-001-site1.atempurl.com/buy-ex6.html'>Try again</a>")
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














