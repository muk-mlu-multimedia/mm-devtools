<?php
/*
Plugin Name: minimalmuk DevTools
Plugin URI: http://mukblogs.medienkomm.uni-halle.de
GitHub Plugin URI: https://github.com/muk-mlu-multimedia/mm-devtools
Description: Adds an admin bar to toggle visual CSS debugging and a 960 grid overlay. Grid overlay adapted from http://webdesign.tutsplus.com/tutorials/htmlcss-tutorials/quick-tip-a-handy-grid-overlay-toolbar/
Author: Tobias Grasse
Version: 1.0.1
Author URI:
License: GPL2
*/

if ( ! defined( 'WPINC' ) ) {
    die;
}

function dev_assets() {
  echo  '<!-- Temporary Development Assets -->';
  echo	'<!-- ******************************************************** -->';
  echo	'<link rel="stylesheet" href="'. plugin_dir_url(__FILE__) .'mm-devtools.css">';
  echo	'<script src="http://code.jquery.com/jquery-latest.js"></script>';
  echo	'<script src="'. plugin_dir_url(__FILE__) .'mm-devtools.js"></script>';
  echo	'<!-- ******************************************************** -->';
}

add_action('wp_footer', 'dev_assets');

?>