$(window).on("scroll", function() {
    if($(window).scrollTop()) {
         $('nav').addClass('bicolor');
    }

    else {
          $('nav').removeClass('bicolor');
    }
})
