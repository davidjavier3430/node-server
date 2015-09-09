function activeLink($element) {
  $(".nav-link").removeClass('underline');
  $element.addClass('underline');
}

$(document).ready(function(){       // menu mobile
  $(".button-collapse").sideNav({closeOnClick: true});
  // $(".scrollspy").scrollSpy();
  $(".slider").slider({full_width: true});
  $(".parallax").parallax();

  $('.modal-trigger').leanModal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    in_duration: 300, // Transition in duration
    out_duration: 200, // Transition out duration
  });

  $('.materialboxed').materialbox();

  $('.scrollspy').scrollSpy();

  $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

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
