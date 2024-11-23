const imageSlider = document.getElementById('image-slider');
const imageSliderPhotos = document.getElementById('image-slider-photos');

imageSlider.addEventListener('input', () => {
    const value = imageSlider.value;
    const imageWidth = 300; // 假设每张图片的宽度为300px
    const translateXValue = -value * imageWidth;


});