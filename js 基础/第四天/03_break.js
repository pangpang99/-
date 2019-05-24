//打印1~10之间所有的整数
/*var i=1;
while(true){
	console.log(i);
	if(i==10)
	 break;
	
  i++;
}
*/


/*
var i=1;
while (true){
	console.log(i);
	if(i==10){
	 break;
   
 }
  i++;
  
}
*/
//练习：使用变量保存一个数字，无限循环弹出提示框输入值，如果猜大了，弹出警示框提示‘big’,如果猜小了，弹出警示框提示‘small’否则弹出警示框提示'right',结束循环。
//准备好一个数字
//声明一个变量保存数字
/*
var num=35;
//无限循环体中弹出提示框
while(true){
	//弹出提示框，并保存输入的值
   var shu=prompt('输入数字') 
	   //查看输入的值和之前保存的值对比
     //如果输入的值大于保存的值
    if(shu>num){
	  alert('big');
	}else if(shu<num){
	  alert('small');
	}else{
	  alert('right');
     break;//结束循环
	}
}
/////////因为NaN和任何数比较都是NaN

*/

/*
    // music.pause();
var gData = ["不玩游戏","做家务","工资上缴","妈不去河边","保大","听你的"];
//var wHeight = $(window).height() + "px";
var i = 0;
//$(".wt").css("height",wHeight); 
(function(){
    $(".tijiao").click(function(){
        var gVal = $("#kk").val()
        if(gVal == "全靠浪"){
           // $(".love").css("display","block");
            //$(".wt").css("display","none");
        }else if(gVal == ""){
            alert("请输入答案")
        }else{
            alert("回答错误")
        }
    })
})();*/
/*$(".buhao").click(function(){
    $(".layer").innerHTML="";
    if(i < gData.length){
        $(".layer").html(gData[i]);
        i++;
    }else{
        i=0;
        $(".layer").html(gData[i]);
    }*/
    // function rnd(n, m){
    //     var random = Math.floor(Math.random()*(m-n+1)+n);
	   // $(".layer").html(gData[random]);
    // }
    // rnd(0, i);
    
    
   
  //      




//var gData = ["不玩游戏","做家务","工资上缴","妈不去河边","保大","听你的"];
var num='爱';
//无限循环体中弹出提示框
while(true){
	//弹出提示框，并保存输入的值
   var shu=prompt('爱我吧，爱我请输入‘爱’') 
	   //查看输入的值和之前保存的值对比
     //如果输入的值大于保存的值
    if(shu==num){
	  alert('我也爱你');
		break;
	}else{
	  alert('不玩游戏');
	  alert('做家务')
    alert('工资上缴')
    alert('妈不去河边')
    alert('听你的')
     //break;//结束循环
	}
}









