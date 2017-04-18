#include<bits/stdc++.h>
using namespace std;
int main()
{
string p,k,c,np;
int i,j;
cout<<"Enter the plain text\n";
getline(cin,p);
cout<<"Enter the key\n";
getline(cin,k);
int m;
int l=p.length();m=k.length();
for(i=0;i<p.length();i++)
{
        if(p[i]==' ')
        p[i]='#';
}
j=0;
string nk="";
if(m<l)
{
        for(i=m;i<l;i++)
        {
                if(p[i]=='#')
                nk+=p[i];
                else
                {
                nk+=p[j];
                j++;
                }}}
k=k+nk;
cout<<k<<endl;
c="";
for(i=0;i<l;i++)
{       if(k[i]=='#')
c+='#';
else
{
        char t=p[i]-'a';
        char tt=k[i]-'a';
        c+=(t+tt)%26+'a';
}}
cout<<"cipher text is :"<<endl;
cout<<c<<endl;
np="";
for(i=0;i<c.length();i++)
{       
        if(c[i]=='#')
        np+=' ';
        else
        {
                
      char t=c[i]-'a';
      char tt=k[i]-'a';
      np+=(t-tt+26)%26+'a';
       }
           
}
cout<<"new plaintext \n";
cout<<np<<endl;





}
