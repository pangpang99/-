//根据订单的状态码打印对应中文
/*var status=9;
switch (status){
	case 1:  //如果status的值是1
    console.log('等待付款');
  break;
    case 2:
	console.log('等待发货');
	break;
	case 3:
	console.log('运输中');
	break;
	case 4:
	console.log('已签收');
	break;
	case 5:
	console.log('已取消');
	default:
	console.log('错误状态码');
	}
//获取星期的值0~6，
var week=2;
 switch (week){
 case 0:
  console.log('星期日');
  break;
  case 1:
  console.log('星期一');
  break;
  case 2:
	 console.log('星期二');
  break;
  case 3:
	  console.log('星期三');
  break;
  case 4:
	  console.log('星期四');
  break;
  case 5:
	  console.log('星期五');
  break;
  case 6:
	  console.log('星期六');
  break;
  default:
	  console.log('打错了');
 }
//练习：根据一个人的成绩进行评判
//优秀  90~以上
//良好   80~90以下
//中等   70~80以下
//及格    60~70以下
//不及格  60以下

var score=89;
 num=(score/10);
 num=parseInt(num)
console.log(num);
switch(num){
  case 9:
	 console.log('优秀');
  break;
  case 8:
	  console.log('良好');
  break;
  case 7:
	  console.log('中等');
  break;
  case 6:
	  console.log('及格');
  break;
  default:
	  console.log('不及格');
} 

 
var i=1;
while (i<=100){
	console.log(i);  //
  i+=2;

}

var i=20;
while (i<=30){
	
	console.log(i);   //20 22 24 26 28 30
   i+=2;
}

var i=100;
while (i>=70){
	//if(i%5==0)
	console.log(i); //100 95 90 85 80 75 70
    i-=5;
	
}

var i=1;
var num=0;
while (i<=100){
  num+=i;
  console.log(num);
  i++;
}console.log(num);


var i=1;
 var num=0;
while (i<=100){
 if(i%2==0){
    num+=i;
   console.log(num);
 }
   i++;
}   console.log(num);

var i=1;
var jc=1;
while (i<=20){
	if(i%2==1){
	jc*=i;
}
 //console.log(jc);
 i++;
}
console.log(jc);

var i=1;
while(true){
  console.log(i);
 if(i==100){
   break;
 }
	  
  i++;
}
*/
var e=50;
var s=0;
while (true){
	//console.log(e);
     s+=e;
	if(e==100){
	 break;

	}
	e++;
}
console.log(s);
















