//打印1~10之间所有的整数
/*var i=1;
do{
   console.log(i);
   i++;
}while(i<=10);
*/


//打印100~1之间所有整数
/*var i=100;
do{
   console.log(i);
   i--;
}while(i>=1);
*/
//打印70 75 80 85 90 95 100

var ii=70;
do{
   console.log(ii);
   ii+=5;
}while(ii<=100);

//计算1~100之间所有能被3整除的数字的和
var i =1;
var num=0;
do{   //
	if(i%3==0)
		num+=i;
  //console.log(num);
     i++;
}while (i<=100);
console.log(num);
//阶乘 5！=5*4*3*2*1
//练习：计算10的阶乘

var i=10;
var num=1;
do{
	num*=i;
  console.log(i);
  i--;
}while (i>=1);
console.log(num);
//练习：声明变量保存密码为’123456’无限循环弹出提示框输入值，
//如果输入正确，弹出警示框提示‘login success’ 结束循环，

var i='123456';
do{


}while();




