$(document).ready(function(){
  $('#gallery-area').hide();
  $('nav a').click(function(){
    var whatsClicked = $(this).attr('id');
    $('section').each(function(){
      if ($(this).attr('id') !== whatsClicked + '-area') {
      $(this).slideUp();  
      }
    });
    $('#' + whatsClicked + '-area').slideDown();
  });
});
