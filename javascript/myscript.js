jQuery.noConflict();
jQuery(document).ready(function ($) {
    "use strict";
// Smooth Scroll on clicking nav items
    $('nav .navbar-right a').click(function () {
        var $href = $(this).attr('href');
        $('body').stop().animate({
            scrollTop: $($href).offset().top
        }, 1000);
        return false;
    });

// Parallaxing + add class active on scroll
    $(document).scroll(function () {

        // parallaxing
        var $movebg = $(window).scrollTop() * -0.3;
        $('.page').css('background-positionY', ($movebg) + 'px');

        // add class active to nav a on scroll
        var scrollPos = $(document).scrollTop() + 100;
        $('nav .navbar-right a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('nav .navbar-collapse a').removeClass("active");
                currLink.addClass("active");
            }
        });

        // changing padding of nav a on scroll
        if (scrollPos > 250) {
            $('nav .navbar-collapse a').addClass('small');
            $('nav .navbar-header img').addClass('move');
            $('nav .navbar-header span').removeClass('movetext');
        } else {
            $('nav .navbar-collapse a').removeClass('small');
            $('nav .navbar-header img').removeClass('move');
            $('nav .navbar-header span').addClass('movetext');
        }

    });
    //Activate ScrollSpy
//    $('body').scrollspy({
//        target: 'header .navbar'
//    });
//
//    $('.carousel').carousel({
//        interval: false
//    });
})
