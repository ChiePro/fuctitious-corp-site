/*
 * Header JS
 */

(function($) {
    $(function() {
        var header = $('header');
        /* メニューバーの切り替え */
        var fixedClassName = $('fixed');
        /* 縦のサイズ 200以上なると実行 */
        const fixedBorder = 25;

        /* 縦幅が40%以下になったらfixedの処理をする */
        $(window).scroll(function() {
            if ($(window).scrollTop() > fixedBorder) {
                header.addClass(fixedClassName);
            } else {
                header.removeClass(fixedClassName);
            }
        });
    });
})(jQuery);


