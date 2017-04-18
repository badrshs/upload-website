#include<stdio.h>
#include<sys/types.h>
#include<sys/socket.h>
#include<netinet/in.h>
#include<string.h>

#define ll long long

ll power(ll a, ll b, ll m)
{
	
	ll ret=1,i;
	
	for(i=0;i<b;i++)
		ret=ret*a%m;
	
	return ret;
}

int main()
{   
    
    int csock,st;
	
	ll e=17;
	ll n=99400891;
    
    struct sockaddr_in se,cl;
    
    csock = socket(PF_INET, SOCK_STREAM, IPPROTO_TCP);
    
    if(csock == -1)
    {
        printf("Error c1\n");
        return 0;
    }
    
    
    se.sin_family = PF_INET;
    se.sin_port = htons(2000);
    se.sin_addr.s_addr = inet_addr("127.0.0.1");
    
    st = connect(csock, (struct sockaddr *)&se, sizeof(se));
    
    if(st==-1)
    {
        printf("Error c2\n");
        return 0;
    }
 ll ms;
	scanf("%lld",&ms);
	ms=power(ms,e,n);
    char msg[10];
	sprintf(msg,"%d",ms);
    int len = strlen(msg);
    
    if(send(csock, msg, len, 0) != len)
    {
        printf("Error c3\n");
        return 0;
    }

    close(csock);
    
    
    return 0;
}
