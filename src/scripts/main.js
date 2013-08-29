$(function() {
  var $header = $('header');
  $header.css({
    marginBottom: $(window).height() + 10 - $header.height()
  });
   $('.cli-code').on('click',function() {
    $(this).focus();
    $(this).select();
  });
});