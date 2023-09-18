const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 4000,
    disableonintraction: true,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const video = document.getElementById("video");

if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
  video.autoplay = true;
  video.load();
}