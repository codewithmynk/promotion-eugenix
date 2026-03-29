<?php 
/* Define Constants */
define('THEMEROOT', get_template_directory_uri());
define('ASSETS', get_template_directory_uri().'/assets/');

function eugenix_register_styles(){
	wp_register_style('font-awesome', THEMEROOT .'/assets/css/font-awesome.min.css', '', '1');
	wp_register_style('bootstrap', THEMEROOT .'/assets/css/bootstrap.min.css', '', '1');
	wp_register_style('lineawesome', THEMEROOT .'/assets/css/line-awesome.min.css','', '1');
    wp_register_style('main', THEMEROOT .'/assets/css/main.css','', '1.0.18');
	
	//Enqueue
	wp_enqueue_style('bootstrap');
	wp_enqueue_style('lineawesome');
    wp_enqueue_style('main');
    wp_enqueue_style('main', get_stylesheet_uri());
}
//add action for include styles
add_action('wp_enqueue_scripts', 'eugenix_register_styles');

/*
* Register JS
*/

function eugenix_register_js(){
	//Register JS
	wp_deregister_script('jquery');
	wp_register_script('jquery', THEMEROOT .'/assets/js/jquery-min.js', '', '', false);
	wp_register_script('popper', THEMEROOT .'/assets/js/popper.min.js', '', '', true);
	wp_register_script('bootstrap', THEMEROOT .'/assets/js/bootstrap.min.js', '', '', true);
	wp_register_script('commonscript', THEMEROOT .'/assets/js/commonscript.js', '', '', true);
	wp_register_script('main', THEMEROOT .'/assets/js/main.js', '', '', true);

	//Enqueue
	wp_enqueue_script('jquery');
	wp_enqueue_script('popper');
	wp_enqueue_script('bootstrap');
	wp_enqueue_script('commonscript');
	wp_enqueue_script('main');  
}

//add action for include scripts
add_action('wp_enqueue_scripts', 'eugenix_register_js');



/**
 * Register widget areas.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function eugenix_sidebar_registration() {

	// Arguments used in all register_sidebar() calls.
	$shared_args = array(
		'before_title'  => '<h4 class="widget-title subheading heading-size-3">',
		'after_title'   => '</h4>',
		'before_widget' => '<div class="widget %2$s"><div class="widget-content">',
		'after_widget'  => '</div></div>',
	);

    // Footer #1.
    register_sidebar(
        array_merge(
            $shared_args,
            array(
                'name'        => __( 'Page Sidebar', 'twentytwenty' ),
                'id'          => 'sidebar-5',
                'description' => __( 'Widgets in this area will be displayed in page.', 'twentytwenty' ),
            )
        )
    );

	// Footer #1.
	register_sidebar(
		array_merge(
			$shared_args,
			array(
				'name'        => __( 'Footer Col 1', 'twentytwenty' ),
				'id'          => 'sidebar-1',
				'description' => __( 'Widgets in this area will be displayed in the first column in the footer.', 'twentytwenty' ),
			)
		)
	);

	// Footer #2.
	register_sidebar(
		array_merge(
			$shared_args,
			array(
				'name'        => __( 'Footer Col 2', 'twentytwenty' ),
				'id'          => 'sidebar-2',
				'description' => __( 'Widgets in this area will be displayed in the second column in the footer.', 'twentytwenty' ),
			)
		)
	);

	// Footer #3.
	register_sidebar(
		array_merge(
			$shared_args,
			array(
				'name'        => __( 'Footer Col 3', 'twentytwenty' ),
				'id'          => 'sidebar-3',
				'description' => __( 'Widgets in this area will be displayed in the second column in the footer.', 'twentytwenty' ),
			)
		)
	);

	// Footer #4.
	register_sidebar(
		array_merge(
			$shared_args,
			array(
				'name'        => __( 'Footer Col 4', 'twentytwenty' ),
				'id'          => 'sidebar-4',
				'description' => __( 'Widgets in this area will be displayed in the second column in the footer.', 'twentytwenty' ),
			)
		)
	);

}
add_action( 'widgets_init', 'eugenix_sidebar_registration' );



/**
 * Register navigation menus uses wp_nav_menu in five places.
 */
function eugenix_child_menus() {
	$locations = array(
		'primary'  => __( 'Desktop Horizontal Menu', 'twentytwenty' ),
		'expanded' => __( 'Desktop Expanded Menu', 'twentytwenty' ),
		'mobile'   => __( 'Mobile Menu', 'twentytwenty' ),
		'footer'   => __( 'Footer Menu', 'twentytwenty' ),
		'quick-links'   => __( 'Quick links', 'twentytwenty' ),
		'social'   => __( 'Social Menu', 'twentytwenty' ),
	);

	register_nav_menus( $locations );
}
add_action( 'init', 'eugenix_child_menus' );

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */

function eugenix_child_theme_support() {
	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );
	// Custom background color.
	add_theme_support(
		'custom-background',
		array(
			'default-color' => 'f5efe0',
		)
	);

	// Set content-width.
	global $content_width;
	if ( ! isset( $content_width ) ) {
		$content_width = 580;
	}

	/*
     * Enable support for Post Thumbnails on posts and pages.
     *
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support( 'post-thumbnails' );

    // If the retina setting is active, double the recommended width and height.

    global $logo_width,$logo_height;
    if ( get_theme_mod( 'retina_logo', false ) ) {
        $logo_width  = floor( $logo_width * 2 );
        $logo_height = floor( $logo_height * 2 );
    }

    add_theme_support(
        'custom-logo',
        array(
            'height'      => $logo_height,
            'width'       => $logo_width,
            'flex-height' => true,
            'flex-width'  => true,
        )
    );

    /*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'script',
			'style',
		)
	);

	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on Twenty Twenty, use a find and replace
	 * to change 'twentytwenty' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'twentytwenty' );

	// Add support for full and wide align images.
	add_theme_support( 'align-wide' );

}

add_action( 'after_setup_theme', 'eugenix_child_theme_support' );

/* To Disable Plugin Update Notifications */
remove_action('load-update-core.php','wp_update_plugins');
add_filter('pre_site_transient_update_plugins','__return_null');

/* Disable automatic WordPress plugin updates */
add_filter( 'auto_update_plugin', '__return_false' );

/* Disable automatic WordPress theme updates */
add_filter( 'auto_update_theme', '__return_false' );

/* To Disable theme Update Notifications */
function remove_core_updates_all(){
	global $wp_version;
	return(object) array('last_checked'=> time(),'version_checked'=> $wp_version,);
}


?>