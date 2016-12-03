$(document).ready(function() {
	
// Smooth Scrolling

	var navHeight = document.getElementById('nav-bar').offsetHeight;
	
	$(".navbar-brand").click(function() {
	    $("html, body").animate({
	        scrollTop: $("#about").offset().top-navHeight},
	        'slow');
	});

	$(".portfolio-web-btn").click(function() {
	    $("html, body").animate({
	        scrollTop: $("#portfolio-web").offset().top-navHeight},
	        'slow');
	});

	$(".portfolio-3d-btn").click(function() {
	    $("html, body").animate({
	        scrollTop: $("#portfolio-3d").offset().top-navHeight},
	        'slow');
	});

	$(".contact-btn").click(function() {
	    $("html, body").animate({
	        scrollTop: $("#contact").offset().top-navHeight},
	        'slow');
	});

	$("#form-submit-btn").click(function() {
		$('#form').attr('action',
                       'mailto:fepmarchi@gmail.com?subject=' +
                       $('#form-subject').val() + '&body=' +
                       $('#form-message').val() + '\n' + $('#form-name'));
        $('#form').submit();
		alert("Obrigado!");
	});
});


