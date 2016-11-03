$(document).bind("mobileinit", function () {
    // jQuery Mobile's Ajax navigation does not work in all cases (e.g.,
    // when navigating from a mobile to a non-mobile page), especially when going back, hence disabling it.
    $.extend($.mobile, {
        ajaxEnabled: false
    });
});

$(document).ready(function () {
    $("#mobileNav").on("click touch", function(){
        $("nav").css("display", "block");
        $("#mobileNavScreen").show();
    });

    $("#mobileNavScreen").on("click touch", function(){
        $("nav").css("display", "none");
        $("#mobileNavScreen").hide();
    });
});