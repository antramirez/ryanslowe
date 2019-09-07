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

		<header class="entry-header">
			<?php the_title('<h1>', '</h1>'); ?>
		</header>
		<div class="entry-content <?php if (is_page('Contact')): echo ('no-margin'); endif;?>">

			<?php
			while ( have_posts() ) :
				the_post();

				// Include the page content template.
				// get_template_part( 'template-parts/content', 'page' );
				the_content();


				// End of the loop.
			endwhile;



			?>


		</div>

	</main><!-- .site-main -->


</div><!-- .content-area -->

<div class="full-image-overlay-container">
	<div class="image-close-button"></div>
	<div class="full-image-overlay-main"> 
		<div class="arrow-container left-arrow-container">
			<span class="arrow left-arrow"></span>
		</div>
		<div class="centered-container">
			<h3 class="performance-title"></h3>
			<p class="character-title"></p>
			<div class="full-image-container">
				<img src="" alt="">
			</div>
			<div class="performance-description">
				
			</div>
		</div>
		<div class="arrow-container right-arrow-container">
			<span class="arrow right-arrow"></span>
		</div>
	</div>
	

</div>

<?php get_footer(); ?>
