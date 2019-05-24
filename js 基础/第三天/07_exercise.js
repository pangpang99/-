//练习：使用提示框分别输入商品的单价和数量 ，计算出商品的总价。如果总价满500，打8折，使用变量保存账户余额为600；如果余额足够支付 ，打印支付成功，否则打印余额不足

var price=prompt('单价');
var count=prompt('数量');
var total=price*count;

if (total>=500){
	total*=0.8;	
}
var money=1000;
//如果余额足以支付。支付成功，否则支付失败
if(money>=total){
console.log('支付成功');
}else{
console.log('支付失败');
}































