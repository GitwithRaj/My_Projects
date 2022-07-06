#include<stdio.h>
#include<stdlib.h>
#include<time.h>
int main()
{
  int num,guess,nguesses=1;
  srand(time(0));
  num=rand()%100;
  //printf("the no. is %d\n",num);
  
  //keep running the loop until the no. is guessed
  do{
      printf("guess the no. between 0 to 100 \n");
       scanf("%d",&guess);
       if(guess>num)
       {
           printf("the lower no. please \n");
       }else if(guess<num)
       {
           printf("higher number please \n");
       }
       else{
           printf("you have guessed it in %d attempt\n",nguesses);
       }nguesses=nguesses+1;
  }while(guess!=num);

}