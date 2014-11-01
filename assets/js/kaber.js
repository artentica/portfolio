var Kaber = (function($) {

	var init = function() {

		
		if(typeof Map !== 'undefined') 
			Map.init();

		// featured functionality
		if(typeof Featured !== 'undefined') 
			Featured.init();

		// contact functionality
		if(typeof Contact !== 'undefined') 
			Contact.init();

		// featured functionality
		if ($.fn.Parallax && !Modernizr.appleios) {
			$('.parallax-top').Parallax({ property:'top', speed:0.30, start:0, delay:0 });

			// $('.part2').Parallax({ property:'top', speed:0.10, start:460, delay:-900 });
			// $('.part3').Parallax({ property:'top', speed:0.20, start:480, delay:-900 });
			// $('.part4').Parallax({ property:'top', speed:0.30, start:500, delay:-1000 });
			
			// $('.part2').Parallax({ property:'top', speed:0.10, start:0, delay:-100 });
			// $('.part3').Parallax({ property:'top', speed:0.20, start:0, delay:-100 });
			// $('.part4').Parallax({ property:'top', speed:0.30, start:0, delay:-200 });

			$('.axe').Parallax({ property:'top', speed:0.12, start:0, delay:-800 });
			$('.jet').Parallax({ property:'top', speed:-0.10, start:80, delay:-900 });
		}

		// remove video functionality for mobile
		if(Modernizr.appleios) {
			$('video').remove();
			$('.overlay').remove();
		}

		// handle the lack of SVG support
		if(!Modernizr.svg) {
			
			$('img[src*="svg"]').attr('src', function() {
				return $(this).attr('src').replace('.svg', '.png');
			});
		
		} else {

			// replace svg with svg code
			jQuery('img.svg-raw').each(function(){
	            var $img = jQuery(this);
	            var imgID = $img.attr('id');
	            var imgClass = $img.attr('class');
	            var imgURL = $img.attr('src');

	            jQuery.get(imgURL, function(data) {
	                // Get the SVG tag, ignore the rest
	                var $svg = jQuery(data).find('svg');

	                // Add replaced image's ID to the new SVG
	                if(typeof imgID !== 'undefined') {
	                    $svg = $svg.attr('id', imgID);
	                }
	                // Add replaced image's classes to the new SVG
	                if(typeof imgClass !== 'undefined') {
	                    $svg = $svg.attr('class', imgClass+' replaced-svg');
	                }

	                // Remove any invalid XML tags as per http://validator.w3.org
	                $svg = $svg.removeAttr('xmlns:a');

	                // Replace image with new SVG
	                $img.replaceWith($svg);

	            }, 'xml');

	        });

		}

		// set way points
		setWaypoints();

		// menu click events
		$('.menu-items a, .menu-bottom a').on("click", showMenu);

	};

	var setWaypoints = function() {

		// engineering snap point
		$('#engineering').waypoint(function(direction) { 
			$('.main-nav').toggleClass('fixed-nav', direction == 'down');
			$('.main-nav a').removeClass('active');
			$('.main-nav a.engineering-btn').addClass('active');
		}, { offset:'90px' });

		// design snap point
		$('#design').waypoint(function(direction) { 
			$('.main-nav a').removeClass('active');
			if(direction == 'down') {
				$('.main-nav').addClass('nav-light-gray');
				$('.main-nav a.design-btn').addClass('active');
			} else {
				$('.main-nav').removeClass('nav-light-gray');
				$('.main-nav a.engineering-btn').addClass('active');
			}
		}, { offset:'80px' });

		// research snap point
		$('#research').waypoint(function(direction) { 
			$('.main-nav a').removeClass('active');
			if(direction == 'down') {
				$('.main-nav').addClass('nav-dark-gray');
				$('.main-nav a.research-btn').addClass('active');
				$('#research').addClass('active');
			} else {
				$('.main-nav').removeClass('nav-dark-gray');
				$('.main-nav').addClass('nav-light-gray');
				$('.main-nav a.design-btn').addClass('active');
				$('#research').removeClass('active');
			}
		}, { offset:'80px' });

		// research snap point
		$('#featured').waypoint(function(direction) { 
			$('.main-nav a').removeClass('active');
			if(direction == 'down') {
				$('.main-nav').removeClass('nav-dark-gray');
				$('.main-nav').addClass('nav-light-gray');
			} else {
				$('.main-nav').removeClass('nav-light-gray');
				$('.main-nav').addClass('nav-dark-gray');
				$('.main-nav a.research-btn').addClass('active');
			}
		}, { offset:'80px' });

	};

	var showMenu = function() {
		$('.menu').toggleClass('menu-open');
	};

	var scrollTo = function(id) {
		
		// Stop any currently active scroll
		$('html, body').dequeue();
		// Scroll to #id offset by 90 pixels
		$('html, body').animate({ scrollTop: $(id).offset().top-60 }, 1000, 'easeOutExpo');
	
	};
	
	return {
		init: init,
		scrollTo: scrollTo,
		showMenu: showMenu
	};

}(jQuery));

$(function() {
	Kaber.init();
});

Modernizr.addTest('ipad', function () {
return !!navigator.userAgent.match(/iPad/i);
});
 
Modernizr.addTest('iphone', function () {
return !!navigator.userAgent.match(/iPhone/i);
});
 
Modernizr.addTest('ipod', function () {
return !!navigator.userAgent.match(/iPod/i);
});
 
Modernizr.addTest('appleios', function () {
return (Modernizr.ipad || Modernizr.ipod || Modernizr.iphone);
});