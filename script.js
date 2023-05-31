const sliderInterval = 5000;
let currentSlide = 0;

function showNextSlide() {
  const slides = document.querySelectorAll(".offert");

  slides[currentSlide].classList.remove("active");

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add("active");
}

setInterval(showNextSlide, sliderInterval);
