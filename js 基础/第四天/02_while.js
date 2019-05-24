//打印10次hello
//循环的范围1~10
//声明变量保存数字
/*var i=1;
while (i<=10){
    //循环体
	console.log(i);
	//增量：每次加1；
	i++;
}
*/
//练习：打印11~50之间所有 的整数
/*var ii=11;
while (ii<=50){
	console.log(ii);
     ii++;
}*/

//练习：打印100~1之间所有的整数
/*var i=100;
while (i>=1)
{console.log(i);
 i--;
}
*/
//练习：打印20 22 24  26 28 30
/*var i=20;
while (i<=30){
   if(i%2==0)
	console.log(i);
   i++;
}
//练习：打印1~100之间的奇数，打印之前判断值是否为奇数
var shu=1;
while (shu<=100){
	if(shu%2==1){
	console.log(shu);
	}
  shu++;
}
*/
/*//练习：计算1~100之间所有整数的和
var i=1;
var num=0;
while (i<=100){
	//i就是所有的整数
	//把产生的所有整数加到num中
    num+=i;
	console.log(num);
	i++;
} //console.log(num);
*/
//练习：计算1~100之间所有偶数的和
/*var i=1;
var num=0;
while (i<=100){
	if(i%2==0)
  num+=i;
  console.log(num);
 i++;
}console.log(num);
*/
//计算1~15之间所有奇数的乘积
//初始值1，每次*=
var ii=1;
var jc=1;
while (ii<=15){
   if (ii%2==1){
    jc*=ii;
   }
   ii++;
}
console.log(jc);









