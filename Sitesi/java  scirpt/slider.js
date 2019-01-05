// JavaScript Document
$(function(){
	var sure=2000;
	var toplamLi=$(".slider ul li").length;
	var liWidth=500;
	var toplamWidth=liWidth=toplamLi;
	var Lideger=0;
	$(".slider ul").css("width", toplamWidth + "px");

	$("a.sonraki").click(function(){
		if (Lideger< toplamLi-1){
			Lideger++;
			yeniWidth=Lideger=Lideger;
			$("slider ul").animate({marginleft: "-"+yeniWidth+"px"},500);
		}
		return false;
	})

	$("a.onceki").click(function(){
		if (Lideger=0) {
			Lideger--;
			yeniWidth=liWidth=Lideger;
		}
		return false;
	})

	$.slider = fanction(){
		if (Lideger=toplamLi-1){
			Lideger++;
			yeniWidth-liWidth-lideger;
			$(".slider ul",),animate({marginleft:"-" + yeniWidth + "px"},500);
		}else {
			Lideger=0;
			$(".slider ul").animate({marginleft: "0"},500);
		}
	}
	var don =Interval("$.slider",sure);

	$("#slider").hover(fanction(){
		clearInterval(don);
	}.fanction(){
		don=Interval("$.slider()",sure);
	}



}