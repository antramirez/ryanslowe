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
 
  <title>Ryan Lisa <?php if (!is_front_page()) echo "-"; echo wp_title(''); ?></title>

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
    <div class="mobile-nav-menu-container">
      <ul>
        <li><a href="<?php echo get_home_url(); ?>" id="mobile-nav-logo"><h1>RYAN LISA</h1></a></li>
        <li><a href="<?php echo esc_url( home_url( '/about' ) ); ?>">About</a></li>
        <li><a href="<?php echo esc_url( home_url( '/now-playing' ) ); ?>">Now Playing</a></li>
        <li class="mobile-menu-item has-children">
          <a href="<?php echo esc_url( home_url( '/theatre' ) ); ?>">Theatre</a>
          <span class="drop-icon drop-icon-down"></span>
          <ul class="mobile-sub-menu hidden">
            <li class="sub-menu-item"><a href="<?php echo esc_url( home_url( '/theatre/performances' ) ); ?>">Performances</a></li>
            <li class="sub-menu-item"><a href="<?php echo esc_url( home_url( '/theatre/headshot' ) ); ?>">Headshots</a></li>
            <li class="sub-menu-item"><a href="<?php echo esc_url( home_url( '/theatre/videos' ) ); ?>">Videos</a></li>
            <li class="sub-menu-item"><a href="<?php echo esc_url( home_url( '/wp-content/uploads/2019/08/RyanSLoweResume.pdf' ) ); ?>">Resume</a></li>
          </ul>
        </li>
        <li class="mobile-menu-item has-children">
          <a href="<?php echo esc_url( home_url( '/modeling' ) ); ?>">Modeling</a>
          <span class="drop-icon drop-icon-down"></span>
          <ul class="mobile-sub-menu hidden">
            <li class="sub-menu-item"><a href="<?php echo esc_url( home_url( '/modeling/photography' ) ); ?>">Photography</a></li>
            <li class="sub-menu-item"><a href="<?php echo esc_url( home_url( '/modeling/figure-drawing' ) ); ?>">Figure Drawing</a></li>
          </ul>
        </li>
        <li><a href="<?php echo esc_url( home_url( '/contact' ) ); ?>">Contact</a></li>
      </ul>
    </div>
    
  </div>
  <?php //body_class(); ?>
