$(function() {

  var colors = ['#30D9FF','#FD7D08','#FC006D','#FFED0A','#75E706','#962BE1','#000'];

  $( ".menu-item a" ).hover(function() {
    $(this).css('color', colors[Math.floor(Math.random() * colors.length)]);  
  }, function(){
    $( this ).css('color', '#000');
  });

  $( "body" ).mousemove(function( event ) {
    if ( event.pageX % 2 === 0 && event.pageY % 2 === 0) {
      $( ".brand" ).each(function( index ) {
        $(this).css('color', colors[Math.floor(Math.random() * colors.length)]);
      });
    }
  });

});