<?php
/**
 * The template for displaying shows
 *
 * @package ryanslowe
 * @subpackage ryanslowe
 * @since ryanslowe 1.0
 */

get_header(); ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">

		<header class="entry-header">
			<?php the_title('<h1>', '</h1>'); ?>
		</header>
		<div class="entry-content">
			<?php //the_post(); echo get_post_field('post_content'); ?>
		</div>


	</main>

  <?php
  $name = get_field('name');
  $character_played = get_field('character_played');
  $location = get_field('location');
  $director = get_field('director');
  $music_by = get_field('music_by');
  $book_by = get_field('book_by');
  $lyrics_by = get_field('lyrics_by');
  $choreographer = get_field('choreographer');
  ?>

   <h2>as <?php echo($character_played); ?></h2>


   <?php

$images = get_field('gallery');
$size = 'medium'; // (thumbnail, medium, large, full or custom size)

// OPTION 1
if( $images ): ?>
    <ul>
        <?php foreach( $images as $image ): ?>
            <li>
            	<?php echo wp_get_attachment_image( $image['ID'], $size ); ?>
            </li>
        <?php endforeach; ?>
    </ul>
<?php endif; ?>



</div>

<?php get_footer(); ?>
