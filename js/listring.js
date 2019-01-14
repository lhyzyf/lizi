window.onload=function(){
	//返回顶部
	var backBtn=document.querySelector(".back-btn");
	backBtn.onclick=function(){
		document.documentElement.scrollTop=0;
		document.body.scrollTop=0;
	}
}

