$(document).ready(function(){
	$('#toggle').click(function(){
		$(this).toggleClass('on');
		$('#resize').toggleClass('active');
	});

	//Carousel timing
	$('.carousel').carousel({
		interval: 5000
	});

	//changing img order on small screen
	$(window).resize(function(){
		if($(window).width() <= 991) {
			$('.first-div').before($('.second-div'));
		} else {
			$('.second-div').before($('.first-div'));
		}
	});

	//map google
	function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
});