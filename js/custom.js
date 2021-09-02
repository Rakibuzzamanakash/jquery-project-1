$(document).ready(function () {

  //banner slider 

    $('.banner-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<i class="fas fa-chevron-left previous-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right next-arrow"></i>',
        dots:true,
      });
       //animate css

       new WOW().init();
       // parallax 
       $('.parallax-window').parallax({imageSrc: 'images/business-what-we-are.jpg'}
	  
       );
       //type js
       var typed = new Typed('.element', {
        // Waits 1000ms after typing "First"
        strings: ['Who we are'],
        typeSpeed: 90,
        showCursor: false,
        loop: true,
        loopCount: Infinity
      });

      //testimonial slider
      $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:false,
        prevArrow:false,
        nextArrow:false,
      });

      // gallery filter
     
      var mixer = mixitup('.gallery-items');

      // gallery lightbox
      $('.venobox').venobox(
        {
          spinner:'wave',
        }
      );
      // filter menu

      $('.our-work-list ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
      })
});