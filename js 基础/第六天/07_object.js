//使用对象 字面量创建对象
/*var phone={
	color:'black',
	brand:'huawei',
	size:6.55,
	'madeIn':'china'    //
  

	
};
console.log(phone);
*/
//练习：创建一个人对象，添加姓名。性别，年龄
/*var rei={
  name:'zhu',
	sex:'女',
	year:18
}
//console.log(rei);

//练习：创建一个员工对象，属性有编号，姓名，性别，生日，工资，部门编号
var emp={
  eid:1,
	ename:'tom',
	sex:1,
	birthday:'12.12',
	salary:5888,
	'dep-tId':20
};
	//console.log(emp);
//访问对象中属性，获取对象中的属性值 
console.log( emp.ename );
console.log( emp['dep-tId'] );
//访问不存在的属性返回undefined
console.log( emp.sdf );
//修改对象中的属性值
 emp.salary=1000000;
 emp['birthday']='1999-12-4';
 //添加不存在的属性
 emp.country='china';
 console.log(emp);
 */
//练习创建一个电脑对象，包含的属性有屏幕尺寸，品牌，颜色，内存大小 ，获取品牌的属性值，修改颜色的属性值，添加产地属性  苹果
var computer={
 size:7.5,
 brand:'apple',
 colour:'red',
	memsize:256,
 }
console.log(computer.brand);
computer.colour='white';
computer.country='china';
console.log(computer);




