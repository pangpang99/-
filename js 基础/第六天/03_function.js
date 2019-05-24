//全局污染；变量出现后会影响其它的使用
//轮播图
//匿名函数自调用
 (function (){
	 //局部变量，不会对全局造成污染
var num=1;
 })();
 
//会买专辑

(function(){
  var num=3;
console.log(num);
})();













