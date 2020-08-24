$(function () {
    /* 弹出弹框 */
    $(".link_a").on("click", function () {
        if(localStorage.getItem('phone')){
          
            $(".black_cover").css("display", "block")
        }else{
            $('.phone_cover').css("display", "block")
        }
        
    })
    /* 隐藏弹框 */
    $(".box_close").on("click", function () {
        $(".phone_cover").css("display", "none")
    })

    let codeBtn = $('.code-btn');
    codeBtn.on('click', function () {
        // 判断手机号长度
        if ($('.phoneNum').val().length === 0) {
            alert("请输入正确的手机号")
            $('.phoneNum').eq(0).focus()
        } else {
            let code = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
            let colorArr = ["#330000", "#ffffff", "#000033", "#333333", "#000033", "#3300FF"]
            let html = ''
            for (let i = 0; i < 4; i++) {
                let codeNum = Math.floor(Math.random() * code.length);
                html += `<span>` + code[codeNum] + `</span>`
            }
            codeBtn.html(html);
            for (let j = 0; j < codeBtn.children().length; j++) {
                let transY = Math.floor(Math.random() * 50);
                let colorNum = Math.floor(Math.random() * colorArr.length);
                codeBtn.children().eq(j).css({
                    transform: `skewY(${transY}deg)`,
                    color: colorArr[colorNum]
                })
            }

        }
    })


    // 校验手机号和验证码
    $(".massage_submit").on("click", function (event) {

        //阻止表单默认行为
        event.preventDefault();
        // 获取用户手机号及验证码
        let phoneNum = $(".phoneNum").val();
        let code = '';
        for (let k = 0; k < codeBtn.children().length; k++) {
            code += codeBtn.children().eq(k).text();
        }
        // 基本校验
        if (!(/^1[3456789]{1}\d{9}/.test(phoneNum))) {
            alert("请输入正确的手机号")
            $(".phoneNum").val("")
        } else if ($('.ident_code').val() !== code) {
            alert("验证码错误，请重新填写。")
        } else {
            
            $(".phoneNum").val("")
            $('ident_code').val("")
            $('.phone_cover').css("display", "none")
            $(".black_cover").css("display", "block")
            

            hash = md5(phoneNum);
            localStorage.setItem('phone',hash)
        }

    })

    // 关闭领取成功
    $(".open_tip_icon").on("click", function () {
        $('.black_cover').css('display', "none")
    })
    $(".tip_btn").on("click", function () {
         $(".black_cover").css("display", "none")
    })

    // 查看优惠券
    $(".tip_look").on("click", function () {
        window.location.href = ""
    })
})