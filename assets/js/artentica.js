$('.parallax-top').Parallax({ property:'top', speed:0.72, start:0, delay:0 });
var Artentica = (function($) {

	var init = function() {


		/*if(typeof Map !== 'undefined')
			Map.init();*/

		// projects functionality
		if(typeof Featured !== 'undefined')
			Featured.init();

		// contact functionality
		if(typeof Contact !== 'undefined')
			Contact.init();

		// projects functionality
		if ($.fn.Parallax && !Modernizr.appleios) {


			// $('.part2').Parallax({ property:'top', speed:0.10, start:460, delay:-900 });
			// $('.part3').Parallax({ property:'top', speed:0.20, start:480, delay:-900 });
			// $('.part4').Parallax({ property:'top', speed:0.30, start:500, delay:-1000 });

			// $('.part2').Parallax({ property:'top', speed:0.10, start:0, delay:-100 });
			// $('.part3').Parallax({ property:'top', speed:0.20, start:0, delay:-100 });
			// $('.part4').Parallax({ property:'top', speed:0.30, start:0, delay:-200 });

			/*$('.axe').Parallax({ property:'top', speed:0.12, start:0, delay:-800 });
			$('.jet').Parallax({ property:'top', speed:-0.10, start:80, delay:-900 });*/
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

		// about_me snap point
		$('#about_me').waypoint(function(direction) {
			$('.main-nav').toggleClass('fixed-nav', direction == 'down');
			$('.main-nav a').removeClass('active');
			$('.main-nav a.about_me-btn').addClass('active');
		}, { offset:'80px' });

		// education snap point
		$('#education').waypoint(function(direction) {
			$('.main-nav a').removeClass('active');
			if(direction == 'down') {
				$('.main-nav').addClass('nav-light-gray');
				$('.main-nav a.education-btn').addClass('active');
			} else {
				$('.main-nav').removeClass('nav-light-gray');
				$('.main-nav a.about_me-btn').addClass('active');
			}
		}, { offset:'80px' });

		// workexp snap point
		$('#workexp').waypoint(function(direction) {
			$('.main-nav a').removeClass('active');
			if(direction == 'down') {
                $('.main-nav').removeClass('nav-light-gray');
				$('.main-nav').addClass('nav-dark-gray');
				$('.main-nav a.workexp-btn').addClass('active');
				$('#workexp').addClass('active');
			} else {
				$('.main-nav').removeClass('nav-dark-gray');
				$('.main-nav').addClass('nav-light-gray');
				$('.main-nav a.education-btn').addClass('active');

			}
		}, { offset:'80px' });

		// projects snap point
		$('#projects').waypoint(function(direction) {
			$('.main-nav a').removeClass('active');
			if(direction == 'down') {
               $('.main-nav').removeClass('nav-light-gray');
				$('.main-nav').addClass('nav-dark-gray');
				$('.main-nav a.projects-btn').addClass('active');
				$('#project').addClass('active');

			} else {
				$('.main-nav').removeClass('nav-dark-gray');
				$('.main-nav').addClass('nav-light-gray');
				$('.main-nav a.skills-btn').addClass('active');
                $('#projects').addClass('active');
			}
		}, { offset:'80px' });
        skills
        // projects snap point
		$('#skills').waypoint(function(direction) {
            skillChartAnimation(1)
			$('.main-nav a').removeClass('active');
			if(direction == 'down') {
                 $('.main-nav').removeClass('nav-dark-gray');
				$('.main-nav').addClass('nav-light-gray');
				$('.main-nav a.skills-btn').addClass('active');

				$('#projects').addClass('active');
			} else {
                $('.main-nav').removeClass('nav-light-gray');
				$('.main-nav').addClass('nav-dark-gray');
				$('.main-nav a.workexp-btn').addClass('active');
                $('#projects').addClass('active');
			}
		}, { offset:'80px' });

        $("#description_skill").waypoint(function() {

                descrip_skills();

        }, { offset:'60%' });

        $('#foot_page').waypoint(function(direction) {
			$('.main-nav a').removeClass('active');
			if(direction == 'down') {
                 $('.main-nav').removeClass('nav-dark-gray');
				$('.main-nav').addClass('nav-light-gray');
			} else {
                $('.main-nav').removeClass('nav-light-gray');
				$('.main-nav').addClass('nav-dark-gray');
				$('.main-nav a.projects-btn').addClass('active');
                $('#projects').addClass('active');
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
        console.log(id);
		$('html, body').animate({ scrollTop: $(id).offset().top-80 }, 1000, 'easeOutExpo');

	};

	return {
		init: init,
		scrollTo: scrollTo,
		showMenu: showMenu
	};

}(jQuery));

$(function() {
	Artentica.init();
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

function descrip_skills(vip){
    var e = $(window).scrollTop();
        var top = $("#skills").position().top;
    if(e>=top && desc_skill == 0 || vip && desc_skill == 0 ){
        desc_skill = 1;
        $("#skills .moving_skill_desc").each(function(e) {
                            $(this).delay(e*80).transition({opacity:1,x: '0px'},700);
                        });
    }

}

function scrollbarWidth() {
    var e = $('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
    $("body").append(e);
    var t = $("div", e).innerWidth();
    e.css("overflow-y", "scroll");
    var n = $("div", e).innerWidth();
    $(e).remove();
    return t - n
}

function supersizedMobile() {
    isMobileTouch && $("#supersized").addClass("disable-fixed")
}

function skillsChartLegendHeight(e) {
    if (e >= 1024) $("#skills-chart #chart-legend li").height("150px");
    else {
        var t = $("#skills-chart #chart-data").outerHeight();
        $("#skills-chart #chart-legend li").height(t)
    }
}

function skillsChartVBarWidth(e) {
    if (e >= 1024) {
        var t = $("#skills-chart #chart-data li").length,
            n = 100 / t;
        $("#skills-chart #chart-data li").css("width", n + "%")
    } else $("#skills-chart #chart-data li").css("width", "100%")
}

function clearfixChartLegend(e) {
    if (e >= 1024) {
        $("#skills-chart #chart-legend").removeClass("clearfix");
        $("#skills-chart #chart-data").addClass("cl earfix")
    } else {
        $("#skills-chart #chart-legend").addClass("clearfix");
        $("#skills-chart #chart-data").removeClass("clearfix")
    }
}

function skillChartAnimationInit() {
    browserWidth >= 1024 && !isMobileTouch && $("#skills-chart .data-bar").each(function(e) {
        skillChartVBarsHeight[e] = $(this).css("height");
        $(this).css("height", 0);
        $(".data-label", this).css("opacity", 0)
    })
}

function skillChartAnimation(vip) {
    if (browserWidth >= 1024 && !isMobileTouch) {
        var e = $(window).scrollTop();
        var top = $("#skills").position().top;
        if (e>=top && skillChartAnimationCount == 0 || vip && skillChartAnimationCount == 0 ) {
            console.log(e);
            console.log(top);
            skillChartAnimationCount = 1;
            $("#skills-chart .data-bar").each(function(index) {console.log(index);
                $(this).delay(index * 100).animate({
                    height: skillChartVBarsHeight[index]
                }, 800, function() {
                    $(".data-label", this).animate({
                        opacity: 1
                    }, 200)
                })
            })

        }
    }
}
var isMobileTouch = /ipad|iphone|ipod|android|blackberry|webos|windows phone/i.test(navigator.userAgent.toLowerCase()),
    browserWidth, browserHeight, mainMenuShown = !1,
    clickedOnMenu = !1,
    skillChartAnimationCount = 0,
    skillChartVBarsHeight = new Array,
    showTweets = function(e) {
        var t = $("#tweets");
        t.empty();
        var n = e[0].text;
        n = n.replace(/(https?:\/\/[^\s:]+)/gi, '<a href="$1">$1</a>');
        n = n.replace(/(@(\w+))/g, '<a href="http://twitter.com/$2">$1</a>');
        n = n.replace(/(\#(\w+))/g, '<a href="http://search.twitter.com/search?q=%23$2">$1</a>');
        t.append(n)
    };
    var desc_skill = 0;

$(document).ready(function() {
    browserWidth = $(window).width() + scrollbarWidth();
    browserHeight = $(window).height();
    skillChartAnimationInit();
    skillChartAnimation();
    $(window).resize(function() {
        browserWidth = $(window).width() + scrollbarWidth();
        browserHeight = $(window).height();
        skillsChartVBarWidth(browserWidth);
        clearfixChartLegend(browserWidth);
        skillsChartLegendHeight(browserWidth);
    }).resize();
    $(window).scroll(function() {
        browserHeight = $(window).height();
        skillChartAnimation();
    }).scroll();



});
