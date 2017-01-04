$(window).load(function(){
	
	// Navi
	
	$("nav h1").hover(function(){
		$(this).css("color","#DBDBDB");
		$(this).css("background","rgba(123,123,123,0.3)");
	}, function(){
		$(this).css("color","#A8A8A8");
		$(this).css("background","none");
	});

	// Main menu
	
	$("#mainmenu h3").css("background-color","rgba(0,0,0,.2");
	$("#mainmenu li").hover(function(){
		console.log(this);
		$(this).animate({marginTop:'-=12px'},800).animate({marginTop:'+=12px'},800);
		$(this).find("h3").css("background-color","none");
	}, function(){
		$("#mainmenu h3").css("background-color","rgba(0,0,0,0.2)");
	});

	// Map SVG animation
	$("#MapLine").css("opacity",1.0);
		
	var mSGV = new Walkway ({
		selector:'#MapLine',
		duration:5000, 
		easing:'linear'
	}).draw(function(){
		$("#MapLine path.st0").css("fill","none");
		$("#MapLine path.st1").css("fill","#E5E5E5");
		$("#MapLine path.st2").css("fill","#ADE0B7");
		$("#MapLine path.st3").css("fill","#B8D3E0");
		$(".maplineinfo").animate({opacity:1.0}, 3000);
	});

	$(".maplineinfo").click(function(){
		$(".maplineinfo").css("opacity",.0);	
		Walkway ({
			selector:'#MapLine',
			duration:5000, 
			easing:'linear'
		}).draw(function(){
			$("#MapLine path.st0").css("fill","none");
			$("#MapLine path.st1").css("fill","#E5E5E5");
			$("#MapLine path.st2").css("fill","#ADE0B7");
			$("#MapLine path.st3").css("fill","#B8D3E0");
			$(".maplineinfo").animate({opacity:1.0}, 3000);
		});
	});

	// Footer Cat animation

	setInterval(catShow, 1000);
	
	function catShow(){
		var catSelect = Math.random()*2;
		if (catSelect>1){
			$("#tNeko1").css("visibility","visible");
			$("#tNeko3").css("visibility","hidden");
		} else {
			$("#tNeko1").css("visibility","hidden");
			$("#tNeko3").css("visibility","visible");
		}
	}
	
});