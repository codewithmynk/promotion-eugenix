<!--CTA Section-->
<?php 
$front_id = get_option( 'page_on_front' );
$cta_text = get_field('cta_text', $front_id);
$cta_section_button_label = get_field('cta_section_button_label', $front_id);
$cta_section_button_link = get_field('cta_section_button_link', $front_id);
?>
<?php if($cta_text || $cta_section_button_label || $cta_section_button_link): ?>
<section class="cta-section ptb-60">
    <div class="container">
        <div class="cta-bg bg1">
            <div class="circle_line"></div>
            <img class="cta-shape" src="<?php echo get_template_directory_uri(); ?>/assets/images/banner-logo.svg" alt="" width="400">
            <div class="cta-inner d-flex v-center">
                <?php if($cta_text): ?>
                <div class="textbox">
                    <h3 class="wow fadeInLeft" data-wow-delay="0.2s"><?php echo $cta_text; ?></h3>
                </div>
                <?php endif; ?>

                <?php if($cta_section_button_label || $cta_section_button_link): ?>
                <div class="cta-btnbox ml-auto d-flex">
                    <a class="btn secondary big white-hover ml-auto wow fadeInRight" data-wow-delay="0.3s" href="<?php echo $cta_section_button_link; ?>" title="<?php echo $cta_section_button_label; ?>"><?php echo $cta_section_button_label; ?> <i class="las la-envelope ml-2"></i></a>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>