//columnar cipher using matrix
#include<bits/stdc++.h>
using namespace std;

int n;

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

string encrypt(string plain,int a[10])
{
	int l,i,j,m,aa[10][10];
	string cipher="";
	
	for(i=0;i<n;i++)
	{
		for(j=0;j<n;j++)
		{	if(a[j]==i+1)
				aa[i][j]=1;
			else
				aa[i][j]=0;
			printf("%d ",aa[i][j]);
		}
		printf("\n");
	}
	
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
		//	printf("j");
			int ans=0,k;
			for(k=0;k<n;k++)
				ans+=int(mat[i][k])*aa[k][j];
			cipher+=char(ans);
		}
	}
	return cipher;
	
}

string decrypt(string plain,int a[10])
{
	int l,i,j,m,aa[10][10];
	string cipher="";
	
	for(i=0;i<n;i++)
	{
		for(j=0;j<n;j++)
		{	if(a[j]==i+1)
				aa[i][j]=1;
			else
				aa[i][j]=0;
			printf("%d ",aa[i][j]);
		}
		printf("\n");
	}
	
	l=plain.size();
	
	m=l/n;
	
	char mat[m][n];
	
	for(i=0;i<l;i++)
		mat[i/n][i%n]=plain[i];
	
	for(i=0;i<m;i++)
	{
		for(j=0;j<n;j++)
		{
		//	printf("j");
			int ans=0,k;
			for(k=0;k<n;k++)
				ans+=int(mat[i][k])*aa[k][j];
			cipher+=char(ans);
		}
	}
	
	//remove x from last
	while(cipher[l-1]=='x')
	{
		cipher.erase(l-1,1);
		l--;
	}
	
	
	return cipher;
	
}

int add_inverse(int k,int m)
{	
	return m-k%m;
}



int main()
{
	
	int i,j,k,m,l,k2,a[10],b[10],aa[10][10],bb[10][10];
	string plain,cipher="",plain2;
	
	printf("no of columns: ");
	scanf("%d",&n);
	printf("permutation : ");
	for(i=0;i<n;i++)
		scanf("%d",&a[i]);
	
	printf("Plaintext : ");
	cin >> plain;
	
	
	cipher=encrypt(plain,a);
	cout << "Ciphertext : " << cipher << endl;
	
	for(i=0;i<n;i++)
		b[a[i]-1]=i+1;
	plain2=decrypt(cipher,b);
	
	cout << "Plaintext : " << plain2 << endl;
	
	return 0;
}
	
