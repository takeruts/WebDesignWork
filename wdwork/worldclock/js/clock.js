//Digital Clock 
//Takeru Tsuchiya
//
// 30sec / 6 city = 5sec
// 24 hour / 6 city = 4 hour

$(window).load(function(){
	var numofCity = 6;
	var cityId = 0;
	var maxChar = 8;
	var gTimer = 0;
	var delta = [0, 5.5, 9, 14, 16, 19];
	var cityName = ['london','newdeli','tokyo','honolulu','losangels','newyork'];	
	
	
	// Blinking the separator between Hours and Minutes
	setInterval(function(){
		$("#dothm img").fadeOut(500,function(){$(this).fadeIn(500)});
	},2500);

	// City Info Update - Initialize
	cityInfoUpdate(0);

	// showTime - update Clock every 0.5 sec, City Info every 5 sec
	setInterval(showTime, 500);

	// Globe Rotatioin 30sec   = 600px/1px * 50ms
	$("#worldMap").endlessScroll({
		width:'600px',
		height:'520px',
		steps:-1,
		speed:50,
		mousestop:true
	});
	
	// Globe Rotatioin 30sec   = 600px/1px * 50ms
	$("#cityMap").endlessScroll({
		width:'600px',
		height:'520px',
		steps:-1,
		speed:50,
		top:'-520px',
		mousestop:true
	});

	// Meteor
	setInterval(meteorShow, 3000);
	
	// Meteor
	function meteorShow(){
		var postX = Math.round(Math.random()*800) + 80;
		var postY = Math.round(Math.random()*400) + 60;
		var nextX = Math.round(Math.random()*800) + 80;
		var nextY = Math.round(Math.random()*400) + 60;
		var moveTime = Math.round(Math.random()*1500) + 500;
	
		$("#meteor img").css("visibility","visible");
		$("#meteor img").animate({
			opacity:0.2,
			left:postX,
			top:postY,
			width:'2px',
			height:'2px'
		}, moveTime, function() {
			$("#meteor img").css("visibility","hidden");
			$("#meteor img").css("left", nextX);
			$("#meteor img").css("top", nextY);				
			$("#meteor img").css("width","15");				
			$("#meteor img").css("height","15");
			$("#meteor img").css("opacity","0.8");
		});
	}
	
	// Clock and City info update
	function showTime(){
		
		gTimer++;
		if (gTimer===10) {
			cityId++;
			if (cityId==numofCity) {
				cityId = 0;
			}
			cityInfoUpdate(cityId);
			gTimer = 0;
		}
		
		var t = new Date();
		
		t.setTime(t.getTime() - (9 - delta[cityId])*60*60*1000);
		
		/* sec */
		var sec = t.getSeconds();
		var sec1 = Math.floor(sec/10);
		var sec0 = sec - sec1*10;
		
		$("#sec1 img").attr("src","img/num/"+sec1+"p.png");
		$("#sec0 img").attr("src","img/num/"+sec0+"p.png");

		/* minutes */
		var min = t.getMinutes();
		var min1 = Math.floor(min/10);
		var min0 = min - min1*10;
		
		$("#min1 img").attr("src","img/num/"+min1+"p.png");
		$("#min0 img").attr("src","img/num/"+min0+"p.png");
		
		/* hours */
		var hour = t.getHours();
		if (hour > 24) {
			hour -= 24;
		} else if (hour < 0) {
			hour += 24;
		}
		
		var hour1 = Math.floor(hour/10);
		var hour0 = hour - hour1*10;
		
		$("#hour1 img").attr("src","img/num/"+hour1+"p.png");
		$("#hour0 img").attr("src","img/num/"+hour0+"p.png");
		
		if (hour >= 5  && hour <= 9) {
			$("#worldMap img").attr("src","img/worldmap-morning.png");
		} else if (hour >= 16 && hour <= 19) {
			$("#worldMap img").attr("src","img/worldmap-evening.png");
		} else if (hour >= 20 || hour <= 4) {
			$("#worldMap img").attr("src","img/worldmap-night.png");
		} else {
			$("#worldMap img").attr("src","img/worldmap-day.png");
		}
	}
	
	function cityInfoUpdate(id){
		var j;
		
		//Change City Map
		$("#cityMap img").attr("src","img/"+cityName[id]+".png");
		
		for(j=0;j<maxChar;j++){
			var char = cityName[id].charAt(j); 
			if (char == "" || char == " ") {
				$("#char"+j+" img").attr("src","");				
			} else {
				$("#char"+j+" img").attr("src","img/char/"+char+".png");
			}
		}
		
		// Get realtime Weather Info on City via Web API - openweathermap.org
		var appid = '3040f44587f140a163b324378d237651';
		var query = cityName[id];
		var url = "http://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+appid;
		
		$.getJSON(url, function(result) {
//			console.log(result);

			// Temperature
			var temp = Math.round(result.main.temp - 273.15);
			if (temp <0) {
				$("#temp2 img").attr("src","img/num/minusy.png");
				temp *= -1;
			} else {
				$("#temp2 img").attr("src","img/num/nully.png");
			}			
			var temp1 = Math.floor(temp/10);
			var temp0 = temp - temp1*10;
			$("#temp1 img").attr("src","img/num/"+temp1+"y.png");
			$("#temp0 img").attr("src","img/num/"+temp0+"y.png");

			// Humidity
			var humi = result.main.humidity;
			var humi2 = Math.floor(humi/100);
			var humi1 = Math.floor((humi - humi2*100)/10);
			var humi0 = humi - humi2*100 - humi1*10;
			$("#humi2 img").attr("src","img/num/"+humi2+"y.png");
			$("#humi1 img").attr("src","img/num/"+humi1+"y.png");
			$("#humi0 img").attr("src","img/num/"+humi0+"y.png");
			
			// Weather Icon			
			$("#weatherIcon img").attr("src","http://openweathermap.org/img/w/"+result.weather[0].icon+".png");
			//Weather Description
			var strObj = new String(result.weather[0].description);
			var str = strObj.toUpperCase();
			$("#weatherDesc p").html(str);
		});
		
	}
			
});
