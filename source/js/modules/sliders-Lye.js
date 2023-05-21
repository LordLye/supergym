/* const swiper = new Swiper('.staff__slider', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
}); */


const staffSlider = new Swiper('.staff__slider', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 0,
  initialSlide: 4,
  centeredSlides: true,



  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  breakpoints: {
    768: {
      spaceBetween: 30,
      centeredSlides: false,
    },

    1200: {
      spaceBetween: 40,
      initialSlide: 0,
      centeredSlides: false,
    },
  },

  on: {
    init: () => {

      document.addEventListener('keydown', (evt) => {

        if (evt.shiftKey && evt.key === 'Tab') {
          const active = document.activeElement;
          if (active.parentElement.classList.contains('swiper-slide-active')) {
            const parentSlideIndex = active.parentElement.dataset.swiperSlideIndex;
            if (parentSlideIndex > 0) {
              staffSlider.slidePrev(100, true);
            }
          }
        } else if (!evt.shiftKey && evt.key === 'Tab') {
          const active = document.activeElement;
          if (active.parentElement.classList.contains('swiper-slide-next')) {
            staffSlider.slideNext(100, true);
          }
        }
      });
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.staff__slider-button--next',
    prevEl: '.staff__slider-button--prev',
  },
});


