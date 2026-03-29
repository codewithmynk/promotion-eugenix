<?php
/*
* Theme Admin Page
* Add settings page to the Admin
*/
$websiteName = get_bloginfo('name');
if( function_exists('acf_add_options_page') ) {
	acf_add_options_page(array(
		'page_title' 	=> $websiteName .' Theme Setting',
		'menu_title'	=> $websiteName,
		'menu_slug' 	=> 'theme-admin',
		'capability'	=> 'edit_posts',
		'icon_url' => get_template_directory_uri() . '/inc/admin-menu-icon.png',
		'position' => 110,
		'redirect'		=> false
	));
}
?>