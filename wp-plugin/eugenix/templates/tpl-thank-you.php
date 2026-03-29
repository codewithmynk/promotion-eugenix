<?php 
/*Template Name: Thank You Page*/
get_header();
?>

<?php 
$thank_you_page_title = get_field('thank_you_page_title');
$thank_you_message = get_field('thank_you_message');
$address_block = get_field('address_block');
?>
<div class="header-blank"></div>
<?php if($thank_you_page_title || $thank_you_message || $address_block ): ?>
<section class="thank-you-page">
    <div class="container">
        <div class="box">
            <div class="center-box step4">
                <div class="thank-you">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/vote-elections-outline.gif" alt="" />
                    <?php if($thank_you_page_title): ?>
                    <h3><?php echo $thank_you_page_title; ?></h3>
                    <?php endif; ?>

                    <?php echo $thank_you_message; ?>
                </div>
                <div class="location">
                    <?php if(have_rows('address_block')) : ?>
                    <ul>
                        <?php while(have_rows('address_block')) : the_row(); 
                            $address_location = get_sub_field('address_location');
                            $address = get_sub_field('address');
                        ?>
                        <?php if($address_location || $address): ?>
                        <li>
                            <?php if($address_location): ?>
                            <h5><?php echo $address_location; ?></h5>
                            <?php endif; ?>

                            <?php echo $address; ?>
                        </li>
                        <?php endif; ?>
                        <?php endwhile; ?>
                    </ul>
                    <?php endif; ?>
                </div>
            </div>
        </div>
    </div>
</section>
<?php endif; ?>

<?php get_footer(); ?>
