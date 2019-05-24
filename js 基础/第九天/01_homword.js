//练习：创建数组，包含有若干个元素，每次随机取出1个元素，数组有10个元素，随机取0~9作为下标
/*

var city=['海淀','朝阳','东城','西城','广州','深圳','廉江'];
//取随机数的下标  0~9
//声明一个变量=向下取整 取随机数*原数组的长度
var max=Math.floor(Math.random()*city.length);
console.log(city[max]);



//练习：创建数组，包含有若干个元素，每次随机取出1个元素，数组有10个元素，随机取0~9作为下标

var arr2=['js','html','css','vue','mysql'];
 var arr1=Math.floor(Math.random()*arr2.length);
 console.log(arr2[arr1]);

//创建数组，包含所有的英文字母(大写，小写) 和数字(0~9),随机取4个元素（循环4次），放入一个新数组push。如何不重复？

var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','Z',1,2,3,4,5,6,7,8,9,0];
//准备一个新数组，用于存放随机产生的值
 var newArr=[];
 //循环4次，取4个值
 for(var i=0;i<4;i++){
	           //向下取整    随机数     乘    数组长度，            
     var index=Math.floor(Math.random()*arr.length);
		 //把获取的随机元素放入到新数组 
     newArr.push(arr[index]);
		 //每取出一个元素，把该元素删除
		 //开始的下标 index
		 //删除的个数  1  每取一个删除一个

		 arr.splice(index,1);//
    
 }
console.log(newArr);
*/
//
 








var arr='How aRE yOu';
//将英文分隔成多个单词
//字符串按照空格分隔为数组
var ww=arr.split(' ');     //[ 'How', 'aRE', 'yOu' ]

//遍历数组。将每个单词的首字母转大写。其余字母转小写
for(var i=0;i<ww.length;i++){  //  //  0  1  2

  var rurst=ww[i].slice(0,1).toUpperCase();//  H  A  Y 
	 //取其余字母
	var last=ww[i].slice(1).toLowerCase();  //ow  re  ou 
	ww[i]=rurst+last;   //[ 'How', 'Are', 'You' ]

 
}
console.log(ww.join(' '));     //How Are You





























/*var arr=Math.floor(Math.random()*arr1.length);
var arr2=Math.floor(Math.random()*arr1.length);  
var arr3=Math.floor(Math.random()*arr1.length);  
var arr4=Math.floor(Math.random()*arr1.length); 

console.log([arr1[arr],arr1[arr2],arr1[arr3],arr[arr4]]);
*/