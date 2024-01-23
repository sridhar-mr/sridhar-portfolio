// navbar

let header = document.querySelector('header');
let menu = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
  menu.classList.toggle("bx-x")
  navbar.classList.toggle("active");
}

window.onscroll = () => {
   menu.classList.remove("bx-x");
   navbar.classList.remove("active");
}

// home  swiper js

var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// upcoming  swiper js

var swiper = new Swiper(".upcoming-container", {
  slidesPerView: 1,
  loop: true,
   autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  spaceBetween: 20,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});



var swiper = new Swiper(".upcoming-container1", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  spaceBetween: 20,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
