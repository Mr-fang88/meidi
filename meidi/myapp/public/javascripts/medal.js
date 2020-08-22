$('.btn').on('click', function() {
  $(this).addClass('active')
  $('.btn1').removeClass('active')
  $('.boxMedal-show').addClass('activeTwo')
  $('.boxMedal-show1').removeClass('activeTwo')
})

$('.btn1').on('click', function() {
  $(this).addClass('active')
  $('.btn').removeClass('active')
  $('.boxMedal-show1').addClass('activeTwo')
  $('.boxMedal-show').removeClass('activeTwo')
})