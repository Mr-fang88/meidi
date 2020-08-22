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


})

