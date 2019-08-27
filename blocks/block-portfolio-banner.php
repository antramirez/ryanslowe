<div class="portfolio-banner-container" style="border: 2px solid black; width: 600px; height: 400px; position: relative; margin: auto; background-image: url(<?php block_field('background-image'); ?>); background-size:cover;">
  <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
    <h3>
      <a href="<?php echo esc_url(home_url(get_current_URI() . '/' . block_field('label'))); ?>">
        <?php block_field( 'label' ); ?>
      </a>
    </h3>
  </div>
  <?php

  ?>

</div>
