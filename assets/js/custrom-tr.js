$(document).ready(function() {
    new WOW().init();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1000) {
            $('.icon_backtotop').fadeIn();
        } else {
            $('.icon_backtotop').fadeOut();
        }
    });
    $('.icon_backtotop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    $('.element_slider').slick({
        dots: false,
        slidesToShow: 1,
    });
    $('.slider_img_large').slick({
        dots: false,
        slidesToShow: 1,
    });
    $('.slider_video').slick({
        dots: false,
        slidesToShow: 1,
        prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/prev_video.png' alt=''></button>",
        nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next_video.png' alt=''></button>",
    });
    $('.submenu_slider').slick({
        dots: false,
        slidesToShow: 5,
        prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/prev_video.png' alt=''></button>",
        nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/next_video.png' alt=''></button>",
    });
    $('.footer h3').click(function(event) {
        if ($('.element_footer').hasClass('use_mobi')) {
            $('.footer h3').not($(this)).removeClass('active');
            $('.footer ul').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
    $('.slider_video:not(.no-slide) .item').click(function() {
        $(this).find(".thumbnail").remove();
    });
    /*$('#slide_video_intro_home').slick({
        dots: true,
        slidesToShow: 1,
        prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='/themes/introduce/w3ni890/img/11.png' alt=''></button>",
        nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='/themes/introduce/w3ni890/img/10.png' alt=''></button>",
        responsive: [{
            breakpoint: 765,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='/themes/introduce/w3ni890/img/55.png' alt=''></button>",
                nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='/themes/introduce/w3ni890/img/54.png' alt=''></button>",
            }
        }, ]
    });*/
    // On before slide change
    $('#slide_video_intro_home').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var $slickCurrent = $('#slide_video_intro_home').find('.slick-slide[data-slick-index=' + currentSlide + ']');
        var $slickNext = $('#slide_video_intro_home').find('.slick-slide[data-slick-index=' + nextSlide + ']');
        $slickCurrent.find('.iframeVideoIntro')[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        $slickNext.find(".thumbnail").remove();
        $slickNext.find('.iframeVideoIntro')[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    });

    $('#slide_video_intro_home').on('click', '.item', function() {
        $(this).find(".thumbnail").remove();
        $(this).find('.iframeVideoIntro')[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    });

});
var myWindow;
$(document).ready(function(){
   myWindow = window.open("", "", "width=576, height=auto");
}) 