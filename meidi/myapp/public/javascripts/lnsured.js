$('.lnsuredWrapItem').on('click', function() {
  $(this).children('p').addClass('active').parent().siblings().children('p').removeClass('active')
})

$('.list1').on('click',function() {
  $('.lnsuredInput').show()
  $('.lnsuredFooter').show()
  $('.lnsuredMsg').hide()
})

$('.list').on('click',function() {
  $('.lnsuredInput').hide()
  $('.lnsuredFooter').hide()
  $('.lnsuredMsg').show()
})

$('#ipt').on('click', function() {
  $(this).css({'width': 5.94 + 'rem'})
  $('.icon-cha').show()
  $('#btn').show()
})

$("#ipt").blur(function(){
  $(this).css({'width': 6.94 + 'rem'})
  $('.icon-cha').hide()
  $('#btn').hide()
})
