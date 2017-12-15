$(document).ready(function(){
  $('#gallery-area').hide();
  var whatsClicked = "card";
  $('nav a').click(function(){
    if (whatsClicked !== $(this).attr('id')) {
      $('#jackalope').toggleClass('jackalope-gallery jackalope-card');
      whatsClicked = $(this).attr('id');
      $('section').each(function(){
        if ($(this).attr('id') !== whatsClicked + '-area') {
        $(this).slideUp();
        }
      });
      $('#' + whatsClicked + '-area').slideDown();
    }
  });
});
