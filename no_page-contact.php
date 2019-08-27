
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

		<header class="entry-header">
			<?php the_title('<h1>', '</h1>'); ?>
		</header>
		<div class="entry-content">
			<?php the_post(); echo get_post_field('post_content'); ?>
		</div>


    <div class="container">
	<form method="POST" action="<?php echo(get_template_directory_uri() . '/'); ?>send.php">
		<div><label>Your Name:</label></div>
		<div><input type="text" name="myName" class="form-control" /></div>
		<div><label>Your Email:</label></div>
		<div><input type="text" name="myEmail" class="form-control" /></div>

		<div><label>Message:</label></div>
		<div><textarea cols="40" rows="5" name="myMessage" class="form-control"></textarea></div>
		<div class="float-right mt-2">
			<input type="submit" value="Send" class="btn btn-primary" />
		</div>
	</form>
</div>

	</main><!-- .site-main -->


</div><!-- .content-area -->

<?php get_footer(); ?>
