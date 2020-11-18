$(".scene1").hide(0);
$(".webpage").hide(0);

 $("body").css("background-color","black");
 
 
$(".start").click(function(){  
        $(".starting").fadeOut(400);
        $(".scene1").delay(400).fadeIn(400);
        $(".scene1").delay(3000).fadeOut(400);
        $(".webpage").delay(4500).fadeIn(400);
        $("body").css("background-color","#36538b");
    });
    
