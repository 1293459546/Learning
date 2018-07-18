///<reference path="jquery-3.3.1.min.js" />

/**
 * 首页轮播器
 */
$(document).ready(function(){ 
    var bgColors = ["#2b2f3e","#74022c","#3a0000","#f78c24","#1e2726"];       
    function auto(){   
        var banner = $(".banner");        
        var ul = $(".banner_content ul");
        var li = ul.find("li");
                 
        var avtive = ul.find("li.active");        
        var index = li.index(avtive);   
        var margintop = (index) * avtive.height();
        var curBgColor = bgColors[index];
        
        banner.css("background", curBgColor);
        avtive.css("margin-top",-1 * margintop);
        
        setTimeout(function(){
            down();
        },3000);

        function down()
        {               
            index += 1;
            if(li.length <= index)
            {
                index = 0;
            }

            avtive.removeAttr("style");
            avtive.removeClass("active");
            li.eq(index).addClass("active");

            auto();
        }
    };
    
    setTimeout(function(){
        auto();
    },3000);
});


/**
 * 底部的播放器收缩展开与固定
 */
