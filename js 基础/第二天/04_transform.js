//将任意的数据强制转为 数值型 
/*var num1=Number('a');
console.log(num1,typeof num1);
var num2=Number(undefined);
console.log(num2,typeof num2);
var num3=Number(null);
console.log(num3,typeof num3);
var num4=Number(true);
console.log(num4,typeof num4);
var num5=Number('1');
console.log(num5,typeof num5);
*/
//强制转为整型
/*var num6=parseInt('3.5');//3
console.log(num6,typeof num6);
var num7=parseInt('1a');//1
console.log(num7,typeof num7);
var num8=parseInt('a1');//NaN
console.log(num8,typeof num8);
//把布尔型的值和null转为整型
var num9=parseInt(true);//NaN
console.log(num9,typeof num9);
var num10=parseInt(null);//NaN
console.log(num10,typeof num10);*/
//将数值型和布尔型转为字符串型
var num=10;
var str=num.toString();
console.log(str,typeof str);

var bool=true;
var str2=bool.toString();
console.log(str2,typeof str2);

































































