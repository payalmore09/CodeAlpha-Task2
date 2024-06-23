document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('button.prev');
  const nextButton = document.querySelector('button.next');
  let currentIndex = 0;

  function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 25}%)`;
  }

  function showNextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlider();
  }

  function showPrevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlider();
  }

  nextButton.addEventListener('click', showNextSlide);
  prevButton.addEventListener('click', showPrevSlide);

  setInterval(showNextSlide, 3000);
});
