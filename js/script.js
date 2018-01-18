$(document).ready(function() {

	//populate portfolio
	var jsonArray = getJsonArray();

	window.onpopstate = function(e){
    if(e.state){
      document.getElementById("portfolio").innerHTML = e.state;
    }
	};

	function getJsonArray(){

		var arr = [];

    $.getJSON('../project-list.json',function(data){
        //console.log('success');
        $.each(data.projects,function(i, project){arr.push(project);});
  			populate(shuffle(arr));
    });
    return arr;
	}

	//shuffle projects on page open
	function shuffle(array){

		var arrayClone = JSON.parse(JSON.stringify(array));
		var currentIndex = arrayClone.length
		var randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    var temp = arrayClone[currentIndex];
	    arrayClone[currentIndex] = arrayClone[randomIndex];
	    arrayClone[randomIndex] = temp;
	  }

	  return arrayClone;

	} //end of shuffle

	function populate(array){

		var content = document.getElementById('project-template').content;

		for (var i = 0; i < array.length; i++) {

			//clone template
			var clonedTemplate = content.cloneNode(true);

			//populate template
			$(clonedTemplate).find('.project-img').attr('id', array[i].id);
			$(clonedTemplate).find('img').attr('src', array[i].image);
			// $(clonedTemplate).find('a').attr('href', array[i].link);
			clonedTemplate.querySelector('h5').textContent = array[i].title;
			clonedTemplate.querySelector('p').textContent = array[i].brief;
			if(array[i].centerfocus){
				$(clonedTemplate).find('img').addClass('center-focus');
			}

			//insert clone into portfolio
			document.getElementById('portfolio').appendChild(clonedTemplate);
		}

	} //end of populate

	function loadProject(project){

		var content = document.getElementById('project-page-template').content;

		//clone template
		var clonedTemplate = content.cloneNode(true);

		//console.log(project);
		// console.log(project.id);
		var title, image, description;

		//find project by id
		$.each(jsonArray, function(i, element){
			if(element.id == project.id){
				title = element.title;
				image = element.image;
				description = element.description;
				link = element.link;
				return false;
			}
		});

		//save state
		window.history.pushState($('#portfolio').html(), null, null);
		//reset html
		$('#portfolio').html("");

		//insert blown description
		clonedTemplate.querySelector('h3').textContent = title;
		$(clonedTemplate).find('img').attr('src', image);
		clonedTemplate.querySelector('p').textContent = description;
		if(link != "#"){
			$(clonedTemplate).find('a').attr('href', link);
			clonedTemplate.querySelector('a').textContent = "Clique aqui";
			$(clonedTemplate).find('.project-page-description-text').textContent = "Para ver um protótipo do site ";
		}
		

		//insert clone into portfolio
		document.getElementById('portfolio').appendChild(clonedTemplate);

	}

	$(document).on('click', '.project-img', function(){
		//console.log(this);
		loadProject(this);
	});

}); //end of $(document).ready();


