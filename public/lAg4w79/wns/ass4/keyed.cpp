//Key transposition cipher
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

string encrypt(string plain,int a[],int n)
{
	int l,i,j,m;
	string cipher="";
	l=plain.size();
	
	//append x, if required
	while(l%n!=0)
	{
		plain+="x";
		l++;
	}
	
	m=l/n;			
	
	char mat[m][n];
	
	for(i=0;i<l;i++)
		mat[i/n][i%n]=plain[i];
	
	for(i=0;i<m;i++)
	{
		for(j=0;j<n;j++)
		{
			cipher+=mat[i][a[j]-1];
			
		}
	}
	return cipher;
	
}

string decrypt(string cipher,int a[],int n)
{
	int l,i,j,m;
	string plain="";
	l=cipher.size();
	
	m=l/n;			
	
	char mat[m][n];
	
	for(i=0;i<l;i++)
		mat[i/n][i%n]=cipher[i];
	
	for(i=0;i<m;i++)
	{
		for(j=0;j<n;j++)
		{
		//	printf("%d",a[j]);
			plain+=mat[i][a[j]-1];
			
		}
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
	
	int i,j,k,m,n,l,k2,a[10],b[10];
	string plain,cipher="",plain2;
	
	printf("no of columns: ");
	scanf("%d",&n);
	printf("permutation : ");
	for(i=0;i<n;i++)
		scanf("%d",&a[i]);
	
	printf("Plaintext : ");
	cin >> plain;
	
	cipher=encrypt(plain,a,n);
	cout << "Ciphertext : " << cipher << endl;
	
	for(i=0;i<n;i++)
		b[a[i]-1]=i+1;
	plain2=decrypt(cipher,b,n);
	
	cout << "Plaintext : " << plain2 << endl;
	
	return 0;
}
	
