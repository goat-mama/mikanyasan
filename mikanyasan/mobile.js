// リンクを押した時のスムーススクロール動作
$('a[href^="#"]').click(function() {
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
});

// //ボタンがクリックされたら active をつける、外すを繰り返す
$(".menu-box .menu-btn").on("click", function() {
    $(".menu-box").toggleClass("active");
});

//メニューのリンクがクリックされたら active 外す
$(".list_nav_header_mobile li a").on("click", function() {
    $("nav_header").removeClass("active");
});

/**
 * スマホナビゲーションのリンクをクリックしたら、checkboxのチェックを外してナビゲーションをしまう
 */
$(".list_nav_header_mobile li a").on("click", function() {
    $("#menu").prop("checked", false);
});

// //ボタンがクリックされたら 背景が黒くなる
$("#menu").change(function(){
    if($("#menu").prop("checked") == false) {
        $('.header_mobile').css('height' , 'auto');
    }else {
        $('.header_mobile').css('height' , '100%');
}
});