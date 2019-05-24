///外层循环；控制循环行数    j
/*for (var j=1;j<=9 ;j++ ){
   for (var i=1,num=' ';i<=j ;i++ ){//内层循环：控制循环列数   i
	
       num+=i+'*'+j+'='+(j*i)+' '; 
 }     
	
    console.log(num);
	}
---------- 不会做，，*/
//打印2000~2100本世纪前10个闰年（当打印完第10个，提前结束循环break）；
for(var i=2000,num=0;i<=2100;i++){
    //console.log(i);
  if(i%4==0 && i%100!=0 || i%400==0){
		
	console.log(i);
	num++;
	if(num>=10){
	 break;
	}
	}
 	
}/*
for(var year=2000,b=0;year<=2100;year++){
    
	if (year%4==00 && year%100!=0 || year%400==0)
	{
       console.log(year);
	   b++;
	   if(b>=10){
	   break;
	   }
	}
}
*/
//计算1~100之间所有整数和。当和大于4000的时候，提前结束循环（break），打印总和和当前i的值 
/*for(var i=1,num=0;i<=100;i++){
      num+=i;
   //console.log(num);
    if(num>4000){
      console.log(i,num);
	  break;
	}
	
}*/