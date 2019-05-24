//创建对象。存储日期时间
//var d1=new Date('2019/4/18 10:20:30');
var d2=new Date(2019,12,19,10,20,30);
//获取当前的系统时间
var d3=new Date(1500000000000);
//存储距离计算机元年的毫秒数
//1970-1-1  0:0:0
//console.log(d3);

//获取Date对象中的日期时间等 
//var d1=new Date('2019/4/18 10:45:30');
/*var d1=new Date();
console.log(d1.getFullYear());
 console.log(d1.getMonth()+1);  //0~11
console.log(d1.getDate());
console.log(d1.getHours());
console.log(d1.getMinutes());
console.log(d1.getSeconds());
console.log(d1.getMilliseconds());
console.log(d1.getDay());  //0~4
console.log(d1.getTime());
*/
//练习：创建Date对象，保存当前系统的日期时间：根据对象 打印2019年04月19日 星期四
/*
var d=new Date();
var year=d.getFullYear();
var month=d.getMonth()+1;
var date=d.getDate();
var day=d.getDay();
//判断月份是否小于10
if(month<10){
 month='0'+month
}
//创建数组。保存中文的星期
var week=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
console.log(year+'年'+month+'月'+date+'日'+week[day]);
*/

//计算当前距离2019年国庆节还有？ 天？ 小时？ 分钟？ 秒

var d=new Date();
var d1=new Date('2020/01/25');
//console.log(d1.getTime()-d.getTime());
//两个对象相减得到的就是相差的毫秒数
var d3=d1-d;
//转成相差的秒数
d3=Math.floor(d3/1000);
//获取相差的天数=总的秒数/一天的秒数
var day=Math.floor(d3/(24*60*60));
//获取相差的小时 
//获取相差不满一天的部分的秒数，转成小时 
//总的秒数%一天的秒数=不满一天的秒数
var hours=d3%(24*60*60);
hours=Math.floor(hours/3600);   //相差的小时
//获取相差的分钟
//总的秒数%一小时的秒数=不满一小时的秒数
var minutes=d3%3600
//转成分钟
minutes=Math.floor(minutes/60);
var seconds=d3%60

//console.log(seconds);
console.log('距离2020年春节还有'+day+'天'+hours+'小时'+minutes+'分'+seconds);



