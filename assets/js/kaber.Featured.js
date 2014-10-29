var Featured = (function($) {

	var Slider;

	var init = function() {

		// create new slider properties
		Slider = new SliderProps($('#featured-slider'), 0, 0, 0);

		// set slide total
		Slider.total = Slider.element.find('.slide').length - 1;

		// set default slide states
		Slider.element.find('.slide').each(function(index) {

			if(index > 0) {
				$(this).css({ left:'100%' });
			}

			$('.feature-nav').append('<a href="javascript:;" class="slidebtn trans-all"><span class="trans-all"></span></a>');

		});

		// set first testimonial nav active
		Slider.element.find('a.slidebtn:eq(0)').addClass('active');

		// set listener for testimonial nav
		Slider.element.on("click", "a.slidebtn", goToItem);

	};

	var goToItem = function(e) {

		// make sure current item doesn't get double clicked
		if(Slider.next == $(this).index('.slidebtn')) return;

		// set up correct indexes of next slide
		Slider.current = Slider.next;
		Slider.next = $(this).index('.slidebtn');

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

		// reset featured item positions
		var newPos = Slider.next > Slider.current ? '100%' : '-100%';
		Slider.element.find('.slide:eq(' + Slider.next + ')').css({ left:newPos });

		// calculate new position of old item
		var curPos = Slider.next > Slider.current ? '-100%' : '100%';

		Slider.element.find('.slide:eq(' + Slider.current + ')').animate({ left:curPos }, 1000, 'easeOutExpo');
		Slider.element.find('.slide:eq(' + Slider.next + ')').animate({ left:'0%' }, 1000, 'easeOutExpo');

		// set active slide
		$('.feature-nav a').removeClass('active');
		$('.feature-nav a:eq(' + Slider.next + ')').addClass('active');

		$('.feature-count .active').html('0' + (Slider.next+1));

	};

	var loadItem = function($url) {

		// hide background content
		$('body').addClass('featured-open-body');
		
		// set a timeout so firefox doesn't bug out
		setTimeout(function() {

			// clear existing content and container
			$('.feature-content').html('');

			// open modal
			$('.feature-modal').addClass('feature-open');

			// load new url
			$('.feature-content').load($url);

		},25);
		
	};

	var closeItem = function() {

		// remove open class
		$('.feature-modal').removeClass('feature-open');

		// set a timeout so firefox doesn't bug out
		setTimeout(function() {
			// show background content
			$('body').removeClass('featured-open-body');
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