$(document).ready(function() {
    // menu    
    $(".page-header__menu").click(function() {
        if ($(".page-header__nav").hasClass("page-header__nav_default")) {
            $(".page-header__nav").removeClass("page-header__nav_default").addClass("page-header__nav_open");
        } else {
            $(".page-header__nav").removeClass("page-header__nav_open").addClass("page-header__nav_default");
        }
    });

    var mql = window.matchMedia("(min-width: 765px)");
    var handleMediaChange = function (mediaQueryList) {
        if (mediaQueryList.matches) {
            if ($(".page-header__nav").hasClass("page-header__nav_open")) {
                $(".page-header__nav").removeClass("page-header__nav_open").addClass("page-header__nav_default");
            }
        }
    }
    mql.addListener(handleMediaChange);
    handleMediaChange(mql);
})