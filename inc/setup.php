<?php
/** 
 * Theme setup (supports, menus, images sizes, etc.)
 */
function robbins_setup() {
    add_theme_support("title-tag");
    add_theme_support("post-thumbnails");
    add_theme_support("html5", [
        "search-form",
        "comment-form",
        "comment-list",
        "gallery",
        "caption",
    ]);
    add_theme_support("custom-logo", [
        "height"      => 80,
        "width"       => 240,
        "flex-height" => true,
        "flex-width"  => true,
    ]);

    add_theme_support("align-wide");
    add_theme_support("wp-block-styles");
    add_theme_support("editor-styles");
    add_editor_style("dist/style.css");
    
    register_nav_menus([
        "primary" => __("Primary Menu", "robbins"),
    ]);
}

add_action("after_setup_theme", "robbins_setup");