function activeLink($element) {
  $(".nav-link").removeClass('underline');
  $element.addClass('underline');
}

$(document).ready(function(){       // menu mobile
  $(".button-collapse").sideNav({closeOnClick: true});
  // $(".scrollspy").scrollSpy();
  $(".slider").slider({full_width: true});
  $(".parallax").parallax();

  $('.scrollspy').scrollSpy();

  $(document).ready(function() {
    /*this is where you put your event listeners*/

    $('.nav-link').click(function() {
      activeLink($(this));
    });

  });

});
