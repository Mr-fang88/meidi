$(function () {
  function ajax_goods(url, type, item) {
    $.ajax({
      url,
      typr: 'get' || type,
      success: function (res) {
        for (i = 0; i < res.data.length; i++) {
          var html = ''
          html = `
          <li class="of_list ba_co">
          <a href="">
            <div class="title_l main_scattered">
              <p>${res.data[i].title_l}</p>
              <span>${res.data[i].title_r}</span>
            </div>
            <img src="${res.data[i].img}" alt="" class="of_img">
            <div class="goods_name">
              <p>${res.data[i].goods_name}</p>
              <font class="main_scattered font_of_1">
                <i>￥</i>
                <span class="price">${res.data[i].price}</span>
              </font>
              <div class="hy_price">
                <font class="main_scattered">
                  <i>￥</i>
                  <span class="price">${res.data[i].mem_price}</span>
                </font>
                <span class="of_pro">PRO</span>
              </div>
              <i class="shopping_cart iconfont icon-gouwuche"></i>
            </div>
          </a>
        </li>`
          $(item).append(html)
        }
      }
    })
  }
  ajax_goods('http://172.16.5.129:3000/goods', 'get', '#goods_ul')
  ajax_goods('http://172.16.5.129:3000/goods_2', 'get', '#goods_ul_2')
  ajax_goods('http://172.16.5.129:3000/goods_3', 'get', '#goods_ul_3')
  ajax_goods('http://172.16.5.129:3000/goods_4', 'get', '#goods_ul_4')
  ajax_goods('http://172.16.5.129:3000/goods_5', 'get', '#goods_ul_5')


  function dropDown() {
    var flag = true
    $('#dropDown').on('click', function () {
      if (flag) {
        $('.notice').stop().animate({
          height: '2.1rem'
        });
        $(this).css({
          transform: 'rotate(180deg)'
        });
        flag = false
      } else if (!flag) {
        $('.notice').stop().animate({
          height: '.7rem'
        });
        $(this).css({
          transform: 'rotate(360deg)'
        });
        flag = true
      }
    })

  }
  dropDown()

  function home_banner() {
    var swiper = new Swiper('.swiper-container', {
      autoplay: true,
      loop: 'true',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    $('.swiper-pagination span').on('click', () => {
      $(this).css({
        'borderColor': 'none',
        'outline': 'none'
      })
    })
  }
  home_banner()


  let Seconds = () => {
    let future = new Date('2020-9-27 10:00:00')
    let dm = future.getTime()
    let m_s = setInterval(function () {
      let dq_time = new Date()
      let wl_time = dq_time.getTime()
      let sjc_time = dm - wl_time

      let shi = parseInt(sjc_time / (3600 * 1000) % 24)
      let fen = parseInt(sjc_time / 1000 / 60 % 60)
      let miao = parseInt(sjc_time / 1000 % 60)

      $('#shi').text(shi)
      $('#fen').text(fen)
      $('#miao').text(miao)

      if (sjc_time <= 0) {
        clearInterval(m_s)
      }
    }, 1000)
  }
  Seconds()


  $('#home_search').focus(() => {
    location.href = 'http://localhost:3000/search'
  })
})


let goods_class = () => {
  let go_cl_h4 = document.querySelectorAll('.go_cl_list h4')
  let go_cl_span = document.querySelectorAll('.go_cl_list span')
  let go_cl = document.querySelectorAll('.go_cl_list')
  let list_of_goods_l = document.querySelectorAll('.list_of_goods_l')
  go_cl.forEach(function (item, index) {
    item.addEventListener('click', function () {
      for (var i = 0; i < go_cl_h4.length; i++) {
        go_cl_h4[i].style.color = "#000"
        go_cl_span[i].classList.remove('active_t')
        list_of_goods_l[i].classList.remove('active_go')
      }
      go_cl_h4[index].style.color = "#ff6600"
      go_cl_span[index].classList.add('active_t')
      list_of_goods_l[index].classList.add('active_go')
    })
  })

}
goods_class()




var footer_a = document.querySelectorAll('.footer_a')
footer_a.forEach(function (item, index) {
  item.addEventListener('click', function () {
    for (var i = 0; i < footer_a.length; i++) {
      footer_a[i].style.color = '#999'
    }
    footer_a[index].style.color = '#0092d8'
  })
})