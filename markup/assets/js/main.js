import svg4everybody from 'svg4everybody';
// import $ from 'jquery';
// import UIkit from 'uikit';
// import Icons from 'uikit/dist/js/uikit-icons';

// import 'ion-rangeslider';
// import Dropzone from 'dropzone';
// import 'magnific-popup';
// import slick from 'slick-carousel';
// import "jquery-mask-plugin";
// import bound from 'bounds.js';



(function ($) {

  svg4everybody();

  let styles = [
    'padding: 2px 9px',
    'background: #82B93C',
    'color: #fff',
    'display: inline-block',
    'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2)',
    'box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.2) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset',
    'line-height: 1.56',
    'text-align: left',
    'font-size: 14px',
    'font-weight: 400'
  ].join(';');

  console.log('%c developed by igor gorlov gorlov https://webjeb.ru', styles);

  // Lazyload images

  let lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
    load_delay: 50,
    use_native: true
  });


  if (lazyLoadInstance) {
    lazyLoadInstance.update();
  }
  
  $(function() {

    // Header


    const $header = $('.header');

    console.log($header.scrollTop());
    $header.scrollTop();


    $(window).on('scroll', function () {
        if( $(window).scrollTop() >= $header.outerHeight() ) {
            $header.addClass('header_fixed');
        } else {
            $header.removeClass('header_fixed');

        }
    });


    if( $(window).scrollTop() >= $header.outerHeight() ) {
        $header.addClass('header_fixed');
    } else {
        $header.removeClass('header_fixed');

    }


    // Nav

    const $navButton = $('.nav__button');

    $navButton.on('click', function (e) {
        e.preventDefault();

        $(this).parent().toggleClass('nav_open');
    });


    $(document).on('click', function(e) {
      if (!$(e.target).closest('.header__nav.nav_open').length) {
          $('.header__nav.nav').removeClass('nav_open');
      }
    });



    // Nav to section

    $('.header__nav a').on( 'click', function(e) {
      e.preventDefault();
      let _scroll = $(this).attr('href');
      if (_scroll != '#' && $(_scroll).length) {
        $('html, body').animate({ scrollTop: $(_scroll).offset().top - 150  }, 300);
      }
    });




    // Hero slider

    const $heroSlider = $('.hero__slider');

    if ($heroSlider.length) {

        let currentSlide;
        let slidesCount = 0;
        let sliderCounter = $('.hero__count');
        let updateSliderCounter = function(slick, currentIndex) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;
            sliderCounter.html('<span class="hero__count-current">' + '0' + currentSlide + '</span>' + '<span class="hero__count-sep">' +  '/' + '</span>' + '<span class="hero__count-all">' + '0' + slidesCount + '</span>');
        };

        $heroSlider.on('init', function(event, slick) {
            $('.hero__nav').append(sliderCounter);
            updateSliderCounter(slick);
        });

        $heroSlider.on('afterChange', function(event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
        });

        $heroSlider.slick({
            slidesToShow: 1,
            dots: false,
            arrows: true,
            speed: 300,
            // infinite: false,
            fade: true,
            waitForAnimate: false,
            adaptiveHeight: true,
            appendArrows: '.hero__nav-buttons',
            prevArrow: '.hero__arrow_prev',
            nextArrow: '.hero__arrow_next',
        });

    }



    // Events slider


    const $eventsSlider = $('.events__slider');

    if ($eventsSlider.length) {

        $eventsSlider.slick({
            mobileFirst: true,
            slidesToShow: 1,
            dots: false,
            arrows: true,
            speed: 300,
            // infinite: false,
            // centerMode: true,
            // centerPadding: '0px',
            waitForAnimate: false,
            adaptiveHeight: true,
            appendArrows: '.events__buttons',
            prevArrow: '.events__arrow_prev',
            nextArrow: '.events__arrow_next',
            responsive: [
                {
                  breakpoint: 577,
                  settings: {
                    slidesToShow: 1,
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 1,
                  }
            }]
        });

    }





    // Know slider


    const $knowSlider = $('.know__slider');

    if ($knowSlider.length) {

        $knowSlider.slick({
            slidesToShow: 1,
            dots: false,
            arrows: true,
            speed: 300,
            fade: true,
            // infinite: false,
            // centerMode: true,
            // centerPadding: '0px',
            waitForAnimate: false,
            adaptiveHeight: true,
            appendArrows: '.know__buttons',
            prevArrow: '.know__arrow_prev',
            nextArrow: '.know__arrow_next',
        });

    }


    // Gallery slider


    const $gallerySlider = $('.gallery__slider');

    if ($gallerySlider.length) {

        $gallerySlider.slick({
            mobileFirst: true,
            dots: false,
            arrows: true,
            speed: 300,
            initialSlide: 2,
            infinite: true,
            // centerMode: true,
            // centerPadding: '0',
            // lazyLoad: 'ondemand',
            slidesToShow: 1,
            slidesToScroll: 1,
            focusOnSelect: true,
            // cssEase: 'linear',
            // touchMove: true,
            waitForAnimate: false,
            // variableWidth: true,

            adaptiveHeight: true,
            appendArrows: '.gallery__buttons',
            prevArrow: '.gallery__arrow_prev',
            nextArrow: '.gallery__arrow_next',
            responsive: [
                {
                  breakpoint: 577,
                  settings: {
                    slidesToShow: 2,
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3.1,
                  }
            }]
        });

    }

   

    // Tabs

    $('.tabs__nav li').click(function(e) {
        var a = $(this),
        parent = a.parents('.tabs'),
        nav = parent.children('.tabs__nav').children('li'),
        box = parent.children('.tabs__content').children('div');

        if (!a.hasClass('active')) {
            a.addClass('active')
                .siblings().removeClass('active');

            box.eq(a.index()).addClass('active')
                .siblings().removeClass('active');
        }

        e.preventDefault();

        // $('.form__select').selectize.destroy().selectize();
    });



    // Phone Mask

    $('.form__field_phone input').mask("+7(999)999-99-99", {
      placeholder: "номер телефона"
    });


    // Popup

    $('.popup-open').magnificPopup({
      type: 'inline',
      midClick: true
    });


     
    // Gallery
    

    $('.gallery__link').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
   

  });

})(jQuery);
