//练习：使用递归计算1~任意数字之间的和
function getSum(n){
	//当n为1的时候 ，返回1
	if(n==1){
	  return 1;
	}
   return n+getSum(n-1);
}
var sum=getSum(100);
console.log(sum);












