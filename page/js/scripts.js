$(function() {

	$(document).scrollTop(0);
	

	// *********************************** Slider Default Function
	function sliderDefault(cls) {
		$(cls).slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		nextArrow: '<div class="arrow arrow__right icon-next"></div>',
		prevArrow: '<div class="arrow arrow__left icon-back"></div>',
		dotsClass: 'dots',
		dots: true,
		responsive: [
			{
			  breakpoint: 996,
			  settings: {
			    slidesToShow: 1,
			  }
			},
		]
	});
	}
	// *********************************** Slider Default Function 

	// *****************************************Anchor
    $(".anchor").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    // *****************************************Anchor

	// *********************************** Slider Default
	sliderDefault('.slider-default');
	sliderDefault('.comment__cards');
	// *********************************** Slider Default

	// *********************************** local-tourism__cards
	$('.local-tourism__cards').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		nextArrow: '<div class="arrow arrow__right icon-next"></div>',
		prevArrow: '<div class="arrow arrow__left icon-back"></div>',
		dotsClass: 'dots',
		dots: true,
		responsive: [
			{
			  breakpoint: 996,
			  settings: {
			    slidesToShow: 1,
			    rows: 2,
			    slidesPerRow: 1,
			  }
			},
		]
	});
	// *********************************** local-tourism__cards

	// *********************************** popular-tour__cards
	let popularTourCards = $('.popular-tour__cards');
  let popularTourCardsSettings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
     	nextArrow: '<div class="arrow arrow__right icon-next"></div>',
			prevArrow: '<div class="arrow arrow__left icon-back"></div>',
			dotsClass: 'dots',
			dots: true,
			responsive: [
				{
				  breakpoint: 576,
				  settings: {
				    slidesToShow: 2,
				    rows: 1,
				    slidesPerRow: 3,
				    infinite: true
				  }
				}
			]
  };
  // *********************************** popular-tour__cards

	// *********************************** Team Cards
  $('.team__cards').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		nextArrow: '<div class="arrow arrow__right icon-next"></div>',
		prevArrow: '<div class="arrow arrow__left icon-back"></div>',
		dotsClass: 'dots',
		dots: true,
		responsive: [
			{
			  breakpoint: 996,
			  settings: {
			    slidesToShow: 1,
			    slidesPerRow: 2,
			    rows: 2
			  }
			},
		]
	});
	// *********************************** Team Cards

	// *********************************** popular-tour__cards function
	function tabContentDS() {
		$('.tab__content-item').hide();
	  $('.tab__content-item:first').show();
	  $('.tab__nav-item:first').addClass('active');
	  $('.faq-tab__nav-link').click(function(e) { e.preventDefault });
	  $('.tab__nav-item').click(function(event) {
	    $('.tab__nav-item').removeClass('active');
	    $(this).addClass('active');
	    $('.tab__content-item').hide();

	    var selectTab = $(this).find('span').data("link");

	    $(selectTab).fadeIn();
	 	});
	}
	tabContentDS();
  // *********************************** popular-tour__cards function
 	// *********************************** Accordion
  $(".faq-accordion").accordionjs({
  	activeIndex : false
  });
 	// *********************************** Accordion

 	// *********************************** faq-tab__nav
	let faqTabNav = $('.faq-tab__nav');
  let faqTabNavSettings = {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
     	nextArrow: '<div class="arrow arrow__right icon-next far-arrow-next"></div>',
			prevArrow: '<div class="arrow arrow__left icon-back far-arrow-prev"></div>',
  };

  faqTabNav.on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $(this).find(`.faq-tab__nav-link[data-link="${'#' + nextSlide}"]`).trigger('click');
	console.log($(this).find(`.faq-tab__nav-link[data-link="${'#' + nextSlide}"]`))
	});

  $(window).on('resize load', function(){
      if($(window).width() > 996){

      		$(window).scroll(function(){
	            let number = Math.floor($(this).scrollTop());
	            // && ($('body').height() - 950) > number
	            if(number>400){
	            		$('.header').addClass('up');
	            }
	            // || ($('body').height() - 950) < number
	            else if (number<400){
	            		$('.header').removeClass('up');
	            }
	        });

          if(faqTabNav.hasClass('slick-initialized')){
              faqTabNav.slick('unslick')
              tabContentDS();
          }
          if(popularTourCards.hasClass('slick-initialized')){
              popularTourCards.slick('unslick')
          }
          return 0;
      }


      	$('.header').removeClass('up');
      	$(window).off('scroll')


      if(!faqTabNav.hasClass('slick-initialized')){
          faqTabNav.slick(faqTabNavSettings)
      }
      if(!popularTourCards.hasClass('slick-initialized')){
         	popularTourCards.slick(popularTourCardsSettings)
      }
      
  });
  // *********************************** faq-tab__nav

	// *********************************** Sidebar
  $( "#sidebar" ).simplerSidebar( {
      align: 'left',
      init: 'closed',
      selectors: {
          trigger: ".sidebar-trigger",
          quitter: ".close-sidebar"
      }
  });
  // *********************************** Sidebar
	
	// *********************************** Modal
  	$("#modal-form").iziModal({
  		width: 450,
  		headerColor: '#826a45',
  	});
  	$("#modal-success").iziModal({
  		width: 350,
  		headerColor: '#826a45',
  		icon: 'icon-confirm',
  		padding: '40px 20px'
  	});
	// *********************************** Modal

	// *****************************************Mask input
    $('.tel-mask').mask("+7(999) 999-9999");
  // *****************************************Mask input
	
	// ***************************************** Form Submit
  $('form').submit(function (e) {
    let form_data = $(this).serialize();
    $.ajax({
        type: "POST",
        url: "feedback.php",
        data: form_data,
        success: function () {
            $('form').trigger("reset");

            $('#modal-form').iziModal('close');

            setTimeout(function() {
            	$('#modal-success').iziModal('open');
            }, 1000);
        }
    });
    return false;
	});
	// ***************************************** Form Submit

	// ***************************************** Manager & Helper
	$('.manager').click(function() {
		$('.helper').toggleClass('active');
	})
	$('.helper__close').click(function() {
		$('.helper').removeClass('active');
	})
	// ***************************************** Manager & Helper

	// ***************************************** AOS
		setTimeout(function() {
			AOS.init();
		}, 1000)
	// ***************************************** AOS
	
	// ***************************************** Loader
	$('.loader').addClass('loader_non-active');
	// ***************************************** Loader


});
