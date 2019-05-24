//创建一个圆对象，属性有半径，圆周率的属性添加两个方法，计算圆的周长(getLength),计算圆的面积(getArea).分别调用
//尝试可以构造函数创建对象。并添加属性和方法
var circle={
  r:5,
  PI:3.14,

	getLength:function(){
	 return this.PI*this.r*this.r},

  getArea:function(){ 
		 return 2*this.PI*this.r}
		 
		 };
		 console.log(circle.getLength());
     console.log(circle.getArea());

var yuan=new Object();
  yuan.r=5,
  yuan.PI=3.14,
    yuan.say=function(){return this.PI*this.r*this.r},

		 yuan.say1=function(){return 2*this.PI*this.r};
console.log(yuan.say());
console.log(yuan.say1());

"D:\Program Files (x86)\360\360Safe\360Safe.exe"


