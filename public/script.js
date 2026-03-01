const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-track img");

let index = 0;

function nextSlide() {
  index = (index + 1) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(nextSlide, 4000);