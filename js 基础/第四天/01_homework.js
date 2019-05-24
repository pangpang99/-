//练习：根据一个人的成绩进行评判
//优秀  90~以上
//良好   80~90以下
//中等   70~80以下
//及格    60~70以下
//不及格  60以下

var score=100;
 score=parseInt(score/10);

console.log(score);
switch(score){
  case 13
  case 12
  case 11
  case 10:
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