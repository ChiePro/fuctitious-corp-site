/*
 * footer lock JS
 */

$(function(){
    var $elem = $(".footer-top"),
        $content = $(".footer"),
        $win = $(window);

    var contentTop = 0;

    $win
        .load(function(){
            updatePosition();
            update();
        })

        .resize(function(){
            upatePosition();
            update();
        })

        .scroll(function(){
            update();
        })

    function updatePosition(){
        contentTop = $content.offset().top + $elem.outerHeight();
    }

    function update(){
        if($win.scrollTop() + $win.height() > contantTop){
            $elem.addClass("static");
        }else if($elem.hasClass("static")){
            $elem.removeClass("static");
        }
    }
});
