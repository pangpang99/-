//先执行&& 再执行||
var run=2024;
(run%4==0 && run%100!=0 || run%400==0)
&& console.log('闰年');

