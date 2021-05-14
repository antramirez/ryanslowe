<?php
/**
 * The template for displaying pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages and that
 * other "pages" on your WordPress site will use a different template.
 *
 * @package ryanslowe
 * @subpackage ryanslowe
 * @since ryanslowe 1.0
 */

get_header(); ?>

<div id="primary" class="content-area">
	<main id="main" class="site-main" role="main">	
		<div class="entry-content">
			<header class="entry-header">
				<?php the_title('<h1>', '</h1>'); ?>
			</header>
			<?php
			while ( have_posts() ) :
				the_post();
				the_content();
			endwhile;
			?>
		</div>
	</main><!-- .site-main -->
</div><!-- .content-area -->


<div class="full-image-overlay-container">
	<div class="image-close-button"></div>
	<div class="full-image-overlay-main"> 
		<div class="full-image-margin"></div>
		<div class="centered-container">
			<h3 class="performance-title"></h3>
			<p class="character-title"></p>
			<div class="full-image-container">
				<div class="arrow-container left-arrow-container">
					<span class="arrow left-arrow"></span>
				</div>
				<img src="" alt="">
				<div class="arrow-container right-arrow-container">
					<span class="arrow right-arrow"></span>
				</div>
			</div>
			<div class="performance-description">
				
			</div>
		</div>
		<div class="full-image-margin"></div>
	</div>
</div> 


<?php get_footer(); ?>
