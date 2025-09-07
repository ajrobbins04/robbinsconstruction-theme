<?php
?>
<!-- DEBUG HEADER ROBBINS -->
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header class="site-header">
  <h1>Robbins Construction</h1>
  <nav><?php wp_nav_menu(["theme_location" => "primary"]); ?></nav>
</header>

