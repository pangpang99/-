//打印1~10，不包括5
/*for(var i=1;i<=10;i++){
  //当i为5的时候，跳过后边的循环体，执行增量
  if(i==5){

   continue;
  }
	  
  console.log(i);
}*/
//计算1~100所有偶数的和，遇到奇数跳过
/*for(var i=1,num=0;i<=100;i++){
   if(i%2==1){
    continue;
   }
 num+=i;
}
console.log(num);
*/
//打印1~100之间所有整数，不包含能被3整除和能被4整除的数字
for(var i=1;i<=100;i++){
   if(i%3==0 || i%4==0){
      continue;
   }
   console.log(i);
}















































































































