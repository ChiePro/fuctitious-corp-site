/*
 * Header JS
 */

/* 横幅が40%以下になったらfixedの処理をする */
(function($) {
    $(function() {
        var header = $('header');
        var fixed = $('fixed');
        /* 縦のサイズ 200以上なると実行 */
        const number = 200;
        $(window).scroll(function() {
            if ($(window).scrollTop() > number) {
                header.addClass(fixed);
            } else {
                header.removeClass(fixed);
            }
        });
    });
})(jQuery);


