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


						<div id="banner-image" style="background: url(<?php echo(content_url() . '/uploads/2019/08/Webp.net-compress-image-1024x683.jpg'); ?>)">
							<div id="banner-text">
								<h1>RYAN S. LOWE</h1>
								<span>ACTOR</span> |
								<span>SINGER</span> |
								<span>DANCER</span> |
								<span>PERFORMER</span>
							</div>
							<div class="scroll-down-icon">
								<a href="#featured-content" id="arrow">
									<span></span>
								</a>
								<a href="#featured-content" id="scroll-link">
									Scroll
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
