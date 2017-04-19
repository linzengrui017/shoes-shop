/*
*	shoppingCart.jsp
*	created by lzr 2016/05/29
*/

	//加减数量插件
	$(function(){
		$("input[name='btn_add']").each(function(index){
			$(this).click(function(){
				// alert("第"+index+"个btn_add按钮");
				var tbodyNode = $(this).parent().parent().parent();	//获取input的父父父节点--tbody
				var trNode = tbodyNode.children().eq(index);	//获取第index+1个tr
				var tdNode = trNode.children().eq(5);	//获取input的td
				var inputNode = tdNode.children().eq(1);	//获取第2个input
				// alert("inputNode="+inputNode.val());					
				inputNode.attr("value",parseInt(inputNode.val())+1);
				// alert("new value="+inputNode.val());
									
				//计算商品总价
				var price = trNode.children().eq(4).html();	//获取price的td节点，并取值
				var nums = inputNode.val();	//获取数量
				var total = price*nums;	//计算总价
				var totalNode = trNode.children().eq(6);	//获取总价的td节点
				totalNode.html(total);	//赋值
			});
		});
		$("input[name='btn_min']").each(function(index){
			$(this).click(function(){
				// alert("第"+index+"个btn_add按钮");
				var tbodyNode = $(this).parent().parent().parent();	//获取input的父父父节点--tbody
				var trNode = tbodyNode.children().eq(index);	//获取第index+1个tr
				var tdNode = trNode.children().eq(5);	//获取input的td
				var inputNode = tdNode.children().eq(1);	//获取第2个input
				// alert("inputNode="+inputNode.val());					
				if(inputNode.val()>1){
					inputNode.attr("value",parseInt(inputNode.val())-1);	
				}
				// alert("new value="+inputNode.val());
			
				//计算商品总价
				var price = trNode.children().eq(4).html();	//获取price的td节点，并取值
				var nums = inputNode.val();	//获取数量
				var total = price*nums;	//计算总价
				var totalNode = trNode.children().eq(6);	//获取总价的td节点
				totalNode.html(total);	//赋值
			});
		});
	});
		
	//父复选框的全选、全不选函数
	$("#checkAll").click(function(){
			check(this);
		});
	function check(obj){
		$("input[type='checkbox']").prop('checked', $(obj).prop('checked'));
	}

	//自动执行事件
	$(document).ready(function(){
		autoclick();	//函数调用
		$("#calc").click(function(){
			//var num = $("input[name='subBox']:checked").length;
			// alert("num="+num);
			//$("#num").html(num);
			var subBox = $("input[name='subBox']");
			var numbers = subBox.length;
			
			var result = 0;
			for(i=0;i<numbers;i++){
				
				if(subBox[i].checked){
//					var temp = $("td input[name='txt_nums']").val();
//					alert("temp="+temp);
					$("td input[name='txt_nums']").each(function(index){
//						alert("aaaa");
//						alert("i="+i+",index="+index);
						if(i == index){
							result = result + parseInt($(this).val());	
						}
					});
				}
			}
//			alert("result="+result);
			$("#num").html(result);
		});	
		function autoclick(){	//函数声明
			$("#calc").trigger("click");	//让系统自动执行单击事件
			setTimeout(autoclick, 1500);	//设置1秒钟之后再次执行该函数
		}
	});

	//计算选中的商品总价
	$(document).ready(function(){
		autoSum();	//函数调用
		$("#btn_sum").click(function(){
			var subBox = $("input[name='subBox']");
			var numbers = subBox.length;
			
			var result = 0;
			for(i=0;i<numbers;i++){
				if(subBox[i].checked){
					$("td[name='total']").each(function(index){
						if(i == index){
							result = result + parseInt($(this).html());	
						}
					});
				}
			}
			// alert("result="+result);
			$("#totalValue").html(result);

		});	
		function autoSum(){	//函数声明
			$("#btn_sum").trigger("click");	//让系统自动执行单击事件
			setTimeout(autoSum, 1000);	//设置1秒钟之后再次执行该函数
		}
	});
	
	
	//提交按钮的事件
	$("#addToOrder").click(function(){
		//获取被选中的序号
		var subBox = $("input[name='subBox']");
		var numbers = subBox.length;
		var str = "";	//字符串
		for(i=0;i<numbers;i++){
			if(subBox[i].checked){	//i的值即为itemsList里的序号
				$("input[name='txt_nums']").each(function(index){
					if(i == index){	//依次获取被选中的商品项里的nums属性值
						var nums = parseInt($(this).val());
						str = str+ i+","+nums+",";
					}
				});
			}
		}
		//保存数据，页面跳转
		$.ajax({
			url:"addToOrders!jAddToOrders?",
			type:"post",
			dataType:"json",
//			dataType:"text",
//			contentType:"jsonp",
			traditional: true, //
			data : {"arrays":str},
//			data : "{}",
			//设置请求成功时执行的回调函数
			success:function(){
//				alert("请求成功！");
				window.location.href = "address.jsp";
			},
			//设置请求失败时执行的回调函数
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				 alert(XMLHttpRequest.status);
				 alert(XMLHttpRequest.readyState);
				 alert(textStatus);
			}
		});
	});
	
	
	

	// //确认在同名checkbox里，那个checkbox被选中
	// $("#find").click(function(){
	// 	var subBox = $("input[name='subBox']");
	// 	var numbers = subBox.length;
	// 	var arrays={};	//定义一个数组
	// 	j = 0;
	// 	for(i=0;i<numbers;i++){
	// 		if(subBox[i].checked){
	// 			arrays[j]= i;
	// 			j++;
	// 		}
	// 	}
	// 	//遍历数组	n为下标，value对应下标的值
	// 	$.each(arrays,function(n,value){
	// 		// alert(n+''+value);
	// 	});
	// });
		
	// //计算全部总价
	// $(document).ready(function(){
	// 	autoSum();	//函数调用
	// 	$("#btn_sum").click(function(){
	// 		var result = 0;
	// 		//获取td
	// 		$("td[name='total']").each(function(){
	// 			result = result + parseInt($(this).html());
	// 		});
	// 		// alert("result="+result);
	// 		$("#totalValue").html(result);

	// 	});	
	// 	function autoSum(){	//函数声明
	// 		$("#btn_sum").trigger("click");	//让系统自动执行单击事件
	// 		setTimeout(autoSum, 1500);	//设置1秒钟之后再次执行该函数
	// 	}
	// });
