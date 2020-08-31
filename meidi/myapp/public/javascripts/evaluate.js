$('.evaluateItem').on('click', function() {
  $(this).addClass('active').siblings().removeClass('active')
})

$('.btn1').on('click', function() {
  $('.list').show().siblings().hide()
})

$('.btn').on('click', function() {
  $('.list1').show().siblings().hide()
})