<?php
/**
 *
 * @package ryanslowe
 * @subpackage ryanslowe
 * @since ryanslowe 1.0
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">
      <div class="homepage-container">
				<div id="homepage-main">
					<div id="homepage-main-image-container">
						<div id="banner-image">

						<?php echo do_shortcode('[metaslider id="403"]'); ?>
						
							<div class="banner-text shadow">
								<h1>RYAN LISA</h1>
								<span>THEATRE MAKER</span>  | 
								<span>NIGHTLIFE PERFORMER</span>  | 
								<span>ARTIST</span>  | 
								<span>ACTIVIST</span>
							</div>
							<div class="scroll-down-icon">
								<a href="#featured-content" id="arrow">
									<span class="shadow"></span>
								</a>
								<a href="#featured-content" class="shadow" id="scroll-link">
									Featured
								</a>
							</div>
						</div>

					</div>
				</div>
				<div id="featured-content">
					<?php echo get_post_field('post_content'); ?>
				</div>
  		</div>
		</main>
	</div>

<?php //get_sidebar(); ?>
<?php get_footer(); ?>
