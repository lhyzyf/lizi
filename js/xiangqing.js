window.onload=function(){
	//获取左边的显示框和小灰框
	var oImgs=document.querySelector(".imgs");
	var oGray=document.querySelector(".gray");
		//获取右边的显示框和大图
	var oRight=document.querySelector(".right");
	var oBigImg=document.querySelector(".right img");
	
	//给左边的显示框添加移动事件
	oImgs.onmousemove=function(evt){
		var e=evt || window.event;
		//设置小灰框的位置
		var X=e.offsetX-oGray.offsetWidth/2;
		var Y=e.offsetY-oGray.offsetHeight/2;
		//检测X坐标左右边界
		if(X<0){
			X=0;
		}else if(X>oImgs.offsetWidth-oGray.offsetWidth){
			X=oImgs.offsetWidth-oGray.offsetWidth;
		}
		//检测Y坐标上下边界
		if(Y<0){
			Y=0;
		}else if(Y>oImgs.offsetHeight-oGray.offsetHeight){
			Y=oImgs.offsetHeight-oGray.offsetHeight;
		}
		oGray.style.left=X+"px";
		oGray.style.top=Y+"px";
		//求移动距离比例
		var biliX=X/(oImgs.offsetWidth-oGray.offsetWidth);
		var biliY=Y/(oImgs.offsetHeight-oGray.offsetHeight);
		//根据比例计算右边大图的移动距离
		var bigX=-biliX*(oBigImg.offsetWidth-oRight.offsetWidth);
		var bigY=-biliY*(oBigImg.offsetHeight-oRight.offsetHeight);
		
		oBigImg.style.left = bigX+"px";
		oBigImg .style.top = bigY+"px";
		
	}
	oImgs.onmouseover=function(){
		oRight.style.display="block";
	}
	oImgs.onmouseleave=function(){
		oRight.style.display="none";
	}
	
	var oBom1=document.querySelector(".bom1 img");
	var oBom2=document.querySelector(".bom2 img")
	var oImgs=document.querySelector(".imgs img");
	
}
