
// 初始调用一次
updateTime();
// 每十秒更新一次时间
setInterval(updateTime, 10000);


document.getElementById('down-arrow-1').addEventListener('click', function () {
    document.getElementById('button2').click();
});
document.getElementById('down-arrow-2').addEventListener('click', function () {
    document.getElementById('button3').click();
});
document.getElementById('down-arrow-3').addEventListener('click', function () {
    document.getElementById('button4').click();
});
document.getElementById('down-arrow-4').addEventListener('click', function () {
    document.getElementById('button5').click();
});

document.getElementById('button2').addEventListener('click', function () {
    // 这里添加按钮2点击时的逻辑
    //alert('按钮2被点击了');
});


function updateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // getMonth() 返回的月份是从 0 开始的，所以需要加 1
    const day = now.getDate();

    const formattedDate = `${year}年${month}月`;
    const formattedDay = day;
    const startOfYear = new Date(year, 0, 1);
    const diffInMilliseconds = now - startOfYear;
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24)) + 1;

    document.getElementById('current-date').textContent = formattedDate;
    document.getElementById('current-day').textContent = formattedDay;
    document.getElementById('current-day-2').textContent = formattedDay;
    document.getElementById('current-year').textContent = year;
    document.getElementById('current-month').textContent = month;
    
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
    {
        document.getElementById('current-day-of-percents').textContent = (diffInDays / 366 * 100).toFixed(3);
    } else
    {
        document.getElementById('current-day-of-percents').textContent = (diffInDays / 365 * 100).toFixed(3);
    }
    


    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
        document.getElementById('current-day-of-percents-month').textContent = (day / 31 * 100).toFixed(2);
    }
    if(month == 2){
        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            document.getElementById('current-day-of-percents-month').textContent = (day / 29 * 100).toFixed(2);
        } else {
            document.getElementById('current-day-of-percents-month').textContent = (day / 28 * 100).toFixed(2);
        }
    }
    if(month == 3 || month == 4 || month == 6 || month == 9 || month == 11){
        document.getElementById('current-day-of-percents-month').textContent = (day / 31 * 100).toFixed(2);
    }

}

