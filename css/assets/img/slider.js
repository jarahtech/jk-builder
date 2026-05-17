const sliderItems = document.querySelectorAll(
  ".slider-id-" + id + " .slider-item"
);
const container = document.querySelectorAll(
  ".slider-id-" + id + " .slide_img_container"
);
const slice = 10;

const swiper = new Swiper(".slider-id-" + id + " .hero-slider", {
  // Optional parameters
  direction: slider_self_data.display_style,
  loop: true,
  autoplay: eval(auto_play),
  speed: 2000,
  disableOnInteraction: true,

  // If we need pagination
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
  on: {
    slideChange: function () {
      status = 1;
      let itemno = 0;
      let items = 0;

      sliderItems.forEach((item) => {
        item.classList.remove("animate");
      });

      sliderItems.forEach((item) => {
        setTimeout(() => {
          $(item).addClass("animate");
        }, 1000);
      });

      splitImage("", slice, slice, container);
    },
  },
});

// Animate Items
function animateItems(items) {
  items.forEach((item) => {
    setTimeout(() => {
      $(item).addClass("animate");
    }, 1000);
  });
}

animateItems(sliderItems);

// animate bg
function splitImage(imageUrl, numCols, numRows, container) {
  container.forEach((item) => {
    item.innerHTML = "";

    item.classList.remove("bg-animate-duration");
    item.classList.remove("bg-animate");

    var html = "";

    for (let y = 0; y < numRows; y++) {
      for (let x = 0; x < numCols; x++) {
        const div = document.createElement("div");
        div.className = "animation-part";
        div.style.backgroundImage = `url('${imageUrl}')`;
        // Calculate the position for each part
        const posX = x * 100; // Percentage position for X
        const posY = y * 100; // Percentage position for Y
        div.style.backgroundPosition = `-${posX}% -${posY}%`;

        //  pars.push(div);
        item.appendChild(div);
      }
    }
    setTimeout(() => {
      item.classList.add("bg-animate-duration");
      item.classList.add("bg-animate");
    }, 2000);
  });
}

splitImage("", slice, slice, container);

let loadd = 0;

if (loadd == 0) {
  document
    .querySelector(".subtitle-43 h4 span:first-child")
    .setAttribute("data-aos", "aos-subtitleZoomOut");

  document
    .querySelector(".subtitle-42 h4 span:first-child")
    .setAttribute("data-aos", "aos-movingWidth");

  document
    .querySelector(".subtitle-42 h4 span:last-child")
    .setAttribute("data-aos", "aos-movingWidth");

  loadd = 1;
}

if (loadd == 1) {
  //Aos init
  AOS.init({
    easing: "ease-in-out-sine",
  });
}
