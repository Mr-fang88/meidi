$(function () {

    // 公告显示
    $(".main_no_down").on('click', function () {
        $(this).prev(".main_no_message").toggleClass('show_msg')
    })

    //商品轮播01
    let swiper1 = new Swiper('.banner_wraper', {
        autoplay: true,//可选选项，自动滑动
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
    })

    // 获取总标题
    $(".header_md li").on("click", function () {
        $(this).addClass("header_item").siblings(".header_item").removeClass("header_item")
        $(this).addClass("header_md_active").siblings(".header_md_active").removeClass("header_md_active")
        let Otop = $(".backTop").eq($(this).index()).offset().top - 40;
        $(window).scrollTop(Otop)
    })

    // 关注商品
    $(".like_btn>i").on("click", function () {
        $(this).toggleClass("big_heart");

        if ($(this).hasClass("big_heart")) {
            $(".like_cover").css("display", "block");
            setTimeout(function () {
                $(".like_cover").css("display", "none");
            }, 1500)

        } else {
            $(".like_cover").css("display", "block");
            $(".like_cover_con").children(".big_heart").css("display", "none")
                .siblings(".sure").css("display", "block").siblings("span").text("取消关注")
            setTimeout(function () {
                $(".like_cover_con").children(".big_heart").css("display", "block")
                    .siblings(".sure").css("display", "none").siblings("span").text("关注成功")
                $(".like_cover").css("display", "none");
            }, 1500)

        }

    })

    //积分查看
    $(".look_integral span").on("click", function () {
        $(".inter_show").css("display", "block");
        $(".cover_con").animate({
            height: "85%"
        }, 200)
    })
    function closeBtn() {
        $(".inter_show").css("display", "none");
        $(".cover_con").css({ height: 0 })
    }
    $(".inter_close").on("click", closeBtn)
    $(".inter_clo").on("click", closeBtn)


    // 会员放心购
    $(".section_more span").on("click", function () {
        // 显示着罩层
        $(".mem_cover").css("display", "block")
        $("html").toggleClass("cover_html")
        // 让内容过度出现
        $(".mem_con").animate({
            height: "11.62rem"
        }, 300)
        $(".fixed_footer").animate({
            height: "0.8rem"
        }, 300)
    })
    function memLose(){
        $(".mem_con").animate({
            height: "0rem"
        }, 200, function () {
            $(".mem_cover").css("display", "none")
        })
        $(".fixed_footer").animate({
            height: "0rem"
        }, 200)
    }
    $(".mem_con i").on("click",memLose)
    $(".mem_footer").on("click", memLose)



    //商品推荐轮播02
    let swiper2 = new Swiper('.recommend_box', {
        loop: false,
        slidesPerView: 3,
        slidesPerGroup: 3,
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
    }, 1000)














})

