#include<bits/stdc++.h>
using namespace std;
int mki(int a)
{
int i,ans;
for(i=1;i<=26;i++)
{
if(a*i%26==1)
return i;
}


}
int main()
{
string p,c,np;
int i,j,mk,ak;
cout<<"Enter the plain text :";
getline(cin,p);
c="";
cout<<"Enter multiplicative key and additive key :";
cin>>mk>>ak;
for(i=0;i<p.length();i++)
{
if(p[i]==' ')
c+='^';
else
c+=((p[i]-'a')*mk+ak)%26+'a';

}
cout<<"Cipher text is :"<<c<<endl;
np="";int nmk=mki(mk);
//cout<<nmk<<endl;
for(i=0;i<c.length();i++)
{
if(c[i]=='^')
np+=" ";
else 
np+=((c[i]-'a'-ak)*nmk+26*5)%26+'a';

}
cout<<"Plain text after decrypting is :"<<np<<endl;
}
