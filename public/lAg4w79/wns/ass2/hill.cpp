#include<bits/stdc++.h>
using namespace std;
int a[3][3]={0};


int main()
{
	string plain;
	cout<<"Plain : ";
	getline(cin,plain);
	cout<<"key matrix : \n";
	
	for(int i=0;i<3;i++)
		for(int j=0;j<3;j++)
			cin>>a[i][j];
	
	/* inverse calculation */
	
	int A[3][3]={
	
		{  a[2][2]*a[1][1]-a[2][1]*a[1][2] , -(a[2][2]*a[0][1]-a[2][1]*a[0][2])  , a[1][2]*a[0][1]-a[1][1]*a[0][2] },
		{-(a[2][2]*a[1][0]-a[2][0]*a[1][2]) ,  a[2][2]*a[0][0]-a[2][0]*a[0][2] , -(a[1][2]*a[0][0]-a[1][0]*a[0][2])},
		{  a[2][1]*a[1][0]-a[2][0]*a[1][1] , -(a[2][1]*a[0][0]-a[2][0]*a[0][1]) ,  a[1][1]*a[0][0]-a[1][0]*a[0][1] }
	};
	int det=	a[0][0]*( a[2][2]*a[1][1]- a[2][1]*a[1][2])
             - 	a[1][0]*( a[2][2]*a[0][1]- a[2][1]*a[0][2])
             + 	a[2][0]*( a[1][2]*a[0][1]- a[1][1]*a[0][2]);

	int detinv;
	if(det==0||det==2||det==13)
	{
		cout<<"Inverse matrix not possible in mod 26";
		return 0;
	}
	for(int i=0;i<100;i++)
	{
		if(((det*i )+26000)%26==1)
			{detinv=i;break;}
	}
	
	int B[3][3]={
		{ ((A[0][0]*detinv)+26000)%26  , ((A[0][1]*detinv)+26000)%26 ,((A[0][2]*detinv)+26000)%26 },
		{ ((A[1][0]*detinv)+26000)%26  , ((A[1][1]*detinv)+26000)%26 ,((A[1][2]*detinv)+26000)%26 },
		{ ((A[2][0]*detinv)+26000)%26  , ((A[2][1]*detinv)+26000)%26 ,((A[2][2]*detinv)+26000)%26 }
	};
	
	string enc;
	int o=0;
	string tplain=plain;
	while(tplain.length()%3)
		tplain+='x';
	//cout<<tplain;
	for(int i=0;i<tplain.length()/3;i++)
		{
			string yolo=tplain.substr(3*i,3*(i+1));
			for(int j=0;j<3;j++)
			{
				int p=0;
				for(int k=0;k<3;k++)
				{
					p=p+(a[j][k]*(yolo[k]-'a'));
				//	cout<<p;
				}
			//	cout<<endl;
				enc=enc+char( (p%26)+'a');
			}
		}
	cout<<"Encrypted : "<<enc<<endl;

	string dec;
	for(int i=0;i<enc.length()/3;i++)
		{
			string yolo=enc.substr(3*i,3*(i+1));
			for(int j=0;j<3;j++)
			{
				int p=0;
				for(int k=0;k<3;k++)
				{
					p=p+(B[j][k]*(yolo[k]-'a'));
				//	cout<<p;
				}
			//	cout<<endl;
				dec=dec+char( (p%26)+'a');
			}
		}
	cout<<"decrypted : "<<dec<<endl;
}


