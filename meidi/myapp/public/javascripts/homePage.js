$(function(){
  $.ajax({
    url: 'http://localhost:3000/users',
    type: 'get',
    success: function (res) {
      // console.log(res)
    }
  })
  
  function dropDown(){
    var flag = true
      $('#dropDown').on('click',function(){
        if(flag){
          $('.notice').stop().animate({height:'2.1rem'});
          $(this).css({transform:'rotate(180deg)'});
          flag = false
        } else if(!flag){
          $('.notice').stop().animate({height:'.7rem'});
          $(this).css({transform:'rotate(360deg)'});
          flag = true
        }
      })
  
  }
  dropDown()

  function home_banner(){
    var swiper = new Swiper('.swiper-container', {
      loop:'true',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    $('.swiper-pagination span').on('click',() => {
      $(this).css({'borderColor':'none','outline':'none'})
    })
  }
  home_banner()

  let footer = () => {
    $('.footer_a').on('click',function() {
      console.log($(this))
      $(this).addClass("active")
      $('.footer_a').removeClass("active");
    })
  }
  footer()


  let Seconds = () => {
    let future = new Date('2020-8-25 12:00:00')
    let dm = future.getTime()
    let m_s = setInterval(function(){
      let dq_time = new Date()
      let wl_time = dq_time.getTime()
      let sjc_time = dm - wl_time

      let shi = parseInt(sjc_time / (3600 * 1000) % 24)
      let fen = parseInt(sjc_time / 1000 / 60 % 60)
      let miao = parseInt(sjc_time / 1000 % 60)

      $('#shi').text(shi)
      $('#fen').text(fen)
      $('#miao').text(miao)

      if(sjc_time <= 0){
        clearInterval(m_s)
      }
    },1000)
  }
  Seconds()
})

