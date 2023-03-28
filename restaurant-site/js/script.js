
//bxSlider関数を呼び出す
$('.bxslider').bxSlider({
    mode: 'fade',/* 試験に出る！ */
    auto: true,
    controls: false,//次の画像に行く矢印をoff
    pager: false,//黒い丸をoff
    touchEnabled: false,/* スマホ時の縦スクロールの挙動 */
    });
    
    /* 外部ファイル化したニュース記事を呼び出す→.loadの中に呼び出したいファイルのパスを指定する。同じ階層のファイルはファイル名+拡張子だけでOK */
    $('#news-list').load('news.txt');
    
    /* ハンバーガーメニュー */
    /* 隠す命令をあらかじめかける */
    $('#g-nav').hide();
    $('#ham-btn').on('click', function(){
    $(this).toggleClass('is-active')/* classをトグルする命令なので、.は入れてはいけない */
    $('#g-nav').fadeToggle(300);
    });
    /* 試験に出る！！ */
    
    $('#g-nav a').on('click',function(){
    $('#g-nav').hide();
    $('#ham-btn').removeClass('is-active');
    /* メニューボタンをクリックしたらg-navを消す */
    });
    
    $(function(){
    let fullYear = new Date().getFullYear(); /* この書き方を覚える！ */
    /* .textメソッドで変数を表示したい */
    $('#this-year').text(fullYear); /* この書き方を覚える！ */
    });
    