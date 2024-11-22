document.getElementById("toggleButton-map").addEventListener("click", function () {
    var overlay = document.getElementById("overlay-map");
    if (overlay.style.display === "none" || overlay.style.display === "") {
        overlay.style.display = "block"; // 显示半透明图层
    } else {
        overlay.style.display = "none"; // 隐藏半透明图层
    }
});

document.getElementById('toggleButton-map').addEventListener('click', function () {
    var overlay = document.getElementById("overlay-map");
    var icon_map = document.getElementById("toggleButton-map"); // 获取按钮元素
    if (overlay.style.display === "none" || overlay.style.display === "") {
        icon_map.src = './notBeenActived.png'; 

    } else {
        icon_map.src = './beenActived.png';

    }
});