var $ = jQuery.noConflict();

$(document).ready(function(){

  // find 1/100 of window height to set total height in css, and check for window resize
  let vh = window.innerHeight * .01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  $(window).on('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  $(".menu-nav-menu-container").prepend("<a href='https://ryanlisa.com' style='opacity:1;'><div class='banner-text'><h1>RYAN LISA</h1></div></a>");
  $(".menu-nav-menu-container .banner-text").attr('id', 'logo');

  if ($('body').hasClass('home')) {
    $('body').css("overflow", "hidden");
    $("#logo").addClass('no-opacity')
    $(".hamburger-menu-container").css('opacity', '0');

    // $(".content-area").css("opacity", "1");
    $(".menu-nav-menu-container li").toggleClass('shadow');

    $(".menu-nav-menu-container").animate({opacity: "1"}, 4500);
    $(".hamburger-menu-container").animate({opacity: "1"}, 4500);
    $("#homepage-main-image-container .banner-text").animate({opacity: "1"}, 4000);
    $("#homepage-main-image-container .banner-text span").animate({opacity: "1"}, 4400);
    $(".scroll-down-icon").animate({opacity: 1}, 6000);
    
    const arr = window.location.href.split('/');

    const idx = (window.location.href[window.location.href.length - 1] === '/') ? arr.length - 2 : arr.length - 1;

    if (arr[idx] === "#featured-content") {
      $(".menu-nav-menu-container li").toggleClass('shadow');
      $("#featured-content").css("opacity", "1");
      $("#featured-content h2").css("opacity", "1");
      $("#featured-content h3").css("opacity", "1");
      $("#featured-content ul").css("opacity", "1");
      // $(".menu-nav-menu-container li").toggleClass('shadow');
    }
  }
  else {
    $(".menu-nav-menu-container").animate({opacity: "1"}, 2000);
    $(".menu-item-has-children ul").addClass('submenu-bg')
  }

  $(".content-area").animate({opacity: "1"}, 1000);

  $(".footer-left").animate({opacity: 1}, 3500);
  $(".footer-right").animate({opacity: 1}, 3500);
  $("#ant-rez-container").animate({opacity: 1}, 3500);

  

  // toggleNavBar();

  


  // mobile nav
  $('.hamburger-menu-container').click(function() {
    $(this).css('display', 'none');
    $('.mobile-nav').css('display', 'block');
    $('.mobile-nav').animate({opacity: 1, left: '0'}, 400, 
                              () => {
                                $('.mobile-nav-close-button').css('display', 'block')

    });

  });
  $('.mobile-nav-close-button').click(function() {
    $(this).css('display', 'none');

    $('.mobile-nav').animate({opacity: 0, left: '100%'}, 400, function() {
      $('.mobile-nav').css('display', 'none');
      $('.hamburger-menu-container').css('display', 'block')
    });

    
  });
  $('.drop-icon').click(function() {
    $(this).next().toggleClass('hidden');
    // animate drop down icon
    $(this).toggleClass('drop-icon-up');
  });


  $(function () {
    $(document).scroll(function () {
      let $nav = $(".menu-nav-menu-container");
      let $homepage = $("#homepage-main-image-container");
      const navHeight = 40;

      // only toggle these classes on homepage
      if ($('body').hasClass('home')) {
        toggleNavBar();
        $("body").css({"overflow": "auto"});

        $('.menu-nav-menu-container').toggleClass('sticky', $(this).scrollTop() >= 40 + navHeight + $homepage.height(), 100);

      }
      else {
        $('.menu-nav-menu-container').toggleClass('sticky', $(this).scrollTop() >= navHeight, 100);

      }
    });
  });

  // sroll button animation
  $('.scroll-down-icon').click(function(e){
      $('html, body').animate({
        scrollTop: jQuery('#homepage-main-image-container').height()+ 40},
        1000,
        'linear'
      );
    $(".menu-nav-menu-container li").toggleClass('shadow');
    $("#featured-content h2").animate({opacity: "1"}, 1000);
    $("#featured-content h3").animate({opacity: "1"}, 2000);
    $("#featured-content ul").animate({opacity: "1"}, 3000);

    })


  // set links to gallery links
  $('.submenu-divs li').each(function(index) {
    const figure = this.firstChild;
    const caption = figure.lastChild;

    $(figure).wrap(function() {
      const linkText = $( caption ).text();
      if (linkText.toLowerCase() !== 'resume') {
        if (linkText.split(' ').length < 2) {
          return `<a href="${linkText.toLowerCase()}"></a>`;
        }
        else {
          return `<a href="${linkText.toLowerCase().split(' ').join('-')}"></a>`;
        }
        
      }
      else {
        return `<a href="https://ryanlisa.com/wp-content/uploads/2019/10/RyanSLoweResume-2.pdf"></a>`;
      }
    });
  });


  // create slideshow out of performance
  $(function() {
    const performances = $('.performance-photos-gallery li');
    let currImgIdx = 0;
    let imgSrcs = [];
    let allShowsInfo = [];

    $(performances).each( function(idx) {

      // click function for performance gallery
      $(this).click( function() {
        currImgIdx = 0;

        $("body").css("overflow", "hidden");
        $(".full-image-overlay-container").css("display", "block");
        $(".image-close-button").click( function() {
          $(".full-image-overlay-container").css("display", "none");
          $("body").css("overflow", "auto");
        });

        // set title
        $(".performance-title").text(() => {
          const performanceTitle = $(this).children()[0].lastChild;
          return $(performanceTitle).text();
        });

        // set details
        const allShowsInfoContainers =  $('.show-container');
        const currShowInfo = allShowsInfoContainers[idx];

        if (currShowInfo) {
          // p elements containing the field values
          const character = $(currShowInfo).children()[1];
          const location = $(currShowInfo).children()[2];
          const addtlInfo = $(currShowInfo).children()[3];
          const photographer = $(currShowInfo).children()[4];

          if (!allShowsInfo[idx]) {
            allShowsInfo[idx] =
            {
              character: character,
              location: location,
              addtlInfo: addtlInfo,
              photographer: photographer
            }
          }

          // add fields to the DOM
          $('.character-title').text($(character).text());
          $(allShowsInfo[idx].location).appendTo('.performance-description');
          $(allShowsInfo[idx].addtlInfo).appendTo('.performance-description');
          $(allShowsInfo[idx].photographer).appendTo('.performance-description');

          const showGalleries = $(".show-gallery");
          const currGallery = showGalleries[idx];
          // let allImagesInCurrGallery = $(currGallery).children();
          // switch line above with below on server
          let allImagesInCurrGallery = $(currGallery).first().children().children()
          imgSrcs = [];
          // get relevant gallery photos
          $(allImagesInCurrGallery).each( function(pic_idx) {
            const currImg = $(this.firstChild.firstChild);
            imgSrcs.push(currImg);

          });

          // get reference to img container to display image in array
          $(".centered-container .full-image-container img").attr('src', $(imgSrcs[currImgIdx]).attr('src'));
        }

      });

    });


    $('.left-arrow').click(function() {
      if (currImgIdx <= 0) {
        currImgIdx = imgSrcs.length-1;
      }
      else {
        currImgIdx--;
      }
      $(".centered-container .full-image-container img").attr('src', $(imgSrcs[currImgIdx]).attr('src'));
      // if image is portrait, keep arrows black
    });

    $('.right-arrow').click(function() {
      if (currImgIdx >= imgSrcs.length-1) {
        currImgIdx = 0;
      }
      else {
        currImgIdx++;
      }
      $(".centered-container .full-image-container img").attr('src', $(imgSrcs[currImgIdx]).attr('src'));
    });



    // close button
    $('.image-close-button').click(function() {
      $(".full-image-overlay-container").css("display", "none");

      // reset
      currImgIdx = 0;

      $('.performance-description').children().each(function() {
        $(this).remove();
      });

    });

  });

  // add target=_blank to pdf link
  // $(".wp-block-file").children(":first").attr('target', '_blank');
});


function toggleNavBar() {
  var $nav = $(".menu-nav-menu-container");
  var $homepage = $("#homepage-main-image-container");

  $('#logo').toggleClass('no-opacity', $(this).scrollTop() < $homepage.height() + 40, 1000)
  $("#logo").toggleClass("opaque", $(this).scrollTop() >= $homepage.height() + 40, 1000);
  $( ".menu-item-has-children ul").toggleClass('submenu-bg', $(this).scrollTop() >= $homepage.height());
}
