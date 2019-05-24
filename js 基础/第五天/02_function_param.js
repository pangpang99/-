//创建带有参数的函数
//计算任意两数字相加的和
/*function add(num1,num2){
   //在调用 的时候 ，实参的第一个的值会赋给num1，实参的第二个值 赋给num2；
  console.log(num1+num2);
   
}
add(2,3);
add(3,8);
add(10,10);
*/
//练习：创建函数，传递1个参数。计算1~任意数字之间的和
/*function add(num){
  for (var i=1,j=0;i<=num ;i++ ){
       j+=i;
  
  }
      console.log(j);
}
  add(100);
*/
 //练习：创建函数 传递2个参数，计算任意两个年份之间的闰年个数  n1~n2

/*function run (n1,n2){
 for (var i=n1,qq=0;i<=n2 ;i++ ){
      if(i%4==0 && i%100!=0 || i%400==0){
	    
		qq++;

	 }
    
   } console.log(qq);
  }
 run(2000,2100);
*/
//练习：创建函数 传递2个参数，计算任意两个年份之间的闰年个数  n1~n2
 
function get(n1,n2){
   for (var i=n1,num=0;i<=n2 ;i++ ){
     if(i%4==0 && i%100!=0 || i%400==0){
	    
		num++;
		
	 } 
   } console.log(num);
   
  }  
get(2000,2100);

/*function add(a,b,c){

console.log(c);//undefined  
console.log(a+b+c); // NaN

}
add(1,3);
add(2,4,6,8);
var unm1=add();

*/











