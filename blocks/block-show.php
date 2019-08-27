<div class="upcoming-show-container" style="border: 2px solid black;">
  <h3><?php block_field( 'name' ); ?></h3>
  <?php
  block_field( 'show' );
  block_field( 'character' );
  block_field( 'location' );
  block_field( 'additional_info' );
  block_field( 'photographer' );

  the_post(); echo get_post_field('post_content');


  ?>

</div>
