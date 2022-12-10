var swiper = new Swiper('.task-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.task-slider__pagination',
        clickable: true,
      }
    });