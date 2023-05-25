document.querySelector( '.ms-auto' ).addEventListener( 'click', showMessage );

  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".navbar").addClass("sticky-nav");
        } else {
            $(".navbar").removeClass("sticky-nav");
        }
    });

    // BACKSTRETCH SLIDESHOW
    $('#section_1').backstretch([
      "images/slide/slide1.jpg", 
      "images/slide/slide4.jpg",
      "images/slide/slide2.jpg",
      "images/slide/slide6.jpg",
    ],  {duration: 2000, fade: 750});
    
})(window.jQuery);





