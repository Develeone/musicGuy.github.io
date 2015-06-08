/**
 * Created by epl on 06.06.15.
 */
$(".menu").click(function(){
    $('nav>ul').toggle('slow');
});

$(document).ready(function(){
    $('.bxslider').bxSlider({
        pager: false,
        nextText: '<img src="right.png">',
        prevText: '<img src="left.png">'
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

    /*
    $(function(){
        $("#form").arcticmodal();
    })*/
});
