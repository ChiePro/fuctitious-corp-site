/*
 * Header JS
 */

(function($) {
    $(function() {
        const header = $('header');
        const fixedClassName ='fixed';
        // MEMO: 画像スライダーと少し被るくらいで表示
        /* fixedBorder 微調整用 */
        const fixedTweak = 3300;
        /* この値以上スクロールすると header を固定する */
        const fixedBorder = $('#top_image').outerHeight(true);

        $(window).scroll(function() {
            /* fixedBorder の値以上スクロールしたら */
            if ($(window).scrollTop() > fixedBorder - fixedTweak){
                header.addClass(fixedClassName);
            } else {
                header.removeClass(fixedClassName);
            }
        });
    });
})(jQuery);
