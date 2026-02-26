$(document).ready(function () {
    var swiper = new Swiper(".card-slider__swiper", {
      slidesPerView: 4,
      spaceBetween: 4,
      loop:true,
      simulateTouch:false,
      navigation: {
        nextEl: ".music-prev-button",
        prevEl: ".music-next-button",
      },
    });
}); 