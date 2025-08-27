function nextSlide(btn) {
  const carousel = btn.parentElement;
  const images = carousel.querySelectorAll("img");
  let index = [...images].findIndex(img => img.classList.contains("active"));
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");
}

function prevSlide(btn) {
  const carousel = btn.parentElement;
  const images = carousel.querySelectorAll("img");
  let index = [...images].findIndex(img => img.classList.contains("active"));
  images[index].classList.remove("active");
  index = (index - 1 + images.length) % images.length;
  images[index].classList.add("active");
}
