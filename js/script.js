document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(n) {
      slides[currentSlide].style.display = "none";
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].style.display = "block";
  }

  function nextSlide() {
      showSlide(currentSlide + 1);
  }

  showSlide(currentSlide);

  // Función para cambiar de imagen automáticamente cada 2.5 segundo
  function autoChangeSlide() {
      nextSlide();
  }

  // Llama a autoChangeSlide cada 1000 milisegundos (2.5 segundo)
  setInterval(autoChangeSlide, 2500);
});


function toggleInfo(element) {
    const info = element.querySelector('.info');
    if (info.style.display === 'block') {
        info.style.display = 'none';
    } else {
        info.style.display = 'block';
    }
}
