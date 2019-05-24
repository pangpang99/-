/*var book ={
  id:1002,
	title:'javascript',
  price:79
}//
	
//把book变量中存储的数据 赋给book1变量
//把book存储的地址赋给了book1
//把book和book1指向同一个对象                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
var book1=book;
//修改book中属性
book.price=86;
console.log(book1);
//修改book1的属性
book1.title='javascriptadljal;f';
console.log(book);
*/
//原始类型存储 
/*var a =1;
var b=2;
var c=a;
c=3;
console.log(a);
*/
//
//fn提升到最前边
//var fn;
//function fn(){}// 把一个函数赋给了fn

var fn=1;  //再次覆盖了fn中的值
function fn(){
   fn=5;
}
console.log(fn);

