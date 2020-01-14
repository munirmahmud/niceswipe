(function($) {
    "use strict";
    

    /*--------------------------
    Background Image
    ---------------------------*/
    $("[data-bg]").each( function(){
		$(this).css("background-image", "url(" + $(this).attr('data-bg') +")")
	});
    
    /*--------------------------
    Newsletter Popup
    ---------------------------*/
    setTimeout(function () {
        $('.popup_wrapper').css({
            "opacity": "1",
            "visibility": "visible"
        });
        $('.popup_close').on('click', function () {
            $(".popup_wrapper").fadeOut(500);
        })
    }, 1000);
    

    /*--------------------------
    jQuery MeanMenu
    ---------------------------*/
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu-area .mobile-menu",
    });
    
    
    /*--------------------------
    sidebarCart
    ---------------------------*/
    function sidebarCart() {
        let menuTrigger = $('button.sidebar-trigger'),
            endTrigger = $('button.op-sidebar-close'),
            container = $('.sidebar-cart'),
            wrapper = $('.wrapper');
        
        wrapper.prepend('<div class="body-overlay"></div>');
        menuTrigger.on('click', function() {
            container.addClass('inside');
            wrapper.addClass('overlay-active');
        });
        
        endTrigger.on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });
        
        $('.body-overlay').on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });
    };
    sidebarCart();
    
    
    /*--------------------------
    sidebarSearch 
    ---------------------------*/
    function sidebarSearch() {
        let searchTrigger = $('button.sidebar-trigger-search'),
            endTriggersearch = $('button.search-close'),
            container = $('.main-search-active');
        
        searchTrigger.on('click', function() {
            container.addClass('inside');
        });
        
        endTriggersearch.on('click', function() {
            container.removeClass('inside');
        });
        
    };
    sidebarSearch();
    
    
    /*--------------------------
    sidebarCart
    ---------------------------*/
    function sidebarNav() {
        let navbarTrigger = $('button.header-navbar-active'),
            endTrigger = $('button.op-sidebar-close'),
            container = $('.currency-sidebar-wrapper'),
            wrapper = $('.wrapper');
        
        wrapper.prepend('<div class="body-overlay"></div>');
        
        navbarTrigger.on('click', function() {
            container.addClass('inside');
            wrapper.addClass('overlay-active');
        });
        
        endTrigger.on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });
        
        $('.body-overlay').on('click', function() {
            container.removeClass('inside');
            wrapper.removeClass('overlay-active');
        });
    };
    sidebarNav();
    
    /*--------------------------
    Slider
    ---------------------------*/
    $('.slider-active').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    
    /*--------------------------
    Testimonial
    ---------------------------*/
    $('.testimonial-active').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: false,
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    /*--------------------------
    Brand Logo Carousel
    ---------------------------*/
    $('.brand-logo-active').owlCarousel({
        loop: true,
        nav: false,
        item: 5,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            1000: {
                items: 4
            },
            1200: {
                items: 4
            },
            1300: {
                items: 5
            }
        }
    })
    
    /*--------------------------
    Product Carousel
    ---------------------------*/
    $('.product-slider-active').owlCarousel({
        loop: true,
        nav: false,
        item: 4,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    
    
    /*----------------------------
    	Cart Plus Minus Button
    ------------------------------ */
    $(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
    $(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function() {
        let $button = $(this);
        let oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            let newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                let newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });
    
    
    /*----------------------------------
    Smooth Scroll
    -----------------------------------*/
    $('.scroll-top').on('click', function(e) {
        e.preventDefault();
        let link = this;
        $.smoothScroll({
            offset: -80,
            scrollTarget: link.hash
        });
    });
    
    /*--------------------------
    MagnificPopup Video 
    ---------------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });
    
    /*---------------------
    Price Slider
    --------------------- */
    let sliderrange = $('#slider-range');
    let amountprice = $('#amount');
    $(function() {
        sliderrange.slider({
            range: true,
            min: 20,
            max: 100,
            values: [0, 100],
            slide: function(event, ui) {
                amountprice.val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        amountprice.val("$" + sliderrange.slider("values", 0) +
            " - $" + sliderrange.slider("values", 1));
    });
    
    /*---------------------
        filter active
    --------------------- */
    function singleProductFilter() {
        let trigger = $('.shop-filter-active'),
            container = $('.shop-filters-left'),
            container2 = $('.shop-filters-right');
        trigger.on('click', function(e) {
            e.preventDefault();
            container.toggleClass('is-visible');
            container2.toggleClass('is-visible');
        })
    }
    singleProductFilter();
    
    
    /*--- showlogin toggle function ----*/
    $('#showlogin').on('click', function() {
        $('#checkout-login').slideToggle(900);
    });
    
    
    /*--- showlogin toggle function ----*/
    $('#showcoupon').on('click', function() {
        $('#checkout_coupon').slideToggle(900);
    });
    
    
    /*--- showlogin toggle function ----*/
    $('#ship-box').on('click', function() {
        $('#ship-box-info').slideToggle(1000);
    });
    
    
    /*--- clickable menu active ----*/
    const slinky = $('#menu').slinky()
    
    
    /*----------------------------
        Sidebar Cart    
    ------------------------------*/
    function sidebarMainmenu() {
        let menuTrigger = $('.clickable-mainmenu-active'),
            endTrigger = $('button.clickable-mainmenu-close'),
            container = $('.clickable-mainmenu');
        
        menuTrigger.on('click', function(e) {
            e.preventDefault();
            container.addClass('inside');
        });
        
        endTrigger.on('click', function() {
            container.removeClass('inside');
        });
    };
    sidebarMainmenu();    
    
    /*--------------------------
     ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="ion-arrow-up-c"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

})(jQuery);