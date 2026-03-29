<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */
get_header(); 

$websiteURL = get_home_url();

?>


<div class="header-blank"></div>
<!--page Banner-->
<section class="page-banner text-center bg2 ptb-100">
    <div class="container">
        <div class="page-banner-inner relative">
            <h1>404</h1>

            <div class="text-center">
    		<h2><?php esc_html_e( 'Opps! Nothing found here', 'twentytwentyone' ); ?></h2>
    		<p><?php esc_html_e( 'It looks like nothing was found at this location.', 'twentytwentyone' ); ?></p>

    		<div class="btnbox">
    			<a class="btn primary small" href="<?php echo $websiteURL; ?>"><i class="zmdi zmdi-arrow-left mr-2"></i> Back to home</a>
    		</div>
    	</div>
        </div>
    </div>
</section>



<?php get_footer(); ?>