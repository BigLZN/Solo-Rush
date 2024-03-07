let slideIndex = 0;
let intervalId;

function showSlide(n) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function currentSlide(n) {
  slideIndex = n;
  showSlide(slideIndex);
}

document.addEventListener("DOMContentLoaded", function () {
  showSlide(slideIndex);
  intervalId = setInterval(nextSlide, 5000);
});

document.querySelectorAll(".slide, .dot").forEach((element) => {
  element.addEventListener("click", function () {
    clearInterval(intervalId);
  });
});
