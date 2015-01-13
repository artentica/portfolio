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
			$('div.aboutme_img_prez').removeClass('fixed_abouteme_img');
		}, { offset:'bottom-in-view' });

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

        $('#1exp').waypoint(function(direction) {
            work_exp("1exp",1)
        }, { offset:'55%' });

        $('#2exp').waypoint(function(direction) {
             work_exp("2exp",1)
        }, { offset:'55%' });

        $('#3exp').waypoint(function(direction) {
            work_exp("3exp",1)
        }, { offset:'55%' });

        $('#4exp').waypoint(function(direction) {
            work_exp("4exp",1)
        }, { offset:'55%' });

$('#bandeau_work').waypoint(function(direction) {
            work_exp("bandeau_work",1)
        }, { offset:'55%' });

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

        $('#projects').waypoint(function(direction) {
             project_appear(1);
		}, { offset:'200px' });

        // projects snap point
		$('#skills').waypoint(function(direction) {
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

        $('#skills').waypoint(function(direction) {
            skillChartAnimation(1);
        }, { offset:'200px' });


        $('div.aboutme_img_prez').waypoint(function(direction) {
            $('div.aboutme_img_prez').addClass('fixed_abouteme_img');
        }, { offset:'bottom-in-view' });

         $(".education-row").waypoint(function() {

                education_block_rotate(1);

        }, { offset:'60%' });


        $("#description_skill").waypoint(function() {

                descrip_skills();

        }, { offset:'60%' });

        $("#foot_page").waypoint(function() {
               footer_contact(1);
        }, { offset:'450px' });

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

function descrip_skills(){
    var e = $(window).scrollTop();
        var top = $("#skills").position().top;
    if(e>=top && desc_skill == 0){
        desc_skill = 1;
        $("#skills .moving_skill_desc").each(function(e) {
                            $(this).delay(e*80).transition({opacity:1,x: '0px'},700);
                        });
    }

}
function work_exp(id,vip){
    var e = $(window).scrollTop();
    var top = $("#"+ id).position().top;
    if(e>=top|| vip){
    $("#" +id +" .workexpleftimg").transition({opacity:1,x: '0px'},700);
    $("#" +id +" .column-right").transition({opacity:1,x: '0px'},700);
    $("#" +id +" .column-rightimg").transition({opacity:1,x: '0px'},700);
    $("#" +id +" .workexplefttxt").transition({opacity:1,x: '0px'},700);
    }
}

function footer_contact(vip){
    var e = $(window).scrollTop();
    var top = $("footer .work-together").position().top - 300;
    if(e>=top|| vip){
    $("footer .work-together").transition({opacity:1,x: '0px'},700);
    }
}


function project_appear(vip){
    var e = $(window).scrollTop();
    var top = $("#projects").position().top;
    if(e>=top && projects_appear_state == 0 || vip && projects_appear_state == 0 ){
        projects_appear_state = 1;
    $("#projects-slider .project-main-line").transition({opacity:1,x: '0px'},1000);
    $("#projects-slider .projects-block").each(function(e) {
                $(this).delay(e*100).transition({opacity:1,y: '0px'},800);
    });
    }
}

function education_block_rotate(vip){
    var e = $(window).scrollTop();
    var top = $("#education").position().top;
    if(e>=top && educa_var == 0 || vip && educa_var == 0 ){
        educa_var = 1;
    $(".education-row .education-block").each(function(e) {
                $(this).delay(e*200).transition({opacity:1,rotateY: '0deg'},800);
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
            skillChartAnimationCount = 1;
            $("#skills-chart .data-bar").each(function(index) {
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
    var projects_appear_state = 0;
    var educa_var = 0;

$(document).ready(function() {
    browserWidth = $(window).width() + scrollbarWidth();
    browserHeight = $(window).height();
    skillChartAnimationInit();
    skillChartAnimation();
    project_appear();
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
        project_appear();
    }).scroll();



});
