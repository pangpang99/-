
//console.log(2);
//var a=1；//语法错误
//conosle.log(b);   //引用错误 
/*fn();
var fn=function(){}


var arr=[];
arr();*/
//var arr=new Array(-3);


//错误处理
try{
 //尝试执行，可能出现错误的代码
  var arr=new Array(3);
}catch(err){
  //err捕获到的错误
	console.log(err);
 var arr=new Array();

}
//console.log(1);

//console.log(arr);

//练习：声明一个变量add未赋值；尝试调用add函数；如果执行错误，
//给add赋值一个匿名函数，然后再调用add

var add;
try{
 add();
}catch(arr){
	
 add=function(){
  console.log(444);

 }
 add();
}






