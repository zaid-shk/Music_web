// const container = document.getElementById("artistContainer");
// const nextBtn = document.getElementById("nextArtist");
// const prevBtn = document.getElementById("prevArtist");

// nextBtn.addEventListener("click", () => {
//   container.scrollBy({ left: 150, behavior: "smooth" });
// });

// prevBtn.addEventListener("click", () => {
//   container.scrollBy({ left: -150, behavior: "smooth" });
// });
// const container2 = document.getElementById("artistContainer2");
// const nextBtn2 = document.getElementById("nextArtist2");
// const prevBtn2 = document.getElementById("prevArtist2");

// nextBtn2.addEventListener("click", () => {
//   container2.scrollBy({ left: 150, behavior: "smooth" });
// });

// prevBtn2.addEventListener("click", () => {
//   container2.scrollBy({ left: -150, behavior: "smooth" });
// });
// const playPauseBtn = document.getElementById("playPause");
// const icon = playPauseBtn.querySelector("i");

// playPauseBtn.addEventListener("click", () => {
//   if (icon.classList.contains("fa-play")) {
//     icon.classList.remove("fa-play");
//     icon.classList.add("fa-pause");
//     // audio.play();
//   } else {
//     icon.classList.remove("fa-pause");
//     icon.classList.add("fa-play");
//     // audio.pause();
//   }
// });

// function seek(e) {
//   const bar = e.currentTarget;
//   const clickX = e.offsetX;
//   const width = bar.offsetWidth;
//   const percent = (clickX / width) * 100;
//   document.getElementById("progressBar").style.width = `${percent}%`;
// }
var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  mousewheel: true,
  freeMode: true,
  loop: true,
  // Responsive breakpoints
  breakpoints: {
    // When window width is >= 768px
    768: {
      slidesPerView: 3, // Show 3 slides
      spaceBetween: 30,
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 5, // Show 4 slides
      spaceBetween: 40,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".sWiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  mousewheel: true,
  freeMode: true,
  loop: true,
  // Responsive breakpoints
  breakpoints: {
    // When window width is >= 768px
    768: {
      slidesPerView: 3, // Show 3 slides
      spaceBetween: 30,
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 5, // Show 4 slides
      spaceBetween: 20,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".Swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  mousewheel: true,
  freeMode: true,
  loop: true,
  // Responsive breakpoints
  breakpoints: {
    // When window width is >= 768px
    768: {
      slidesPerView: 3, // Show 3 slides
      spaceBetween: 30,
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 4, // Show 4 slides
      spaceBetween: 20,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var verticalSwiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
