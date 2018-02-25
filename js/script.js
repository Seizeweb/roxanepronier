$(function() {

  var colors = ['#30D9FF','#FD7D08','#FC006D','#FFED0A','#75E706','#962BE1'];

  $(".menu-item a").each(function() {   
    if (this.href == window.location.href) {
      $(this).addClass("is-active");
    }
  });

  $( ".menu-item a.is-active, .menu-item a:focus" ).css('color', colors[Math.floor(Math.random() * colors.length)]);

  $( ".menu-item a:not(.is-active)" ).hover(function() {
    $(this).css('color', colors[Math.floor(Math.random() * colors.length)]);  
  }, function(){
    $( this ).css('color', '#000');
  });

  // brand change color on mousemove

  $( "body" ).mousemove(function( event ) {
    if ( event.pageX % 2 === 0 && event.pageY % 2 === 0) {
      $( ".brand" ).each(function( index ) {
        $(this).css('color', colors[Math.floor(Math.random() * colors.length)]);
      });
    }
  });

  // lightbox

  $('.lightbox').fluidbox();

  // contact form mail

  $('#contactform').attr('action', '//formspree.io/' + 'roxanepronier' + '@' + 'gmail' + '.' + 'com');
});