jQuery(function(){

AOS.init({
	once: true
});

// jQuery('#nav-icon4, .header.header .mainMenu ul li a').click(function(){
jQuery('#nav-icon4, header.header .mainMenu ul li a').click(function(){
  jQuery(this).toggleClass('open');
  jQuery('.mainMenu').toggleClass('activeMenu');
  jQuery('body').toggleClass('fixed');
});

$(".arrowIcon").append("<svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink=' http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 492 421' style='enable-background:new 0 0 492 421;' xml:space='preserve'><g><g><path d='M484.1,191.9L306.5,14.2c-5.1-5.1-11.8-7.9-19-7.9c-7.2,0-14,2.8-19,7.9l-16.1,16.1c-5.1,5.1-7.9,11.8-7.9,19 c0,7.2,2.8,14.2,7.9,19.3l103.7,103.9H26.6C11.7,172.5,0,184.1,0,199v22.8c0,14.9,11.7,27.6,26.6,27.6h330.5L252.2,353.9c-5.1,5.1-7.9,11.7-7.9,18.9c0,7.2,2.8,13.9,7.9,18.9l16.1,16.1c5.1,5.1,11.8,7.8,19,7.8c7.2,0,14-2.8,19-7.9l177.7-177.7c5.1-5.1,7.9-11.9,7.9-19.1C492,203.8,489.2,197,484.1,191.9z'/></g></g></svg>");


	jQuery('.smoothClick, .smoothLink > a').click(function() {
	var dis = jQuery(this);
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = jQuery(this.hash);
	  target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('html, body').animate({
		  scrollTop: target.offset().top-100
		}, 1000);
		return false;
	  }
	}
  });


$(window).scroll(function() {   
    var scroll = $(window).scrollTop();
    if (scroll >= 300) {
        $(".backToTop").addClass("show");
        $("header.header").addClass("fixed");
    } else {
        $(".backToTop").removeClass("show");
        $("header.header").removeClass("fixed");
    }
});



$('.testiSlider').slick({
  dots: true,
  infinite: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  autoplay: false,
  cssEase: 'linear',
  prevArrow:"<svg class='slick-next' viewBox='0 0 25 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g id='Main' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'><g id='Updates-Media-Home' transform='translate(-1191.000000, -3191.000000)' stroke='#ffffff' stroke-width='1.2'><g id='New-Service' transform='translate(291.558458, 2240.628458)'><g id='Group-11-Copy-5' transform='translate(668.000000, 757.000000)'><g id='Group-9-Copy' transform='translate(77.441542, 47.371542)'><g id='arrow-right-copy-6' transform='translate(155.000000, 146.388889)'><line x1='22' y1='6.9142142' x2='0' y2='7.30800802' id='Path'></line><polyline id='Path' points='16 0.804659498 23 7.11111111 16 13.4175627'></polyline></g></g></g></g></g></g></svg>",
  nextArrow:"<svg class='slick-prev' viewBox='0 0 25 15' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><g id='Main' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' stroke-linecap='round' stroke-linejoin='round'><g id='Updates-Media-Home' transform='translate(-1191.000000, -3191.000000)' stroke='#ffffff' stroke-width='1.2'><g id='New-Service' transform='translate(291.558458, 2240.628458)'><g id='Group-11-Copy-5' transform='translate(668.000000, 757.000000)'><g id='Group-9-Copy' transform='translate(77.441542, 47.371542)'><g id='arrow-right-copy-6' transform='translate(155.000000, 146.388889)'><line x1='22' y1='6.9142142' x2='0' y2='7.30800802' id='Path'></line><polyline id='Path' points='16 0.804659498 23 7.11111111 16 13.4175627'></polyline></g></g></g></g></g></g></svg>",
});



$('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('active');
    $('.tab-content').removeClass('active');

    $(this).addClass('active');
    $("#"+tab_id).addClass('active');
  });


$('.defaultBtn').on('touchend', function() {
    $(this).click();
});




$('.field input, .field textarea').blur(function () {
    if ($(this).val() != '') {
      $(this).closest('.field').find('fieldset').addClass('active');
    } else {

      $(this).closest('.field').find('fieldset').removeClass('active');
    }

  });

  $('.field input, .field textarea').focusin(function () {
    $(this).closest('.field').find('fieldset').addClass('active');

  });





}); //---Main Function Close