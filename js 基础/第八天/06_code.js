//练习：声明变量保存4个英文字母，无限循环弹出提示框
//输入验证码（不区分大小写），如果输入正确结束循环
//声明变量
/*var li='shui';
//无限循环弹出提示框
while(true){
  var str=prompt('输入');
 //比较输入的内容和验证码量否一致
   if(str.toUpperCase()==li.toUpperCase()){
	    break;
	 }

}
*/
//var str='JavaScript';
//截取字符串
/*console.log( str.slice(4));
console.log( str.slice(4,7));
console.log( str.slice(-3,-1));
*/
/*var str1='pangzengfuyi';
//console.log(str1.slice(0,8));
console.log(str1.slice(4,8));
*/

/*练习：声明变量保存邮箱。分别截取出邮箱的用户名和域名 tom123456@163.com
查找@的下标
0~下标  用户名
下标的下一位~最后 域名 */

/*var str1='tom125dsfdsfsdfdssdfs6@163.com';
//查找@的下标 
 var str=str1.indexOf('@');
 console.log(str);
 console.log(str1.slice(0,str));
 console.log(str1.slice(str+1));*/
//var str='JavaScript';
//截取指定的长度
/*console.log(str.substr(4,3));//Scr
console.log(str.substr(-3,2));//ip
*/
//声明变量保存身份证号，截取出年月日和性别：打印‘1999年月日 性别男’
/*var she='440881199912211095';
var hao=she.substr(6,4);
var yue=she.substr(10,2);
var day=she.substr(12,2);
var sex=she.substr(-2,1)%2==0 ? '女':'男';

   console.log(hao+'年'+yue+'月'+day+'日 性别'+sex);
*/
//console.log(sex);
var str='JavaScript';
//截取字符串
console.log(str.substring(4));
console.log(str.substring(4,7));//Scr
console.log(str.substring(-3,3));//如果是负数自动转为0
console.log(str.substring(7,4));
console.log( str.slice(4,7));
console.log( str.charAt('S'));


//练习：将一个英文单词的首字母转大写，其余的字母转小写 heLLo  -> Hello
/* var dai='heLLo';
 var i=dai.substring(0,1).toUpperCase();
 var uu=dai.substring(1).toLowerCase();
 
console.log(i+uu);
*/

//数组转字符串
var arr=['html','css','js'];
var str=arr.join('-');
//console.log(str);
//将字符串分隔成数组
var arr2=(str.split('-'))
//console.log(arr2);
//练习：使用split分隔邮箱，获取用户名和域名
// tom122@163.com
var arr3='tom122@163.com';
 var arr4=arr3.split('@');

  
/*console.log(arr4);
console.log(arr4[0],arr4[1]);
*/










//练习：声明变量保存邮箱，从中分别截取出用户名和域名
 /* 
var email='tom123456@163.com';
var i=email.indexOf('@');
console.log(email.slice(0,i));
console.log(email.slice(i+1));
*/


