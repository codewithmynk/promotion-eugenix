<?php 
/*Template Name: Landing Page*/
get_header();
?>

<?php
    $banner_title = get_field('banner_title');
    $banner_subtitle = get_field('banner_subtitle');
    $banner_description = get_field('banner_description');
    $banner_button_label = get_field('banner_button_label');
    $banner_button_link = get_field('banner_button_link');
    $banner_image = get_field('banner_image');
?>
<?php if($banner_title || $banner_subtitle || $banner_description || $banner_button_label || $banner_image ): ?>
<!--Home page Banner-->
<section id="homeBanner" class="home-banner">
    <div class="hero-slider">
        <div class="items">
            <div class="container relative h-100">
                <div class="hero-inner d-flex v-center relative">
                    <div class="hero-caption">
                        <div class="relative">
                            <?php if($banner_subtitle): ?>
                            <p class="pre-title wow fadeInLeft" data-wow-delay="0.1s"><?php echo $banner_subtitle; ?></p>
                            <?php endif; ?>

                            <?php if($banner_title): ?>
                            <h1 class="h1 wow fadeInLeft" data-wow-delay="0.2s"><?php echo $banner_title; ?></h1>
                            <?php endif; ?>

                            <?php if($banner_description): ?>
                            <p class="wow fadeInLeft" data-wow-delay="0.3s"><?php echo $banner_description; ?></p>
                            <?php endif; ?>

                            <?php if($banner_button_label): ?>
                            <div class="btnbox d-flex wow fadeInLeft" data-wow-delay="0.4s">
                                <!--ml-auto-->
                                <a class="btn white-btn big " href="<?php echo $banner_button_link; ?>"><span><?php echo $banner_button_label; ?> <i class="las la-arrow-right"></i></span></a>
                            </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>

            <?php if($banner_image): ?>
            <div class="caption-imgbox d-flex">
                <img src="<?php echo esc_url($banner_image['url']); ?>" alt="<?php echo $banner_image['title']; ?>" class='rocket-lazyload'>
            </div>
            <?php endif; ?>

            <div class="wst-grid-particles">
                <div class="row">
                    <div class="col-md-2 wst-grid-line d-flex"></div>
                    <div class="col-md-2 wst-grid-line d-flex"></div>
                    <div class="col-md-2 wst-grid-line d-flex"></div>
                    <div class="col-md-2 wst-grid-line d-flex"></div>
                    <div class="col-md-2 wst-grid-line d-flex"></div>
                    <div class="col-md-2 wst-grid-line d-flex"></div>
                </div>
            </div>
            <div class="shape_star"></div>
            <div class="shape_only bounce-y"></div>
        </div>
    </div>
    <a id="arrow-next" class="scroll-sign" href="#clinicVideo">Scroll Down</a>
</section>
<?php endif; ?>



<?php
    $media_section_title = get_field('media_section_title');
    $media_logo_list = get_field('media_logo_list');
?>
<?php if($media_section_title || $media_logo_list): ?>
<!--Media Section-->
<section class="media-section ptb-30 bg4">
    <div class="container">

        <?php if($media_section_title): ?>
        <div class="block-title text-center wow fadeInUp" data-wow-delay="0.2s">
            <div class="small-title"><?php echo $media_section_title; ?></div>
        </div>
        <?php endif; ?>

        <?php if(have_rows('media_logo_list')) : ?>
        <div class="media-list media-slider wow fadeInUp" data-wow-delay="0.3s">
            <?php while(have_rows('media_logo_list')) : the_row(); 
                $media_logo = get_sub_field('media_logo');
                $media_link = get_sub_field('media_link');
            ?>
            <?php if($media_logo): ?>
            <div class="items">
                <div class="imgbox card-media">
                   <img src="<?php echo esc_url($media_logo['url']); ?>" alt="<?php echo $image['title']; ?>">
               </div>
            </div>
            <?php endif; ?>
            <?php endwhile; ?>
        </div>
        <?php endif; ?>
    </div>
</section>
<?php endif; ?>



<?php
    $clinic_video_section_image = get_field('clinic_video_section_image');
    $clinic_video_option = get_field('clinic_video_option');
    $clinic_video_iframe_link = get_field('clinic_video_iframe_link');
    $upload_clinic_video = get_field('upload_clinic_video');
    $clinic_video_section_title = get_field('clinic_video_section_title');
    $clinic_video_section_content = get_field('clinic_video_section_content');
?>
<?php if($clinic_video_section_image || $clinic_video_iframe_link || $upload_clinic_video || $clinic_video_section_title || $clinic_video_section_content ): ?>
<!--Clinic Video Section-->
<section id="clinicVideo" class="clinicvideo-section ptb-80">
    <div class="container relative">
        <div class="row v-center clinicvideo-inner">

            <div class="col-lg-6 col-md-12 col-sm-12 col-12 left-block wow fadeInLeft" data-wow-delay="0.2s">
                
                <?php if($clinic_video_iframe_link && $clinic_video_option == 'video-iframe') : ?>
                <div class="videobox active1">
                    <div class="video-list">
                        <img src="<?php echo esc_url($clinic_video_section_image['url']); ?>" alt="<?php echo $clinic_video_section_image['title']; ?>">
                        <a id="1" class="play-btn video-btn"><i class="las la-play-circle"></i></a>
                    </div>

                    <div class="v-big-list">
                        <div id="videoBox_1" class="items active">
                           <?php echo $clinic_video_iframe_link; ?>
                        </div>
                    </div>
                </div>
                <?php endif; ?>

                <?php if($upload_clinic_video && $clinic_video_option == 'video-file') : ?>
                <div class="video-box1">
                    <!-- <video width="320" height="240" controls class='rocket-lazyload'>-->
                    <!--  <source src="<?php echo $upload_clinic_video['url']; ?>" type="video/mp4">-->
                    <!--</video>-->
                     <img src="<?php echo $upload_clinic_video['url']; ?>" alt="<?php echo $upload_clinic_video['title']; ?>">
                </div>
                <?php endif; ?>
            </div>

            <?php if($clinic_video_section_title || $clinic_video_section_content ): ?>
            <div class="col-lg-6 col-md-12 col-sm-12 col-12 right-block wow fadeInRight" data-wow-delay="0.2s">
                <div class="textarea">
                    <?php if($clinic_video_section_title ): ?>
                    <div class="block-title">
                        <h2><?php echo $clinic_video_section_title; ?></h2>
                    </div>
                    <?php endif; ?>

                    <?php if($clinic_video_section_content): ?>
                    <div class="textbox entry-content">
                        <?php echo $clinic_video_section_content; ?>
                    </div>
                    <?php endif; ?>
                </div>
            </div>
            <?php endif; ?>

        </div>
    </div>
</section>
<?php endif; ?>



<?php
    $results_section_title = get_field('results_section_title');
    $results_list = get_field('results_list');
?>
<?php if($results_section_title || $results_list ): ?>
<!--Real Results Section-->
<section class="results-section bg4" id="results-slider-de">
    <div class="container">
        <div class="row results-inner">

            <?php if($results_section_title || $results_list ): ?>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 right-block">
                <div class="results-right-inn">

                    <?php if($results_section_title): ?>
                    <div class="block-title wow fadeInRight text-center" data-wow-delay="0.2s">
                     <div class="small-title"><?php echo $results_section_title; ?></div>
                        <!--<h2><?php echo $results_section_title; ?></h2>-->
                    </div>
                    <?php endif; ?>

                    <?php if(have_rows('results_list')) : ?>
                    <div class="row results-list results-slider ptb-20 wow fadeInRight" data-wow-delay="0.3s">
                        <?php while(have_rows('results_list')) : the_row(); 
                            $results_beforeafter_image = get_sub_field('results_beforeafter_image');
                        ?>
                        <?php if($results_beforeafter_image): ?>
                        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 items">
                            <div class="card-result shine">
                                <div class="imgbox">
                                    <img src="<?php echo esc_url($results_beforeafter_image['url']); ?>" alt="<?php echo $results_beforeafter_image['title']; ?>" class="rocket-lazyload">
                                </div>
                                <h4><span>Before</span><span>After</span></h4>
                            </div>
                        </div>
                        <?php endif; ?>
                        <?php endwhile; ?>
                    </div>
	  <div class="slide-numb">
         <div class="slide-counter-img"></div>
       </div>
                    <?php endif; ?>

                </div>
            </div>
            <?php endif; ?>

        </div>
    </div>
</section>
<?php endif; ?>


<?php
    $hair_loss_solution_section_title = get_field('hair_loss_solution_section_title');
    $hair_loss_block = get_field('hair_loss_block');
?>
<?php if( $hair_loss_solution_section_title || $hair_loss_block ): ?>
<!--Hair Loss Solution-->
<div class="ptb-30 xs-hide"></div>
<section class="hair-ls-section bg1 ptb-60">
    <div class="wst-grid-particles">
        <div class="row">
            <div class="col-md-2 wst-grid-line d-flex"></div>
            <div class="col-md-2 wst-grid-line d-flex"></div>
            <div class="col-md-2 wst-grid-line d-flex"></div>
            <div class="col-md-2 wst-grid-line d-flex"></div>
            <div class="col-md-2 wst-grid-line d-flex"></div>
            <div class="col-md-2 wst-grid-line d-flex"></div>
        </div>
    </div>
    <div class="shape_star"></div>
    <div class="container relative">

        <?php if($hair_loss_solution_section_title): ?>
        <div class="block-title text-center ptb-20 pt-0 wow fadeInUp" data-wow-delay="0.2s">
         <div class="small-title"><?php echo $hair_loss_solution_section_title; ?></div> 
            <!--<h2 class="text-white"></h2>-->
        </div>
        <?php endif; ?>

        <?php if(have_rows('hair_loss_block')) : ?>
        <div class="hair-ls-block">
            <?php while(have_rows('hair_loss_block')) : the_row(); 
                $hair_loss_block_title = get_sub_field('hair_loss_block_title');
                $hair_loss_block_image = get_sub_field('hair_loss_block_image');
                $hair_loss_block_content = get_sub_field('hair_loss_block_content');
            ?>
            <?php if($hair_loss_block_title || $hair_loss_block_image || $hair_loss_block_content ): ?>
            <div class="row v-center">

                <?php if($hair_loss_block_title || $hair_loss_block_content ): ?>
                <div class="col-lg-7 col-md-6 col-sm-12 col-xs-12 left-block">
                    <?php if($hair_loss_block_title): ?>
                    <h4><?php echo $hair_loss_block_title; ?></h4>
                    <?php endif; ?>

                    <?php echo $hair_loss_block_content; ?>
                </div>
                <?php endif; ?>

                <?php if($hair_loss_block_image): ?>
                <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12 right-block">
                    <div class="imgbox">
                        <img src="<?php echo esc_url($hair_loss_block_image['url']); ?>" alt="<?php echo $hair_loss_block_image['title']; ?>" class="rocket-lazyload">
                    </div>
                </div>
                <?php endif; ?>
            </div>
            <?php endif; ?>
            <?php endwhile; ?>
        </div>
        <?php endif; ?>

    </div>
</section>
<?php endif; ?>


<?php
    $services_section_title = get_field('services_section_title');
    $service_list = get_field('service_list');
?>
<?php if($services_section_title || $service_list ): ?>
<!--Services Section-->
<section class="service-section">

    <?php if($services_section_title): ?>
    <div class="block-title text-center bg-white ptb-40 mb-0 wow fadeInUp" data-wow-delay="0.2s">
        <div class="container">
        <div class="small-title"><?php echo $services_section_title; ?></div>
            <!--<h2></h2>-->
        </div>
    </div>
    <?php endif; ?>

    <?php if(have_rows('service_list')) : ?>
    <div class="service-tab-block relative wow fadeInUp" data-wow-delay="0.3s">
        <div class="container">
            <div class="service-list-tab row serv-slider-nav">
                <?php while(have_rows('service_list')) : the_row(); 
                    $service_name = get_sub_field('service_name');
                    $service_icon = get_sub_field('service_icon');
                ?>
                <?php if($service_name || $service_icon): ?>
                <div class="col-lg-2 col-md-4 col-sm-12 col-xs-12 items">
                    <div class="card-serv-icon">
                        <?php if($service_icon): ?>
                        <i class="iconbox"><img src="<?php echo esc_url($service_icon['url']); ?>" alt="<?php echo $service_name; ?>" class="rocket-lazyload"></i>
                        <?php endif; ?>

                        <?php if($service_name): ?>
                        <span class="tab-tl"><?php echo $service_name; ?></span>
                        <?php endif; ?>
                    </div>
                </div>
                <?php endif; ?>
                <?php endwhile; ?>
            </div>
        </div>
    </div>
    <?php endif; ?>


    <?php if(have_rows('service_list')) : ?>
    <div class="serv-tab-main relative ptb-40 wow fadeInUp" data-wow-delay="0.4s">
        <div class="container relative">
            <div class="serv-slider-for">
                <?php while(have_rows('service_list')) : the_row(); 
                    $service_title = get_sub_field('service_title');
                    $service_content = get_sub_field('service_content');
                    $service_button_label = get_sub_field('service_button_label');
                    $service_button_link = get_sub_field('service_button_link');
                    $service_image = get_sub_field('service_image');
                ?>
                <?php if($service_title || $service_content || $service_button_label || $service_image ): ?>
                <div class="items">
                    <div class="serv-tab-content entry-content ptb-20 pt-0">
                        <div class="row serv-text-inner">

                            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 left-block">
                                <?php if($service_title): ?>
                                <h3><?php echo $service_title; ?></h3>
                                <?php endif; ?>

                                <?php echo $service_content; ?>

                                <?php if($service_button_label): ?>
                                <div class="btnbox pt-0">
                                    <a class="btn primary" href="<?php echo $service_button_link; ?>"><span><?php echo $service_button_label; ?> <i class="las la-arrow-right"></i></span></a>
                                </div>
                                <?php endif; ?>
                            </div>

                            <?php if($service_image): ?>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 right-block">
                                <div class="serv-text-imgbox">
                                    <img src="<?php echo esc_url($service_image['url']); ?>" alt="<?php echo $service_image['title']; ?>" class="rocket-lazyload">
                                </div>
                            </div>
                            <?php endif; ?>

                        </div>
                    </div>
                </div>
                <?php endif; ?>
                <?php endwhile; ?>
            </div>
        </div>
    </div>
    <?php endif; ?>
</section>
<?php endif; ?>


<?php
    $procedure_section_title = get_field('procedure_section_title');
    $procedure_section_button_label = get_field('procedure_section_button_label');
    $procedure_section_button_link = get_field('procedure_section_button_link');
    $procedure_block = get_field('procedure_block');
?>
<?php if($procedure_section_title || $procedure_section_button_label || $procedure_block): ?>
<!--Procedure Section-->
<section class="procedure-section ptb-60 bg4">
    <div class="shape_star bounce-y"></div>
    <div class="container relative">
        <div class="sigma_dots"></div>

        <div class="block-title row">
            <?php if($procedure_section_title): ?>
            <!--<div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 left-block wow fadeInLeft" data-wow-delay="0.2s">-->
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 left-block wow fadeInLeft text-center" data-wow-delay="0.2s">
            <div class="small-title"><?php echo $procedure_section_title; ?></div>
                <!--<h2></h2>-->
            </div>
            <?php endif; ?>

            <?php if($procedure_section_button_label): ?>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 right-block d-flex wow fadeInRight" data-wow-delay="0.2s">
                <div class="btnbox ml-auto">
                    <a class="btn" href="<?php echo $procedure_section_button_link; ?>"><span><?php echo $procedure_section_button_label; ?> <i class="las la-arrow-right"></i></span></a>
                </div>
            </div>
            <?php endif; ?>
        </div>

        <?php if(have_rows('procedure_block')) : ?>
        <div class="row procedure-list procedure-slider ptb-20 pb-0">
            <?php $pro_count=0; ?>
            <?php while(have_rows('procedure_block')) : the_row(); 
                $pro_count++;
                $procedure_block_icon = get_sub_field('procedure_block_icon');
                $procedure_block_title = get_sub_field('procedure_block_title');
                $procedure_block_content = get_sub_field('procedure_block_content');
            ?>
            <?php if($procedure_block_icon || $procedure_block_title || $procedure_block_content ): ?>
            <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 items wow fadeInLeft" data-wow-delay="0.<?php echo $pro_count; ?>s">
                <div class="card-procedure">
                    <?php if($procedure_block_icon): ?>
                    <i class="iconbox d-flex v-center j-center">
                        <img src="<?php echo esc_url($procedure_block_icon['url']); ?>" alt="<?php echo $procedure_block_icon['title']; ?>" class="rocket-lazyload">
                    </i>
                    <?php endif; ?>

                    <?php if($procedure_block_title): ?>
                    <h4><?php echo $procedure_block_title; ?></h4>
                    <?php endif; ?>

                    <?php echo $procedure_block_content; ?>
                </div>
            </div>
            <?php endif; ?>
            <?php endwhile; ?>
        </div>
        <?php endif; ?>

    </div>
</section>
<?php endif; ?>


<?php
    $counter_section_background_image = get_field('counter_section_background_image');
?>
<?php if(have_rows('counter_block')) : ?>
<!--Counter Section-->
<section class="counter-section counter-block ptb-40">

    <?php if($counter_section_background_image): ?>
    <div class="bg-img" style="background:url('<?php echo esc_url($counter_section_background_image['url']); ?>') no-repeat center;"></div>
    <?php endif; ?>

    <div class="container relative">
        <div class="counter-list d-flex">
            <?php $count=0; ?>
            <?php while(have_rows('counter_block')) : the_row(); 
                $count++;
                $counter_icon = get_sub_field('counter_icon');
                $counter_number = get_sub_field('counter_number');
                $counter_symbol = get_sub_field('counter_symbol');
                $counter_text = get_sub_field('counter_text');
            ?>
            <?php if($counter_icon || $counter_number || $counter_symbol || $counter_text ): ?>
            <div class="items">
                <div class="card-counter d-flex v-center">

                    <?php if($counter_icon): ?>
                    <i class="iconbox d-flex v-center j-center">
                        <img src="<?php echo esc_url($counter_icon['url']); ?>" alt="<?php echo $counter_text; ?>" class="rocket-lazyload">
                    </i>
                    <?php endif; ?>

                    <?php if($counter_number || $counter_text): ?>
                    <div class="textbox">
                        <strong>
                            <?php if($count == '5'): ?>
                                <?php if($counter_number): ?>
                                <span><?php echo $counter_number; ?></span>
                                <?php endif; ?>
                            <?php else: ?>
                                <?php if($counter_number): ?>
                                <span class="timer" data-to="<?php echo $counter_number; ?>" data-speed="1500"></span>
                                <?php endif; ?>
                            <?php endif; ?>

                            <?php if($counter_symbol): ?>
                            <span class="count-symbol"><?php echo $counter_symbol; ?></span>
                            <?php endif; ?>
                        </strong>

                        <?php if($counter_text): ?>
                        <p><?php echo $counter_text; ?></p>
                        <?php endif; ?>
                    </div>
                    <?php endif; ?>
                </div>
            </div>
            <?php endif; ?>
            <?php endwhile; ?>
        </div>
    </div>
</section>
<?php endif; ?>



<?php 
$team_section_title = get_field('team_section_title');
$team_section_description = get_field('team_section_description');
$team_list = get_field('team_list');
?>
<?php if($team_section_title || $team_section_description || $team_list ): ?>
<!--Team Section-->
<section class="team-section bg4 ptb-60">
    <div class="bg-img pattern-bg before-none" style="background:url('<?php echo get_template_directory_uri(); ?>/assets/images/speckle.jpg') repeat center;"></div>
    <div class="three-line top"></div>
    <div class="three-line"></div>
    <div class="container relative">
        <div class="row team-list">

            <?php if($team_section_title || $team_section_description): ?>
            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 left-block wow fadeInLeft" data-wow-delay="0.2s">
                <div class="expert-block d-flex h-100">
                    <?php if($team_section_title): ?>
                    <div class="block-title">
                        <h2><?php echo $team_section_title; ?></h2>
                    </div>
                    <?php endif; ?>
                    <?php echo $team_section_description; ?>
                </div>
            </div>
            <?php endif; ?>

            <?php if(have_rows('team_list')) : ?>
            <?php $tm_count=0; ?>
            <?php while(have_rows('team_list')) : the_row(); 
                $tm_count++;
                $team_member_image = get_sub_field('team_member_image');
                $team_member_name = get_sub_field('team_member_name');
                $team_member_qualification = get_sub_field('team_member_qualification');
                $team_member_mobile_button_label = get_sub_field('team_member_mobile_button_label');
                $team_member_mobile_number = get_sub_field('team_member_mobile_number');
            ?>
            <?php if($team_member_image || $team_member_name || $team_member_qualification || $team_member_mobile_button_label || $team_member_mobile_number ): ?>
            <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 items wow fadeInLeft" data-wow-delay="0.<?php echo $tm_count; ?>s">
                <div class="card-team d-flex">
                    <?php if($team_member_image): ?>
                    <i class="imgbox">
                        <img src="<?php echo esc_url($team_member_image['url']); ?>" alt="<?php echo $team_member_image['title']; ?>">
                    </i>
                    <?php endif; ?>

                    <?php if($team_member_name || $team_member_qualification): ?>
                    <div class="textbox">
                        <?php if($team_member_name): ?>
                        <h4><?php echo $team_member_name; ?></h4>
                        <?php endif; ?>

                        <?php if($team_member_qualification): ?>
                        <p><?php echo $team_member_qualification; ?></p>
                        <?php endif; ?>
                    </div>
                    <?php endif; ?>
                    
                    <?php if($team_member_mobile_button_label): ?>
                    <div class="btnbox mt-auto">
                        <a class="appointment-button btn primary" href="<?php echo $team_member_mobile_number; ?>"><i class="las la-headset"></i><span><?php echo $team_member_mobile_button_label; ?></span></a>
                    </div>
                    <?php endif; ?>
                </div>
            </div>
            <?php endif; ?>
            <?php endwhile; ?>
            <?php endif; ?>

        </div>

    </div>
</section>
<?php endif; ?>



<?php
    $india_section_title = get_field('india_section_title');
    $india_hair_transplant_block = get_field('india_hair_transplant_block');
?>
<?php if($india_section_title || $india_hair_transplant_block ): ?>
<!--India Section-->
<section class="india-section ptb-60">
    <div class="bg-img pattern-bg before-none" style="background:url('<?php echo get_template_directory_uri(); ?>/assets/images/speckle.jpg') repeat center;"></div>
    <div class="container relative">

        <?php if($india_section_title): ?>
        <div class="block-title text-center ptb-20 pt-0 wow fadeInUp" data-wow-delay="0.2s">
            <?php if($india_section_title): ?>
             <div class="small-title"><?php echo $india_section_title; ?></div>
            <!--<h2></h2>-->
            <?php endif; ?>
        </div>
        <?php endif; ?>


        <div class="cost-block relative">

            <?php if(have_rows('india_hair_transplant_block')) : ?>
            <div class="cost-tab-nav">
                <?php while(have_rows('india_hair_transplant_block')) : the_row(); 
                    $india_hair_transplant_title = get_sub_field('india_hair_transplant_title');
                ?>
                <?php if($india_hair_transplant_title): ?>
                <div class="items wow fadeInUp" data-wow-delay="0.3s">
                    <div class="cost-tab-text"><?php echo $india_hair_transplant_title; ?></div>
                </div>
                <?php endif; ?>
                <?php endwhile; ?>
            </div>
            <?php endif; ?>

            <?php if(have_rows('india_hair_transplant_block')) : ?>
            <div class="cost-inner cost-slider wow fadeInUp" data-wow-delay="0.2s">
                <?php while(have_rows('india_hair_transplant_block')) : the_row(); 
                    $india_hair_transplant_image = get_sub_field('india_hair_transplant_image');
                    $india_hair_transplant_content = get_sub_field('india_hair_transplant_content');
                    $india_hair_transplant_button_label = get_sub_field('india_hair_transplant_button_label');
                    $india_hair_transplant_button_link = get_sub_field('india_hair_transplant_button_link');
                    $india_hair_transplant_email = get_sub_field('india_hair_transplant_email');
                    $india_hair_transplant_mobile_number = get_sub_field('india_hair_transplant_mobile_number');
                ?>
                <?php if($india_hair_transplant_image || $india_hair_transplant_content || $india_hair_transplant_button_label || $india_hair_transplant_mobile_number || $india_hair_transplant_email): ?>
                <div class="items">
                    <div class="bene-imgbox">
                        <?php if($india_hair_transplant_image): ?>
                        <img src="<?php echo esc_url($india_hair_transplant_image['url']); ?>" alt="<?php echo $india_hair_transplant_image['title']; ?>">
                        <?php endif; ?>

                        <div class="cost-overlay">
                            <?php echo $india_hair_transplant_content; ?>

                            <?php if($india_hair_transplant_button_label): ?>
                            <div class="btnbox pt-0">
                                <a class="read-more-btn d-flex v-center" href="<?php echo $sm_label; ?>"><?php echo $india_hair_transplant_button_label; ?> <i class="las la-arrow-right"></i></a>
                            </div>
                            <?php endif; ?>

                            <?php if($india_hair_transplant_email || $india_hair_transplant_mobile_number): ?>
                            <div class="btns-detail d-flex v-center">
                                <?php if($india_hair_transplant_email): ?>
                                <div class="add-items">
                                    <a class="btn secondary" href="mailto:<?php echo $india_hair_transplant_email; ?>" title="Email Us">
                                        <i class="c_icon las la-envelope"></i>
                                        <span><em><?php echo $india_hair_transplant_email; ?></em></span>
                                    </a>
                                </div>
                                <?php endif; ?>

                                <?php if($india_hair_transplant_mobile_number): ?>
                                <div class="add-items">
                                    <a class="btn secondary" href="tel:<?php echo $india_hair_transplant_mobile_number; ?>" title="Talk to Us">
                                        <i class="c_icon las la-phone-volume"></i>
                                        <span><em><?php echo $india_hair_transplant_mobile_number; ?></em></span>
                                    </a>
                                </div>
                                <?php endif; ?>
                            </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </div> 
                <?php endif; ?>  
                <?php endwhile; ?>
            </div>
            <?php endif; ?>

        </div>
       
    </div>
</section>
<?php endif; ?>



<?php
    $ideal_section_title = get_field('ideal_section_title');
    $ideal_section_content = get_field('ideal_section_content');
    $ideal_section_button_label = get_field('ideal_section_button_label');
    $ideal_section_button_link = get_field('ideal_section_button_link');
    $ideal_section_image = get_field('ideal_section_image');
    //$ideal_section_img = get_field('ideal_section_img');
?>
<?php if($ideal_section_title || $ideal_section_content || $ideal_section_button_label || $ideal_section_image): ?>
<!--Ideal Section-->
<section class="ideal-section bg1 ptb-60">
    <?php if($ideal_section_image): ?>
    <div class="bg-img before-none" style="background:url('<?php echo esc_url($ideal_section_image['url']); ?>') no-repeat center;"></div>
    <?php endif; ?>
    <div class="wst-grid-particles">
        <div class="row">
            <div class="col-md-2 wst-grid-line d-flex"></div>
            <div class="col-md-2 wst-grid-line d-flex"></div>
            <div class="col-md-2 wst-grid-line d-flex"></div>
            <div class="col-md-2 wst-grid-line d-flex"></div>
            <div class="col-md-2 wst-grid-line d-flex"></div>
            <div class="col-md-2 wst-grid-line d-flex"></div>
        </div>
    </div>
    <div class="shape_star"></div>
    <div class="container relative">
        <div class="row v-center ideal-inner">

            <div class="col-lg-6 col-md-7 col-sm-12 col-xs-12 left-block">
                <?php if($ideal_section_title): ?>
                <div class="block-title wow fadeInLeft" data-wow-delay="0.2s">
                    <h2 class="text-white"><?php echo $ideal_section_title; ?></h2>
                </div>
                <?php endif; ?>

                <?php if($ideal_section_content): ?>
                <div class="textbox entry-content ptb-30 pt-0 wow fadeInLeft" data-wow-delay="0.2s">
                    <?php echo $ideal_section_content; ?>
                </div>
                <?php endif; ?>

                <?php if($ideal_section_button_label): ?>
                <div class="btnbox pt-0 wow fadeInLeft" data-wow-delay="0.3s">
                    <a class="btn primary white-hover" href="<?php echo $ideal_section_button_link; ?>"><span><?php echo $ideal_section_button_label; ?> <i class="las la-arrow-right"></i></span></a>
                </div>
                <?php endif; ?>
            </div>

        </div>
    </div>
</section>
<?php endif; ?>



<?php
    $journey_section_title = get_field('journey_section_title');
    $journey_block = get_field('journey_block');
?>
<?php if($journey_section_title || $journey_block ): ?>
<!--Journey Section-->
<section class="journey-section results-section bg4">
    <div class="container relative">
        <div class="sigma_dots"></div>
        <div class="row results-inner">

            <!-- <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 left-block wow fadeInLeft" data-wow-delay="0.2s">
                <div class="result-block bg2 d-flex v-center">
                    <div class="bg-img before-none" style="background:url('<?php //echo get_template_directory_uri(); ?>/assets/images/bg3.jpg') no-repeat center;"></div>
                </div>
            </div> -->

            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 right-block">
                <div class="results-right-inn pl-0">

                    <?php if($journey_section_title): ?>
                    <div class="block-title wow fadeInRight" data-wow-delay="0.2s">
                    <div class="small-title"><?php echo $journey_section_title; ?></div>
                        <!--<h2></h2>-->
                    </div>
                    <?php endif; ?>

                    <?php if(have_rows('journey_block')) : ?>
                    <div class="row journey-list journey-slider ptb-20 wow fadeInRight" data-wow-delay="0.3s">
                        <?php while(have_rows('journey_block')) : the_row(); 
                            $journey_block_image = get_sub_field('journey_block_image');
                            $journey_block_title = get_sub_field('journey_block_title');
                        ?>
                        <?php if($journey_block_image || $journey_block_title): ?>
                        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 items">
                            <div class="card-journey shine">
                                <?php if($journey_block_image): ?>
                                <div class="imgbox">
                                    <img src="<?php echo esc_url($journey_block_image['url']); ?>" alt="<?php echo $journey_block_image['title']; ?>">
                                </div>
                                <?php endif; ?>

                                <?php if($journey_block_title): ?>
                                <div class="text">
                                    <h5><?php echo $journey_block_title; ?></h5>
                                </div>
                                <?php endif; ?>
                            </div>
                        </div>
                        <?php endif; ?>
                        <?php endwhile; ?>
                    </div>
                    <?php endif; ?>

                </div>
            </div>

        </div>
    </div>
</section>
<?php endif; ?>


<?php 
$video_testimonial_section_title = get_field('video_testimonial_section_title');
$video_testimonial_block = get_field('video_testimonial_block');
$video_testimonial_button_label = get_field('video_testimonial_button_label');
$video_testimonial_button_link = get_field('video_testimonial_button_link');
?>
<?php if($video_testimonial_section_title || $video_testimonial_block || $video_testimonial_button_label || $video_testimonial_button_link ): ?>
<!--Video Testimonial Section-->
<section class="journey-section results-section results-section-video video-landing-page ptb-60">
    <div class="container relative">
        
        <?php if($video_testimonial_section_title): ?>
        <div class="block-title text-center wow fadeInUp" data-wow-delay="0.2s">
          <div class="small-title"><?php echo $video_testimonial_section_title; ?></div>
            <!--<h2></h2>-->
        </div>
        <?php endif; ?>

        <?php if(have_rows('video_testimonial_block')) : ?>
        <div class="row video-test-list video-test-list-slider ptb-20">
            <?php $v_count=0; ?>
            <?php while(have_rows('video_testimonial_block')) : the_row(); 
                $v_count++;
                $video_iframe_link = get_sub_field('video_iframe_link');
                $upload_testimonial_video = get_sub_field('upload_testimonial_video');
                $video_review_option = get_sub_field('video_review_option');
            ?>
            
            <?php if($video_iframe_link && $video_review_option == 'review-link') : ?>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 items wow fadeInLeft" data-wow-delay="0.<?php echo $v_count; ?>s">
                <div class="video-box">
                    <?php echo $video_iframe_link; ?>
                </div>
            </div>
            <?php endif; ?>

            <?php if($upload_testimonial_video && $video_review_option == 'upload-review-video') : ?>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 items wow fadeInLeft" data-wow-delay="0.<?php echo $v_count; ?>s">
                <div class="video-box">
                     <video width="320" height="240" controls>
                      <source src="<?php echo $upload_testimonial_video['url']; ?>" type="video/mp4">
                    </video>
                </div>
            </div>
            <?php endif; ?>
            
            
            <?php endwhile; ?>
        </div>
	<div class="slide-numb">
     <div class="slide-counter"></div>
  </div>
        <?php endif; ?>

        <?php if($video_testimonial_button_label): ?>
        <div class="bottom-btnbox text-center ptb-20 pb-0">
            <a class="btn primary" href="<?php echo $video_testimonial_button_link; ?>"><span><?php echo $video_testimonial_button_label; ?> <i class="las la-arrow-right"></i></span></a>
        </div>
        <?php endif; ?>

    </div>

</section>
<?php endif; ?>


<?php 
$testimonials_section_title = get_field('testimonials_section_title');
$testimonials_block = get_field('testimonials_block');
?>
<?php if($testimonials_section_title || $testimonials_block ): ?>
<!--Testimonials Section-->
<section class="testimonial-section bg1 ptb-60">
    <div class="shape_only bounce-y"></div>
    <div class="container relative">

        <?php if($testimonials_section_title): ?>
        <div class="block-title wow fadeInUp text-center" data-wow-delay="0.2s">
        <div class="small-title"><?php echo $testimonials_section_title; ?></div>
            <!--<h2 class="text-white"></h2>-->
        </div>
        <?php endif; ?>

        <?php if(have_rows('testimonials_block')) : ?>
        <div class="relative">
            <div class="sigma_dots"></div>
            <div class="row testimonial-list testimonial-slider wow fadeInUp" data-wow-delay="0.3s">

                <?php while(have_rows('testimonials_block')) : the_row(); 
                    $client_review = get_sub_field('client_review');
                    $client_name = get_sub_field('client_name');
                    $star_rating = get_sub_field('star_rating');
                ?>
                <?php if($client_review || $client_name || $star_rating ): ?>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 items">
                    <div class="card-testi d-flex">
                        <div class="quote-icon"></div>
                        <?php echo $client_review; ?>

                        <div class="client-info mt-auto d-flex v-center">
                            <?php if($client_name): ?>
                            <div class="text">
                                <strong class="client-name"><?php echo $client_name; ?></strong>
                            </div>
                            <?php endif; ?>

                            <?php if($star_rating): ?>
                            <div class="star-box d-flex ml-auto">
                                <i class="las la-star <?php if ($star_rating >= 1) { echo 'checked';}?>"></i>
                                <i class="las la-star <?php if ($star_rating >= 2) { echo 'checked';}?>"></i>
                                <i class="las la-star <?php if ($star_rating >= 3) { echo 'checked';}?>"></i>
                                <i class="las la-star <?php if ($star_rating >= 4) { echo 'checked';}?>"></i>
                                <i class="las la-star <?php if ($star_rating >= 5) { echo 'checked';}?>"></i>
                            </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
                <?php endif; ?>
                <?php endwhile; ?>

            </div>
        </div>
        <?php endif; ?>

    </div>
</section>
<?php endif; ?>


<?php 
$reviews_google_title = get_field('reviews_google_title');
$reviews_google_script = get_field('reviews_google_script');
?>
<?php if($reviews_google_title || $reviews_google_script ): ?>
<!-- google-review-section -->
<section class="testimonial-section google-review-section ptb-60 bg5">
    <div class="container">
        <div class="parallelogram_shape">
            <div class="shape_1"></div>
            <div class="shape_2"></div>
            <div class="shape_3"></div>
        </div>
        <?php if($reviews_google_title): ?>
        <div class="block-title wow fadeInUp text-center" data-wow-delay="0.2s">
           <div class="small-title"><?php echo $reviews_google_title; ?></div>
            <!--<h2></h2>-->
        </div>
        <?php endif; ?>
        <?php if($reviews_google_script): ?>
        <div class="google-review-block">
            <?php echo $reviews_google_script; ?>
        </div>
        <?php endif; ?>
    </div>
</section>
<?php endif; ?>



<?php 
$faq_section_title = get_field('faq_section_title');
$faq_section_subtitle = get_field('faq_section_subtitle');
$faq_list = get_field('faq_list');
?>
<?php if($faq_section_title || $faq_list ): ?>
<!--FAQ Section-->
<section class="faq-section ptb-60">
    <div class="container relative">

        <?php if($faq_section_title): ?>
        <div class="block-title text-center">
        <div class="small-title"><?php echo $faq_section_title; ?></div>
            <!--<h2></h2>-->
        </div>
        <?php endif; ?>

        <?php if(have_rows('faq_list')) : ?>
        <div id="faqAccordion" class="faq-list ptb-20 pb-0">
            <?php $fq_count=0; ?>
            <?php while(have_rows('faq_list')) : the_row(); 
                $fq_count++;
                $collapsed=$fq_count==1 ? '' : 'collapsed';
                $faq_question = get_sub_field('faq_question');
                $faq_answer = get_sub_field('faq_answer');
            ?>
            <div class="faq-card wow fadeInUp" data-wow-delay="0.3s">
                <?php if($faq_question): ?>
                <h4 class="acc_trigger <?php echo $collapsed; ?>" data-toggle="collapse" data-target="#collapse_<?php echo $fq_count; ?>" aria-expanded="false" aria-controls="collapse_<?php echo $fq_count; ?>"><?php echo $faq_question; ?></h4>
                <?php endif; ?>

                <?php if($faq_answer): ?>
                <div id="collapse_<?php echo $fq_count; ?>" class="collapse" data-parent="#faqAccordion">
                    <div class="content-box entry-content">
                        <?php echo $faq_answer; ?>
                    </div>
                </div>
                <?php endif; ?>
            </div>
          <?php endwhile; ?>
        </div>
        <?php endif; ?>

    </div>
</section>
<?php endif; ?>


<?php 
$contact_section_title = get_field('contact_section_title');
$address_block = get_field('address_block');
$clinic_number = get_field('clinic_number');
$email = get_field('email');
$working_hours = get_field('working_hours');
$map_iframe_link = get_field('map_iframe_link');
$social_media_section_title = get_field('social_media_section_title', 'options');
$social_media = get_field('social_media', 'options');
?>
<?php if($contact_section_title || $address_block || $clinic_number || $email || $working_hours || $map_iframe_link|| $social_media_section_title || $social_media ): ?>
<!--Contact Section-->
<section class="contact-section ptb-100 pt-0">

    <?php if($contact_section_title || $address_block || $clinic_number || $email || $working_hours || $social_media_section_title || $social_media ): ?>
    <div class="address-block">
        <div class="container d-flex h-100 relative">
            <div class="address-block-inner ml-auto h-100 relative wow fadeInRight" data-wow-delay="0.4s">
                <?php if($contact_section_title): ?>
                <h4><?php echo $contact_section_title; ?></h4>
                <?php endif; ?>

                <?php if(have_rows('address_block')) : ?>
                <?php while(have_rows('address_block')) : the_row(); 
                    $address = get_sub_field('address');
                ?>
                <?php if($address): ?>
                <div class="cont-items address d-flex">
                    <span class="iconbox"><i class="las la-street-view"></i></span>
                    <div class="location">
                        <?php echo $address; ?>
                    </div>
                </div>
                <?php endif; ?>
                <?php endwhile; ?>
                <?php endif; ?>

                <?php if($clinic_number): ?>
                <div class="cont-items email d-flex">
                    <span class="iconbox"><i class="las la-tty"></i></span>
                    <p><strong>Phone Number:</strong><br><a href="tel:<?php echo $clinic_number; ?>"><?php echo $clinic_number; ?></a></p>
                </div>
                <?php endif; ?>

                <?php if($email): ?>
                <div class="cont-items phone d-flex">
                    <span class="iconbox"><i class="las la-envelope"></i></span>
                    <p><strong>Email:</strong><br><?php echo $email; ?></p>
                </div>
                <?php endif; ?>

                <?php if($working_hours): ?>
                <div class="cont-items hours d-flex">
                    <span class="iconbox"><i class="las la-clock"></i></span>
                    <p><strong>Working Hours:</strong><br><?php echo $working_hours; ?></p>
                </div>
                <?php endif; ?>
                
                <div class="shape_star"></div>
                <div class="three-line"></div>
            </div>

            <?php if(have_rows('social_media', 'options')) : ?>
            <div class="social-block ptb-30 d-flex v-center">
                <?php if($social_media_section_title): ?>
                <h6 class="mb-0 mr-2"><?php echo $social_media_section_title; ?></h6>
                <?php endif; ?>

                <div class="social-media d-flex v-center">
                    <?php while(have_rows('social_media', 'options')) : the_row(); 
                        $sm_label = get_sub_field('social_media_label');
                        $sm_link = get_sub_field('social_media_link');
                    ?>
                    <?php if($sm_label): ?>
                    <a href="<?php echo $sm_link; ?>" target="_blank"><i class="lab la-<?php echo $sm_label; ?>"></i></a>
                    <?php endif; ?>
                    <?php endwhile; ?>
                </div>
            </div>
            <?php endif; ?>
        </div>
    </div>
    <?php endif; ?>

    <?php if($map_iframe_link): ?>
    <div class="mapbox">
        <?php echo $map_iframe_link; ?>
    </div>
    <?php endif; ?>
</section>
<?php endif; ?>


<?php 
$consult_sec_image = get_field('consultation_section_image');
$consult_sec_title = get_field('consultation_section_title');
$consult_sec_text = get_field('consultation_section_text');
$consult_sec_form_script = get_field('consultation_section_form_script');
?>
<?php if($consult_sec_image || $consult_sec_title || $consult_sec_text || $consult_sec_form_script ): ?>
<!--Consultation Section-->
<section class="contact-section map-bg ptb-60" id="contact-section">

    <?php if($consult_sec_image): ?>
    <div class="contact-imgbox wow fadeInLeft" data-wow-delay="0.4s">
        <img src="<?php echo esc_url($consult_sec_image['url']); ?>" alt="<?php echo $consult_sec_image['title']; ?>">
    </div>
    <?php endif; ?>

    <div class="container relative">
        <div class="row contact-inner">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ml-auto wow fadeInRight" data-wow-delay="0.4s">
                <div class="contact-block relative">
                    <div class="sigma_dots"></div>
                    <div class="shape_star"></div>

                    <?php if($consult_sec_title || $consult_sec_text ): ?>
                    <div class="block-title">
                        <?php if($consult_sec_title): ?>
                        <h2><?php echo $consult_sec_title; ?></h2>
                        <?php endif; ?>

                        <?php if($consult_sec_text): ?>
                        <p><?php echo $consult_sec_text; ?></p>
                        <?php endif; ?>
                    </div>
                    <?php endif; ?>

                    <?php if($consult_sec_form_script): ?>
                    <div class="form-block ptb-20 pb-0">
                        <div id="int_form" >
                                <?php echo $consult_sec_form_script; ?>
                        </div>
                    </div>
                    <?php endif; ?>

                </div>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>


<?php 
/*
$endorsements_section_title = get_field('endorsements_section_title');
$endorsements_gallery = get_field('endorsements_gallery');
?>
<?php if($endorsements_section_title || $endorsements_gallery): ?>
<!--Endorsements Section-->
<section class="endorsement-section media-section ptb-40">
    <div class="container">

        <?php if($endorsements_section_title): ?>
        <div class="block-title text-center ptb-0 pt-0 wow fadeInUp" data-wow-delay="0.2s">
            <div class="small-title"><?php echo $endorsements_section_title; ?></div>
        </div>
        <?php endif; ?>

        <?php if($endorsements_gallery): ?>   
        <div class="media-list media-slider wow fadeInUp" data-wow-delay="0.3s">
            <?php foreach( $endorsements_gallery as $image ): ?>
            <div class="items">
                <div class="card-media crad-endors">
                    <div class="imgbox">
                       <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>">
                   </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
        <?php endif; ?>
    </div>
</section>
<?php endif; ?>
*/
?>


<style>
.iti__arrow{
    display: none;
}
</style>

<script type="text/javascript">
jQuery(document).ready(function($) {
	
	// image slider 
	var $slider = jQuery('.results-slider');

  // Counter logic
  $slider.on('init reInit afterChange', function (event, slick, currentSlide) {
    var current = (currentSlide === undefined ? 0 : currentSlide) + 1;
    var total = slick.slideCount;

    jQuery('.slide-counter-img').text(current + ' / ' + total);
  });

	// image slider end
	
	var $slider = jQuery('.video-test-list-slider');

  // Counter logic
  $slider.on('init reInit afterChange', function (event, slick, currentSlide) {
    var current = (currentSlide === undefined ? 0 : currentSlide) + 1;
    var total = slick.slideCount;

    jQuery('.slide-counter').text(current + ' / ' + total);
  });

    // Initialize the slider with autoplay initially set to false

    let sliderStarted = false;
    
    // Function to check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // On scroll event
    $(window).scroll(function() {
        // Replace 'your-section-id' with the actual ID where you want the slider to start
        const targetSection = document.getElementById('results-slider-de');
        
        if (targetSection && !sliderStarted && isElementInViewport(targetSection)) {
            console.log('hi');
            $(".results-slider").slick('slickPlay');
            sliderStarted = true;
            // Optional: Remove scroll event listener since we don't need it anymore
            $(window).off('scroll');
        }
    });
});
jQuery(document).ready(function() {
    jQuery(".video-btn").click(function() {
        var s = jQuery("#videoplayid").val(),
            o = jQuery("#videoplaysrc").val();
        "" !== o && "" !== s && (jQuery("#videoBox_" + s).find("iframe").attr("src", o), jQuery("#videoBox_" + s).parent().removeClass("active")), jQuery(".v-big-list .items").addClass("hide");
        var s = jQuery(this).attr("id"),
            e = jQuery("#videoBox_" + s).removeClass("hide"),
            e = jQuery("#videoBox_" + s).find("iframe").attr("src");
        jQuery("#videoplayid").val(s), jQuery("#videoplaysrc").val(e), jQuery("#videoBox_" + s).find("iframe").attr("src", e + "?autoplay=1"), jQuery("#videoBox_" + s).addClass("active"), jQuery("#videoBox_" + s).parent().addClass("active")
    }), jQuery(".video-test-list-slider").slick({
        infinite: !0,
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
				autoplay: true,
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                arrows: true
            }
        }]
    }), jQuery(".media-slider").slick({
        infinite: !0,
        dots: !1,
        arrows: !0,
        speed: 300,
        autoplay: !0,
        autoplaySpeed: 3e3,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), jQuery(".results-slider").slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3e3,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), jQuery(".serv-slider-nav").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: ".serv-slider-for",
        dots: !1,
        arrows: !0,
        centerMode: !1,
        focusOnSelect: !0,
        draggable: !1,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 479,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    }), jQuery(".serv-slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        dots: !1,
        fade: !0,
        draggable: !1,
        adaptiveHeight: !0,
        asNavFor: ".serv-slider-nav"
    }), jQuery(".cost-slider").slick({
        dots: !0,
        infinite: !0,
        arrows: !1,
        dots: !1,
        fade: !0,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: !1,
        asNavFor: ".cost-tab-nav"
    }), jQuery(".cost-tab-nav").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: !1,
        dots: !1,
        swipe: !1,
        asNavFor: ".cost-slider",
        focusOnSelect: !0
    }), jQuery(".journey-slider").slick({
        arrows: !0,
        dots: !1,
        infinite: !1,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !1,
        autoplaySpeed: 3e3,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), jQuery(".testimonial-slider").slick({
        infinite: !0,
        dots: !1,
        arrows: !0,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), jQuery(".procedure-slider").slick({
        arrows: !0,
        dots: !1,
        infinite: !1,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !1,
        autoplaySpeed: 3e3,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
    var s, o = 0;
    jQuery(window).scroll(function() {
        var s = jQuery(".counter-block").offset().top - window.innerHeight;
        0 == o && jQuery(window).scrollTop() > s && (jQuery(function(s) {
            jQuery(".timer").each(function o(e) {
                var i = s(this);
                e = s.extend({}, e || {}, i.data("countToOptions") || {}), i.countTo(e)
            })
        }), o = 1)
    }), jQuery(function(s) {
        jQuery(".timer").each(function o(e) {
            var i = s(this);
            e = s.extend({}, e || {}, i.data("countToOptions") || {}), i.countTo(e)
        })
    }), (s = jQuery).fn.countTo = function(o) {
        return o = o || {}, s(this).each(function() {
            var e = s.extend({}, s.fn.countTo.defaults, {
                    from: s(this).data("from"),
                    to: s(this).data("to"),
                    speed: s(this).data("speed"),
                    refreshInterval: s(this).data("refresh-interval"),
                    decimals: s(this).data("decimals")
                }, o),
                i = Math.ceil(e.speed / e.refreshInterval),
                l = (e.to - e.from) / i,
                t = this,
                r = s(this),
                a = 0,
                d = e.from,
                n = r.data("countTo") || {};

            function c(s) {
                var o = e.formatter.call(t, s, e);
                r.html(o)
            }
            r.data("countTo", n), n.interval && clearInterval(n.interval), n.interval = setInterval(function s() {
                d += l, a++, c(d), "function" == typeof e.onUpdate && e.onUpdate.call(t, d), a >= i && (r.removeData("countTo"), clearInterval(n.interval), d = e.to, "function" == typeof e.onComplete && e.onComplete.call(t, d))
            }, e.refreshInterval), c(d)
        })
    }, s.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: function s(o, e) {
            return o.toFixed(e.decimals)
        },
        onUpdate: null,
        onComplete: null
    }
});

</script>

<?php get_footer(); ?>