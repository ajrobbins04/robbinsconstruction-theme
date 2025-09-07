<?php
/**
 * Enqueue web fonts first to ensure they are available 
 * for use in other assets that are enqueued later.
 */
function robbins_enqueue_fonts() {
    wp_enqueue_style(
        "robbins-fonts",
        "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap",
        [],
        null
    );
}
add_action("wp_enqueue_scripts", "robbins_enqueue_fonts", 5);

/**
 * Enqueue front-end assets from /dist
 */
function robbins_enqueue_assets() {
    $theme_uri = get_stylesheet_directory_uri();
    $theme_path = get_stylesheet_directory();

    $css_file = $theme_path . "/dist/style.css";
    $js_file = $theme_path . "/dist/main.js";

    // Only enqueue if the files exist
    if (file_exists($css_file)) {
        wp_enqueue_style(
            "robbins-style", 
            $theme_uri . "/dist/style.css", 
            [], 
            filemtime($css_file)
        );
    }

    if (file_exists($js_file)) {
        wp_enqueue_script(
            "robbins-main", 
            $theme_uri . "/dist/main.js", 
            [], 
            filemtime($js_file), 
            true
        );
    }
}
add_action("wp_enqueue_scripts", "robbins_enqueue_assets");

/**
 * Enqueue editor styles for Gutenberg
 */
function robbins_editor_assets() {
    $css_file = get_stylesheet_directory() . "/dist/style.css";
    if (file_exists($css_file)) {
        wp_enqueue_style(
            "robbins-editor-style", 
            get_stylesheet_directory_uri() . "/dist/style.css", 
            [], 
            filemtime($css_file)
        );
    }
}
add_action("enqueue_block_editor_assets", "robbins_editor_assets");