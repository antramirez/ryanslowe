var $ = jQuery.noConflict();

$(document).ready(function(){

  if ($('body').hasClass('home')) {
    console.log('hi');
    
    $('body').css("overflow", "hidden");
  }

  $(".menu-nav-menu-container").prepend("<a href='../'><div class='banner-text'><h1>RYAN S. LOWE</h1> <span>ACTOR</span> | <span>SINGER</span> | <span>DANCER</span> | <span>PERFORMER</span></div></a>");
  $(".menu-nav-menu-container .banner-text").attr('id', 'logo');

  toggleLogo();


  $("#homepage-main-image-container .banner-text").animate({opacity: "1"}, 3000);
  $("#homepage-main-image-container .banner-text span").animate({opacity: "1"}, 4400);
  $(".scroll-down-icon").animate({opacity: 1}, 6000);
  

  

  // setTimeout(() => {
  //   $("body").css({"overflow": "auto"});
  // }, 4000)



     




  $(function () {
    $(document).scroll(function () {
      var $nav = $(".menu-nav-menu-container");
      var $homepage = $("#homepage-main-image-container");

      // only toggle these classes on homepage
      if ($('body').hasClass('home')) {
        toggleLogo();

        $("body").css({"overflow": "auto"});



        //
      }






        $(".banner-text").css("left", -$(window).scrollTop()*1.4);


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

      $(".banner-text").animate( {
        left: "-=50"
      }, 1000, 'linear');
    })




  // add target=_blank to pdf link
  $(".wp-block-file").children(":first").attr('target', '_blank');


});


function toggleLogo() {
  var $nav = $(".menu-nav-menu-container");
  var $homepage = $("#homepage-main-image-container");

  $nav.toggleClass('scrolled black-text', $(this).scrollTop() >= $homepage.height());

  $("#logo").toggleClass("opaque", $(this).scrollTop() >= $homepage.height());
  // $('body').toggleClass("overflow-auto", $(this).scrollTop() >= $homepage.height());
  
}
// scrollTop: jQuery('#homepage-main-image-container').height(),
// $($(this).attr('href')).offset().top
