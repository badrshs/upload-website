<%@ Page Language="VB" AutoEventWireup="false" CodeFile="maherlink.aspx.vb" Inherits="maherlink" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body style="background-color:brown; height: 76px;">
    <form id="form1" runat="server">
    <div>
    
    </div>
    <asp:HyperLink ID="HyperLink1" runat="server" Font-Bold="True" 
        Font-Size="XX-Large" ForeColor="Silver" NavigateUrl="~/image.htm" 
        Target="f4">Home</asp:HyperLink>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <asp:HyperLink ID="HyperLink2" runat="server" Font-Bold="True" 
        Font-Italic="False" Font-Size="XX-Large" ForeColor="Silver" 
        NavigateUrl="~/biography.htm" Target="f4">Biography</asp:HyperLink>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<asp:HyperLink ID="HyperLink9" runat="server" Font-Bold="True" 
        Font-Size="XX-Large" ForeColor="Silver" NavigateUrl="~/certificate.aspx" 
        Target="f4">Certificate</asp:HyperLink>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<asp:HyperLink 
        ID="HyperLink5" runat="server" Font-Bold="True" Font-Size="XX-Large" 
        ForeColor="Silver" NavigateUrl="~/trips.htm" Target="f4">Trips</asp:HyperLink>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<asp:HyperLink ID="HyperLink6" runat="server" Font-Bold="True" 
        Font-Size="XX-Large" ForeColor="Silver" NavigateUrl="~/childhood.aspx" 
        Target="f4">childhood</asp:HyperLink>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
    <asp:HyperLink ID="HyperLink7" runat="server" Font-Bold="True" 
        Font-Size="XX-Large" ForeColor="Silver" NavigateUrl="~/friends.aspx" 
        Target="f4">Friends</asp:HyperLink>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <asp:HyperLink ID="HyperLink8" runat="server" Font-Bold="True" 
        Font-Size="XX-Large" ForeColor="Silver" NavigateUrl="~/hobbies.aspx" 
        Target="f4">Hobbies</asp:HyperLink>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <asp:HyperLink ID="HyperLink4" runat="server" Font-Bold="True" 
        Font-Size="XX-Large" ForeColor="Silver" NavigateUrl="~/contactme.htm" 
        Target="f4">Contact Me</asp:HyperLink>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </form>
</body>
</html>
