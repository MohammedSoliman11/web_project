$(document).ready(function(){
    $(".header .owl-carousel").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:3500,
        nav:true,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"]
    });   
})