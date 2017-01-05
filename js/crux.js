(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
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
            top: 50
        }
    })

})(jQuery); // End of use strict
$(document).ready( function() {
    $("#gameButton").on("click", function() {
        //alert("hello");
        var gameDiv = document.getElementById("crux-popup-game");
        if(gameDiv.style.display == "none") {
            gameDiv.style.display = "block";
        } else {
            gameDiv.style.display = "none";
        }
    });
    $("#pc-close-div").on("click", function () {
        var gameDiv = document.getElementById("crux-popup-game");
        if(gameDiv.style.display == "none") {
            gameDiv.style.display = "block";
        } else {
            gameDiv.style.display = "none";
        }
    });
});
