<!--Truth Section-->
<?php 
$front_id = get_option( 'page_on_front' );
$how_we_do_section_title = get_field('how_we_do_section_title', $front_id);
$how_we_do_section_content = get_field('how_we_do_section_content', $front_id);
$how_we_do_block = get_field('how_we_do_block', $front_id);
?>
<?php if($how_we_do_section_title || $how_we_do_section_content || $how_we_do_block): ?>
<section class="support-section ptb-60 pt-0">
    <div class="container relative">
        
        <?php if($how_we_do_section_title || $how_we_do_section_content): ?>
        <div class="block-title text-center relative wow fadeInUp" data-wow-delay="0.2s">
            <h2><?php echo $how_we_do_section_title; ?></h2>
            <?php echo $how_we_do_section_content; ?>
        </div>
        <?php endif; ?>

        <?php if(have_rows('how_we_do_block', $front_id)) : ?>
        <div class="row support-list ptb-40 pb-0">
            <?php while(have_rows('how_we_do_block', $front_id)) : the_row(); 
                $how_we_do_list_icon = get_sub_field('how_we_do_list_icon');
                $how_we_do_list_title = get_sub_field('how_we_do_list_title');
                $how_we_do_list_text = get_sub_field('how_we_do_list_text');
            ?>
            <?php if($how_we_do_list_icon || $how_we_do_list_title || $how_we_do_list_text): ?>

            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12 items">
                <div class="card-supp d-flex">
                    <?php if($how_we_do_list_icon): ?>
                    <span class="iconbox d-flex v-center j-center">
                        <i class="las la-<?php echo $how_we_do_list_icon; ?>"></i>
                    </span>
                    <?php endif; ?>

                    <?php if($how_we_do_list_title || $how_we_do_list_text): ?>
                    <div class="textarea">
                        <h5><?php echo $how_we_do_list_title; ?></h5>
                        <p><?php echo $how_we_do_list_text; ?></p>
                    </div>
                    <?php endif; ?>
                </div>
                <div class="arrow"></div>
            </div>
            <?php endif; ?>
            <?php endwhile; ?>

        </div>
        <?php endif; ?>

    </div>
</section>
<?php endif; ?>