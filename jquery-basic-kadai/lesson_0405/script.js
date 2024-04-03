$(function (){

// カルーセル
$('.carousel').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  autoplaySpeed: 5000,
  arrows: false,
  fade: true,
  pauseOnHover: false,
});

// マウスオーバー時のアニメーション
$('.home').on('mouseover',function(){
  $(this).animate({
    opacity: 0.5,
  },100);
});
$('.button').on('mouseover',function(){
  $(this).animate({
    opacity: 0.5,
  },100);
});

// トップに戻るボタン
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('#page-top').fadeIn();
  } else {
    $('#page-top').fadeOut();
  }
});

// トップに戻るボタン修正前
// $(function (){
//  $('#js-pagetop').click(function(){
    // $('html, body'),animate({
      // scrollTop: 0
    // }, 300);
  // });
  // $(window).scroll(function(){
    // if ($(window).scrollTop() >1){
      // $('#js-pagetop').fadeIn(300).css('display', 'flex')
    // } else {
      // $('#js-pagetop').fadeOut(300)
    // }
  // });
// });
// 

// ボタンクリック時に滑らかにスクロール
$(function (){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({'scrollTop': position }, speed, "swing");
    return false;
  }); 
});

// セクション位置までスクロール時にフェイドイン
  $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      $('section').each(function(){
        var position = $(this).offset().top;
        if (scroll > position - windowHeight + 100){
          $ (this).addClass('fade-in');
        }  
      });
  });

// モーダルで拡大表示
$('.works img').click(function () {
  const imgSrc = $(this).attr('src');
  $('.big-img').attr('src', imgSrc);
  $('.modal').fadeIn();
  return false
});

// 閉じるボタンクリック時にモーダルを閉じる
$('.close-btn').click(function (){
  $('.modal').fadeOut();
  return false
});


// 最上位の閉じタグ
});
