var person={
  name:'tom',
  sex:'男',
	age:18
};//访问不存在的属性返回。undefined
//console.log(person.phone);
//比较一个属性的值是否为undefined
 console.log(person.phone===undefined);
 //查看是否含有某个属性
console.log(person.hasOwnProperty('name'));
//查看某个属性是否存在于对象中
console.log('age' in person );







