var str='China是世界上人口最多的国家，china的互联网非常发达，CHINA有好多的程序员，Welcome to china';
//查找china出现了多少次
//console.log(str.match('china'));
//使用正则表达式的写法查找
//修饰符
//i -> 
//console.log(str.match(/china/gi));
//console.log(str.match(/china/));
//返回满足条件的第一个的下标 
//console.log(str.search(/chinax/i));
//查找并替换
console.log(str.replace(/china/ig,'中国'));

var str1='使用正则表达式的写法查找';
 console.log(str1.replace(/使用/ig,'shu'));


