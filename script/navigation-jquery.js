//navigation jquery

$(window).scroll(function () {
    if ($(this).scrollTop() > 120) {
        $('header').addClass("sticky");
    }
    else {
        $('header').removeClass("sticky");
    }
});