/*
 * Header JS
 */

(function($) {
    $(function() {
        var header = $('header');
        var fixedClassName ='fixed';
        /* スクロール上の上位置を25取得 */
        const fixedBorder = 25;

        /* スクロール上の上位置を25取得するとfixedの処理をする */
        $(window).scroll(function() {
            if ($(window).scrollTop() > fixedBorder) {
                header.addClass(fixedClassName);
            } else {
                header.removeClass(fixedClassName);
            }
        });
    });
})(jQuery);
