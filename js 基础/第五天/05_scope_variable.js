/*console.log(a );
var a=1;
*/

/*function fn(){

 console.log(b);
 var b=2;
}
fn();
*/
/*var c=3;
function fun(){
  console.log(c);
  var c=5;

}
fun();
*/
/*
var c=3;
function fun(){
  console.log(c);
 c=5;

}
fun();
*/ /*
function myfun(n){
	//形参相当于是函数内部的变量，只能函数内部作用
console.log(n);
 
}
myfun(7);
//console.log(n);//报错
*/

var d=5;
function foo(d){
	// d始终是局部变量，不能被外部访问
	//形参在原来 的基础之上加3，和全局的d没有关系

  d=d+3;
   //d=11
  
}
foo(8);
console.log(d);

















