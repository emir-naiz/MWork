$('.header__burger').on('click', function () {
  $('.header__burger').toggleClass('header__burger_active');
  $('.nav').toggleClass('nav_active')
  $('.nav-btns').toggleClass('nav-btns_active')
});

$('.nav__link').on('click', function () {
  $('.header__burger').click()
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $('.up-arrow').fadeIn();
  } else {
    $('.up-arrow').fadeOut();
  }
});