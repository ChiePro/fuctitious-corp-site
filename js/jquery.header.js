/*
 * Header JS
 */

(function($) {
    $(function() {
        const header = $('header');
        const fixedClassName ='fixed';
        /* この値以上スクロールすると header を固定する */
        const fixedBorder = $('#top_image_slider').outerHeight(true) - 20;

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
