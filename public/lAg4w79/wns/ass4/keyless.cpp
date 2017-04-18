//Keyless transposition cipher
#include<bits/stdc++.h>
using namespace std;

int char_to_int(char c)
{	
	if(c>='a' && c<='z')
		return c-'a';
	return c-'A';
}

char int_to_char(int p)
{
	return 'a'+(p+26)%26;
}

char int_to_charA(int p)
{
	return 'A'+(p+26)%26;
}

string encrypt(string plain,int n)
{
	int l,i,j;
	string cipher="";
	l=plain.size();
	
	//append x, if required
	while(l%n!=0)
	{
		plain+="x";
		l++;
	}
	int m=l/n;
	for(i=0,j=0;i<l;i++,j=(j+1)%n)
	{
		printf("%c",plain[i]);
		if(j==n-1)
			printf("\n");
	}
	
										
	
	i=0;
	for(j=0;j<l;j++)
	{
		cipher+=plain[i];
		i+=n;
		if(i>=l)
			i=i%n+1;
		
	}
	return cipher;
	
}

string decrypt(string cipher,int n)
{
	int l,i;
	string plain="";
	l=cipher.size();
	
	i=0;
	int j;
	n=l/n;
	for(j=0;j<l;j++)
	{
		plain+=cipher[i];
		i+=n;
		if(i>=l)
			i=i%n+1;
		
	}
	
	//remove x from last
	while(plain[l-1]=='x')
	{
		plain.erase(l-1,1);
		l--;
	}
	
	return plain;
}

int add_inverse(int k,int m)
{	
	return m-k%m;
}



int main()
{
	
	int i,j,k,n,l,k2;
	string plain,cipher="",plain2;
	
	printf("no of columns in matrix : ");
	scanf("%d",&n);
	
	printf("Plaintext : ");
	cin >> plain;
		
	cipher=encrypt(plain,n);
	
	cout << "Ciphertext : " << cipher << endl;
	
	plain2=decrypt(cipher,n);
	cout << "Plaintext : " << plain2 << endl;
	
	return 0;
}
	
