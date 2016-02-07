$(function(){
    
    $("#myCarousel").carousel({
         interval : false
     });
    
    $(".slNav>li.First").click(function(){
        $(".slNav>li").removeClass('active');
        $(".slNav>li>span").removeClass('active');
        $("#myCarousel").carousel(0);
        $(this).addClass('active');
        $('.slNav>li.First>span').addClass('active');
    });
    
     $(".slNav>li.Second").click(function(){
        $(".slNav>li").removeClass('active');
        $(".slNav>li>span").removeClass('active');
        $("#myCarousel").carousel(1);
        $(this).addClass('active');
        $('.slNav>li.Second>span').addClass('active');
    });
    
     $(".slNav>li.Thrid").click(function(){
         $(".slNav>li").removeClass('active');
        $(".slNav>li>span").removeClass('active');
        $("#myCarousel").carousel(2);
        $(this).addClass('active');
        $('.slNav>li.Thrid>span').addClass('active');
    });

    
   
    
    setInterval(function(){
        $("#myCarousel").carousel('next');
          if($('li.one').attr("class")==="one active"){
         $(".slNav>li").removeClass('active');
        $(".slNav>li>span").removeClass('active');
         $('.slNav>li.First').addClass('active');
        $('.slNav>li.First>span').addClass('active');
    }
    
     if($('li.two').attr("class")==="two active"){
         $(".slNav>li").removeClass('active');
        $(".slNav>li>span").removeClass('active');
         $('.slNav>li.Second').addClass('active');
        $('.slNav>li.Second>span').addClass('active');
    }
    
     if($('li.three').attr("class")==="three active"){
         $(".slNav>li").removeClass('active');
        $(".slNav>li>span").removeClass('active');
         $('.slNav>li.Thrid').addClass('active');
        $('.slNav>li.Thrid>span').addClass('active');
    }                 
    },7000);
    
    
});

