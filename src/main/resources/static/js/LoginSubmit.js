/**
 * 登录前端验证
 * created by linzengrui 2016/05/22
 */

	$(function(){		
			$("#login_submit").click(function(){
				submitForm();
			})
		})
	function submitForm(){	
			var errorMsg = "";
			//验证用户名的合法性
			if($("#name").val().length == 0){
				
				errorMsg = "用户名不能为空！";
				$("#name").focus();
				alert(errorMsg);
				return false;
			}else if(($("#name").val().length < 4) || ($("#name").val().length >20)){
				errorMsg = "用户名长度必须在4~20之间，且只能为字母、数字！";
				$("#name").focus();
				alert(errorMsg);
				return false;
			}else {
				for(var i = 0; i < $("#name").val().length; i++){
					var LowercaseLetters = $("#name").val().toLowerCase().charAt(i);
					if((!(LowercaseLetters >= '0' && LowercaseLetters <= '9'))
							&& (!(LowercaseLetters >='a' && LowercaseLetters <='z'))){
						errorMsg = "用户名长度必须在4~20之间，且只能为字母、数字！";
						$("#name").focus();
						alert(errorMsg);
						return false;
					}
				}
			}
//			如果用户名不合法，不用检查密码的合法性，直接输出错误信息；如果用户名合法，再检查密码是否合法。
			if(errorMsg == ""){
				if($("#pwd").val().length == 0){
					errorMsg = "密码不能为空！";
					$("#pwd").focus();
					alert(errorMsg);
					return false;
				}else if(($("#pwd").val().length < 6) || ($("#pwd").val().length >20)){
					errorMsg = "密码长度必须在6~20之间，且只能为字母、数字！";
					$("#pwd").focus();
					alert(errorMsg);
					return false;
				}else{
					for(var i = 0; i < $("#pwd").val().length; i++){
						var LowercaseLetters = $("#pwd").val().toLowerCase().charAt(i);
						if((!(LowercaseLetters >= '0' && LowercaseLetters <= '9'))
								&& (!(LowercaseLetters >='a' && LowercaseLetters <='z'))){
							errorMsg = "密码长度必须在6~20之间，且只能为字母、数字！";
							$("#pwd").focus();
							alert(errorMsg);
							return false;
						}
					}
				}
			}
			
			
			//检查用户名是否存在
			$.ajax({
				url:"login!login?member.name="+$("#name").val()+"&member.pwd="+$("#pwd").val(),
				type:"post",
				dataType:"json",
				data :"{}",
			//设置请求成功时执行的回调函数
				success:function(){
					//跳转页面
//					$(function(){
//						location.href = "success.jsp";
//					});
					window.location.href = "success.jsp";
					return true;
				},
			//设置请求失败时执行的回调函数
				error:function(){
					$("#name").val("");	//清空文本框的值
					$("#pwd").val("");
					$("#name").focus();	//让该文本框获得焦点
					alert("该用户名还未注册或者输入的密码错误！");
					return false;
				}
			});
			
			
			

		}


//对image.jsp进行刷新
function refresh(){
	//IE存在缓存，需要new Date()实现更换路径
	document.getElementById("image").src="image.jsp?"+new Date();
}