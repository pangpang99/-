//创建函数，计算斐波那契数列的第n项：使用递归和普通函数两种方法完成
 function fib(n){
	 //当n为1或者2的时候，直接返回1
	 //当前俩项的值=前俩项相加的和
  if(n==1 || n==2){
	 return 1;
	}
   return fib(n-1)+fib(n-2);

 }
var ee=fib(9);
console.log(ee);


function fib(n){
  var n1=1;
	var n2=1;
	//如果要获取第n项的值，需要从第3项开始，不断往后移动
	for(var i=3;i<=n;i++){
		//每移动一次，当前n1为上一次的n2的值，
		//当前n2的值为上一次n1和n2相加的值
	 var c=n1;
	 n1=n2;
	 n2=c+n2;
		
	}
	//当前n2的值就是这一项的值
	return n2;
}
console.log(fib(12));













