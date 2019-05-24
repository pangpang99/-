//使用遍历数组翻转数组 中的元素
//['a','b','c','d']   -> [ 'd', 'c', 'b', 'a' ]
//使用冒泡排序数组中的数字从小到大排序  循环嵌套
/*
var arr=[12,25,23,45,66,99];
for(var i=0;i<arr.length;i++){
   for(var j=i-1;j<arr.length;j++){
	     if(arr[j]>arr[j+1]){
	    var num=arr[j];
	  	 arr[j]=arr[j+1];
	   	 arr[j+1]=num;
	  }
  }
 }
 console.log(arr);





解析：1.比较相邻的两个元素，如果前一个比后一个大，则交换位置。

　　　2.第一轮的时候最后一个元素应该是最大的一个。

　　　3.按照步骤一的方法进行相邻两个元素的比较，
这个时候由于最后一个元素已经是最大的了，所以最后一个元素不用比较。





	//使用遍历数组翻转数组
	
	var sttw=['a','b','c','d','e','f','g','h'];
	var eeq=[];                       //1.先循环每个值，2.截取数组最后一个数值 3. 
	 for(var i=0;i<sttw.length;i++){  
//eeq.push(sttw.splice(sttw.length-1,1));
 //新数组每一项=旧数组[长度-i每次循环-1] 输出旧数组反转的每一项
		eeq[i]=sttw[sttw.length-i-1] //-1 -2
        //eeq+=2019/4/16aa;
	 }
	 console.log(eeq);
	 

	//使用冒泡排序将数组中的数字从小到大排序
    var arr=[4,43,5,453,34,35,334,3,22];
	  for(var i=0;i<arr.length;i++){  //第一次循环数组i每个数字
	    for(var j=i-1;j<arr.length;j++){  // 第二次循环每一个i 都与第二次循环每个数再比较一次
		  if(arr[i]>arr[j+1]){  // 判断第一次循环第N个数再循环一次与数组每个数比较一次
		   var aa=arr[i];   //先储存 第一次循环的第一个数
		    arr[i]=arr[j+1]; // 当前数与后一位调换位置  
			arr[j+1]=aa;    //   当前数与后一位调换位置
		  }
		}
	  }
	console.log(arr);
 

var arr=['a','b','c','d'];

var newArr=[];
//遍历数组
for(var i=0;i<arr.length;i++){
   //0   4   3 
	 //1   4   2
	 //2   4   1
	 //3   4   0
	 //对应元素的下标=长度-1-i
	 //把倒着获取的元素。放入到新数组 
  newArr[i]=arr[arr.length-i-1]
}
console.log(newArr);
*/

//使用冒泡排序数组中的数字从小到大排序  循环嵌套
/*var arr=[12,8,5,15,16,88,45,85,45];
  for(i=0;i<arr.length-1;i++){
//外层循环：比较4轮（循环4次）；
//1  5  4
//2  5  3
//3  5  2
//4  5  1
//内层循环：比较的次数
//循环条件：数组长度-i
     for(var j=0;j<arr.length-i;j++){
		   //如果当前的元素大于下一个元素
			 //则元素位置交换
			 //当前元素下标  j  下一个元素j+1
		  if(arr[j]>arr[j+1]){
			  var c=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=c;
		   }
		 }
	}
  */

var arr=[12,45,18,7,89];
   for(var i=0;i<arr.length-1;i++){
	   for(var j=0;j<arr.length-i;j++){
		 if(arr[j]>arr[j+1]){
		  var c=arr[j];
			arr[j]=arr[j+1];
			arr[j+1]=c;
		 }
		 }
	 }

console.log(arr);















