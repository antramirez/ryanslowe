<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- <link rel="stylesheet" href="style.css"> -->
  <!-- <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet"> -->
 
    <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-147260724-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-147260724-1');
  </script>
 
  <title>Ryan S. Lowe</title>

  <?php wp_head(); ?>


</head>
<body <?php body_class(); ?>>

  <?php wp_nav_menu( array( 'theme_location' => 'header-menu' ) ); ?>
  <div class="hamburger-menu-container">
    <div class="hamburger-menu-bar"></div>
    <div class="hamburger-menu-bar"></div>
    <div class="hamburger-menu-bar"></div>
  </div>
  <div class="mobile-nav">
    <div class="mobile-nav-close-button"></div>
    <a href='https://ryanslowe.com' id="mobile-nav-logo"><div class='banner-text'><h1>RYAN S. LOWE</h1> <span>ACTOR</span> | <span>SINGER</span> | <span>DANCER</span> | <span>PERFORMER</span></div></a>
    <div class="mobile-nav-menu-container">
      <ul>
        <!-- <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a></li> -->
        <li><a href="<?php echo esc_url( home_url( '/about' ) ); ?>">About</a></li>
        <li><a href="<?php echo esc_url( home_url( '/happening' ) ); ?>">Happening</a></li>
        <li class="mobile-menu-item has-children">
          <a href="<?php echo esc_url( home_url( '/gallery' ) ); ?>">Gallery</a>
          <span class="drop-icon drop-icon-down"></span>
          <ul class="mobile-sub-menu hidden">
            <li class="sub-menu-item"><a href="<?php echo esc_url( home_url( '/gallery/performances' ) ); ?>">Performances</a></li>
            <li class="sub-menu-item"><a href="<?php echo esc_url( home_url( '/gallery/videos' ) ); ?>">Videos</a></li>
            <li class="sub-menu-item"><a href="<?php echo esc_url( home_url( '/gallery/miscellaneous' ) ); ?>">Miscellaneous</a></li>
          </ul>
        </li>
        <li><a href="<?php echo esc_url( home_url( '/videos' ) ); ?>">Videos</a></li>

        <li><a href="<?php echo esc_url( home_url( '/resume' ) ); ?>">Resume</a></li>

        <li><a href="<?php echo esc_url( home_url( '/contact' ) ); ?>">Contact</a></li>



      </ul>
    </div>
    
  </div>
  <?php //body_class(); ?>
