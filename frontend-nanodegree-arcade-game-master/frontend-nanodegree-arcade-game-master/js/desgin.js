$(".startGame").height($(window).height());
$("#Game").height($(window).height());

$(".startGame button").click(function(){
    $(".startGame").slideUp(2000);
    $("#Game").slideDown(2000);
});

$(".startGame .row .player").click(function(){
    $(this).siblings().hide(2000);
    player.playerNum = parseInt($(this).attr("id"));
    setTimeout(function(){
    $(".startGame").slideUp(2000);
    $("#Game").slideDown(2000);
    },3000);
    
});

$(".playagain").click(function(){
    var heart = "images/Heart.png";
    var image = "<img src = " + heart + ">";
    var Num = $("#Game .row img").length;
    console.log(Num);
    for(var i=0;i< Num;i++)
    {
        $("#Game .row").children("img:first-child").remove();
    }
    for(var i =0 ;i<4;i++)
    {
        $("#Game .row").append(image);
    }
    $(".congratulations").slideUp(1000);
    $(".fail").slideUp(1000);
    $("#Game").slideDown(2000);
    player.x = 202;
    player.y = 390;
    Resources.onReady(Engine);
});