#include<bits/stdc++.h>
using namespace std;
#define ll long long
#define N 10005

ll isnotprime[N];

ll gcd(ll a, ll b)
{
	if(b%a==0)
		return a;
	return gcd(b%a,a);	
}

ll power1(ll a, ll b, ll m)
{
	
	if(b==0)
		return 1;
	
	ll temp=power1(a,b/2,m);
	
	temp=((temp*temp)%m);
	
	if(b%2==0)
		return temp;
	else
		return ((temp*a)%m);
	
}

ll power2(ll x, ll y, ll m)
{
    ll res = 1;
  
    while (y > 0)
    {
        if (y & 1)
            res = res*x%m;
        y = y>>1;
        x = x*x%m;
    }
    return res;
}

ll power(ll a, ll b, ll m)
{
	
	ll ret=1,i;
	
	for(i=0;i<b;i++)
		ret=ret*a%m;
	
	return ret;
}


ll gcdExtended(ll a, ll b, ll *x, ll *y)
{
    if (a == 0)
    {
        *x = 0, *y = 1;
        return b;
    }
 
    ll x1, y1;
    ll gcd = gcdExtended(b%a, a, &x1, &y1);
    
    *x = y1 - (b/a) * x1;
    *y = x1;
 
    return gcd;
}
 
// Function to find modulo inverse of a
ll modInverse(ll a, ll m)
{
    ll x, y;
    ll g = gcdExtended(a, m, &x, &y);
    if (g != 1)
        return -1;
    else
    {
        ll res = (x%m + m) % m;
        return res;
    }
}

void sieve()
{
	ll i,j,k;
	memset(isnotprime,0,sizeof(isnotprime));
	isnotprime[1]=1;
	
	for(i=2;i*i<=N;i++)
		for(j=2*i;j<=N;j+=i)
			isnotprime[j]=1;
}



int main()
{
	
	ll i,j,k,m,n,p,q,phi,e,d,c;
	
	sieve();
	
	p=0;
	q=0;
	
	for(i=N-1;i>=0;i--)
		if(isnotprime[i]==0)
			if(p==0)
				p=i;
			else if(q==0)
			{
				q=i;
				break;
			}
			else
				break;
	
	
	printf("p=%lld, q=%lld\n",p,q);
	
	n=p*q;
	
	
	phi=(p-1)*(q-1);
	
	while(1)
	{
		e=17;
		if(gcd(e,phi)==1)
			break;
		
	}
	
	d=modInverse(e,phi);
	
	printf("Public Key: (e,n)=(%lld,%lld)\n",e,n);
	printf("Private Key: d=%lld\n",d);
	
	ll msg=123;
	
	c=power(msg,e,n);
	msg=power(c,d,n);
	
	return 0;
}
