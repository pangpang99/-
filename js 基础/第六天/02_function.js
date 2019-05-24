//匿名函数
//(function (){   });
 
//使用匿名函数创建函数   --函数表达式
//此时的变量名称就是函数名称

/*var fun=function(){
 console.log(1);

}
//调用函数
fun();
console.log(fun);
*/
var fun=function(n1,n2){
  for(var i=n1,num=0;i<=n2;i++){//循环出来存在i，里面，再累加
	   num+=i;
	
	}
 return num;
}
  console.log(fun(1,100));









