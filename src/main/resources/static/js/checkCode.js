/**
 * 检查验证码是否输入合法
 * create by linzengrui 2016/05/16
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
//校验验证码
function validate(){
	var inputCode = document.getElmentById("input").value.toUpperCase();	//取得输入的验证码，大写变小写
	if(inputCode.length <= 0){
		alert("验证码不能为空！");
	}else if(inputCode != code){
		alert("验证码输入错误！");
		createCode();
		document.getElementById("input").value = ""; //情况文本框
	}else{
		alert();
	}
	
}
