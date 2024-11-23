const sliderImages = document.querySelector('.slider-images');
const imageSlider = document.getElementById('image-slider');



imageSlider.addEventListener('input', () => {
    const index = imageSlider.value;
    //sliderImages.style.transform = `translateX(-${index * 300}px)`;
    // 添加淡出效果

    console.log("1");
    sliderImages.classList.remove('fade-in');
    sliderImages.classList.add('fade-out');
    console.log("2");
    // 等待淡出效果完成后再移动图片并添加淡入效果
    setTimeout(() => {
        sliderImages.style.transform = `translateX(-${index * 300}px)`;
        sliderImages.classList.remove('fade-out');
        sliderImages.classList.add('fade-in');
    }, 300); // 0.6秒的淡出动画时间


    clearAllActive();
    console.log("image is changed");
    
    if(index == 0){
        document.getElementById('emotion-display').textContent = '超难过/(ㄒoㄒ)/~~';
        document.getElementById('emotion-button-1').textContent = '焦虑';
        document.getElementById('emotion-button-2').textContent = '痛苦';
        document.getElementById('emotion-button-3').textContent = '压抑';
        document.getElementById('emotion-button-4').textContent = '愤怒';
        document.getElementById('emotion-button-5').textContent = '悲伤';
        document.getElementById('emotion-button-6').textContent = '其他';

    }
    if(index == 1){
        document.getElementById('emotion-display').textContent = '难过(つд⊂)';
        document.getElementById('emotion-button-1').textContent = '焦虑';
        document.getElementById('emotion-button-2').textContent = '灰心';
        document.getElementById('emotion-button-3').textContent = '压抑';
        document.getElementById('emotion-button-4').textContent = '生气';
        document.getElementById('emotion-button-5').textContent = '难过';
        document.getElementById('emotion-button-6').textContent = '其他';

    }
    if(index == 2){
        document.getElementById('emotion-display').textContent = '一般般( ´_ゝ｀)';
        document.getElementById('emotion-button-1').textContent = '无聊';
        document.getElementById('emotion-button-2').textContent = '发困';
        document.getElementById('emotion-button-3').textContent = '压抑';
        document.getElementById('emotion-button-4').textContent = '平静';
        document.getElementById('emotion-button-5').textContent = '麻木';
        document.getElementById('emotion-button-6').textContent = '其他';

    }
    if(index == 3){
        document.getElementById('emotion-display').textContent = '还不错(￣▽￣)~*';
        document.getElementById('emotion-button-1').textContent = '开心';
        document.getElementById('emotion-button-2').textContent = '幸福';
        document.getElementById('emotion-button-3').textContent = '豁达';
        document.getElementById('emotion-button-4').textContent = '平静';
        document.getElementById('emotion-button-5').textContent = '激动';
        document.getElementById('emotion-button-6').textContent = '其他';
    }
    if(index == 4){
        document.getElementById('emotion-display').textContent = '开心(≧∇≦)/';
        document.getElementById('emotion-button-1').textContent = '自信';
        document.getElementById('emotion-button-2').textContent = '高兴';
        document.getElementById('emotion-button-3').textContent = '舒适';
        document.getElementById('emotion-button-4').textContent = '满意';
        document.getElementById('emotion-button-5').textContent = '自信';
        document.getElementById('emotion-button-6').textContent = '其他';
    }
    if(index == 5){
        document.getElementById('emotion-display').textContent = '超开心！！(≧∇≦)/';
        document.getElementById('emotion-button-1').textContent = '自豪';
        document.getElementById('emotion-button-2').textContent = '喜悦';
        document.getElementById('emotion-button-3').textContent = '亢奋';
        document.getElementById('emotion-button-4').textContent = '满足';
        document.getElementById('emotion-button-5').textContent = '自豪';
        document.getElementById('emotion-button-6').textContent = '其他';
    }

});



function clearAllActive() {
    // 获取所有具有 'uniform-button' 类的按钮
    const buttons = document.querySelectorAll('.uniform-button');
    console.log("clear buttons active class");
    // 遍历所有按钮并移除 'active' 类
    buttons.forEach(btn => btn.classList.remove('active'));
}


document.getElementById('toggle-button').addEventListener('click', function () {
    var audio = document.getElementById('background-music');
    var icon = document.getElementById('toggle-icon');

    if (audio.paused) {
        audio.play().catch(function (error) {
            console.log('Autoplay was prevented:', error);
        });
        icon.src = './whiteNoise/stop.png'; // Change icon to stop
    } else {
        audio.pause();
        icon.src = './whiteNoise/play.png'; // Change icon to play
    }
});