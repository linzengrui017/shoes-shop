/**
 * index_top.jsp中的登录模态框前端输入校验
 * 验证码的校验
 * created by linzengrui 2016/05/16 
 */
//定义全局验证码
var code;
//产生验证码
window.onload = function createCode(){
	code = "";
	var codeLength = 4;	//验证码的长度
	var checkCode = document.getElementById("inputCode");
	var random = new Array(2,3,4,5,6,7,8,9,'A','B','C','D','E','F',	'G','H','J','K',
			'L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');
	for(var i = 0; i < codeLength; i++){
		var index = Math.floor(Math.random()*32);	//0~31
		code += random[index];
	}
	checkCode.value = code;
}

function submitForm(form){		
		var errorMsg = "";
		var tagElements = form.getElementsByTagName('input');		
		var name = tagElements[0];
		var pwd = tagElements[1];
		var inputCode = tagElements[2]
		alert("inputCode="+ inputCode.value +"\n" + "code=" + code.value +"\n");
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
		//检查验证码输入是否合法
		if(errorMsg == ""){
			if(inputCode.length <= 0){
				errorMsg = "验证码不能为空！";
				
			}
			else if(inputCode.value != code.value.toUpperCase() ){	//取得输入的验证码，大写变小写
				errorMsg = "验证码错误！";
				createCode();
//				inputCode.value = ""; //清空文本框
				inputCode.focus();
			}
		}
		//输出错误信息
		if(errorMsg == ""){
			return true;
		}else{
			alert(errorMsg);
			return false;
		}				
	}


//function refresh(){
//	//IE存在缓存，需要new Date()实现更换路径
//	document.getElementById("image").src="image.jsp?"+new Date();
//}