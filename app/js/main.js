$(function () {

  // для категорий чтобы скрыть 
  $('.filter-item__btn').on('click', function () {
    $('.filter-categories__list').slideToggle();
    // пыталась сделать чтобы стрелка при открытии поворачивалась но не работает
    //  $('.filter-item__btn').on('click', function () {
    //    $(this).toggleClass('transform');
    //  });
  });

  $('.filter-item__btn--click1').on('click', function () {
    $('.filter__bottom-app').slideToggle();
  });

  $('.filter-item__btn--click2').on('click', function () {
    $('.filter__bottom-brand').slideToggle();
  });

  $('.filter-item__btn--click3').on('click', function () {
    $('.filter-price__form').slideToggle();
  });



  // кнопки переключения вида страниц каталога товаров
  $('.catalog-page__filter-btn').on('click', function () {
    $('.catalog-page__filter-btn').removeClass('catalog-page__filter-btn--active');
    $(this).addClass('catalog-page__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.catalog-page__content-inner').addClass('catalog-page__content-inner--list');
  });

  $('.button-grid').on('click', function () {
    $('.catalog-page__content-inner').removeClass('catalog-page__content-inner--list');
  });


  // стиль фильтра поиска 
  $('.select-style').styler();



  // для цены ползунок
  $('.filter-price__input').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },

    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });


  //  для бургера 
  $('.menu__btn, .menu a').on('click', function () {
    $('.menu__btn, .mob-menu').toggleClass('active');
    $('body').toggleClass('overlay');
  });

  $('.mob-menu__btn').on('click', function () {
    $('.mob-menu').removeClass('active');
    $('body').removeClass('overlay');
  });


  // для фильтров 
  $('.catalog-page__button-filters').on('click', function () {
    $('.catalog-page__button-filters, .catalog-page__filter').toggleClass('active');
    $('body').toggleClass('overlay');
  });

   $('.catalog-page__btn').on('click', function () {
     $('.catalog-page__filter').removeClass('active');
     $('body').toggleClass('overlay');
   });



  // для поиска. КАК СДЕЛАТЬ ЧТОБЫ поиск плавно выдвигался?
  $('.header-bottom__user-item--search').on('click', function () {
    $('.header-bottom__user-item--search, .header-bottom__search').toggleClass('active');
  });



  // слайдер
  $('.slider-top__inner').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width = "60" height = "60" rx = "6" fill = "white" fill - opacity = "0.8"/><path d = "M21.0382 31.0149L37.0515 45.6079C37.577 46.1307 38.4292 46.1307 38.9546 45.6079C39.4801 45.0851 39.4801 44.2369 38.9546 43.7141L23.9069 30L38.9533 16.2859C39.4788 15.7631 39.4788 14.9148 38.9533 14.3921C38.4278 13.8693 37.5756 13.8693 37.0502 14.3921L21.0369 28.9851C20.7568 29.2638 20.6367 29.6332 20.6554 29.9986C20.638 30.3654 20.7581 30.7348 21.0382 31.0149Z"fill = "#505050"/></svg></button> ',

    nextArrow: '<button type="button" class="slick-next"><svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width = "60" height = "60" rx = "6" fill = "white" fill - opacity = "0.8"/><path d = "M38.9641 28.9851L22.9508 14.3921C22.4254 13.8693 21.5731 13.8693 21.0477 14.3921C20.5222 14.9149 20.5222 15.7631 21.0477 16.2859L36.0954 30L21.049 43.7141C20.5235 44.2369 20.5235 45.0852 21.049 45.6079C21.5745 46.1307 22.4267 46.1307 22.9521 45.6079L38.9654 31.0149C39.2455 30.7362 39.3656 30.3668 39.3469 30.0014C39.3643 29.6346 39.2443 29.2652 38.9641 28.9851Z" fill = "#505050"/></svg></button>',

    responsive: [{
      breakpoint: 1200,
      settings: {
        infinite: false,
        dots: true,
        prevArrow: false,
        nextArrow: false
      }
    }, ]

  });

  // слайдер
  $('.partners__list').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    // autoplay: true,
    // autoplaySpead: 2000,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 992,
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
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });



  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});