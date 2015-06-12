/**
 * Created by epl on 06.06.15.
 */

$(document).ready(function(){
    $('.bxslider').bxSlider({
        pager: false,
        nextText: '<img src="right.png">',
        prevText: '<img src="left.png">'
    });
    $(".menu").click(function(){
        $('nav>ul').toggle('slow');
    });

    $('#case-1-bt').click(function(){
        $("#case-1").arcticmodal();
    });
    $('#case-2-bt').click(function(){
        $("#case-2").arcticmodal();
    });

    $('#case-3-bt').click(function(){
        $("#case-3").arcticmodal();
    });

    $('#case-4-bt').click(function(){
        $("#case-4").arcticmodal();
    });


    $('#case-5-bt').click(function(){
        $("#case-5").arcticmodal();
    });

    $('#case-6-bt').click(function(){
        $("#case-6").arcticmodal();
    });

    $('.bill').click(function(){
        $("#form").arcticmodal();
    });


    $(".tabs").lightTabs();

    $('#politics-btn').click(function(){
        $("#politics").arcticmodal();
    });

    $("#photo section>div:nth-child(1)").click(function(){
        $("#photo1").arcticmodal();
    });

    $("#photo section>div:nth-child(2)").click(function(){
        $("#photo2").arcticmodal();
    });

    $("#photo section>div:nth-child(3)").click(function(){
        $("#photo3").arcticmodal();
    });

    $("#photo section>div:nth-child(4)").click(function(){
        $("#photo4").arcticmodal();
    });

    /*
    $(function(){
        $("#form").arcticmodal();
    })*/
});
