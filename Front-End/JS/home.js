let currentIndex = 0;
        const items = document.querySelectorAll('.carousel-item');
        const carousel = document.querySelector('.carousel');
        const prevArrow = document.querySelector('.prev-arrow');
        const nextArrow = document.querySelector('.next-arrow');

function updateArrows() {
    prevArrow.disabled = currentIndex === 0; 
    nextArrow.disabled = currentIndex === items.length - 1; 
}

        function nextSlide() {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
        }

        function updateCarousel() {
            const translateX = -currentIndex * 33.33; 
            carousel.style.transform = `translateX(${translateX}%)`;
            updateArrows();
        }

        updateCarousel();
        updateArrows();