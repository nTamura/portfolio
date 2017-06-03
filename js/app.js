$(document).ready(function(){

  $(function(){
    $('.first').waypoint(function() {
      $('.first').addClass('animated fadeInDown');
      }, { offset: '50%' }
    );
    $('.second').waypoint(function() {
      $('.second').addClass('animated fadeInRight');
      }, { offset: '50%' }
    );
    $('.third').waypoint(function() {
      $('.third').addClass('animated fadeInLeft');
      }, { offset: '50%' }
    );
  });

  


  $(function blink() {
    $('.blink_me').fadeOut(500).fadeIn(500, blink);
  });

});
