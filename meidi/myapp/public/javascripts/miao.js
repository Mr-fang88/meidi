// 轮播图
new Swiper('.swiper-container', {
  loop: true,
  speed: 300,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
})


// 设置tab-wraper点击事件样式修改

$(() => {

  $(".list-wraper li").on("click",function(){

    // 修改时间样式
    $(this).children(".status").toggleClass("active_status")
    $(this).siblings().children(".active_status").removeClass("active_status")

    // 修改抢购状态样式
    $(this).children(".time").toggleClass("active_time")
    $(this).siblings().children(".active_time").removeClass("active_time")

   

  })



})
