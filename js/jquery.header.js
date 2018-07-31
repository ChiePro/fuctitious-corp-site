/*
 * Header JS
 */

(function($) {
    $(function() {
        const header = $('header');
        const fixedClassName ='fixed';
        // MEMO: 画像スライダーと少し被るくらいで表示
        /* fixedBorder 微調整用 */
        const fixedTweak = 280;

        $(window).scroll(function() {
            /* fixedBorder の値以上スクロールしたら */
            if ($(window).scrollTop() > $('#top_image_slider').outerHeight(true) - fixedTweak){
                header.addClass(fixedClassName);
            } else {
                header.removeClass(fixedClassName);
            }
        });
    });
})(jQuery);
