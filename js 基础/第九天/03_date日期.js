/*var now=new Date();
//获取 年-月-日
console.log(now.toLocaleDateString());
//获取 时：分：秒
console.log(now.toLocaleTimeString());
//完整      //本地 字符串时间
console.log(now.toLocaleString());
*/
/*var d1=new Date('2019/4/18');
//console.log(d1.toLocaleString());
//修改
d1.setFullYear(2020);    //修改年份为2020
d1.setMonth(7);      //8月要写7月  因为月分是0~11
d1.setDate(3);
d1.setTime(1380000000000);
//console.log(d1.toLocaleString());
//复制Date对象 
var d2=new Date(d1);
//获取当前年份，再加3：把结果修改为当前 的年份
d2.setFullYear(d2.getFullYear()+3);*/
//console.log(d2);

//练习：创建Date对象 ，保存员工的入职时间‘2019/4/18’
//3年后合同到期，计算到期时间；合同到期前一个月续签合同，如果是周末
//提前到周五，计算续签时间
  //入职时间：2019/4/18
  //到期时间：2022/4/18
  //续签时间：2022/3/17

 var d1=new Date('2019/4/18');
//复制入职时间作为到期时间
 var d2=new Date(d1);
 //3年后到期
 d2.setFullYear(d2.getFullYear()+3);
 //复制到期时间作为为续签时间
 var d3=new Date(d2);
 //提前一个月
  d3.setMonth(d3.getMonth()-1);
	//判断是否为周末 
	if(d3.getDay()==0){  //如果为周日
	//提前两天
   d3.setDate(d3.getDate()-2);
	}else if(d3.getDay()==6){ //如果为周六
	 d3.setDate(d3.getDate()-1);
	}
console.log('入职时间'+d1.toLocaleDateString());
console.log('到期时间'+d2.toLocaleDateString());
console.log('续签时间'+d3.toLocaleDateString());












