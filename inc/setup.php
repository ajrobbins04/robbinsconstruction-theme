<?php
/** 
 * Theme setup (supports, menus, images sizes, etc.)
 */
function robbins_setup() {
    add_theme_support("title-tag");
    add_theme_support("post-thumbnails");
    register_nav_menus([
        "primary" => __("Primary Menu", "robbins"),
    ]);
}

add_action("after_setup_theme", "robbins_setup");