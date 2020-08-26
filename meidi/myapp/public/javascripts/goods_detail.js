$(function () {
    $(".main_no_down").on('click', function () {
        $(this).prev(".main_no_message").toggleClass('show_msg')
    })

    new Swiper('.swiper-container', {
        // autoplay: true,//可选选项，自动滑动
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
    })

    // 抢购倒计时

    //设置24小时 开启倒计时
    let futureHours = 23;
    let futureMinute = 59;
    let futureSecond = 59;

    setInterval(function () {
        futureSecond--;
        if (futureSecond == 0) {
            futureSecond = 59;
            futureMinute -= 1;
            if (futureMinute == 0) {
                futureMinute = 59;
                futureHours -= 1;
                if (futureHours == 0) {
                    futureHours = 23;  
                }
            }
        }
        futureSecond = futureSecond < 10 ? "0" + futureSecond : futureSecond
        futureMinute = futureMinute < 10 ? "0" + futureMinute : futureMinute
        futureHours = futureHours < 10 ? "0" + futureHours : futureHours

        $(".hours").text(futureHours);
        $(".minutes").text(futureMinute);
        $(".seconds").text(futureSecond);
    },1000)












})

