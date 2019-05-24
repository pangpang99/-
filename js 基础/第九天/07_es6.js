/*function fn(){
 var a=1;

}*/

//块级作用域
/*{
let a=2;
let fn=function(){}

}
console.log(a);
*/
/*
for(let i=1;i<=10;i++){
console.log(i);
}

*/
/*
if(3>2){
 let num=10;
}else{
 let num=20;

}
console.log(num);
*/
//2.箭头函数
//var arr=[11,55,47,15,36,56,59];
//从小到大的排序 
/*console.log(arr.sort(function(a,b){
 return a-b;
}));*/
/*console.log(arr.sort((a,b)=>{
 return a-b;
}));*/
//
//console.log(arr.sort((a,b)=>a-b));

//练习：创建函数add，传递两个参数，每个参数都是回调函数 在回调函数中返回
//一个数字，在函数add中计算两个数字相加的和。

/*function add(a,b){ 
   console.log(a()+b())
}
add(()=>6,()=>4);
*/

//计算2019年5月1日10点30分0秒距离2019年12月25相差的天数，小时，分钟，秒

var d2=new Date('2019/12/25');
var d1=new Date('2019/5/1 10:30:00' );
var d3=Math.floor((d2-d1)/1000);   //计算出来的秒数 
var day=Math.floor(d3/(24*60*60));

//console.log(day);//天
var se=d3%(24*60*60);
tie=Math.floor(se/3600);

//console.log(se);//小时

var ww=d3%3600;
shi=Math.floor(ww/60);

var fei=d3%60;


console.log('距离2020年春节还有'+day+'天'+tie+'小时'+shi+'分'+fei);

//一天的秒数是86400

