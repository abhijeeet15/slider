
let slideIndex = 0;
showSlides(slideIndex);

function showSlides(index) {
const slides = document.querySelectorAll('.slide');
if (index >= slides.length) {
    slideIndex = 0;
}
if (index < 0) {
    slideIndex = slides.length - 1;
}
slides.forEach((slide, i) => {
    slide.style.display = (i === slideIndex) ? 'block' : 'none';
});
}

function nextSlide() {
slideIndex++;
showSlides(slideIndex);
}

function prevSlide() {
slideIndex--;
showSlides(slideIndex);
}


setInterval(() => {
nextSlide();
}, 2000); 
