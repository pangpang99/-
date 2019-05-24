//打印1~10所有的整数
/*for (var i=1;i<=10 ;i++ ){

   console.log(i);
}*/
//计算1~100所有整数的和
/*
for (var i=1,num=0;i<=100 ;i++ ){
     num+=i;
	 
}console.log(num);

//打印80   77   74  71    ...  50 

for (var i=80;i>=50 ;i-=3 ){
     
     console.log(i);
}*/
//计算1~20之间所有偶数的乘积
/*
for (var i=1,ride=1 ;i<=20;i++ ){
     if(i%2==0)
	  ride*=i;
    
} console.log(ride);
*/
//打印（2000~2100）所有的闰年
//能被4整除，并且不能被100整除，或者能被400整除
/*
for (var run=2000;run<=2100 ;run++ ){
    if(run%4==0 && run%100!=0 || run%400==0)
    console.log(run);
}*/
/*
1*1=1
1*2=2 2*2=4
*/
/*

for (var i=1,str=' ';i<=9 ;i++ ){
      
    str+=i+'*';
console.log(str)
}  */
/*for (var i=1,str=' ';i<=9 ;i++ ){
    
 
}   console.log(str)
*/
for (var i=1,str=' ';i<=9 ;i++ ){
   for (var j=1;j<=i;j++){
str+=i+'*9='+(i*9)+' ';
   }

}console.log(str)





