var $ = jQuery.noConflict();

$(document).ready(function(){

  if ($('body').hasClass('home')) {
    $('body').css("overflow", "hidden");
  }

  $(".menu-nav-menu-container").prepend("<a href='https://ryanslowe.com'><div class='banner-text'><h1>RYAN S. LOWE</h1> <span>ACTOR</span> | <span>SINGER</span> | <span>DANCER</span> | <span>PERFORMER</span></div></a>");
  $(".menu-nav-menu-container .banner-text").attr('id', 'logo');

  toggleLogo();

  $("#homepage-main-image-container .banner-text").animate({opacity: "1"}, 3000);
  $("#homepage-main-image-container .banner-text span").animate({opacity: "1"}, 4400);
  $(".scroll-down-icon").animate({opacity: 1}, 6000);


  // mobile nav
  $('.hamburger-menu-container').click(function() {
    $('.mobile-nav').css('display', 'block');
  });
  $('.mobile-nav-close-button').click(function() {
    $('.mobile-nav').css('display', 'none');
  });
  $('.drop-icon').click(function() {
    $('ul.mobile-sub-menu').toggleClass('hidden');
    // animate drop down icon
    $(this).toggleClass('drop-icon-up');
  });
  

  $(function () {
    $(document).scroll(function () {
      let $nav = $(".menu-nav-menu-container");
      let $homepage = $("#homepage-main-image-container");

      // only toggle these classes on homepage
      if ($('body').hasClass('home')) {
        toggleLogo();
        $("body").css({"overflow": "auto"});
        // scroll name left
        $(".banner-text").css("left", -$(window).scrollTop()*1.4);   

      }
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


  // set links to gallery links
  $('.gallery-submenu-divs li').each(function(index) {
    const figure = this.firstChild;
    const caption = figure.lastChild;

    $(figure).wrap(function() {
      const linkText = $( caption ).text();
      return `<a href="${linkText.toLowerCase()}"></div>`;
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
        console.log(`JUST CLICKED ON GALLERY ${idx}`);
        
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
          let allImagesInCurrGallery = $(currGallery).children()
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

      console.log($('.performance-description').children());
      

      $('.performance-description').children().each(function() {
        console.log("hi");
        $(this).remove();
      });

    });
    
  });

  // add target=_blank to pdf link
  $(".wp-block-file").children(":first").attr('target', '_blank');
});


function toggleLogo() {
  var $nav = $(".menu-nav-menu-container");
  var $homepage = $("#homepage-main-image-container");
  console.log($homepage);
  
  $nav.toggleClass('scrolled black-text', $(this).scrollTop() >= $homepage.height());
  $("#logo").toggleClass("opaque", $(this).scrollTop() >= $homepage.height());
  $( ".menu-item-has-children ul").toggleClass('submenu-bg', $(this).scrollTop() >= $homepage.height());
}
