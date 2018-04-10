$(".matilau-cabecera").append(
    "<header class='header_area clearfix'><div class='container-fluid h-100'><div class='row h-100'><div class='col-12 h-100'><div class='menu_area h-100'><nav class='navbar h-100 navbar-expand-lg align-items-center'>"+
                                "<!-- Logo --> <a class='navbar-brand' href='index.html'><img src='img/Logo.png' alt='logo'></a>"+
                                "<!-- Menu Area --> <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#matilau-navbar' aria-controls='matilau-navbar' aria-expanded='false' aria-label='Toggle navigation'><span class='navbar-toggler-icon'></span></button> <div class='collapse navbar-collapse justify-content-end' id='matilau-navbar'>"+
                                    
                                
                                    "<ul class='navbar-nav animated' id='nav'>"+
                                        "<li class='nav-item active'><a class='nav-link' href='index.html'>Inicio</a></li>"+
                                        "<li class='nav-item dropdown'>"+
                                            "<a class='nav-link dropdown-toggle' href='#' id='matilauDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Lore</a>"+
                                            "<div class='dropdown-menu matilauDropdown'>"+
                                                "<a class='dropdown-item' href='prologo.html'>Prólogo</a>"+
                                                "<div class='dropdown-divider'></div>"+
                                                "<a class='dropdown-item' href='#'>Los Entes</a>"+
                                                "<a class='dropdown-item' href='#'>Los Vivos</a>"+
                                                "<a class='dropdown-item' href='#'>História</a>"+
                                            "</div>"+
                                        "</li>"+
                                        "<li class='nav-item'><a class='nav-link' href='#'>Nosotros</a></li>"+
                                        "<li class='nav-item'><a class='nav-link' href='#'>Galeria de Imágenes</a></li>"+
                                        "<li class='nav-item'><a class='nav-link' href='#'>Contacto</a></li>"+

                                        
    "</ul></div></nav></div></div></div></div></header>"
);

$(".matilau-pie").append(
    "<footer class='footer-area clearfix'><div class='footer-bottom-area'><div class='container h-100'><div class='row h-100'><div class='col-12 h-100'><div class='footer-bottom-content h-100 d-md-flex justify-content-between align-items-center'>" +
                                    "<div class='copyright-text'><p>Copyright &copy; 2018 All rights reserved | This page is made by <a href='http://lmgtfy.com/?q=porno%20gay%20entre%20viejos' target='_blank'>Tu puta madre en una bicicleta sin asiento.</a></p></div>"+
                                    "<div class='footer-social-info'>"+
                                        "<a href='#'><i class='fa fa-pinterest' aria-hidden='true'></i></a>"+
                                        "<a href='#'><i class='fa fa-facebook' aria-hidden='true'></i></a>"+
                                        "<a href='#'><i class='fa fa-twitter' aria-hidden='true'></i></a>"+
                                        "<a href='#'><i class='fa fa-dribbble' aria-hidden='true'></i></a>"+
                                        "<a href='#'><i class='fa fa-behance' aria-hidden='true'></i></a>"+
                                        "<a href='#'><i class='fa fa-linkedin' aria-hidden='true'></i></a>"+
    "</div></div></div></div></div></div></footer>"
);



(function ($) {
    'use strict';

    if ($.fn.owlCarousel) {
        $(".hero-slides").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 800,
            margin: 0,
            dots: false,
            nav: true,
            navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>']
        });
    }

    if ($.fn.owlCarousel) {
        $(".matilau-service-slides").owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            smartSpeed: 800,
            margin: 30,
            center: true,
            dots: false,
            nav: true,
            startPosition: 1,
            navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        });
    }

    if ($.fn.owlCarousel) {
        $(".matilau-workflow-slides").owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            smartSpeed: 800,
            margin: 30,
            center: true,
            dots: true,
            startPosition: 1,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        });
    }

    if ($.fn.owlCarousel) {
        $(".matilau-team-slides").owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            smartSpeed: 800,
            margin: 50,
            center: true,
            nav: true,
            navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        });
    }

    if ($.fn.owlCarousel) {
        $(".testimonials-slides").owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            smartSpeed: 1500,
            margin: 0,
            center: true,
            nav: true,
            navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        });
    }

    $("#search-btn").on('click', function () {
        $("body").toggleClass("search-form-open");
        $(".search-form-area").toggleClass("fadeIn");
    });

    if ($.fn.barfiller) {
        $('#bar1').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#4a7aec',
            animateOnResize: true
        });
        $('#bar2').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#4a7aec',
            animateOnResize: true
        });
        $('#bar3').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#4a7aec',
            animateOnResize: true
        });
        $('#bar4').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#4a7aec',
            animateOnResize: true
        });
    }

    if ($.fn.imagesLoaded) {
        $('.matilau-portfolio').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'p', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.matilau-portfolio').isotope({
                itemSelector: '.single_gallery_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item'
                }
            });
        });
    }

    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 1500,
            scrollText: '<i class="fa fa-angle-up"></i>'
        });
    }

    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    $('a[href="#"]').click(function ($) {
        $.preventDefault()
    });

    var $window = $(window);

    if ($window.width() > 767) {
        new WOW().init();
    }

    $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
            $('.header_area').addClass('sticky');
        } else {
            $('.header_area').removeClass('sticky');
        }
    });

    $window.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);