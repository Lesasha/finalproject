$(window).on("scroll", function() {
    if($(window).scrollTop()) {
         $('nav').addClass('bgcolor');
    }
    else {
          $('nav').removeClass('bgcolor');
    }
})