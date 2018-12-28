/*
 Template Name: Introz
 Template URI: http://jrbthemes.com
 Author: JRBthemes
 Author URI: http://jrbthemes.com
 -------------------------
 1. Main Menu
 2. Back to top
 3. Header Sticky
 4. Testimonial
 5. Home Slider
 6. Page loader
 -------------------------
 */
(function ($) {
    "use strict";
    /*  [ Main Menu ]
     - - - - - - - - - - - - - - - - - - - - */
    var mainMenu = function () {
        $('.sub-menu').each(function () {
            $(this).parents('li').addClass('has-child').find('> a').append('<span class="arrow"></span>');
        });
        if ($('#menu-wrapper').length) {
            $('#menu-wrapper .nav li.has-child').append(function () {
                return '<i class="fa fa-caret-down icon" aria-hidden="true"></i>';
            });
            $('#menu-wrapper .nav li.has-child .icon').on('click', function () {
                $(this).parent('li').children('ul').slideToggle();
            });
        }
    };

    /*  [ Back to top ]
     - - - - - - - - - - - - - - - - - - - - */
    var backToTop = function () {
        if ($('.introz-scroll-top').length) {
            var scrollTrigger = 500, // px
                    backTop = function () {
                        var scrollTop = $(window).scrollTop();
                        if (scrollTop > scrollTrigger) {
                            $('.introz-scroll-top').addClass('show-icon-top');
                        } else {
                            $('.introz-scroll-top').removeClass('show-icon-top');
                        }
                    };
            backTop();
            $(window).on('scroll', function () {
                backTop();
            });
            $('.introz-scroll-top').on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }
    };

    /*  [ Header Sticky ]
     - - - - - - - - - - - - - - - - - - - - */
    var headerSticky = function () {
        if ($(window).width() > 991) {
            if ($(window).scrollTop() > 0) {
                $('body').addClass('sticky-bg');
            } else {
                $('body').removeClass('sticky-bg');
            }
        }
    };

    /*  [ Testimonial ]
     - - - - - - - - - - - - - - - - - - - - */
    var testimonial = function () {
        $(".client-slider").owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplaySpeed: 1000,
            navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });
    };

    /*  [ Home Slider ]
     - - - - - - - - - - - - - - - - - - - - */
    var slider = function () {
        if ($('#slider').length) {
            $("#slider").revolution({
                sliderType: "standard",
                sliderLayout: "auto",
                delay: 6000,
                navigation: {
                    onHoverStop: "on",
                    bullets: {
                        enable: false,
                        hide_onmobile: true,
                        hide_under: 975,
                        style: "hermes",
                        hide_onleave: false,
                        direction: "horizontal",
                        container: "layergrid",
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 20,
                        space: 7,
                        tmp: ''
                    }
                },
                responsiveLevels: [1920, 1203, 975, 751, 480],
                gridwidth: [1200, 980],
                gridheight: [851, 751, 651, 551, 451],
                minHeight: 260
            });
        }
    };
    /*  [ Page loader ]
     - - - - - - - - - - - - - - - - - - - - */
    var pageLoader = function () {
        $('body').addClass('loaded');
        setTimeout(function () {
            $('#spinner-wrapper').fadeOut();
        }, 5);
    };

    jQuery(document).ready(function ($) {
        mainMenu();
        backToTop();
        slider();
        testimonial();
        headerSticky();
    });

    jQuery(window).on('load', function () {
        pageLoader();
    });

    jQuery(window).resize(function () {
        headerSticky();
    });

    jQuery(window).on('scroll', function () {
        headerSticky();
    });

})(jQuery);