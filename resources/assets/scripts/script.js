$(document).ready(function(e){

  var menu = $(".menu");
  var button = $(".btn-menu");
  var screen = $(window).width();
  
  $(button).click(function(){
    $(menu).slideToggle("fast");
  });
  
  $(window).resize(function(){
      if(screen > 320 && menu.is(":hidden")) {
        menu.removeAttr("style");
      }
  });
  

// scroll efect

 $("nav a").click(function (event) {
    event.preventDefault();
    var anchor = 0;
    if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
        anchor = $(document).height() - $(window).height();
    } else {
        anchor = $(this.hash).offset().top;
    }
 
    $('html,body').animate({
        scrollTop: anchor
    }, 400, 'swing');
});
});