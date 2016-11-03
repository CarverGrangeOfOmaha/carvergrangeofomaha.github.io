$("#mobileNav").on("click touch", function(){
    $("nav").show();
    $("#mobileNavScreen").show();
});

$("#mobileNavScreen").on("click touch", function(){
    $("nav").hide();
    $("#mobileNavScreen").hide();
});