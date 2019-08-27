<div class="upcoming-show-container" style="border: 2px solid black;">
  <h3><?php block_field( 'name' ); ?></h3>
  <?php
  block_field( 'show-duration' );
  block_field( 'location' );
  block_field( 'image' );
  block_field( 'show-info' );
  block_field( 'other-info' );
  block_field( 'tickets-link' );

  the_post(); echo get_post_field('post_content');

  if ( block_field( 'name' ) ):
    echo("   name: " . block_field( 'name' ));
  else:
    echo("UGH");
  endif;

  // echo get_post_field('post_content', $post->ID);

  ?>

</div>
