<?php 
/*Template Name: About Page*/
get_header();
?>

<?php get_template_part('template-parts/content', 'internal-banner'); ?>

<?php 
$about_section_title = get_field('about_section_title');
$about_section_subtitle = get_field('about_section_subtitle');
$about_section_description = get_field('about_section_description');
$about_section_image = get_field('about_section_image');
?>
<?php if($about_section_title || $about_section_subtitle || $about_section_description || $about_section_image): ?>
<section class="abt-section ptb-40">
    <div class="container">
        <div class="row v-center abt-inner relative">

            <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 left-block wow fadeInLeft" data-wow-delay="0.3s">
                <div class="textarea relative pr-0">

                	<?php if($about_section_title || $about_section_subtitle): ?>
                    <div class="block-title relative">
                        <h2><?php echo $about_section_title; ?></h2>
                        <h5><?php echo $about_section_subtitle; ?></h5>
                    </div>
                    <?php endif; ?>

                    <?php if($about_section_description): ?>
                    <?php echo $about_section_description; ?>
                    <?php endif; ?>

                </div>
            </div>

            <?php if($about_section_image): ?>
            <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12 right-block wow fadeInRight" data-wow-delay="0.3s">
                <div class="imgbox">
                    <img src="<?php echo esc_url($about_section_image['url']); ?>" alt="<?php echo $about_section_image['title']; ?>" width="100%">
                </div>
            </div>
            <?php endif; ?>

        </div>
    </div>
</section>
<?php endif; ?>


<?php 
$benefits_sec_bg_img = get_field('benefits_section_background_image');
$benefits_sec_title = get_field('benefits_section_title');
$benefits_list = get_field('benefits_list');
$benefits_right_sec_video_link = get_field('benefits_right_section_video_link');
?>
<?php if($benefits_sec_bg_img || $benefits_sec_title || $benefits_list || $benefits_right_sec_video_link): ?>
<section class="benefit-section bg2 ptb-60">

	<?php if($benefits_sec_bg_img): ?>
    <div class="bg-img" style="background:url('<?php echo esc_url($benefits_sec_bg_img['url']); ?>') no-repeat center;"></div>
    <?php endif; ?>
    <div class="container relative">
        <div class="row v-center">

            <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12 wow fadeInLeft" data-wow-delay="0.3s">
                <div class="benefit-block">

                	<?php if($benefits_sec_title): ?>
                    <div class="block-title">
                        <h2 class="text-white"><?php echo $benefits_sec_title; ?></h2>
                    </div>
                    <?php endif; ?>

                    <?php if(have_rows('benefits_list')) : ?>
                    <ul class="bene-list">
                    	<?php while(have_rows('benefits_list')) : the_row(); 
				            $benefits_list_icon = get_sub_field('benefits_list_icon');
				            $benefits_list_title = get_sub_field('benefits_list_title');
				            $benefits_list_text = get_sub_field('benefits_list_text');
				        ?>
				        <?php if($benefits_list_icon || $benefits_list_title || $benefits_list_text): ?>
                        <li class="d-flex">

                        	<?php if($benefits_list_icon	): ?>
                            <i class="las la-<?php echo $benefits_list_icon; ?>"></i>
                            <?php endif; ?>

                            <?php if($benefits_list_title || $benefits_list_text): ?>
                            <div class="textarea">
                                <h5><?php echo $benefits_list_title; ?></h5>
                                <?php echo $benefits_list_text; ?>
                            </div>
                            <?php endif; ?>

                        </li>
                        <?php endif; ?>
        				<?php endwhile; ?>
                    </ul>
                    <?php endif; ?>

                </div>
            </div>

            <?php if($benefits_right_sec_video_link): ?>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 ml-auto wow fadeInRight" data-wow-delay="0.3s">
                <div class="video-block">
                    <a class="video_icon_btn" href="#vModal" data-toggle="modal" tabindex="0" title="Video">
                        <i class="fa fa-play"></i>
                    </a>
                </div>
            </div>
            <?php endif; ?>

        </div>
    </div>
</section>
<?php endif; ?>

<?php if($benefits_right_sec_video_link): ?>
<div id="vModal" class="modal fade bs-example-modal-md v_modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <button type="button" class="close v_close d-flex v-center j-center" data-dismiss="modal" title="Close" aria-label="Close"><i class="las la-times"></i></button>
            <div class="videobox">
                <iframe width="680" height="640" src="<?php echo $benefits_right_sec_video_link; ?>" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</div>
<?php endif; ?>


<?php if(have_rows('our_missions')) : ?>
<section class="mission-section ptb-40">
    <div class="container">
        <div class="row mission-inner">
        	<?php $class=0; ?>
        	<?php while(have_rows('our_missions')) : the_row();
        		$class++; 
	            $our_mission_image = get_sub_field('our_mission_image');
	            $our_mission_title = get_sub_field('our_mission_title');
	            $our_mission_description = get_sub_field('our_mission_description');
	        ?>
	        <?php if($our_mission_image || $our_mission_title || $our_mission_description): ?>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 items wow <?php if($class % 2 == 1){ echo "fadeInLeft"; }else{ echo "fadeInRight"; }; ?>" data-wow-delay="0.3s">
                <div class="card-mission">

                	<?php if($our_mission_image): ?>
                    <i class="iconbox">
                        <img src="<?php echo esc_url($our_mission_image['url']); ?>" alt="<?php echo $our_mission_image['title']; ?>" width="40">
                    </i>
                    <?php endif; ?>

                    <?php if($our_mission_title || $our_mission_description): ?>
                    <div class="textarea">
                        <h3><?php echo $our_mission_title; ?></h3>
                        <?php echo $our_mission_description; ?>
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
$our_team = get_field('our_team');
?>
<?php if($team_section_title || $our_team): ?>
<section class="team-section bg2 ptb-60">
    <div class="container">

    	<?php if($team_section_title): ?>
        <div class="block-title text-center">
            <h2><?php echo $team_section_title; ?></h2>
        </div>
        <?php endif; ?>

        <?php if(have_rows('our_team')) : ?>
        <div class="row team-list">
        	<?php $video_id=0; ?>
        	<?php while(have_rows('our_team')) : the_row(); 
        		$video_id++;
	            $team_member_image = get_sub_field('team_member_image');
	            $team_member_name = get_sub_field('team_member_name');
	            $team_member_designation = get_sub_field('team_member_designation');
	            $about_team_member = get_sub_field('about_team_member');
	            $mobile_number = get_sub_field('mobile_number');
	            $email = get_sub_field('email');
	        ?>
	        <?php if($team_member_image || $team_member_name || $team_member_designation ): ?>
            <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12 items">
                <div class="card-team text-center">
                    <a class="card-link d-flex v-center j-center" href="#Modal_<?php echo $video_id; ?>" data-toggle="modal"><i class="las la-arrow-circle-right trans"></i></a>
                     <?php if($team_member_image): ?>
                    <div class="imgbox">
                        <img src="<?php echo esc_url($team_member_image['url']); ?>" alt="<?php echo esc_url($team_member_image['url']); ?>">
                    </div>
                     <?php endif; ?>

                    <?php if($team_member_name || $team_member_designation): ?>
                    <div class="textarea trans">

                    	<?php if($team_member_name): ?>
                        <h5 class="text-white"><?php echo $team_member_name; ?></h5>
                        <?php endif; ?>
                        <hr>

                        <?php if($team_member_designation): ?>
                        <em class="text"><?php echo $team_member_designation; ?></em>
                        <?php endif; ?>
                    </div>
                    <?php endif; ?>
                </div>
            </div>
            <?php endif; ?>
        	<?php endwhile; ?>
        </div>
        <?php endif; ?>

    </div>
</section>
<?php endif; ?>
<!--Modal-->
<?php if(have_rows('our_team')) : ?>
<?php $video_id=0; ?>
<?php while(have_rows('our_team')) : the_row(); 
	$video_id++;
    $team_member_image = get_sub_field('team_member_image');
    $about_team_member = get_sub_field('about_team_member');
    $mobile_number = get_sub_field('mobile_number');
    $email = get_sub_field('email');
?>
<?php if($team_member_image || $about_team_member || $mobile_number || $email ): ?>
<div id="Modal_<?php echo $video_id; ?>" class="modal fade bs-example-modal-md v_modal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
            <button type="button" class="close v_close d-flex v-center j-center" data-dismiss="modal" title="Close" aria-label="Close"><i class="las la-times"></i></button>
            <div class="m-content-block">
                <div class="row">

                	<?php if($team_member_image): ?>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 left-block">
                        <img src="<?php echo esc_url($team_member_image['url']); ?>" alt="<?php echo $team_member_image['title']; ?>">
                    </div>
                    <?php endif; ?>

                    <?php if($about_team_member || $mobile_number || $email ): ?>
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 right-block">
                        <?php echo $about_team_member; ?>
                        
                        <?php if($mobile_number || $email): ?>
                        <div class="team-info">

                        	<?php if($mobile_number): ?>
                            <a class="d-flex v-center" href="tel:<?php echo $mobile_number; ?>"><i class="las la-phone-volume mr-2"></i><strong><?php echo $mobile_number; ?></strong></a>
                            <?php endif; ?>

                            <?php if($email): ?>
                            <a class="d-flex v-center" href="mailto:<?php echo $email; ?>"><i class="las la-envelope mr-2"></i><strong><?php echo $email; ?></strong></a>
                            <?php endif; ?>
                        </div>
                        <?php endif; ?>
                    </div>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</div>
<?php endif; ?>
<?php endwhile; ?>
<?php endif; ?>

<?php get_footer(); ?>