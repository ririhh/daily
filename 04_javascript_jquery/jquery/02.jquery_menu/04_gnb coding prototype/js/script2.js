$(function(){
    $("nav").hover(function(){
        $(this).children('ul').addClass('active');
    },function(){
        $(this).children('ul').removeClass('active');
    })
});