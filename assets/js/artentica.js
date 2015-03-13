$('.parallax-top').Parallax({ property:'top', speed:0.72, start:0, delay:0 });
/*$('#education > div.container > div.school').Parallax({ property:'top', speed:0.9, start:0, delay:50 });*/
$('.school').Parallax({ property:'top', speed:0.50, start:0, delay:-230,duration:800 });


var Artentica = (function($) {

	var init = function() {

        // preload functionality
		if(typeof Loader !== 'undefined') {
			Loader.preload('body', '#loading-percent', function() {
				$('.loading-modal').delay(300).fadeOut(1000,open_page());
			})
		}

		// projects functionality
		if(typeof Featured !== 'undefined')
			Featured.init();

		// contact functionality
		if(typeof Contact !== 'undefined')
			Contact.init();

		// projects functionality
		if ($.fn.Parallax && !Modernizr.appleios) {

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

        $('#1exp').waypoint(function(direction) {
            work_exp("1exp",1);
        }, { offset:'60%' });

        $('#2exp').waypoint(function(direction) {
             work_exp("2exp",1);
        }, { offset:'60%' });

     /*   $('#3exp').waypoint(function(direction) {
            work_exp("3exp",1)
        }, { offset:'60%' });

        $('#4exp').waypoint(function(direction) {
            work_exp("4exp",1)
        }, { offset:'60%' });*/

$('#bandeau_work .workexplefttxt').waypoint(function(direction) {
            work_exp("bandeau_work",1);
            $("#bandeau_work .service-sep").delay(300).transition({scale:1},900);
            $("#bandeau_work .service-callout img").delay(150).transition({opacity:1,y:0},900);

        }, { offset:'bottom-in-view' });

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
		}, { offset:'25%' });

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
           /* $('div.aboutme_img_prez').addClass('fixed_abouteme_img');*/
            if(direction == 'down' && $(window).width()>960) {
                $('div.aboutme_img_prez').addClass('notview');
                $('#scroll_aboutme').removeClass('notdisplay');

            }
            if(direction == 'up') {
                $('div.aboutme_img_prez').removeClass('notview');
                $('#scroll_aboutme').addClass('notdisplay');
            }
        }, { offset:'bottom-in-view' });


        $('#about_me').waypoint(function(direction) {
            if(direction == 'down') {
                $('#scroll_aboutme').addClass('glue_bottom');

            }
            if(direction == 'up') {
                $('#scroll_aboutme').removeClass('glue_bottom');
            }
        }, { offset:'bottom-in-view' });


        $('#about_me .heading-sep').waypoint(function(direction) {
            title_anim_aboutme();
        }, { offset:'bottom-in-view' });


        $('#education .heading-sep').waypoint(function(direction) {
            title_anim_educ();
        }, { offset:'bottom-in-view' });


        $('#skills .heading-sep').waypoint(function(direction) {
            title_anim_skills();
        }, { offset:'bottom-in-view' });


        $('#projects .projects-title').waypoint(function(direction) {
            title_anim_project();
        }, { offset:'bottom-in-view' });


        $('#workexp .heading-sep').waypoint(function(direction) {
            title_anim_workexp();
        }, { offset:'bottom-in-view' });

        $('.projects-item div').waypoint(function(direction) {
            minproject($(this));
        }, { offset:'bottom-in-view' });




         $("#education").waypoint(function() {

                education();

        }, { offset:'50%' });

        $(".education-row").waypoint(function() {

                education_block_rotate(1);


        }, { offset:'50%' });


        $("#description_skill").waypoint(function() {

                descrip_skills();

        }, { offset:'60%' });

        $("#foot_page .work-together").waypoint(function() {
               footer_contact(1);
        }, { offset:'bottom-in-view' });

       $(".moving_skill_desc").waypoint(function() {
        $(this).transition({opacity:1,x: '0px'},700);
        }, { offset:'bottom-in-view' });

        $('#foot_page').waypoint(function(direction) {
			$('.main-nav a').removeClass('active');

			if(direction == 'down') {
                $('.main-nav').removeClass('nav-dark-gray');
				$('.main-nav').addClass('nav-light-gray');
                $('.map-btn').addClass('active');


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

function collapsework(e){
    var minus="Less Work experiences informations ";
    var plus="More Work experiences informations ";

    var value = e.data("value");

   /* console.log(value);*/
    if(!value){
        e.children(".text2").children("a").text(minus);
        e.children(".text2").children("span").removeClass();
        e.children(".text2").children("span").addClass("icon-minus");
                e.data("value",1);

    }else{
        e.children(".text2").children("a").text(plus);
        e.children(".text2").children("span").removeClass();
        e.children(".text2").children("span").addClass("icon-plus");
                e.data("value",0);


    }

}

function collapseskill(e){
    var minus="Less informations on my skills";
    var plus="More informations on my skills";

    var value = e.data("value");

   /* console.log(value);*/
    if(!value){
        e.children(".text2").children("a").text(minus);
        e.children(".text2").children("span").removeClass();
        e.children(".text2").children("span").addClass("icon-minus");
                e.data("value",1);

    }else{
        e.children(".text2").children("a").text(plus);
        e.children(".text2").children("span").removeClass();
        e.children(".text2").children("span").addClass("icon-plus");
                e.data("value",0);
    }

    /*$('.under_div_none').collapse('toggle');*/
    $('#detail_skill').collapse('toggle');
    $('.under_div_none').collapse('toggle');

}

function footer_contact(vip){
    var e = $(window).scrollTop();
    var top = $("footer .work-together").position().top - 300;
    if(e>=top && footercontactdone==0 || vip && footercontactdone==0  ){
    footercontactdone =1;
    $("footer .work-together").transition({opacity:1,x: '0px'},700);
    }
}


function project_appear(vip){
    var e = $(window).scrollTop();
    var top = $("#projects").position().top;
    if(e>=top && projects_appear_state == 0 || vip && projects_appear_state == 0 ){
        projects_appear_state = 1;
    $("#projects-slider .project-main-line").transition({opacity:1,x: '0px'},1000);
    $("#projects-slider .title-projects-slide h2").transition({opacity:1,x: '0px'},1000);
    $("#projects-slider .projects-block").each(function(e) {
                $(this).delay(e*150).transition({opacity:1,y: '0px'},800);
    });
    $("#projects-slider .horizontal-line").transition({opacity:1,scale:1},800);

    $("#projects-slider .vertical-line").transition({opacity:1,scale:1},800);

    $(".menu-slide span").each(function(e) {
                $(this).delay(e*150).transition({opacity:1,scale:1},800);
    });

     $("#projects .view").delay(350).transition({opacity:1,y: '0px'},800);


    /*$("#projects .projects-nav a").each(function(e) {
                $(this).delay(e*200).transition({scale:1},1000);
    });*/



    }
}

function title_anim_aboutme(){
    if(aboutme_title == 0 ){
        aboutme_title = 1;
        $("#about_me h2").transition({opacity:1,y: '0px'},800)
        $("#about_me .heading-sep").delay(600).transition({opacity:1,scale:1},600);
    }
}
function title_anim_educ(){
    if(educ_title == 0 ){
        educ_title = 1;
        $("#education h2").transition({opacity:1,x: '0px'},800);
        $("#education .heading-sep").delay(600).transition({opacity:1,scale:1},600);
    }
}
function title_anim_skills(){
    if(skills_title == 0 ){
        skills_title = 1;
        $("#skills h2").transition({opacity:1,x: '0px'},800);
        $("#skills .heading-sep").delay(600).transition({opacity:1,scale:1},600);

    }
}
function title_anim_project(){
    if(project_title == 0 ){
        project_title = 1;
        $("#projects .projects-title h2").transition({opacity:1,x: '0px'},800);
        $("#projects .heading-sep").delay(600).transition({opacity:1,scale:1},600);
    }
}

function title_anim_workexp(){
    if(title_workexp == 0 ){
        title_workexp = 1;
        $("#workexp h2").transition({opacity:1,x: '0px'},800);
        $("#workexp .heading-sep").delay(600).transition({opacity:1,scale:1},600);

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
        $("#education .vertical-line").delay(600).transition({opacity:1,scale:1},800);
        $("#education .vertical-line2").delay(600).transition({opacity:1,scale:1},800);
    }
}

function scrollbarWidth() {
   /* var e = $('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
    $("body").append(e);
    var t = $("div", e).innerWidth();
    e.css("overflow-y", "scroll");
    var n = $("div", e).innerWidth();
    $(e).remove();
    return t - n*/
    return 17; //taille générique des scrolls bar sur chrome firefox et IE
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
        $("#skills-chart #chart-data").addClass("clearfix")
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

function minproject(e){
/*    if(minprojectvar == 0){
        minprojectvar = 1;*/
        $(e).transition({opacity:1,x: '0px'},600);
/*}*/
}

function education(){
    if(prinEduc == 0){
        prinEduc = 1;
        $("#education .service-text").transition({opacity:1,x: '0px'},900);
        $("#education .service-callout").delay(750).transition({opacity:1,y: '0px'},800);
        $("#education .school img").delay(150).transition({opacity:1,x: '0px'},1000);
        $("#education .school span").delay(800).transition({scale:1,opacity:1},600);
    }

}
function open_page(){
    $("header .header-nav").transition({opacity:1,x: '0px'},2000);
    $("header div.vr").transition({opacity:1,x: '0px'},2000);
    $("header .parralax_header").transition({opacity:1,y: '0px'},2000);
    $("header div.text div.container").transition({opacity:1},2000);
}

function skill_spe(e){
    var label = e.data("label");
     console.log(e);
    $(".under_div_none .moving_skill_desc").each(function(index) {
        if(label == $(this).data("label")){
            if($(this).css( "display")=="none")$(this).css( "display","block");
            else $(this).css( "display","none");

        }
    });
}

function change_prez_img(position,start,size){
    var part = size/8;
   /*console.log((position)+"   "+(start+part)+"   "+(start+part*2)+" size: "+size);*/
    if(position>=start+part && position < start+part*2){
        $("#scroll_aboutme img").attr('src', 'assets/img/scroll2test.png');
    }
     if(position>=start+part*2 && position < start+part*3){
        $("#scroll_aboutme img").attr('src', 'assets/img/scroll3test.png');
    }
     if(position>=start+part*3 && position < start+part*4){
        $("#scroll_aboutme img").attr('src', 'assets/img/scroll4test.png');
    }
     if(position>=start+part*4 && position < start+part*5){
        $("#scroll_aboutme img").attr('src', 'assets/img/scroll5test.png');
    }
     if(position>=start+part*5 && position < start+part*6){
        $("#scroll_aboutme img").attr('src', 'assets/img/scroll6test.png');
    }
     if(position>=start+part*6 && position < start+part*7){
        $("#scroll_aboutme img").attr('src', 'assets/img/scroll7test.png');
    }
     if(position>=start+part*7 && position < start+part*8){
        $("#scroll_aboutme img").attr('src', 'assets/img/scroll8test.png');
    }
     if(position>=start+part*8){
        $("#scroll_aboutme img").attr('src', 'assets/img/scroll9test.png');
    }
}

var isMobileTouch = /ipad|iphone|ipod|android|blackberry|webos|windows phone/i.test(navigator.userAgent.toLowerCase()),
    browserWidth, browserHeight, mainMenuShown = !1,bottom_screen,bottom_aboutme,
    clickedOnMenu = !1,
    skillChartAnimationCount = 0,
    footercontactdone = 0,
    prinEduc = 0,
    aboutme_title = 0,
    educ_title = 0,
    title_workexp = 0,
   /* minprojectvar = 0,*/
    skills_title = 0,
    project_title = 0,
    size_prez_img = $(".aboutme_img_prez img").width(),
    size_height_prez_img = $(".aboutme_img_prez img").height(),
    height_aboutme_container = $("#about_me #container_notscroll").height(),
    bottom_img_prez_offset = $("#about_me #container_notscroll img").offset().top + size_height_prez_img,
    height_aboutme_container_minusImg = height_aboutme_container - size_height_prez_img,
    skillChartVBarsHeight = new Array;
    var desc_skill = 0;
    var projects_appear_state = 0;
    var educa_var = 0;
    var bottom_aboutme= height_aboutme_container_minusImg +$("#about_me").offset().top;

$("#scroll_aboutme img").css( "width", size_prez_img+"px" );
/*console.log(size_prez_img);*/
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
        size_prez_img = $(".aboutme_img_prez img").width();
        size_height_prez_img = $(".aboutme_img_prez img").height();
        height_aboutme_container_minusImg = $("#about_me #container_notscroll").height() - size_height_prez_img;
        bottom_img_prez_offset = $("#container_notscroll > div.aboutme_img_prez > img").offset().top + size_height_prez_img;
        $("#scroll_aboutme img").css( "width", size_prez_img+"px" );
        bottom_aboutme= height_aboutme_container +$("#about_me").offset().top;

    }).resize();
    $(window).scroll(function() {
        bottom_screen=$(window).scrollTop()+browserHeight;
        browserHeight = $(window).height();
        skillChartAnimation();
        project_appear();
        size_effect = bottom_aboutme-bottom_img_prez_offset;
        change_prez_img(bottom_screen,bottom_img_prez_offset,size_effect);
    }).scroll();



});

