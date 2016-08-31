$(document).ready(function() {
	
// Smooth Scrolling

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

	$("#form-submit-btn").click(function() {
		alert("This form is not working due to the lack of a hosting server. Please send an email to fepmarchi@gmail.com. Thank You.");
	});
});


