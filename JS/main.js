$(document).ready(function(){
    
      $(".navbar .nav-links .nav-ul li").on('mouseenter',function(){
            $('.navbar ' + ' ' + $(this).data('value')).slideDown();
      }).on('mouseleave',function(){
             $('.navbar ' + ' ' + $(this).data('value')).css('display','none');
      })
      $('.navbar .home-drop').on('mouseenter',function(){
          $(this).css('display','block')
      }).on('mouseleave',function(){
          $(this).css('display','none')
      })
      $('.signup').on('click',function(e){
            e.preventDefault();
      });
      $(window).on('load',function(){
        //   $('.login-pop').fadeIn();
          $('.loading').fadeOut()
      })

      $('.login-btn').on('click',function(e){
          e.preventDefault();
          $('.login-pop').fadeIn();
          $('.pop-container2').slideUp(600);
          $('.pop-container').slideDown(600);
      })
      $('.login-pop .close').on('click',function(){
        $('.login-pop').fadeOut();
    })
    $('.login-pop .close2').on('click',function(){
        $('.login-pop').fadeOut();
    })    
    $('.login-pop .signup').on('click',function(){
        $('.pop-container').slideUp(600);
        $('.pop-container2').slideDown(600);
    });
    var scrollVar = 0;
    $(window).on('scroll',function(){
        if($(window).scrollTop() > scrollVar){
            scrollVar = $(window).scrollTop();
        }
        if($(this).scrollTop() > 800){
            $('.navbar').addClass('fixed-nav');
            
        }else if($(window).scrollTop() < scrollVar){
            $('.navbar').removeClass('fixed-nav')
        } else {
            $('.navbar').removeClass('fixed-nav')
        }
    })

    /*$(".add a").on("click",function(){
        $(this).attr("href","cart.php");
    });*/
  });

