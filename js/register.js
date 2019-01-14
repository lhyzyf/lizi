window.onload=function(){
//	var oPhone=document.querySelector(".phone");
//	var oPass=document.querySelector(".pass");
//	var oPass1=document.querySelector(".pass1");
//	var oBtn=document.querySelector(".queren");
//	var op=document.querySelector(".F");
	function check() {
		var submitFlg = true;
		oBtn.onclick=function(){
			//验证电话
			var regphone={regstr:/^1\d{10}$/,tip:'请输入11位的手机号'};
			var oPhone= document.querySelector(".phone").value;
			var op = document.querySelector(".F");
			console.log(oPhone)
			spans[0].innerHTML="";
			if(!regphone.regstr.test(phone)){
			spans[0].innerHTML="<font color='red'>"+regphone.tip+"<font>";
			submitFlg = false;
			}
			return submitFlg;
	
	}
	}
	
	
	
	
}
