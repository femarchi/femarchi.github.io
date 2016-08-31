$(document).ready(function() {
	var navHeight = document.getElementById('nav-bar').offsetHeight;
	
	$(".about-btn").click(function() {
	    $("html, body").animate({
	        scrollTop: $("#about").offset().top-navHeight},
	        'slow');
	});

	$(".portfolio-btn").click(function() {
	    $("html, body").animate({
	        scrollTop: $("#portfolio").offset().top-navHeight},
	        'slow');
	});

	$(".contact-btn").click(function() {
	    $("html, body").animate({
	        scrollTop: $("#contact").offset().top-navHeight},
	        'slow');
	});

});

