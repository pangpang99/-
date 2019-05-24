//计算任意三个数字相加的和，并把结果返回
function add(a,b,c){
  return a+b+c;

}
//把函数的返回结果保存在变量中
var num1=add(3,7,12);
console.log(num1);
//练习：创建函数，getMax，返回任意两个数字的最大值。

function getMax(n1,n2){

  if(n1>n2){
   return n1;
  }else{
   return n2;
 }

}
var qq=getMax(12,13);
console.log(qq);

function qq(n1,n2){
   return n1>n2 ? n1 : n2
	 
}
var ww=qq(11,14);
console.log(ww);

//练习：创建函数getMax，返回任意3个数字的最大值。
function getMax(n1,n2,n3){
   var max=n1>n2?n1:n2;
   return max>n3? max:n3;


}
var big=getMax(11,12,13);
console.log(big);

//练习：创建函数，传递1个参数（状态码）。根据订单状态码，返回对应的中文。
//1-待付款  2-待发货  3-运输中  4-已签收   5-已取消  其它-无法追踪
function  code(ii){
switch(ii){
  case 1:
     return('待付款');
  //break;
  case 2:
	   return('待发货');
  //break;
  case 3:
	   return('运输中');
  //break;
  case 4:
	   return('已签收');
  //break;
  case 5:
	   return('已取消');
  //break;
   default:
	    return('无法追踪');
  
}

}
var ii1=code(7);
console.log(ii1);


function get(i){
 if(i%4==0 && i%100!=0 || i%400==0){
   return 366;
 }else{ 
 }return 365;
}
var day=get(2020);
 console.log(day);

//判断是否闰年，是返回true，不是返回false
function isRun(i){
  if(i%4==0 && i%100!=0 || i%400==0){
	  return true;
  }
      return false;
}
//var res=isRun(2019);
//console.log(res);
//根据闰年，返回天数
function getDays2(i){
   if(isRun(i)){
    return 366;
   }
    return 365;
};
 var d=getDays2(2000);
console.log(d);


//计算1~任意数字之间所有整数阶乘的和
//步骤1：创建函数getJC。传递1个参数。计算任意数字的阶乘
function getJC(nn){
  for (var i=1,ride=1;i<=nn ;i++ ){
       ride*=i;
   }    
  return ride;
}
var jc=getJC(5);
console.log(jc);

//步骤2；创建函数getSum，传递1个参数，计算1~任意数字之间所有整数的和
function getSum(n){
  for(var i=1,sum=0;i<=n;i++){
	  //i代表中间所有的整数
	  //获取数字的阶乘getJC(i);
    //sum+=i;//把所有的数字加到sum
	sum+=getJC(i);//把所有的数字的阶乘加到sum
  }
  return sum;

}
var n2=getSum(100);
console.log(n2);









