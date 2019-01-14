window.onload=function(){
	//全选
	var oinp=document.querySelectorAll(".inp1");   
	var oee1=document.querySelector(".ee1");   //ee全选
	var oee2=document.querySelector(".ee2");
	var oee3=document.querySelector(".ee3");

	oee1.onclick=function(){
		for(var i=0;i<oinp.length;i++){
			oinp[i].checked =! oinp[i].checked;
			oee1.checked =! oee1.checked;
		}
	}
	oee2.onclick=function(){
		for(var i=0;i<oinp.length;i++){
			oinp[i].checked =! oinp[i].checked;
			oee2.checked =! oee2.checked;
		}
	}
	oee3.onclick=function(){
		for(var i=0;i<oinp.length;i++){
			oinp[i].checked =! oinp[i].checked;
			oee3.checked =! oee3.checked;
		}
	}
//	//实现删除一行
//	function del(obj){
//		// console.log(obj.parentNode.parentNode)
//		// 找到待删除的元素
//		var oTr = obj.parentNode.parentNode
//		oTr.parentNode.removeChild(oTr)
//	}
	
}
