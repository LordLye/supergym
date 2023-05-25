/* global Swiper */
const trainersSliderElement = document.querySelector('.trainers__slider');

function addTabindex() {
  const originalSlides = document.querySelectorAll('.trainers__item:not(.swiper-slide-duplicate)');
  for (let i = 0; i < originalSlides.length; i++) {
    originalSlides[i].querySelector('.trainers-card').setAttribute('tabindex', '0');
  }
}

const initSliders = () => {
  if (trainersSliderElement) {
    const trainersSlider = new Swiper('.trainers__slider', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
      initialSlide: 2,
      centeredSlides: true,
      autoResize: false,
      loopedSlides: 0,
      maxBackfaceHiddenSlides: 0,
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
          addTabindex();
          document.addEventListener('keydown', (evt) => {

            if (evt.shiftKey && evt.key === 'Tab') {
              const active = document.activeElement;
              if (active.parentElement.classList.contains('swiper-slide-active')) {
                const parentSlideIndex = active.parentElement.dataset.swiperSlideIndex;
                if (parentSlideIndex > 0) {
                  trainersSlider.slidePrev(100, true);
                }
              }
            } else if (!evt.shiftKey && evt.key === 'Tab') {
              const active = document.activeElement;
              if (active.parentElement.classList.contains('swiper-slide-next')) {
                trainersSlider.slideNext(100, true);
              }
            }
          });
        },
      },
      // Navigation arrows
      navigation: {
        nextEl: '.trainers__slider-button--next',
        prevEl: '.trainers__slider-button--prev',
      },
    });
  }

  if (document.querySelector('.reviews__slider')) {
    const reviewsSlider = new Swiper('.reviews__slider', {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 60,
      autoHeight: true,

      navigation: {
        nextEl: '.reviews__button--next',
        prevEl: '.reviews__button--prev',
      },
    });

    reviewsSlider.loop = false;
  }

  const notificationSpans = document.querySelectorAll('.swiper-notification');

  if (notificationSpans && notificationSpans.length) {
    notificationSpans.forEach((span) => {
      span.remove();
    });
  }
};

export {initSliders};
