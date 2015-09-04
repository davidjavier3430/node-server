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

  // this is where you put your event listeners

  $('.nav-link').click(function() {
    activeLink($(this));
  });

  $(window).resize(function() {
    watchHeight();
    watchWidth();
  });

});


function watchHeight() {
  var height = $("body").innerHeight();
  console.log("current home-section height: ", height);
}

function watchWidth() {
  var width = $("body").innerWidth();
  console.log("current home-section width: ", width);
}
