<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- <link rel="stylesheet" href="style.css"> -->
  <!-- <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet"> -->
  <title>Ryan S. Lowe</title>

  <?php wp_head(); ?>


</head>
<body <?php body_class(); ?>>

  <?php wp_nav_menu( array( 'theme_location' => 'header-menu' ) ); ?>
  <div class="mobile-nav">
    <ul>
      <li><a href="">About</a></li>
      <li><a href="">Happening</a></li>
      <li class="mobile-menu-item has-children">
        <a href="" >Gallery</a>
        <ul>
          <li class="sub-menu-item"><a href="">Performances</a></li>
          <li class="sub-menu-item"><a href="">Headshots</a></li>
          <li class="sub-menu-item"><a href="">Miscellaneous</a></li>
        </ul>
      </li>
      <li><a href="">Videos</a></li>
      <li><a href="">Resume</a></li>
      <li><a href="">Contact</a></li>


    </ul>
  </div>
  <?php //body_class(); ?>
