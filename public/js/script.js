var $ = jQuery.noConflict();

$(document).ready(function(){

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".menu-nav-menu-container");
      var $homepage = $("#homepage-main-image-container");
      $nav.toggleClass('scrolled black-text', $(this).scrollTop() > $homepage.height());

      /**
      if ($(this).scrollTop() > $homepage.height()/2) {
      }

      console.log($("#banner-text").css("left"), $("#banner-text").css("left").length);
      console.log($("#banner-text").offset());
      $("#banner-text").css("left", -$(window).scrollTop()*1.1);
      **/
      $("#banner-text").css("left", -$(window).scrollTop()*.6);

      $("#banner-text h1").css({
        fontSize: 80-$(window).scrollTop()*.03
      });

    });
  });

  // sroll button animation
  $('.scroll-down-icon').click(function(e){
    // e.preventDefault();

      $('html, body').animate({
        scrollTop: jQuery('#homepage-main-image-container').height()},
        500,
        'linear'
      );
    })



  // $("#homepage-main-image-container").css().left -= (30);


});



// scrollTop: jQuery('#homepage-main-image-container').height(),
// $($(this).attr('href')).offset().top
