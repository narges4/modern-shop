new Swiper(".swiperMagazine", {
    // loop: true,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    slidesPerView: 7,
    speed: 2000,
    paginationClickable: true,
    // autoplay: {
    //   delay: 5000,
    // },
    centeredSlidesBounds: true,
    spaceBetween: 10,
    breakpoints: {
        1920: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
        1270: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        991: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
  });