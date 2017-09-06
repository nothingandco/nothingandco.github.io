/*--------Desktop Nav Hover--------*/

$("#navbar-nav-list-element-left").hover(function() {
  $('.bar-left').toggleClass('bar-active');
});

$("#navbar-nav-list-element-middle").hover(function() {
  $('.bar-middle').toggleClass('bar-active');
});

$("#navbar-nav-list-element-right").hover(function() {
  $('.bar-right').toggleClass('bar-active');
});

/*--------Burger Trigger--------*/

$('.burger').click(function(){
  $(this).toggleClass('active');
});

/*--------Mobile Menu Nav Functions--------*/

//Toggles white-bg to cover content when menu slides out
$("#button").click(function() {
  $('.cloak-hide').toggleClass('cloak-hide-active');
});

$("#button").click(function() {
  $('.menu-transform').toggleClass('menu-transform-active');
});
//Fades in Text?
$("#button").click(function() {
  $('.mobile-nav-transition').toggleClass('mobile-nav-transition-active');
});

/*--------Carousel Counter--------*/
var totalItems = $('.carousel-item').length;
var currentIndex = $('div.active').index() + 1;
$('.num').html(''+currentIndex+'/'+totalItems+'');

$('#featured').on('slid.bs.carousel', function() {
    currentIndex = $('div.active').index() + 1;
   $('.num').html(''+currentIndex+'/'+totalItems+'');
});

/*--------Hide Logo on Scroll--------*/
$(window).scroll(function(){
        var scroll = $(window).scrollTop();
            $('.scroll-hide').css({'opacity':(( 60-scroll )/60)});
});

/*--------Carousel Key Control--------*/
jQuery(document).bind('keyup', function(e) {

  if (e.keyCode==37) {
      jQuery('a.carousel-control-prev').trigger('click');
  }

  else if(e.keyCode==39){
      jQuery('a.carousel-control-next').trigger('click');
  }

});

//$('.modal1').on('show.bs.modal', function() {
//  setTimeout(function() {
//    $('.modal-backdrop').css({'background': '#fff', 'opacity': '1'});
//  });
//});
//
//$('.modal1').on('hidden.bs.modal', function() {
//  $('.modal-backdrop').css({'background': ''});
//});
/*--------Carousel Swipe Control--------*/
$(".carousel").swipe({

  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll:"vertical"

});
