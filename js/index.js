$('.affix').affix({
  offset: {
    top: 700,
    bottom: 0
  }
})

$('.mhThumb').hover(
        function(){
            $(this).find('.mhCap').fadeIn(900);
        },
        function(){
            $(this).find('.mhCap').fadeOut(400);
        }
    );


$(document).scroll(function() {
  var i = $(this).scrollTop();
  if (i > 800) {
    $('.socialIcons').fadeIn();
  } else {
    $('.socialIcons').fadeOut();
  }
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});