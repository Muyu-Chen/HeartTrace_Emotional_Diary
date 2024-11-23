window.onload = function () {
    const container = document.querySelector('.container');
    const lis = document.querySelectorAll('.controls li');
    let viewHeight = null; // 声明页面高度
    let index = 0; // 当前索引
    let flag = true; // 节流开关
    let scrolling = false; // 节流开关
    let lastScrollTime = 0; // 上次滚动事件触发时间


    // 处理滚动事件
        const handleScroll = function (e) {
        e.preventDefault();
        let currentTime = new Date().getTime();
        if (currentTime - lastScrollTime >= 800)
        { // 如果距离上次滚动事件的时间间隔大于等于节流延迟时间，则执行滚动
            lastScrollTime = currentTime;

            if (!scrolling) {
                scrolling = true;
                viewHeight = document.body.clientHeight + 50;
                if (e.deltaY > 3)
                {
                    // 向下滚动

                    index++;
                    if (index > lis.length - 1) {
                        index = lis.length - 1;
                    }
                }
                else if(e.deltaY < -3)
                {
                    // 向上滚动
                    index--;
                    if (index < 0) {
                        index = 0;
                    }
                }
                container.style.top = -index * viewHeight + 'px';
                changeColor(index);

                setTimeout(function () {
                    scrolling = false;
                }, 750); // 可以调整延迟时间以适应需要
            }
        }
    };

    // 处理触摸开始事件
    let touchStartY = 0;
    const handleTouchStart = function (e) {
        touchStartY = e.touches[0].clientY;
    };

    // 处理触摸结束事件
    const handleTouchEnd = function (e) {
        const touchEndY = e.changedTouches[0].clientY;
        const touchDiff = touchStartY - touchEndY;

        if (Math.abs(touchDiff) > 50) { // 判断滑动距离是否足够
            if (touchDiff > 0) {
                // 向上滑动
                index++;
                if (index > lis.length - 1) {
                    index = lis.length - 1;
                }
            } else {
                // 向下滑动
                index--;
                if (index < 0) {
                    index = 0;
                }
            }
            viewHeight = document.body.clientHeight + 50;
            container.style.top = -index * viewHeight + 'px';
            changeColor(index);
        }
    };




    document.addEventListener('wheel', handleScroll, { passive: false });
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    // 绑定点击事件
    for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            viewHeight = document.body.clientHeight + 50;
            index = i;
            changeColor(index);
            container.style.top = -index * viewHeight + 'px';
        }
    }

    // 改变小 li 颜色
    function changeColor(index) {
        for (var j = 0; j < lis.length; j++) {
            lis[j].className = '';
        }
        lis[index].className = 'active';
    }
}




