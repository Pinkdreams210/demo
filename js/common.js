// JavaScript Document
$(function() {
    "use strict";
  var obj= {
	  init: function(){
		    this.slider();
		    this.toTop();
			this.smoothScroll();
			this.iconMenu();	
			this.changeSize();		
	  },
	  //silder
	  slider: function(){
		  var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}
	  },
	  //totop
	  toTop: function(){
		  $("#totop").hide();
		  $(window).scroll(function(){
			  if($(this).scrollTop() > 100){				  
				  $("#totop").fadeIn();
			  }
			  else{
				  $("#totop").fadeOut();				  
			  }
		  });
		  $("#totop a").click(function(){
			 $('body,html').animate({
				scrollTop:0 
			 }, 500);
			 return false;
		  });
	  },
	  //smoothScroll
	  smoothScroll : function(){
			$('a[href^="#"]').click(function(){
				var wWidth = $(window).width();
					if ( $( $(this).attr('href')).length ) {
						var p = $( $(this).attr('href') ).offset();
						if(wWidth <= 640){
							$('html,body').animate({ scrollTop: p.top - 60}, 500);
							$('#sp-gnavi').removeClass('open');
						} else {
							$('html,body').animate({ scrollTop: p.top - 80}, 500);
						}
					}
				return false;
			});
		},
	 //sp gnavi	 
      iconMenu: function() {
            $('.menu-icon').removeClass('active');
            $('.has').removeClass('active');
            $('.menu-icon').click(function() {
                $(this).toggleClass('active');
                $('#gnavi').stop().slideToggle();
                $('.sub').slideUp(800);
                $('.has.active').removeClass('active');
            });
            $('#gnavi .has a').click(function() {
                $(this).parent().toggleClass('active');
                $(this).parent().find(".sub").stop(0).slideToggle();
            });
            $('#gnavi .close > a').click(function() {
                $('#gnavi').slideUp(800);
                $('.menu-icon').removeClass('active');
                $('.has').removeClass('active');
                $('.sub').removeAttr('style');
				
            $(window).bind('resize load scroll', function() {
                var ww = $(window).width();
                var hHead = $('#header').outerHeight();
                var pTop = $(this).scrollTop();
                if (ww > 640) {
                    $('.menu-icon').removeClass('active');
                    $('#gnavi').removeAttr('style');
                    $('#mainvisual').removeAttr('style');
                    $('#header').removeAttr('style');
                    $('#index #content').removeAttr('style');
                    $('#footer').removeAttr('style');
                    if (pTop > hHead) {
                        $('#gnavi').addClass('fixed');
                    } else {
                        $('#gnavi').removeClass('fixed');
                        $('#mainvisual').removeAttr('style');
                    }
                } else {

                    $("#gnavi").css({
                        'height': 'calc(100% - ' + hHead + 'px)'
                    });
                    if (pTop > 112) {

                        $("#sp-follow").fadeIn();
                        $("#header").addClass('fixed');
                    } else {
                        $("#sp-follow").fadeOut();
                        $("#header").removeClass('fixed');
                    }
                    $('#gnavi').removeClass('fixed');
                }
            });
            });
        },
	
		
		 changeSize : function() {
            $(window).bind('resize load', function() {
                var ww = $(window).width();
				if(ww > 640){
					  $('.sub').removeAttr('style');
                     $('.menu-icon').removeClass('active');
					$('#gnavi').removeAttr('style');
				}else{
					 $('#gnavi .has > a').click(function(){
						$(this).toggleClass('active'); 
						 $(this).next('.sub').stop().slideToggle();
						 
					 });
					
				}
			});
		 
		 },
  };
  
  obj.init();
});


