(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 70)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 70
        }
    });

    $(window).on('scroll', function() {
      $("#projects .row .card-s").each(function() {
        if (isScrolledIntoView($(this))) {
          $(this).addClass("card-description-reveal");
        } else {
          $(this).removeClass("card-description-reveal");
        }
      });
    });

    function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var docMidpoint = (docViewBottom + docViewTop) / 2;

      var newTop = docMidpoint - $(elem).height();
      var newBottom = docMidpoint + $(elem).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
      
      return ((elemBottom <= newBottom) && (elemTop >= newTop));
    }

})(jQuery);
