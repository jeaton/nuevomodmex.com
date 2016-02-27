$(document).ready(function()
{
  $(window).resize(function()
  {
    $('.fullscreen').css(
    {
      position: 'absolute'
    });

    $('.fullscreen').css(
    {
      left: ($(window).width() - $('.fullscreen').outerWidth()) / 2,
      top: ($(window).height() - $('.fullscreen').outerHeight()) / 2
    });
  });

  // call `resize` to center elements
  $(window).resize();
});
