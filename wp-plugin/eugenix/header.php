<!DOCTYPE html>
<html lang="en" <?php language_attributes(); ?>>
<head>
    <meta charset="<?php get_bloginfo('charset'); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=GFS+Didot&family=Poppins:wght@300;400;500;600;700;900&display=swap" rel="stylesheet">

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-5597SQM');</script>
    <!-- End Google Tag Manager -->

</head>
<body <?php body_class();  ?>>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5597SQM"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->


<input type="hidden" name="videoplayid" id="videoplayid" value="">
<input type="hidden" name="videoplaysrc" id="videoplaysrc" value="">


<?php
    $websiteName = get_bloginfo('name');
    $websiteURL = get_home_url();
    $header_logo = get_field('header_logo', 'options');
    $header_button_label = get_field('header_button_label', 'options');
    $header_button_link = get_field('header_button_link', 'options');
    $mobile_header_button_label = get_field('mobile_header_button_label', 'options');
    $mobile_header_button_link = get_field('mobile_header_button_link', 'options');
    
    
    
    //$office_time = get_field('office_time', 'options');
    //$email = get_field('email', 'options');
  //  $whatsapp_number = get_field('whatsapp_number', 'options');
    //$mobile_number = get_field('mobile_number', 'options');
    $social_media = get_field('social_media', 'options');
?>
<!--MMenu-->
<?php 
$current_page_id = get_the_ID();

// Get phone numbers from ACF Options page based on page ID
if ($current_page_id == 528) {
    // For Page ID = 1
    $whatsapp_number = get_field('whatsapp_number_for_google', 'option');
    $mobile_number = get_field('mobile_number_for_google', 'option');
} else
{
    // For Page ID = 2
    $whatsapp_number = get_field('whatsapp_number', 'option');
    $mobile_number = get_field('mobile_number', 'option');
}
?>

<!--Header Start-->
<header id="Header" class="header trans">
    <div class="container">
        <div class="header-inner d-flex v-center trans">
            <div class="header-left d-flex v-center mr-auto">
            	<?php if($header_logo): ?>
                <h1 class="site-logo trans">
                    <a href="<?php echo $websiteURL; ?>" title="<?php echo $websiteName; ?>">
                        <img src="<?php echo esc_url($header_logo['url']); ?>" alt="<?php echo $websiteName; ?>" title="<?php echo $websiteName; ?>">
                    </a>
                </h1>
                <?php endif; ?>
            </div>

            <div class="header-right ml-auto d-flex">

            	<?php if($mobile_number || $whatsapp_number ): ?>
                <div class="head-right-top ml-auto trans">
                    <ul class="head-links d-flex v-center">

 <?php
// Detect source by URL
$current_url = $_SERVER['REQUEST_URI'];
$default_message = "Hello! Can I get more information on this?"; // fallback

if (strpos($current_url, 'hair-transplant-google') !== false) {
    $default_message = "Hello! Can you provide me more information on this?";
} elseif (strpos($current_url, 'hair-transplant-social') !== false) {
    $default_message = "Hello! Can you share more information on this?";
}

// Encode the message for URL
$encoded_message = urlencode($default_message);
?>

<?php if ($whatsapp_number): ?>
<li>
    <a href="https://api.whatsapp.com/send?phone=<?php echo esc_attr($whatsapp_number); ?>&text=<?php echo $encoded_message; ?>"
       target="_blank"
       rel="noopener">
       <i class="lab la-whatsapp"></i>
    </a>
</li>
<?php endif; ?>

                    	<?php if($mobile_number): ?>
                        <li><a href="tel:<?php echo $mobile_number; ?>"><i class="las la-phone-volume"></i></a></li>
                    	<?php endif; ?>

                        
                    </ul>
                </div>
                <?php endif; ?>

                <div class="head-right-inn ml-auto d-flex v-center">
                    <div class="nav-main">
                        <nav>
                            <?php 
				            	wp_nav_menu(array(
				            		'theme_location' => 'primary',
				            	));
				            ?>
                        </nav>
                    </div>

                    <?php if($header_button_label): ?>
                    <div class="head-btnbox">
                        <a class="btn primary small" href="<?php echo $header_button_link; ?>"><span><?php echo $header_button_label; ?> <i class="las la-arrow-right"></i></span></a>
                    </div>
                    <?php endif; ?>
                </div>

                <?php if($mobile_number || $whatsapp_number ): ?>
                <div class="mobi-head-links">
                    <div class="head-icon-link d-flex v-center">

<?php
// Detect source by URL
$current_url = $_SERVER['REQUEST_URI'];
$default_message = "Hello! Can I get more information on this?"; // fallback

if (strpos($current_url, 'hair-transplant-google') !== false) {
    $default_message = "Hello! Can you provide me more information on this?";
} elseif (strpos($current_url, 'hair-transplant-social') !== false) {
    $default_message = "Hello! Can you share more information on this?";
}

// Encode the message for URL
$encoded_message = urlencode($default_message);
?>

<?php if ($whatsapp_number): ?>
<li>
    <a href="https://api.whatsapp.com/send?phone=<?php echo esc_attr($whatsapp_number); ?>&text=<?php echo $encoded_message; ?>"
       target="_blank"
       rel="noopener">
       <i class="lab la-whatsapp"></i>
    </a>
</li>
<?php endif; ?>

                        <?php if($mobile_number): ?>
                        <a href="tel:<?php echo $mobile_number; ?>"><i class="las la-phone-volume"></i></a>
                        <?php endif; ?>
                        
                    </div>
                </div>
                <?php endif; ?>

                <!--Menu Icon-->
                <div class="mobi-iconbox mobilemenuicon" style="display: none;">
                    <div class="menuicon d-flex">
                        <i class="icon-bar top-icon-bar">
                           <span class="line"></span> 
                        </i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<!--Header End-->