$(function () {

    var navoff = $('#header_part').offset().top;

    $(window).scroll(function () {

        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {

            $('#header_part').addClass('menu_fix');
        } else {
            $('#header_part').removeClass('menu_fix');
        }


    });

    // =========== Header Fixed End ================

    $('.banner_img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        arrows: false,
        autoplaySpeed: 2000,
        dots: true,
        fade: false,


    });

    // ========= Banner image Slic End ===============
    $('.btn3').click(function () {
        $('.para2').slideToggle(3000);

    });
    $('.btn3').click(function () {
        $('.overly').toggle(3300);

    });

    $('.product_img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        arrows: false,
        autoplaySpeed: 2000,
        dots: false,
        fade: true,


    });


    // ====================== 



    $('.btn4').click(function () {
        $('.para3').slideToggle();

    });


    $('.venobox').venobox({

        spinner: 'cube-grid',
        arrowsColor: '#753d9d',
        closeBackground: 'gray',
        closeColor: 'red',
        spinColor: '#753d9d',



    });


    // ==================== Service Light Box End ===============



    $('.portfolio_img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        dots: false,
        fade: false,
        arrows: true,
        nextArrow: '<i class="fas fa-arrow-right nxt_right"></i>',
        prevArrow: '<i class="fas fa-arrow-left prv_left"></i>',


    });


    // =================== Portfolio Slick End ===============


    $('.contact_btn').click(function () {

        $('.contact_form').slideToggle(2000);


    });

    $('.contact_btn').click(function () {

        $('.contact_btn').hide(2000);


    });

    $('.btn4').click(function () {

        $('.contact_form').hide(2000);


    });
    $('.btn4').click(function () {

        $('.contact_btn').show(2000);


    });

    // =================== Contact Form JS End



});