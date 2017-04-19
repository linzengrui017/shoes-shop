/**
 * 获取商品详情页面的内容，变为购物车的商品项的信息
 * created by lzr 2016/05/26
 */

$(function(){
	$("#addToShoppingCart").click(function(){
		var name = $("#name").val();
//		alert("name="+name);
		if(name != null && name != "" && name!="null" ){
//			alert("(⊙v⊙)嗯");
			getItem();
		}else{
			alert("亲，你还没登录喔！");
		}
	});
});
function getItem(){
//	alert("进入得到商品项内容的方法");
	//获取鞋子id
	var shoesId = $("#shoesId").val();
	//获取鞋子名称
	var shoesName = $("#shoesName").html();
	//获取鞋子颜色
	var color = $('#colorName input:radio:checked').val();
	//获取鞋子尺码
	var size = $("#sizeNum input:radio:checked").val();
//	alert("shoesId="+shoesId+"\n"+"shoesName="+shoesName+"\ncolor="+color+"\nsize="+size);	
	//跳转页面
	location.href="addToShoppingCart!addToShoppingCart?item.shoesId="+shoesId+
		"&item.color="+color+"&item.size="+size;
}