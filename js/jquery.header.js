/*
 * Header JS
 */

(function($) {
    $(function() {
        const header = $('header');
        const fixedClassName ='fixed';
        /* この値以上スクロールすると header を固定する */
        const fixedBorder = 25;

        /* fixedBorder の値以上スクロールしたら */
        $(window).scroll(function() {
            if ($(window).scrollTop() > fixedBorder) {
                header.addClass(fixedBorder);
            } else {
                header.removeClass(fixedBorder);
            }
        });
    });
})(jQuery);
