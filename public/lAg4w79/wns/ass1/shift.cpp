#include<bits/stdc++.h>
using namespace std;
int main()
{
string s,c="";
int i,j,k;
cout<<"Enter the plain text"<<endl;
getline(cin,s);
cout<<"Enter the key"<<endl;
cin>>k;
for(i=0;i<s.length();i++)
{       if(s[i]==' ')
{
        s[i]='^';
        c+='^';
}else
{
        char t=s[i]-'a';
        t=(t+k)%26;
        t=t+'a';
        c+=t;
 }       
}
cout<<"Cipher text is : ";
cout<<c<<endl;
string p="";
for(i=0;i<c.length();i++)
{
if(c[i]=='^')
p+=" ";
else
{
char t=c[i]-'a';
t=(t-k+26)%26;
t=t+'a';
p+=t;
}
}
cout<<"Plain text is :"<<p<<endl;
}
