$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
});

$(function(){$(".scrollt").click(function(){$("html,body").animate({scrollTop:$("body").offset().top},"2000");return false;})})






