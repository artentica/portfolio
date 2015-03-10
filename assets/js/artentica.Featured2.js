var Featured = (function($) {

	var Slider;

	var init = function() {

		// create new slider properties
		Slider = new SliderProps($('#projects-slider'), 0, 0, 0);

		// set slide total
		Slider.total = Slider.element.find('.slide').length - 1;

		// set default slide states
		Slider.element.find('.slide').each(function(index) {

			if(index > 0) {
				$(this).css({ left:'100%' });
			}

			$('.menu-slide span:eq('+index+')').wrap('<a href="javascript:;" class="icon-button"></a>');

		});

       /* $('.menu-slide span').hover(function(){
            $( this ).transition({scale:0.8},300);
            $( this ).transition({scale:1.1},300);
        });*/
		// set first testimonial nav active
		Slider.element.parent().find('.menu-slide a:eq(0)').addClass('active');


		// set listener for testimonial nav
		Slider.element.parent().on("click", ".menu-slide .icon-button", goToItem);

	};

	var goToItem = function(e) {
		// make sure current item doesn't get double clicked
		if(Slider.next == $(this).index('.icon-button')) return;

		// set up correct indexes of next slide
		Slider.current = Slider.next;
		Slider.next = $(this).index('.icon-button');

		// animate to new item
		animate();

	};

	var previous = function() {

		// set up correct indexes of next slide
		Slider.current = Slider.next;
		Slider.next = Slider.next == 0 ? Slider.total : Slider.next - 1;

		// animate to new item
		animate();

	};

	var next = function() {

		// set up correct indexes of next slide
		Slider.current = Slider.next;
		Slider.next = Slider.next == Slider.total ? 0 : Slider.next + 1;

		// animate to new item
		animate();

	};

	var animate = function() {

		// reset projects item positions
		var newPos = Slider.next > Slider.current ? '100%' : '-100%';
		Slider.element.find('.slide:eq(' + Slider.next + ')').css({ left:newPos });

		// calculate new position of old item
		var curPos = Slider.next > Slider.current ? '-100%' : '100%';

		Slider.element.find('.slide:eq(' + Slider.current + ')').animate({ left:curPos }, 1000, 'easeOutExpo');

		Slider.element.find('.slide:eq(' + Slider.next + ')').animate({ left:'0%' }, 1000, 'easeOutExpo');

		// set active slide
		$('.menu-slide a').removeClass('active');
		$('.menu-slide a:eq(' + Slider.next + ')').addClass('active');

		$('.projects-count .active').html('0' + (Slider.next+1));

	};

	var loadItem = function($url) {

		// hide background content
		$('body').addClass('projects-open-body');

		// set a timeout so firefox doesn't bug out
		setTimeout(function() {

			// clear existing content and container
			$('.projects-content').html('');

			// open modal
			$('.projects-modal').addClass('projects-open');

			// load new url
			$('.projects-content').load($url);

		},25);

	};

	var closeItem = function() {

		// remove open class
		$('.projects-modal').removeClass('projects-open');

		// set a timeout so firefox doesn't bug out
		setTimeout(function() {
			// show background content
			$('body').removeClass('projects-open-body');
		},25);

	}

	return {
		init: init,
		next: next,
		previous: previous,
		loadItem: loadItem,
		closeItem: closeItem
	};

}(jQuery));

function SliderProps(element, total, next, current) {

	this.element = element;
	this.total = total;
	this.next = next;
	this.current = current;
	// this.disable = false;

}
