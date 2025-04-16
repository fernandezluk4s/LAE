document.addEventListener('DOMContentLoaded', function() {
    const saibaMaisLinks = document.querySelectorAll('.saiba-mais-link');
    const productDetailsSections = document.querySelectorAll('.product-details');

    saibaMaisLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            productDetailsSections.forEach(section => {
                section.style.display = 'none';
            });

            document.getElementById(targetId).style.display = 'block';
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.image-slider-container');

    sliders.forEach(slider => {
        const track = slider.querySelector('.image-track');
        const images = slider.querySelectorAll('.slider-image');
        const sliderWidth = slider.offsetWidth; // Largura do contêiner do slider
        const prevBtn = slider.querySelector('.prev-btn');
        const nextBtn = slider.querySelector('.next-btn');
        let currentIndex = 0;

        function updateTrack() {
            track.style.transform = `translateX(-${currentIndex * sliderWidth}px)`;
        }

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = Math.max(currentIndex - 1, 0);
                updateTrack();
            });

            nextBtn.addEventListener('click', () => {
                currentIndex = Math.min(currentIndex + 1, images.length - 1);
                updateTrack();
            });
        }
    });
});