document.addEventListener('DOMContentLoaded', () => {
  const sliders = document.querySelectorAll('.image-slider-container');

  sliders.forEach(slider => {
    const track = slider.querySelector('.image-track');
    const images = slider.querySelectorAll('.slider-image');
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');

    let index = 0;

    const updateSlider = () => {
      const slideWidth = slider.offsetWidth;
      track.style.transform = `translateX(-${index * slideWidth}px)`;
    };

    nextBtn.addEventListener('click', () => {
      index = (index + 1) % images.length;
      updateSlider();
    });

    prevBtn.addEventListener('click', () => {
      index = (index - 1 + images.length) % images.length;
      updateSlider();
    });

    window.addEventListener('resize', updateSlider);
  });
});
