var person={
	//成员属性
 name:'tom',
 age:18,
 //成员方法
 say:function(){
	 //在方法中访问当前对象this
  console.log('我的名字叫'+this.name);
 }
};
//调用成员方法
person.say();








