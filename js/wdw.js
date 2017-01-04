// JavaScript Document
"use strict";
	function honeyCombFont (){
		$(".honeyComb h1").css("font-size",Math.round($(document).width() / 30));		
		$(".honeyComb h2").css("font-size",Math.round($(document).width() / 40));		
		$(".honeyComb h3").css("font-size",Math.round($(document).width() / 60));		
		$(".honeyComb p").css("font-size",Math.round($(document).width() / 80));		
	}


// Configu for resize
	$(document).ready(function(){
		honeyCombFont();
	});
	$(window).resize(function(){
		honeyCombFont();
	});
	
// Opening SVG Animation

$(window).load(function(){
	
	var sgv = new Walkway ({
		selector:'#wdwTitleLine',
		duration:1200, 
		easing:'linear'
	});

	$("#wdwTitleLine path.cls-1").css("stroke","#000");
	sgv.draw(function(){
		$("#wdwTitleLine path.cls-1").css("fill","#000");
		$(".honeyCombStart").css("display","block");
	});

});	



// Honey Comb Animation
$(window).load(function(){

	var toggleFlag = false;
	
	$(".honeyCombStart").on('click', function(){
		var honeyCombWidth = $(document).width() * 0.2;
		var honeyCombHeight = honeyCombWidth * 0.83;
		var $topMove, $leftMove;

		if (toggleFlag===false) {
			toggleFlag = true;

			$(".honeyComb").css("display","block");

			$topMove = "-=" + (honeyCombHeight * 0.55);
			$leftMove = "-=" + (honeyCombWidth * 0.8);
			$(".honeyComb6").animate({"left":$leftMove,"top":$topMove},300,"swing");

			$topMove = "+=" + (honeyCombHeight * 0);
			$leftMove = "-=" + (honeyCombWidth * 1.6);
			$(".honeyComb5").animate({"left":$leftMove,"top":$topMove},300,"swing");

			$topMove = "+=" + (honeyCombHeight * 0.55);
			$leftMove = "-=" + (honeyCombWidth * 0.8);
			$(".honeyComb4").animate({"left":$leftMove,"top":$topMove},300,"swing");

			$topMove = "-=" + (honeyCombHeight * 0.55);
			$leftMove = "+=" + (honeyCombWidth * 0.8);
			$(".honeyComb3").animate({"left":$leftMove,"top":$topMove},300,"swing");

			$topMove = "+=" + (honeyCombHeight * 0);
			$leftMove = "+=" + (honeyCombWidth * 1.6);
			$(".honeyComb2").animate({"left":$leftMove,"top":$topMove},300,"swing");
	
			$topMove = "+=" + (honeyCombHeight * 0.55);
			$leftMove = "+=" + (honeyCombWidth * 0.8);
			$(".honeyComb1").animate({"left":$leftMove,"top":$topMove},300,"swing");
			
			$(".honeyCombStart").css("opacity","0.2");
			
		} else {
			toggleFlag = false;

			
/*
			var $topMove = "-=" + (honeyCombHeight * 0.55);
			var $leftMove = "+=" + (honeyCombWidth * 0.8);
			$(".honeyComb1").animate({"left":$leftMove,"top":$topMove},300,"swing", function(){
				$(this).css("display","none");			 
			});
	
			var $topMove = "-=" + (honeyCombHeight * 0.55);
			var $leftMove = "-=" + (honeyCombWidth * 0.8);
			$(".honeyComb2").animate({"left":$leftMove,"top":$topMove},300,"swing", function(){
				$(this).css("display","none");			 
			});

			var $topMove = "+=" + (honeyCombHeight * 0.55);
			var $leftMove = "-=" + (honeyCombWidth * 0.8);
			$(".honeyComb3").animate({"left":$leftMove,"top":$topMove},300,"swing", function(){
				$(this).css("display","none");			 
			});

			var $topMove = "+=" + (honeyCombHeight * 0.55);
			var $leftMove = "+=" + (honeyCombWidth * 0.8);
			$(".honeyComb4").animate({"left":$leftMove,"top":$topMove},300,"swing", function(){
				$(this).css("display","none");			 
			});

			var $topMove = "-=" + (honeyCombHeight * 0);
			var $leftMove = "-=" + (honeyCombWidth * 1.6);
			$(".honeyComb5").animate({"left":$leftMove,"top":$topMove},300,"swing", function(){
				$(this).css("display","none");			 
			});
			
			var $topMove = "-=" + (honeyCombHeight * 0);
			var $leftMove = "+=" + (honeyCombWidth * 1.6);
			$(".honeyComb6").animate({"left":$leftMove,"top":$topMove},300,"swing", function(){
				$(this).css("display","none");			 
			});
*/
			$(".honeyComb").css("display","none");
			$(".honeyComb").css("top","");
			$(".honeyComb").css("left","");
			
			$(".honeyCombStart").css("opacity","0.65");
			$(".honeyCombStart").css("display","block");
			
		}

	});
});

	