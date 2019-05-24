/*
function fn(){
console.log(1);
}
//在全局调用 
fn();
function fun(){
  //在函数作用域调用 
  fn();
}
 fun();
*/
var a=7;
function myfun(){
	//var a=5;
 function foo(){
  console.log(2);
  console.log(a);
 }
foo();
}
myfun();








