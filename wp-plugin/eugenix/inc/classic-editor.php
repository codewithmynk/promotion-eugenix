<?php
// [ Add classic editor support ]
add_filter('use_block_editor_for_post', '__return_false', 5);
function enable_classic_editor($can_edit, $post) {
    if (empty($post->ID)) return $can_edit;
    
    $current = get_current_screen();
    
    // Below will allow you to only show gutenberg for posts, you can use any post type
    // if (get_post_type() == 'post') return true;
    
    return $can_edit;
}
add_filter('gutenberg_can_edit_post', 'enable_classic_editor', 10, 2);
add_filter('use_block_editor_for_post', 'enable_classic_editor', 10, 2);
?>