$(function () {

  $('.slider-top__inner').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>',

    // autoplay: true,
    // autoplaySpead: 2000 отключила чтобы не мешало

  });

  var mixer = mixitup('.product__items');

});