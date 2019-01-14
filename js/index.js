window.onload=function(){
var a = document.getElementsByClassName("item");
var b = document.getElementsByClassName("mc");
console.log(b)
for(var i = 0; i<a.length;i++){
	a[i].index=i;
	console.log(i)
	a[i].onmouseenter=function(){
		var indx = this.index;
		b[indx].style.height="120px";
		b[indx].style.transition="all 0.5s";
	}
	a[i].onmouseleave=function(){
		var indx = this.index;
		b[indx].style.height="0px";
		b[indx].style.transition="all 0.5s";
	}
}

//轮播图
	var oBtns=document.querySelectorAll(".btns span");
	var oimg=document.querySelectorAll(".banner img");
	var oleft=document.querySelector(".left");
	var oright=document.querySelector(".right");
	var obox=document.querySelector(".banner");
	//定义变量存放下标(全局)
	var index=0;
	var temer;
	//定义全局定时器

	for(let i=0;i<oBtns.length;i++){
		oBtns[i].onclick=function(){
			changeImg(i);
	}
	}
	//封装换图函数
	function changeImg(currenIndex){//形参 就是上面的i currenIndex当前下标
		//检测右边界 等于最后一张时 播放第一张
		//存下标
		index=currenIndex;
		if(index>=oimg.length){
			index=0;
		}
		//检测右边界 小于零的时候 播放最后一张
		if(index<0){
			index=oimg.length-1;
		}
		
		
		for(let j=0;j<oimg.length;j++){
			oimg[j].style.opacity="0";
			oBtns[j].setAttribute("id","");
		}
		oimg[index].style.opacity="1";
		oBtns[index].setAttribute("id","btn-active");
	}
	//给右按钮添加单击事件
	oright.onclick=function(){
		index++;
		changeImg(index);
	}
	oleft.onclick=function(){
		index--;
		changeImg(index);
	}

	//封装函数 实现自动播放的功能
	function autoPlay(){
		timer=setInterval(function(){
			index++;
			changeImg(index);
		},4000);
	}
	autoPlay();
	obox.onmouseover=function(){
		clearInterval(timer);
	}
	obox.onmouseout = function(){
		autoPlay();
}
	//返回顶部
	var backBtn=document.querySelector(".back-btn");
	backBtn.onclick=function(){
		document.documentElement.scrollTop=0;
		document.body.scrollTop=0;
	}
	
	//	固定导航栏
	var oCebian=document.querySelector(".cebian");
	var oBody = document.querySelector("body");
	var oLi=document.querySelectorAll(".cebian li");
	var olou=document.querySelectorAll(".lou2");
	oBody.onmousewheel = function(){
		var Height = document.body.scrollTop || document.documentElement.scrollTop;
		console.log(Height)
		if( Height > 850 && Height<11500 ){
			oCebian.style.display="block"
		}
		else{
			oCebian.style.display="none"
		}
	}		
	//	点击跳转到指定位置
		for( let i = 0 ; i < oLi.length ; i++){
			oLi[i].onclick = function(){
				oLi[1].className="";
				
				if( i == 0 ){
					for(let j=0; j<oLi.length;j++){
						oLi[j].style.color="#666";
						oLi[j].style.background="";
					}
					oLi[i].style.color="#fff";
					oLi[i].style.background="#FF666B";
					scrollTo(0,900);
				}
				else if( i == 1 ){
					for(let j=0; j<oLi.length;j++){
						oLi[j].style.color="#666";
						oLi[j].style.background="";
					}
					oLi[i].style.color="#fff";
					oLi[i].style.background="#FF666B";
					scrollTo(0,1000);
				}
				else{
					for(let j=0; j<oLi.length;j++){
						oLi[j].style.color="#666";
						oLi[j].style.background="";
					}
					oLi[i].style.color="#fff";
					oLi[i].style.background="#FF666B";
					scrollTo(0,11400);
				}
			}
	}
}
