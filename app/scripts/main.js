var currentSlide = 0;

$(function() {
	$(document).keyup(function(e) {
		// to get keycodes use demo field on this page: http://api.jquery.com/keyup
		if(e.keyCode == 39 || e.keyCode == 40 || e.keyCode == 32) next();
		else if(e.keyCode == 37 || e.keyCode == 38) back();
		else if(e.keyCode == 87) $('.slides').fadeToggle();
	});
	$('.slides').swipe({
		swipe:function(event, direction, distance, duration, fingerCount) {
			switch(direction) {
				case "left":
					next();
					break;
				case "right":
					back();
					break;
			}
		}
	});
	initSlides();
});

function initSlides() {
	$('section').eq(currentSlide).addClass('active');
}

function next() {
	goto(currentSlide+1);
}

function back() {
	goto(currentSlide-1);
}

function goto(n) {
	if(n > -1 && n < $('section').length) currentSlide = n;
	else return;
	$('section').removeClass('active').eq(currentSlide).addClass('active');
}