
$(window).scroll(function() {
    parallax();
  })
  $(window).scroll(function() {
    parallaxImage();
  })
  function parallax() {
      var wScroll = $(window).scrollTop();
    // testing   console.log(wScroll);
    $('.parallax-head').css('background-position',
    'center '+(wScroll*0.5)+'px');

  };

  function parallaxImage() {
    var scroll = $(window).scrollTop();
    var screenHeight = $(window).height();
  
    $('.parallax-image').each(function() {
      var offset = $(this).offset().top;
      var distanceFromBottom = offset - scroll - screenHeight
      
      if (offset > screenHeight && offset) {
        $(this).css('background-position', 'center ' + (( distanceFromBottom  ) * 0.4) +'px');
      } else {
        $(this).css('background-position', 'center ' + (( -scroll ) * 0.5) + 'px');
      }
    })
  };

  

   