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
    
    int ssock,st;
	
	ll e=17;
	ll n=99400891;
	ll d=81843137;
    
    struct sockaddr_in se,cl;
    
    ssock = socket(PF_INET,SOCK_STREAM,IPPROTO_TCP);
    
    if(ssock == -1)
    {
        printf("Error s1\n");
        return 0;
    }
    
    
    cl.sin_family = PF_INET;
    cl.sin_port = htons(2000);
    cl.sin_addr.s_addr = inet_addr("127.0.0.1");
    
    
    st = bind(ssock, (struct sockaddr *) &cl, sizeof(cl));
	
	if(st==-1)
	{
		printf("Error s2\n");
		return 0;
	}
    
    st = listen(ssock, 5);
    
    if(st==-1)
    {
        printf("Error s3\n");
        return 0;
    }
    
    int p = sizeof(cl);
    
    int s1 = accept(ssock, (struct sockaddr *)&cl, &p);                                                 //new socket
    
    if(s1 == -1)
    {
        printf("Error s4\n");
        return 0;
    }
    
    char msg[10];
    int len = strlen(msg);
    
    if(recv(s1, msg, 10, 0) < 0)
    {
        printf("Error s5\n");
        return 0;
    }
	
	ll ms=atoi(msg);
    printf("Encrypted Message Recieved : %lld\n",ms);
	ms=power(ms,d,n);
	printf("Decrypted Message: %lld\n",ms);
    
    close(ssock);
    
    
    
    return 0;
}
