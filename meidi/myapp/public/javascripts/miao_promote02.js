

function doPromise(url, type, data) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: type,
            data: data,
            success(res) {
                resolve(res);
            },
            error(err) {
                reject(err);
            }
        });
    });
}
doPromise("http://localhost:3000/users/requestData", "post")
    .then(result => {
        result.forEach(function (item, index) {

            let html = `       
            <li class="mc_product_list">
                <a href="javascript:;">
                <div class="mc_icon_tag">
                    <span class="mc_icon_top">直降</span>
                    <span class="mc_icon_bottom">300</span>
                </div>
                    <div class="mc_product">
                        <img src=${item.src}
                            alt="">
                    </div>
                    <div class="mc_product_detail">
                        <p class="mc_pro_describe">${item.alt}</p>
                        <p class="mc_pro_price">
                            <span>活动价<i>¥</i></span>
                            <em>${item.price}</em>
                        </p>
                    </div>
                    <div class="mc_pro_buy">立即购买<i class="mc_icon_arrow"></i>
                    </div>
                </a>
            </li>`
           
            switch (item.type) {
                case 'G1011':
                    $('.content_ul').eq(0).append(html);
                    
                    break;
                case 'G1021':
                    $('.content_ul').eq(1).append(html);
                    break;
                case 'Z1011':
                    $('.content_ul').eq(2).append(html);
                    break;
                case 'R1011':
                    $('.content_ul').eq(3).append(html);
                    break;
            }
           
        })
        
        $('.content_ul').eq(2).children().children().children(".mc_icon_tag").remove()
        $('.content_ul').eq(3).children().children().children(".mc_icon_tag").remove()
       
    }).catch(err => {
        alert("请求出错了")
    })
    
    
    












