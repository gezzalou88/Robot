$( document ).ready(function() {
	// When eyes button is clicked, toggle laser class on brain
	$(".flash").click(function() {
	  $(".heart").toggleClass("laser");
	});

	// When color button is clicked...
	$(".color").click(function() {
		$(".discobox").toggleClass("disco");
		setInterval(function(){
				var red = Math.floor(Math.random() * 255);
				var green = Math.floor(Math.random() * 255);
				var blue = Math.floor(Math.random() * 255);
				var randomRGBA = 'rgba('+ red +','+ green+','+blue+',0.25)';
				$(".disco").css("background", randomRGBA);
			}, 2000);

	  //Display the three values in an alert window

	});
	$(".moves").click(function() {
	  $(".robot").toggleClass("leftright");
	});
});