<?php /* Template Name: Videos Page */

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
		<div class="entry-content">

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

<?php get_footer(); ?>
