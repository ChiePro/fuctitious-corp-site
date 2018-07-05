/*
 * Header JS
 */

(function($) {
    $(function() {
        var header = $('header');
        /* 縦のサイズ 25以上なると実行 */
        const fixedBorder = 25;

        /* 縦幅が25以下になったらfixedの処理をする */
        $(window).scroll(function() {
            if ($(window).scrollTop() > fixedBorder) {
                header.addClass('fixed');
            } else {
                header.removeClass('fixed');
            }
        });
    });
})(jQuery);


