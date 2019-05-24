//使用字符串作为下标----关联数组
var person=[];
person['name']='tom';
person['age']=18;
person['sex']='男';
person['phone']='12345678915';
//console.log(person);
 
for(var key in person){
//key要遍历的元素的下标 
//person[key] 下标的对应的元素
console.log(key,person[key]);
}
//练习：创建数组，包含有多个学生的成绩，获取总成绩 //索引数组
//var sum=0;
var chenji=[85,65,84,54];

for(var key in chenji){
sum+=chenji[key];
  
}
console.log(sum);

//使用for循环获取下标0~4，使用下标获取元素
for(var i=0,num=0;i<chenji.length;i++){
  num+=chenji[i];

}
console.log(num);


/*var list=[
{lid:1,title:'apple',price:6999},
{lid:2,title:'dell',price:4888},
{lid:3,title:'小米',price:4588}

];*/



