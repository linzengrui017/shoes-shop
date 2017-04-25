/**
 * 登录前端验证
 * created by linzengrui 2016/05/22
 */

$(function(){
	$("#login_submit").click(function(){
		submitForm();
	})
});
function submitForm(){
	var errorMsg = "";
	var len = $("#name").val().length;
	if(len == 0){
		errorMsg = "用户名不能为空！";
		$("#name").focus();
		alert(errorMsg);
		return false;
	}else if((len < 4) || (len >20)){
		errorMsg = "用户名长度必须在4~20之间，且只能为字母、数字！";
		$("#name").focus();
		alert(errorMsg);
		return false;
	}else {
		for(var i = 0; i < len; i++){
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
	if(errorMsg == ""){
		if($("#pwd").val().length == 0){
			errorMsg = "密码不能为空！";
			$("#pwd").focus();
			alert(errorMsg);
			return false;
		}else if(($("#pwd").val().length < 4) || ($("#pwd").val().length >20)){
			errorMsg = "密码长度必须在4~20之间，且只能为字母、数字！";
			$("#pwd").focus();
			alert(errorMsg);
			return false;
		}else{
			for(var i = 0; i < $("#pwd").val().length; i++){
				var LowercaseLetters = $("#pwd").val().toLowerCase().charAt(i);
				if((!(LowercaseLetters >= '0' && LowercaseLetters <= '9'))
						&& (!(LowercaseLetters >='a' && LowercaseLetters <='z'))){
					errorMsg = "密码长度必须在4~20之间，且只能为字母、数字！";
					$("#pwd").focus();
					alert(errorMsg);
					return false;
				}
			}
		}
	}


	//检查用户名是否存在
	$.ajax({
		url:"/login?name="+$("#name").val()+"&pwd="+$("#pwd").val(),
		type:"post",
		success:function(){
			//跳转页面
			window.location.href = "/success";
			return true;
		},
		error:function(XMLHttpRequest, textStatus, errorThrown){
			$("#name").val("");	//清空文本框的值
			$("#pwd").val("");
			$("#name").focus();	//让该文本框获得焦点
			alert("XMLHttpRequest="+ XMLHttpRequest + "\n" +
				"textStatus="+ textStatus + "\n" +
				"errorThrown="+ errorThrown + "\n" +
				"该用户名还未注册或者输入的密码错误！");
			return false;
		}
	});

}
