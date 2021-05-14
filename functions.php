<?php

// adding css and js
function ryanslowe_setup() {
  wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
  wp_enqueue_style('style', get_template_directory_uri() . '/dist/css/style.css', NULL, microtime());

  wp_enqueue_script("jquery");
  wp_enqueue_script('main', get_theme_file_uri('/dist/js/script.js'), ['jquery'], microtime(), true);
}

add_action('wp_enqueue_scripts', 'ryanslowe_setup');


function ryanslowe_init() {
  add_theme_support('post-thumbnails');
  add_theme_support('title-tag');

  add_theme_support( 'html5', array(
    'search-form',
    'comment-form',
    'comment-list',
    'gallery',
    'caption'
  ) );

}

add_action('after_setup_theme', 'ryanslowe_init');

function ryanslowe_custom_post_type() {
  register_post_type('show',
    array(
      'rewrite' => array('slug' => 'shows'),
      'labels' => array(
        'name' => 'Shows',
        'singular_name' => 'Show',
        'add_new_item' => 'Add New Show',
        'edit_item' => 'Edit Show',
        'view_item' => __('View Show'),
    		'search_items' => __('Search Shows'),
    		'not_found' =>  __('Nothing found'),
    		'not_found_in_trash' => __('Nothing found in Trash'),
    		'parent_item_colon' => ''
      ),
      'menu-icon' => 'dashicons-tickets',
      'public' => true,
      'has_archive' => true,
      'supports' => array(
        'title', 'thumbnail', 'editor', 'comments'
      )
    ));
}

add_action('init', 'ryanslowe_custom_post_type');

if( function_exists('acf_add_options_page') ) {
	acf_add_options_page();
}

function register_my_menu() {
  register_nav_menu('header-menu',__( 'Nav Menu' ));
}

add_action( 'init', 'register_my_menu' );

?>
