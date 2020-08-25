$('#cardFrame').hide()
$('#cardBg').hide()
$('.btnItem').on('click', function () {
  if ($('#ipt').val() === '') {
    $('#cardFrame').show()
    $('#cardBg').show()
  }
  setTimeout(function () {
    $('#cardFrame').hide()
    $('#cardBg').hide()
  }, 3000)
})