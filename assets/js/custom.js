$(document).ready(function () {
    switchDiv();

    $("li:first-child").addClass("first");
    $("li:last-child").addClass("last");

    $('[href="#"]').attr("href", "javascript:;");

    $(".menu-Bar").click(function () {
        $(this).toggleClass("open");
        $(".menuWrap").toggleClass("open");
        $("body").toggleClass("ovr-hiddn");
    });
    
    $(".menu li a").click(function () {
        $(".menu-Bar").removeClass("open");
        $(".menuWrap").removeClass("open");
        $("body").removeClass("ovr-hiddn");
    });

    $(".loginUp").click(function () {
        $(".LoginPopup").fadeIn();
        $(".overlay").fadeIn();
    });

    $(".signUp").click(function () {
        $(".signUpPop").fadeIn();
        $(".overlay").fadeIn();
    });

    $(".closePop,.overlay").click(function () {
        $(".popupMain").fadeOut();
        $(".overlay").fadeOut();
    });

    $(".menu .menu-item-has-children").addClass("dropdown-nav ");
    $(".menu .menu-item-has-children ul.sub-menu").addClass("dropdown");


    /* Tabbing Function */
    $("[data-targetit]").on("click", function (e) {
        $(this).addClass("active");
        $(this)
            .siblings()
            .removeClass("active");
        var target = $(this).data("targetit");
        $("." + target)
            .siblings('[class^="box-"]')
            .hide();
        $("." + target).fadeIn();
        $(".tabViewList").slick("setPosition", 0);
        
    });

    // Accordian
    $('.accordion-list > li > .answer').hide();

    $('.accordion-list > li').click(function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").find(".answer").slideUp();
        } else {
            $(".accordion-list > li.active .answer").slideUp();
            $(".accordion-list > li.active").removeClass("active");
            $(this).addClass("active").find(".answer").slideDown();
        }
        return false;
    });

    $("li.dropdown-nav").hover(function () {
        $(this)
            .children("ul")
            .stop(true, false, true)
            .slideToggle(300);
    });

    $(".searchBtn").click(function () {
        $(".searchWrap").addClass("active");
        $(".overlay").fadeIn("active");
        $(".searchWrap input").focus();
        $(".searchWrap input").focusout(function (e) {
            $(this)
                .parents()
                .removeClass("active");
            $(".overlay").fadeOut("active");
            $("body").removeClass("ovr-hiddn");
        });
    });

    $(".index-slider").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1
        // prevArrow: $('.prev'),
        // nextArrow: $('.next')
    });

    //     Slider For
    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: false,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider-nav'
    // });
    // $('.slider-nav').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     dots: false,
    //     focusOnSelect: true
    // });

    /* Top Scroll */
    // $('body').on('click', '.scrolldown-fl', function() {
    //     goToScroll('awardSec');
    // });
});

// $(window).on("scroll touchmove", function() {
//     $("header").toggleClass("stickyOpen", $(document).scrollTop() > 200);
// });

$(window).on("load", function () {
    var currentUrl = window.location.href.substr(
        window.location.href.lastIndexOf("/") 
    );
    console.log(currentUrl);
    $("ul.menu li a").each(function () {
        var hrefVal = $(this).attr("href");
        if (hrefVal == currentUrl) {
            $(this).removeClass("active");
            $(this).closest("li").addClass("active");
            $("ul.menu li.first").removeClass("active");
        }
    });
});

/* RESPONSIVE JS */
if ($(window).width() < 824) { }

function switchDiv() {
    var $window = $(window).outerWidth();
    if ($window <= 768) {
        $(".topAppendTxt").each(function () {
            var getdtd = $(this)
                .find(".cloneDiv")
                .clone(true);
            $(this)
                .find(".cloneDiv")
                .remove();
            $(this).append(getdtd);
        });
    }
}

function goToScroll(e) {
    $("html, body").animate({
        scrollTop: $("." + e).offset().top
    },
        1000
    );
}

$(document).ready(function () {
    $('.popdynamic').click(function () {
        $('.centercont.static').addClass('d-none');
        $('.centercont.dynamic').removeClass('d-none');
        $('.overlay').fadeIn();
        $('#popdynamic').fadeIn();
        $('.LoginPopup').addClass('price-margin');

        var packtitle = $(this).closest('.pckg').find(" .title").html();
        var packprice = $(this).closest('.pckg').find(".price .amount").html();
        var packdetails = $(this).closest('.pckg').find("ul").text();



        var thisrel = $(this).attr('rel');
        var type = $(this).attr('type');
        $('input[name="package_name"]').val(packtitle);
        $('input[name="package_cost"]').val(packprice);
        $('input[name="package_cat"]').val(type);
        $('input[name="package_html"]').val(packdetails);
        $('input[name="pkg_key"]').val(thisrel);
        $('#popupform input#popuppackage').val(thisrel);
        $(".centercont.dynamic-popup h3").html(packtitle);
        $(".centercont h4").html("In Just <span>" + packprice + "</span>");
    });



    $('.popbtn2').click(function () {
        $('.centercont.static').addClass('d-none');
        $('.centercont.dynamic').removeClass('d-none');
        $('.overlay').fadeIn();
        $('#popdynamic').fadeIn();
        $('.LoginPopup').addClass('price-margin');
        var packtitle = $(this).closest('.pckg2').find(".label").html();
        var packprice = $(this).closest('.pckg2').find(".price").html();
        var thisrel = $(this).attr('rel');
        $('input[name="pkg_key"]').val(thisrel);
        $('#popupform input#popuppackage').val(thisrel);
        $(".centercont.dynamic h3 span").html(packtitle);
        $(".centercont h4").html("In Just <span>" + packprice + "</span>");
    });

    $('.closeico,.overlay').click(function () {

        $('.popupmain').fadeOut();
        $('.overlay').fadeOut();


    });

    $('.popstatic').click(function () {
        $('.centercont.static').removeClass('d-none');
        $('.centercont.dynamic').addClass('d-none');
        $('#popstatic').fadeIn();
        $('.overlay').fadeIn();


        var orgtexts = '$35';
        //  $(".centercont h3 span").text('Start your Trademark Registration Now');
        $(".centercont h4").html("in Just <span>" + orgtexts + "</span>");
    });

    $(window).scroll(function () {
        var header = $('header'),
            scroll = $(window).scrollTop();

        if (scroll >= 1) {
            header.addClass('sticky');
        }
        if (scroll <= 0) {
            header.removeClass('sticky');
        }

    });
    
    
    $('.countrylist').change(function () {
        var thisval = $(this).children('option:selected').val();
        var thiscode = $(this).children('option:selected').attr('data-abbr');
        $(this).closest('.newcountrycode ').find('.countrycode').attr("value", "+" + thisval);
    
        if (thiscode == 'CA') {
            $(this).siblings('span').removeClass();
            $(this).siblings('span').addClass('fgca');
        } else {
            $(this).siblings('span').removeClass();
            $(this).siblings('span').addClass('fg' + thisval);
        }
    });



});







$(".testimonials").slick({
    dots: false,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
});




if ($(window).width() > 1200) {
    $('.has-child.hover').hover(function() {
        $('.has-child').not($(this)).find('.dropdown').stop(true,false,true).slideUp(500);
        $('.has-child').not($(this)).find('.chev').removeClass('rotate');
        $(this).children('.dropdown').stop(true,false,true).slideToggle(500);
        $(this).find('.chev').toggleClass('rotate');
    },
    function(){
        $('.has-child').find('.dropdown').stop(true, false, true).slideUp(500);
        $('.has-child').not($(this)).find('.chev').removeClass('rotate');
    }
    
    );
}
else{
    $('.has-child.hover').click(function() {
        $('.has-child').not($(this)).find('.dropdown').stop(true,false,true).slideUp(500);
        $('.has-child').not($(this)).find('.chev').removeClass('rotate');
        $(this).children('.dropdown').stop(true,false,true).slideToggle(500);
        $(this).find('.chev').toggleClass('rotate');
    });
}

$('.has-child.click').click(function() {
    $('.has-child').not($(this)).find('.dropdown').stop(true,false,true).slideUp(500);
    $('.has-child').not($(this)).find('.sub-menu-block').stop(true,false,true).slideUp(500);
    $('.has-child').not($(this)).find('.chev').removeClass('rotate');

    $(this).find('.dropdown').stop(true,false,true).slideToggle(500);
    $(this).find('.sub-menu-block').stop(true,false,true).slideToggle(500);
    $(this).find('.chev').toggleClass('rotate');

});


const cards = document.querySelectorAll('.card');
let currentIndex = 0;

function flipCards() {
    // Reset all cards
    cards.forEach(card => card.classList.remove('flipped'));

    // Flip two cards
    cards[currentIndex].classList.add('flipped');
    cards[(currentIndex + 1) % cards.length].classList.add('flipped');

    currentIndex = (currentIndex + 2) % cards.length; // Move to next pair
}

setInterval(flipCards, 3000); // Change cards every 3 second

$(document).ready(function() {
    function handlePortfolioDisplay() {
        if ($(window).width() < 768) {
            $('.portfolio-images').slice(6).hide();

            $('.view-more-btn').off('click').on('click', function() {
                if ($(this).text() === "VIEW MORE") {
                    $('.portfolio-images').show();
                    $(this).text("SEE LESS");
                } else {
                    $('.portfolio-images').slice(6).hide();
                    $(this).text("VIEW MORE");
                }
            });
        } else {
            $('.portfolio-images').show();
        }
    }

    handlePortfolioDisplay();

    $(window).resize(function() {
        handlePortfolioDisplay();
    });
});

