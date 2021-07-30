$(document).ready(function(){
	$(".menu-toggle").click(function() {
		$("nav").toggleClass("active");
		var altezza = $(".top-container").height() - 159;
		$("nav").css({
			top:159+altezza
		});
	})

	$("li a").click(function(){

		var arrivo = $(this).attr("href");
		$("html, body").animate({scrollTop: $(arrivo).offset().top}, 600);

		if($(".menu-toggle").is(":visible")){
			$("nav").toggleClass("active");
		}
	});

	$(window).scroll(function() {
		if($(window).scrollTop()>300){
			$(".to-top").fadeIn();
		}
		else{
			$(".to-top").hide();
		}
	})

	$(".to-top").click(function() {
		$("html, body").animate({scrollTop: 0},800);
	})

	$(".test-info-container").click(function() {
		var notclicked = $(".test-info-container").not(this);
		$(this).css("height","60vh");
		$(this).css("opacity","1");
		$(".info-content", this).fadeIn();
		
		notclicked.css("height","20vh");
		notclicked.css("opacity","0.65");
		$(".info-content", notclicked).fadeOut();
	})

});