'use strict';

/* ScrollToTop */
$(function () {

  $(window).scroll(function () {
    // если пользователь прокрутил страницу более чем на 300px
    if ($(this).scrollTop() > 300) {
      // то сделать кнопку видимой
      $('.scrollToTop').fadeIn();
    }
    // иначе скрыть кнопку scrollToTop
    else {
      $('.scrollToTop').fadeOut();
    }
  });

  $(function () {
    // при нажатии на кнопку
    $('.scrollToTop').click(function () {
      // переместиться в верхнюю часть страницы
      $("html, body").animate({
        scrollTop: 0
      }, 800);
      return false;
    })
  })

  /* Slider */
  $(document).ready(function () {
    $('.main-news-profile-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      prevArrow: '.prev',
      nextArrow: '.next',

      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            centerMode: true
          }
        }

      ]
    });


    $('.review-images').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 6000,
      cssEase: 'ease-out',
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,

          }
        },
        {
          breakpoint: 440,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

    $('.main-news-info-slider').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,

    });



    /* this parralax don't work in IE */
    /* 
      $(window).scroll(function () {
        let paral = $(document.querySelector('#parallax')).offset();
        let wScroll = $(this).scrollTop();
    
        $('.parallax-scroll').css({
          'transform': 'translate(0, ' + (wScroll - paral.top) / 10 + '%)'
        });
    
      }); */

  });

  /* Menu-active onclick*/

  document.querySelector('#toggle').onclick = function (event) {
    event.target.closest('.header-top-menu').classList.toggle('menu-active');
  };

  /* MIXup*/

  var mixer = mixitup('.works-galery', {
    "animation": {
      "duration": 800,
      "nudge": false,
      "reverseOut": false,
      "effects": "fade stagger(100ms)"
    }
  });


  /* Scroll */

  $("#js-nav a").on("click", function (e) {

    e.preventDefault();

    var currentBlock = $(this).attr("href"),
      currentBlockOffset = $(currentBlock).offset().top;

    $("html, body").animate({
      scrollTop: currentBlockOffset
    }, 800);

  });

  $(".button").on("click", function (e) {

    e.preventDefault();

    var currentBlock = $(this).attr("href"),
      currentBlockOffset = $(currentBlock).offset().top;

    $("html, body").animate({
      scrollTop: currentBlockOffset - 20
    }, 800);

  });

});

