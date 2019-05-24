var pro=['北京','广东','江苏'];
var city=['海淀','朝阳','东城','西城','广州','深圳','廉江','南京','苏州','无锡'];
//二维数组 
var city=[
  ['海淀','朝阳','东城','西城'],
  ['广州','深圳','廉江','东莞','那良'],
  ['南京','苏州','无锡'],
];
//console.log(city[0][2]);
//console.log(city[1][4]);
//console.log(city[2][2]);

var arr=['a','b','c','d'];
var arr2=arr;//把arr中的地址赋给了arr2
arr.push('e');
//console.log(arr2);
//赋值为null不再指向任何一个堆内存数据
arr=null;
//arr2=null;
console.log(arr,typeof arr);




