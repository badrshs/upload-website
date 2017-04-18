#include<bits/stdc++.h>
using namespace std;
map< int ,char > m;
map<char ,char > nm;
int main()
{

int i,j;
string p,k,c,np;
cout<<"Enter the plain text :"<<endl;
getline(cin,p);
cout<<"Enter the key :"<<endl;
getline(cin,k);
for(i=0;i<k.length();i++)
{
       m[i]=k[i];
       nm[k[i]]=i+'a';
}c="";
for(i=0;i<p.length();i++)
{if(p[i]==' ')
{
c+='^';
}else
c+=m[p[i]-'a'];
}
cout<<"Cipher text is :"<<c<<endl;
np="";
for(i=0;i<c.length();i++)
{
if(c[i]=='^')
np+=" ";
else
np+=nm[c[i]];

}
cout<<"Plain text after decrypting is :"<<np<<endl;
}
