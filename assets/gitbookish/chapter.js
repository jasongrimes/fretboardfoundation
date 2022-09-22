$(function () {
  // Watch for scroll event event
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = 0; // $('header').outerHeight();

  $(window).scroll(function(event){
    didScroll = true;
  });
  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);
  function hasScrolled() {
    var st = $(this).scrollTop();
    console.log('has scrolled');

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta) {
      return;
    }

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
      // Scroll Down
      console.log('scroll down');
      // $('header').removeClass('nav-down').addClass('nav-up');
      $('.chapter').removeClass('with-fixed-nav');
    } else {
      // Scroll Up
      console.log('scroll up');
      if(st + $(window).height() < $(document).height()) {
        // $('header').removeClass('nav-up').addClass('nav-down');
        $('.chapter').addClass('with-fixed-nav');
      }
    }

    lastScrollTop = st;
  }
});
