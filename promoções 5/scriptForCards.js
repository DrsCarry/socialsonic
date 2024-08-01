var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: false,  // Mudar para false para não permitir looping
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
  on: {
      slideChange: function () {
          if (this.activeIndex >= 5) {  // Índice 5 representa o sexto slide
              this.allowSlideNext = false;  // Desativa o botão "próximo"
          } else {
              this.allowSlideNext = true;  // Ativa o botão "próximo"
          }
          if (this.activeIndex === 0) {  // Índice 0 representa o primeiro slide
              this.allowSlidePrev = false;  // Desativa o botão "anterior"
          } else {
              this.allowSlidePrev = true;  // Ativa o botão "anterior"
          }
      },
  },
});
