(function(){
    function w() {   //  function  定义函数    w 就是函数名字
    var r = document.documentElement;  //  用来获取根元素的html
    var a = r.getBoundingClientRect().width;  // 用来获取视口的宽度
        if (a > 750 ){  //   判断视口的宽度 
            a = 750;
        } 
        rem = a / 7.5;   // 计算根元素的字体大小 
        r.style.fontSize = rem + "px"  // 设置根元素的字体大小
    }
    var t;
    w();   // 调用执行函数
// addEventListener 事件监听   resize事件：窗口大小改变事件    function() 匿名函数
    window.addEventListener("resize", function() {            
        clearTimeout(t);    // 清除计时器
        t = setTimeout(w, 300)  // 开启计时器 setTimeout
    }, false);
})();
