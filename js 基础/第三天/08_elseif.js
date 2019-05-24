//判断一个人的政治面貌
var type=' ';
if (type=='党员'){
	console.log('此人是党员');
	}else if (type=='团员'){
	console.log('此人是团员');
}else if (type=='群众'){
	console.log('此人是群众');
}else{
 console.log('非法的政治面貌');   
}
//根据订单的状态码来打印对应的中文    status
//1-等待付款  2-待发货  3-运输中  4-以签收    5-已取消    其它-无法追踪
var order=15;
if (order==1){
	console.log('等待付款');
}else if (order==2){
	console.log('待发货');
}else if (order==3){
	console.log('运输中');
}else if (order==4){
	console.log('以签收');
}else if (order==5){
	console.log('已取消');
}else{
    console.log('无法追踪');
}


//练习：根据一个人的成绩进行评判
//优秀  90~以上
//良好   80~90以下
//中等   70~80以下
//及格    60~70以下
//不及格  60以下


var score=99;
if (score>=90)
{console.log('优秀');
}else if (score>=80 && score<90)
{console.log('中等');
}




var score=70;
if (score>=90)
{console.log('优秀');
}else if (score>=80)
{console.log('良好');
}else if (score>=70)   //score<80
{console.log('中等');
}else if (score>=60)
{console.log('及格');
}else{
  console.log('不及格');
}
//练习：银行根据客户的存款分类
//普通客户   10以下
//优质客户    10~50以下
//金牌客户    50~100以下
//钻石客户    100~
var deposit=100;
if (deposit<10)
{console.log('普通客户');
}else if (deposit<50)   //>=10
{console.log('优质客户');
}else if (deposit<100)  //>=50
{console.log('金牌客户');
}else{console.log('钻石客户');//>100
}









