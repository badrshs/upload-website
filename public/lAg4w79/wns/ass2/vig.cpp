#include<bits/stdc++.h>
using namespace std;
int main()
{
	string key,plain;
	cout<<"Plain : ";
	getline(cin,plain);
	cout<<"key : ";
	cin>>key;
	//(int)plain.length()/key.length()
	string tkey;
	while(tkey.length()<=plain.length())
	{
		tkey+=key;
	}
	tkey=tkey.substr(0,plain.length());
	
	//cout<<tkey<<endl;
	
	string enc;
	for(int i=0;i<plain.length();i++)
	{
	//	cout<<(plain[i]+key[i]-'a'-'a') %26 + 'a';
		if(isalpha(plain[i]))
			enc+=  (plain[i]+tkey[i]-'a'-'a') %26 + 'a';
		else
			enc+= plain[i];
	}
	cout<<"Encrypted : "<<enc<<endl;
	
	
	string dec;
	for(int i=0;i<plain.length();i++)
	{
		//cout<<(plain[i]+key[i]-'a'-'a') %26 + 'a';
		if(isalpha(enc[i]))
			dec+=  (enc[i]-tkey[i]+260) %26 + 'a';
		else
			dec+= enc[i];
	}
	cout<<"Decrypted : "<<dec<<endl;
	
	
}

