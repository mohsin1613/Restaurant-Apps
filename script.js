$(document).ready(function(){

$('#menu-bars').click(function(){
 $(this).toggleClass('fa-times'); 
 $('.navbar').toggleClass('nav-toggle');
});

$(window).on('scroll load',function(){
    $('#menu-bars').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');
});

$('.menu .list .btn').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    var source=$(this).attr('data-src');
    
    $('#menu-img').attr('src',source);
});

});