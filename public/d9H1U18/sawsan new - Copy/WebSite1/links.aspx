<%@ Page Language="VB" AutoEventWireup="false" CodeFile="links.aspx.vb" Inherits="links" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <style type="text/css">
        #form1
        {
            height: 91px;
            width: 1078px;
        }
    </style>
</head>
<body style="background-color:pink; height: 84px;">
    <form id="form1" runat="server">
    <div>
    
    </div>
    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
    <asp:HyperLink ID="HyperLink1" runat="server" Font-Bold="True" 
        Font-Italic="True" Font-Size="XX-Large" ForeColor="Black" 
        NavigateUrl="~/images.htm" Target="f3">Home Page</asp:HyperLink>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <asp:HyperLink ID="HyperLink2" runat="server" Font-Bold="True" 
        Font-Italic="True" Font-Size="XX-Large" ForeColor="Black" 
        NavigateUrl="~/photos.htm" Target="f3">Photos</asp:HyperLink>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
    <asp:HyperLink ID="HyperLink3" runat="server" Font-Bold="True" 
        Font-Italic="True" Font-Size="XX-Large" NavigateUrl="~/aboutme.htm" 
        Target="f3" style="color: #000000">About Me</asp:HyperLink>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
    <asp:HyperLink ID="HyperLink4" runat="server" Font-Bold="True" 
        Font-Italic="True" Font-Size="XX-Large" NavigateUrl="~/contact me.htm" 
        Target="f3" style="color: #000000">Contact Me</asp:HyperLink>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
    <asp:HyperLink ID="HyperLink6" runat="server" Font-Bold="True" 
        Font-Italic="True" Font-Size="XX-Large" NavigateUrl="~/familly.aspx" 
        Target="f3" style="color: #000000">Family</asp:HyperLink>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<asp:HyperLink ID="HyperLink7" runat="server" Font-Bold="True" 
        Font-Italic="True" Font-Size="XX-Large" NavigateUrl="~/Hobbies.aspx" 
        Target="f3" style="color: #000000">Hobbies</asp:HyperLink>
    </form>
</body >
</html>
