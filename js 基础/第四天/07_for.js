/*for (var i=1,sum=0;i<=100 ;i++ ){
    sum+=i;
}console.log(sum);*/
/*
var sum=0,i=1;
for (;i<=100;i++ ){
	sum+=i;
}*/
/*var sum=0,i=1;
for(;i<=100;){
  sum+=i;
  i++;
}console.log(sum);
*/
/*
for (var i=1,j=5;i<=10 ;i++,j-- )
{console.log(i,j);
}
//如果有多个循环条件，后边的起作用
for (var i=1,j=5;j>=1,i<=10 ;i++,j-- )
{console.log(i,j);
}
*/
//练习：计算1/10+2/9+3/8.....+10/1

for (var i=1,j=10,sum=0;i<=10 ;i++,j-- ){
   sum+=i/j
    

}
console.log(sum);







