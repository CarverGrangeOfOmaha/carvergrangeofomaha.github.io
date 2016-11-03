$("#mobileNav").on("click touch", function(){
    $("#nav").show();
    $("#test").show();
    $("#mobileNavScreen").show();
});

$("#mobileNavScreen").on("click touch", function(){
    $("#nav").hide();
    $("#test").hide();
    $("#mobileNavScreen").hide();
});