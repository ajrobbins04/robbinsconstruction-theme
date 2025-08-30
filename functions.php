<?php
/** File executes only when WordPress is running in the browser */
function robbins_setup() {
    add_theme_support("title-tag");
    add_theme_support("post-thumbnails");
    register_nav_menus([
        "primary" => __("Primary Menu", "robbins"),
    ]);
}