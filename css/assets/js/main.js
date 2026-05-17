$(document).ready(function () {
  //sticky header
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
      $(".header-top").addClass("sticky");
    } else {
      $(".header-top").removeClass("sticky");
    }
  });

  // Mobile menu toggle - with null check
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", () => {
      document.querySelectorAll(".line").forEach((line) => {
        line.classList.toggle("change");
      });
    });
  }

  // Search block - with null check
  const searchBlock = document.querySelector(".search-block");
  const searchBox = document.querySelector(".search-box");
  if (searchBlock && searchBox) {
    searchBlock.addEventListener("click", () => {
      searchBox.classList.toggle("show");
    });
  }

  //mobile menu - with null check
  const mobileMenu = document.querySelector(".mobile-menu");
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("menu-active");
    });
  }

  // Mobile menu close - with null check
  const mobileMenuClose = document.querySelector(".mobile-menu-close");
  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener("click", () => {
      mobileMenu.classList.remove("menu-active");
      document.querySelectorAll(".line").forEach((line) => {
        line.classList.remove("change");
      });
    });
  }

  // Click outside to close mobile menu - with null checks
  document.addEventListener("click", (event) => {
    const mobileMenuWrapper = document.querySelector(".mobile-menu-wrapper");
    if (mobileMenu && mobileMenuToggle && mobileMenuWrapper) {
      if (
        !mobileMenuWrapper.contains(event.target) &&
        !mobileMenuToggle.contains(event.target)
      ) {
        mobileMenu.classList.remove("menu-active");
        document.querySelectorAll(".line").forEach((line) => {
          line.classList.remove("change");
        });
      }
    }
  });

  // mobile menu tab

  const tabs = document.querySelectorAll(".tab");
  const tabContent = document.querySelectorAll(".tab-pane");

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();
      tabs.forEach((tab) => tab.classList.remove("active"));
      this.classList.add("active");
      tabContent.forEach((content) => content.classList.remove("active"));
      tabContent[i].classList.add("active");
    });
  });

  //tabs[0].classList.add("active");
  //tabContent[0].classList.add("active");

  //mobile menu dropdown

  const menuItems = document.querySelectorAll(".main-menu ul li a");

  // Add a click event listener to each menu item
  menuItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();

      item.classList.toggle("active");

      const submenu = item.nextElementSibling;

      if (submenu.style.maxHeight) {
        submenu.style.maxHeight = null;
      } else {
        submenu.style.maxHeight = submenu.scrollHeight + "px";
      }

      menuItems.forEach((otherItem) => {
        if (otherItem !== item) {
          const otherSubmenu = otherItem.nextElementSibling;
          otherSubmenu.style.maxHeight = null;
          otherItem.classList.remove("active");
        }
      });
    });
  });

  //teams

 var teamSwiper = new Swiper(".team-pagination .team-swiper", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

 var team_no_pagination = new Swiper(".team-no-pagination .team-swiper", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 3,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    pagination: false,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  //FAQ 2

  $(".faq-block-2 .accordion-list > li > .answer").hide();

  $(".faq-block-2 .accordion-list > li").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".faq-block-2 .accordion-list > li.active .answer").slideUp();
      $(".faq-block-2 .accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });

  //blog -1
  var blogSwiper = new Swiper(".blog-pagination .blog-swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    //   autoplay: {
    //     delay: 1000,
    //   },
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      575: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

 var blog_no_pagination = new Swiper(".blog-no-pagination .blog-swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    //   autoplay: {
    //     delay: 1000,
    //   },
    spaceBetween: 20,
    pagination: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      575: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      767: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  //single product page sliders

  var swiper5 = new Swiper(".pd-thumb-slider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  var swiper6 = new Swiper(".product-img-slider", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper5,
    },
  });

  const links = document.querySelectorAll(
    ".pd-thumb-slider .swiper-slide a, .product-img-slider .swiper-slide a"
  );
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });

  //Clients 1
  const clientSwiper = new Swiper(".clients-1 .client-swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    // autoplay: {
    //   delay: 1000,
    // },
    spaceBetween: 20,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });

  //testimonial

var testimonialSwiper = new Swiper(".testimonial-1 .testimonial-slider-wrap", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    // autoplay: {
    //     delay: 1000,
    // },
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      575: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      // when window width is >= 640px
      767: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      1024: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  });
});
