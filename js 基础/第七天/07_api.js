 
 var arr1=[' '];
var arr2=['efo','ddso','adwe','desf'];
//数组转为字符串
//console.log(arr.toString());
//console.log(arr.join('-'));
//console.log(arr.concat(arr1,arr2));
//console.log(arr.slice(1,3));
//var arr=['tom','jerry','king','css','html','js','vue','esf','tao'];
//console.log(arr.slice(1,4));
//console.log(arr.slice(-3,-1));

//console.log(arr.splice(3,arr.length,'ddd'));

//练习：创建数组a~g，每个字母是一个元素，分别截取cd，，f d，把截取的结果拼接成一个新数组
/*var zi=['a','b','c','d','e','f','g'];
var ii1=zi.slice(2,4);
var ii2=zi.slice(-2,-1);
var ii3=zi.slice(1,2);
 //console.log(ii1.concat(ii2,ii3));
*/
//删除数组 中的元素
var arr=['tom','jerry','king','css','html','js','vue','esf','tao'];
//console.log(arr.splice(2));
//console.log(arr.splice(2,2));
//console.log(arr.splice(-3,0,'ppppp','htmleee','lsdjfo'));
//console.log(arr);
//练习：创建数组a~h，每个字母是一个元素，删除d e。替换f为m，在下标为1的位置插入字母z
var zi=['a','b','c','d','e','f','g','h'];
var zi3=zi.splice(3,2);
var zi1=zi.splice(3,1,'m');
var zi2=zi.splice(1,0,'z')
//console.log(zi);
//翻转数组中的元素
var arr=['a','b','c','d'];
//console.log(arr.reverse());

var zi=[12,93,450,85,85,98,99];
//console.log(zi.sort());

console.log(zi.sort(function(a,b){
  //return a-b;
  return b-a;
}));


