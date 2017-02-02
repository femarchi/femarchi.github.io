

$(document).ready(function() {

//populate portfolio
	getJsonArray();

	function getJsonArray(){

		var arr = [];

    $.getJSON('../project-list.json',function(data){
        console.log('success');
        $.each(data.projects,function(i, project){

          arr.push(project);

        });
        arr = shuffle(arr);
        populate(arr);
    });

	}

	function shuffle(array){

		var currentIndex = array.length
		var randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    var temp = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temp;
	  }

	  return array;

	} //end of shuffle

	function populate(array){

		var content = document.getElementById('project-template').content;

		for (var i = 0; i < array.length; i++) {
			
			var image = array[i].image;
			var isCenterFocus = array[i].centerfocus;
			var title = array[i].title;
			var description = array[i].description;
			var link = array[i].link;

			//clone template
			var clonedTemplate = content.cloneNode(true);

			//populate template
			$(clonedTemplate).find('img').attr('src', image);
			$(clonedTemplate).find('a').attr('href', link);
			clonedTemplate.querySelector('h5').textContent = title;
			clonedTemplate.querySelector('p').textContent = description;
			if(isCenterFocus){
				$(clonedTemplate).find('img').addClass('center-focus');
			}

			//insert clone into portfolio
			document.getElementById('portfolio').appendChild(clonedTemplate);
		}

	} //end of populate


// Smooth Scrolling

	// var navHeight = document.getElementById('nav-bar').offsetHeight;

	// $(".portfolio-web-btn").click(function() {
	//     $("html, body").animate({
	//         scrollTop: $("#portfolio-web").offset().top-navHeight},
	//         'slow');
	// });

	// $(".portfolio-3d-btn").click(function() {
	//     $("html, body").animate({
	//         scrollTop: $("#portfolio-3d").offset().top-navHeight},
	//         'slow');
	// });

	// $(".contact-btn").click(function() {
	//     $("html, body").animate({
	//         scrollTop: $("#contact").offset().top-navHeight},
	//         'slow');
	// });

	// $("#form-submit-btn").click(function() {
	// 	$('#form').attr('action',
 //                       'mailto:fepmarchi@gmail.com?subject=' +
 //                       $('#form-subject').val() + '&body=' +
 //                       $('#form-message').val() + '\n' + $('#form-name'));
 //        $('#form').submit();
	// 	alert("Obrigado!");
	// });


}); //end of $(document).ready();


