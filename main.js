if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
    const sectionContainer = document.querySelector('.section-container');

    function adjustPadding() {
        if (window.innerWidth < 900) {
            sectionContainer.style.paddingTop = '1750px';
        } else {
            sectionContainer.style.paddingTop = '1500px';
        }
    }

    window.addEventListener('resize', adjustPadding);
    adjustPadding(); 
}


let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.carousel-slides');
    const totalSlides = slides.children.length;

    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    const offset = -currentSlide * 100;

    slides.style.transform = `translateX(${offset}%)`;
}

