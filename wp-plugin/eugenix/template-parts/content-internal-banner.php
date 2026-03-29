<!--Page banner-->
<?php 
$banner_background_image = get_field('banner_background_image');
$banner_title = get_field('banner_title');
$banner_description = get_field('banner_description');
?>
<?php if($banner_background_image || $banner_title || $banner_description): ?>
<section class="internal-banner bg1">
    <?php if($banner_background_image): ?>
    <div class="bg-img" style="background:url('<?php echo esc_url($banner_background_image['url']); ?>') no-repeat center;"></div>
    <?php endif; ?>
    <div class="cap-dotted"></div>
    <div class="circle_line"></div>
    <div class="container relative">
        <div class="internal-caption d-flex">

            <?php if($banner_title): ?>
            <h2 class="text-white wow fadeInLeft" data-wow-delay="0.3s"><?php echo $banner_title; ?></h2>
            <?php endif; ?>

            <?php if($banner_description): ?>
            <div class="bdr-text wow fadeInLeft" data-wow-delay="0.4s">
                <?php echo $banner_description; ?>
            </div>
            <?php endif; ?>
            
        </div>
    </div>
    <img class="banner-shape" src="<?php echo get_template_directory_uri(); ?>/assets/images/banner-logo.svg" alt="" width="200">
</section>
<?php endif; ?>