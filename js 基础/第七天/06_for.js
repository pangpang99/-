//练习：创建数组。包含有多个姓名，把tom全部改成‘汤姆’；
//创建数组 
//遍历得到每一个元素
//判断每个元素是否为tom，如果是。重新赋值为‘汤姆’在遍历后，打印数组

/*var name=['tom','tom','jerry','jchen','xian'];
for(var i=0;i<name.length;i++){
    if(name[i]=='tom'){
		   name[i]='汤姆';
		}
}
console.log(name);*/

/*练习：创建数组。包含多个姓名。查询tom出现的次数；
    创建数组
    遍历数组
  初始化变量的次数为0
   判断每个元素是否为tom。如果是次数加1，
  打印遍历 */
/*var name=['tom','tom','jerry','tom','xian'];
for(var i=0,num=0;i<name.length;i++){
	//如果每个元素为tom。则次数加1；
   if(name[i]=='tom'){
		 num+=1;
	 }

}console.log(num);*/

//创建数组。包含多个 数字。获取这组数字的最大值 
//遍历数组中的元素   13  85    74   46  95  100
//声明变量为用于保存最大值。默认把第一个元素放进去

 /*var shu=[ 13,85,74,46,95,100];
 //声明变量，保存最大值
 var max=shu[0];
 //遍历数组。获取每个元素
 //遍历的时候。只需要从第2个开始
 for(var i=0,num=0;i<shu.length;i++){
	 //用mxa和数组每个元素比较
	 //如果小于任意一个元素，则把该元素放入到max中
    if(max<shu[i]){
		 max=shu[i];
		}
		 }
// console.log(max);
 */
//创建函数 getAvg，传递一个参数(一组工资)，在返回工资的平均值
// 实参就是一个数组 。包含多个工资；
//函数体中，计算 元素的和。求平均
//  平均=总和/元素长度

function getAvg(salary){
  //salary就是一个数组
	//遍历salary，获取数组元素的和
	for(var i=0,sum=0;i<salary.length;i++){
	  sum+=salary[i];
	   
	}
   return sum/salary.length ;
}
console.log(getAvg([1000,12000,10000,10000]));





















//练习：创建数组，保存若干个成绩，使用遍历数组元素，让每个成绩加10分
/*
var chenji=[85,55,75,55];
for(var i=0;i<chenji.length;i++){
chenji[i]+=10;
console.log(i);
}
*/




