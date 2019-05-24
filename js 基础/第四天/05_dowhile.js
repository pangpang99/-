//练习：声明变量保存密码为’123456’无限循环弹出提示框输入值，
//如果输入正确，弹出警示框提示‘login success’ 结束循环，

var i='123456';
do{
  var uu=prompt('输入密码');
    if(i==uu){
		alert('login success');
		break;
  }
}while(true);

var pwd='123456';
do{
  var str=prompt('input password');

}while (str!=pwd);














