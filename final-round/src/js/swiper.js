import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

  const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 15,
  effect: "slide",
  speed: 400,
  slidesPerView: "auto",
  // autoplay: {
  //   stopOnLastSlide: true,
  //   delay: 2000,
  // },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    clickable: true,
  },
  modules: [Navigation, Pagination],
  slidesPerView: "auto",
  keyboardControl: true,
  paginationClickable: true,
  });
  