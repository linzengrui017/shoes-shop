function submitForm(form){
		var errorMsg = "";		
		var tagElements = form.getElementsByTagName('input');		
		var name = tagElements[0];
		var pwd = tagElements[1];
		
		if(name.value.length == 0){
			errorMsg = "用户账号不能为空！";
			name.focus();
		}else if((name.value.length < 4) || (name.value.length >20)){
			errorMsg = "用户账号长度必须在4~20之间，且只能为字母、数字！";
			name.focus();
		}else {
			for(var i = 0; i < name.value.length; i++){
				var LowercaseLetters = name.value.toLowerCase().charAt(i);
				if((!(LowercaseLetters >= '0' && LowercaseLetters <= '9'))
						&& (!(LowercaseLetters >='a' && LowercaseLetters <='z'))){
					errorMsg = "用户账号长度必须在4~20之间，且只能为字母、数字！";
					name.focus();
				}
			}
		}
		//如果用户名不合法，不用检查密码的合法性，直接输出错误信息；如果用户名合法，再检查密码是否合法。
		if(errorMsg == ""){
			if(pwd.value.length == 0){
				errorMsg = "登录密码不能为空！";
				pwd.focus();
			}else if((pwd.value.length < 6) || (pwd.value.length >20)){
				errorMsg = "登录密码长度必须在6~20之间，且只能为字母、数字！";
				pwd.focus();
			}else{
				for(var i = 0; i < pwd.value.length; i++){
					var LowercaseLetters = pwd.value.toLowerCase().charAt(i);
					if((!(LowercaseLetters >= '0' && LowercaseLetters <= '9'))
							&& (!(LowercaseLetters >='a' && LowercaseLetters <='z'))){
						errorMsg = "登录密码长度必须在6~20之间，且只能为字母、数字！";
						pwd.focus();
					}
				}
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