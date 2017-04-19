/**
 * 登录前端验证
 * created by linzengrui 2016/05/16
 */


function submitForm(form){		
		var errorMsg = "";
		var tagElements = form.getElementsByTagName('input');		
		var name = tagElements[0];
		var pwd = tagElements[1];
//		var inputCode = tagElements[2];
// 		var rand = session.getAttribute("code").toString();
//		var code = "";
//		alert("inputCode="+ inputCode +"\n" + "code=" + code +"\n");
		if(name.value.length == 0){
			errorMsg = "用户名不能为空！";
			name.focus();
		}else if((name.value.length < 4) || (name.value.length >20)){
			errorMsg = "用户名长度必须在4~20之间，且只能为字母、数字！";
			name.focus();
		}else {
			for(var i = 0; i < name.value.length; i++){
				var LowercaseLetters = name.value.toLowerCase().charAt(i);
				if((!(LowercaseLetters >= '0' && LowercaseLetters <= '9'))
						&& (!(LowercaseLetters >='a' && LowercaseLetters <='z'))){
					errorMsg = "用户名长度必须在4~20之间，且只能为字母、数字！";
					name.focus();
				}
			}
		}
		//如果用户名不合法，不用检查密码的合法性，直接输出错误信息；如果用户名合法，再检查密码是否合法。
		if(errorMsg == ""){
			if(pwd.value.length == 0){
				errorMsg = "密码不能为空！";
				pwd.focus();
			}else if((pwd.value.length < 6) || (pwd.value.length >20)){
				errorMsg = "密码长度必须在6~20之间，且只能为字母、数字！";
				pwd.focus();
			}else{
				for(var i = 0; i < pwd.value.length; i++){
					var LowercaseLetters = pwd.value.toLowerCase().charAt(i);
					if((!(LowercaseLetters >= '0' && LowercaseLetters <= '9'))
							&& (!(LowercaseLetters >='a' && LowercaseLetters <='z'))){
						errorMsg = "密码长度必须在6~20之间，且只能为字母、数字！";
						pwd.focus();
					}
				}
			}
		}
//		//检查验证码输入是否合法
//		if(errorMsg == ""){
//			if(inputCode.value.length == 0){
//				errorMsg = "验证码不能为空！";
//				inputCode.focus();
//			}
//			else if(inputCode.value != rand.value ){
//				errorMsg = "验证码错误！";
//				inputCode.focus();
//			}
//		}
		//输出错误信息
		if(errorMsg == ""){
			return true;
		}else{
			alert(errorMsg);
			return false;
		}				
	}

//对image.jsp进行刷新
function refresh(){
	//IE存在缓存，需要new Date()实现更换路径
	document.getElementById("image").src="image.jsp?"+new Date();
}