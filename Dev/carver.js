$("#mobileNav").on("click touch", function(){
    $("nav").css("display", "block");
    $("#mobileNavScreen").show();
});

$("#mobileNavScreen").on("click touch", function(){
    $("nav").css("display", "none");
    $("#mobileNavScreen").hide();
});