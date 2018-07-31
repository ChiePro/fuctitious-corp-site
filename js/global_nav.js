/*
 * globl_nav JS
 */
// 画面のサイズが変化した場合
$(window).resize(function() {
    // 画面サイズが850px以上か以下で分岐
    if(window.matchMedia("(max-width: 850px)").matches){
    $(".logo_img").attr("src","./img/mobile_logo.png"); //500px以下の場合
        }else{
    $(".logo_img").attr("src","./img/logo.png");  //500px以上の場合
    }
});
