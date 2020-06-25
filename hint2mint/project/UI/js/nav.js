$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()){
            $("nav").css({"background-color":"transparent"});   
        }
        else{
            $("nav").css({"background-color":"white"});
        }

    })
})