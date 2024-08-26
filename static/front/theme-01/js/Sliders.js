//Swiper
new Swiper(".swiperSocialMedia", {
    // loop: true,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    slidesPerView: 5.5,
    speed: 4000,
    paginationClickable: true,
    // autoplay: {
    //   delay: 5000,
    // },
    centeredSlidesBounds: true,
    spaceBetween: 50,
    // breakpoints: {
    //     1920: {
    //         slidesPerView: 5,
    //         spaceBetween: 30
    //     },
    //     1028: {
    //         slidesPerView: 3,
    //         spaceBetween: 30
    //     },
    //     480: {
    //         slidesPerView: 2,
    //         spaceBetween: 10
    //     }
    // }
  });
  
  new Swiper(".swiperFaq", {
    slidesPerView: 1,
    pagination: ".swiper-pagination",
    paginationClickable: true,
    parallax: true,
    speed: 5000,
    paginationClickable: true,
    autoplay: {
      delay: 5000,
    },
    centeredSlidesBounds: true,
  });
  
  new Swiper(".swiperLicense", {
    // loop: true,
    nextButton: ".buttonNexColleagues",
    prevButton: ".buttonPrevColleagues",
    slidesPerView: 3,
    speed: 2000,
    paginationClickable: true,
    // autoplay: {
    //   delay: 5000,
    // },
    centeredSlidesBounds: true,
    spaceBetween: 10,
    breakpoints: {
      1920: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1028: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
  
  new Swiper(".swiperMellimag", {
    // loop: true,
    nextButton: ".buttonNextMelliMag",
    prevButton: ".buttonPrevMelliMag",
    slidesPerView: 4,
    speed: 5000,
    paginationClickable: true,
    // autoplay: {
    //   delay: 5000,
    // },
    centeredSlidesBounds: true,
    spaceBetween: 10,
    breakpoints: {
      1920: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1600: {
        slidesPerView: 3,
        spaceBetween: 10,
        autoplay: {
          delay: 4000,
        },
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 10,
        autoplay: {
          delay: 4000,
        },
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
        autoplay: {
          delay: 4000,
        },
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
        autoplay: {
          delay: 4000,
        },
        loop: true,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
          delay: 4000,
        },
        loop: true,
      },
    },
  });
  
  new Swiper(".swiperPossibilities", {
    // loop: true,
    nextButton: ".buttonNextPossibilities",
    prevButton: ".buttonPrevPossibilities",
    slidesPerView: 3,
    speed: 5000,
    paginationClickable: true,
    autoplay: {
      delay: 5000,
    },
    centeredSlidesBounds: true,
    spaceBetween: 10,
    breakpoints: {
      1920: {
        slidesPerView: 3,
        spaceBetween: 30,
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
        slidesPerView: 2,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
  
  new Swiper(".swiperUserOpinion", {
    // loop: true,
    nextButton: ".buttonNextUserOpinion",
    prevButton: ".buttonPrevUserOpinion",
    slidesPerView: 3,
    speed: 5000,
    paginationClickable: true,
    // autoplay: {
    //   delay: 5000,
    // },
    centeredSlidesBounds: true,
    spaceBetween: 10,
    breakpoints: {
      1920: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
        autoplay: {
          delay: 3000,
        },
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 10,
        autoplay: {
          delay: 3000,
        },
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
        autoplay: {
          delay: 3000,
        },
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
          delay: 3000,
        },
        loop: true,
      },
    },
  });
  
  $(function () {
    if ($("#MagazineSlider .swiper-slide").length < 6) {
      $("#MagazineSlider").addClass("justify-center");
    } else {
      $("#MagazineSlider").removeClass("justify-center");
    }
  });