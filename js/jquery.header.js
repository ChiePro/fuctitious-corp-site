/*
 * Header JS
 */

(function($) {
    $(function() {
        const header = $('header');
        const fixedClassName ='fixed';
        // MEMO: 画像スライダーと少し被るくらいで表示
        /* fixedBorder 微調整用 */
        const fixedTweak = 20 ;
        /* この値以上スクロールすると header を固定する */
        const fixedBorder = $('#top_image_slider').outerHeight(true) - fixedTweak;

        /* fixedBorder の値以上スクロールしたら */
        $(window).scroll(function() {
            if ($(window).scrollTop() > fixedBorder) {
                header.addClass(fixedClassName);
            } else {
                header.removeClass(fixedClassName);
            }
        });
    });
})(jQuery);
