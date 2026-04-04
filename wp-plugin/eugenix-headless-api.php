<?php
/**
 * Plugin Name: Eugenix Headless API
 * Description: Dynamic REST API endpoint that serves real ACF data for the Eugenix Next.js frontend.
 * Version: 2.0.0
 * Author: CodeWithMynk
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}

/**
 * Register the custom REST API route
 */
add_action( 'rest_api_init', function () {
    register_rest_route( 'eugenix/v1', '/landing-page', array(
        'methods'             => 'GET',
        'callback'            => 'eugenix_get_landing_page_data',
        'permission_callback' => '__return_true' // Publicly accessible
    ));
});

/**
 * Robust CORS Fix for WordPress REST API
 */
add_filter( 'rest_pre_serve_request', function( $value ) {
    header( 'Access-Control-Allow-Origin: *' );
    header( 'Access-Control-Allow-Methods: GET' );
    header( 'Access-Control-Allow-Credentials: true' );
    return $value;
});

/**
 * Helper: Resolve Image ID to full URL
 */
function eugenix_resolve_image_url( $id ) {
    if ( empty( $id ) ) return '';
    if ( is_array( $id ) && isset( $id['url'] ) ) return $id['url']; // If ACF returns object
    if ( is_string( $id ) && filter_var( $id, FILTER_VALIDATE_URL ) ) return $id; // If already a URL
    
    $url = wp_get_attachment_image_url( $id, 'full' );
    return $url ? $url : '';
}

/**
 * Callback: Construct the exact JSON structure Next.js expects from live ACF data.
 */
function eugenix_get_landing_page_data( WP_REST_Request $request ) {
    
    // Check for a slug first
    $slug = sanitize_text_field( $request->get_param( 'slug' ) );
    $post_id = $request->get_param( 'id' ) ? intval( $request->get_param( 'id' ) ) : 0;

    if ( ! empty( $slug ) ) {
        $page = get_page_by_path( $slug, OBJECT, 'page' );
        if ( $page ) {
            $post_id = $page->ID;
        } else {
            // If slug provided but not found, you could return an error or fallback to default
            return new WP_Error( 'no_data', 'No page found for slug: ' . $slug, array( 'status' => 404 ) );
        }
    }

    // Default to Post ID 528 (Bhubaneswar) if no valid slug or id provided
    if ( empty( $post_id ) ) {
        $post_id = 9;
    }

    // Verify ACF is active
    if ( ! function_exists( 'get_field' ) ) {
        return new WP_Error( 'acf_not_found', 'Advanced Custom Fields plugin is not active.', array( 'status' => 500 ) );
    }

    // --- 1. HERO ---
    $hero = array(
        'subtitle'    => get_field( 'banner_subtitle', $post_id ),
        'title'       => get_field( 'banner_title', $post_id ),
        'description' => get_field( 'banner_description', $post_id ),
        'buttonLabel' => get_field( 'banner_button_label', $post_id ),
        'buttonLink'  => get_field( 'banner_button_link', $post_id ),
        'image'       => eugenix_resolve_image_url( get_field( 'banner_image', $post_id ) )
    );

    // --- 2. STATS ---
    $stats_repeater = get_field( 'counter_block', $post_id );
    $stats_list = array();
    if ( $stats_repeater ) {
        foreach ( $stats_repeater as $item ) {
            $stats_list[] = array(
                'count'  => $item['counter_number'],
                'symbol' => $item['counter_symbol'],
                'label'  => $item['counter_text'],
                'icon'   => eugenix_resolve_image_url( $item['counter_icon'] )
            );
        }
    }
    $stats = array(
        'sectionTitle'    => get_field( 'counter_section_title', $post_id ), // Added Title
        'backgroundImage' => eugenix_resolve_image_url( get_field( 'counter_section_background_image', $post_id ) ),
        'items'           => $stats_list
    );

    // --- 3. VIDEOS ---
    $video_repeater = get_field( 'video_testimonial_block', $post_id );
    $video_list = array();
    if ( $video_repeater ) {
        foreach ( $video_repeater as $item ) {
            $vid_id = '';
            $opt = $item['video_review_option'];
            
            // Matches EXACT ACF Slugs: 'review-link' and 'upload-review-video'
            if ( $opt === 'review-link' ) {
                $content = $item['video_iframe_link'];
                if ( $content ) {
                    if ( strpos($content, '<iframe') !== false ) {
                        $vid_id = $content; // Full iframe tag
                    } elseif ( preg_match( '/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i', $content, $video_match ) ) {
                        $vid_id = $video_match[1]; // Plain YouTube URL
                    }
                }
            } elseif ( $opt === 'upload-review-video' ) {
                if ( !empty($item['upload_testimonial_video']) ) {
                    $vid_id = $item['upload_testimonial_video'];
                }
            }
            
            if ( $vid_id ) {
                $video_list[] = array('id' => $vid_id);
            }
        }
    }
    $videos = array(
        'sectionTitle' => get_field( 'video_testimonial_section_title', $post_id ),
        'buttonLabel'  => get_field( 'video_testimonial_button_label', $post_id ),
        'buttonLink'   => get_field( 'video_testimonial_button_link', $post_id ),
        'items'        => $video_list
    );

    // --- 4. PROCEDURE ---
    $proc_repeater = get_field( 'procedure_block', $post_id );
    $proc_list = array();
    if ( $proc_repeater ) {
        foreach ( $proc_repeater as $item ) {
            $proc_list[] = array(
                'title'       => $item['procedure_block_title'],
                'icon'        => eugenix_resolve_image_url( $item['procedure_block_icon'] ),
                'description' => $item['procedure_block_content']
            );
        }
    }
    $procedure = array(
        'sectionTitle' => get_field( 'procedure_section_title', $post_id ),
        'buttonLabel'  => get_field( 'procedure_section_button_label', $post_id ),
        'buttonLink'   => get_field( 'procedure_section_button_link', $post_id ),
        'items'        => $proc_list
    );

    // --- 5. SERVICES ---
    $serv_repeater = get_field( 'service_list', $post_id );
    $serv_list = array();
    if ( $serv_repeater ) {
        foreach ( $serv_repeater as $item ) {
            $serv_list[] = array(
                'title'       => $item['service_title'],
                'icon'        => eugenix_resolve_image_url( $item['service_icon'] ),
                'image'       => eugenix_resolve_image_url( $item['service_image'] ),
                'description' => $item['service_content']
            );
        }
    }
    $services = array(
        'sectionTitle' => get_field( 'services_section_title', $post_id ),
        'buttonLabel'  => get_field( 'service_button_label', $post_id ), // Currently no global button for this section in export, but keeping for parity
        'items'        => $serv_list
    );

    // --- 18. JOURNEY ---
    $journey_repeater = get_field( 'journey_block', $post_id );
    $journey_list = array();
    if ( $journey_repeater ) {
        foreach ( $journey_repeater as $item ) {
            $journey_list[] = array(
                'title' => $item['journey_block_title'],
                'image' => eugenix_resolve_image_url( $item['journey_block_image'] )
            );
        }
    }
    $journey = array(
        'sectionTitle' => get_field( 'journey_section_title', $post_id ),
        'items'        => $journey_list
    );

    // --- 19. INDIA SECTION ---
    $india_repeater = get_field( 'india_hair_transplant_block', $post_id );
    $india_list = array();
    if ( $india_repeater ) {
        foreach ( $india_repeater as $item ) {
            $india_list[] = array(
                'title'       => $item['india_hair_transplant_title'],
                'image'       => eugenix_resolve_image_url( $item['india_hair_transplant_image'] ),
                'description' => $item['india_hair_transplant_content'],
                'buttonLabel' => $item['india_hair_transplant_button_label'],
                'buttonLink'  => $item['india_hair_transplant_button_link'],
                'email'       => $item['india_hair_transplant_email'],
                'mobile'      => $item['india_hair_transplant_mobile_number']
            );
        }
    }
    $india = array(
        'sectionTitle' => get_field( 'india_section_title', $post_id ),
        'items'        => $india_list
    );

    // --- 20. IDEAL SECTION ---
    $ideal = array(
        'sectionTitle' => get_field( 'ideal_section_title', $post_id ),
        'description'  => get_field( 'ideal_section_content', $post_id ),
        'image'        => eugenix_resolve_image_url( get_field( 'ideal_section_image', $post_id ) ),
        'buttonLabel'  => get_field( 'ideal_section_button_label', $post_id ),
        'buttonLink'   => get_field( 'ideal_section_button_link', $post_id )
    );

    // --- 6. DOCTORS ---
    $team_repeater = get_field( 'team_list', $post_id );
    $doc_list = array();
    if ( $team_repeater ) {
        foreach ( $team_repeater as $item ) {
            $doc_list[] = array(
                'name'           => strip_tags( $item['team_member_name'] ),
                'qualifications' => $item['team_member_qualification'],
                'image'          => eugenix_resolve_image_url( $item['team_member_image'] ),
                'buttonLabel'    => $item['team_member_mobile_button_label'],
                'buttonLink'     => $item['team_member_mobile_number']
            );
        }
    }
    $doctors = array(
        'sectionTitle' => get_field( 'team_section_title', $post_id ),
        'description'  => get_field( 'team_section_description', $post_id ),
        'items'        => $doc_list
    );

    // --- 7. RESULTS ---
    $results_repeater = get_field( 'results_list', $post_id );
    $results_list = array();
    if ( $results_repeater ) {
        foreach ( $results_repeater as $item ) {
            $results_list[] = array(
                'image' => eugenix_resolve_image_url( $item['results_beforeafter_image'] )
            );
        }
    }
    $results = array(
        'sectionTitle' => get_field( 'results_section_title', $post_id ) ?: "LIFE-CHANGING RESULTS",
        'items'        => $results_list
    );

    // --- 8. TESTIMONIALS ---
    $test_repeater = get_field( 'testimonials_block', $post_id );
    $testimonials_list = array();
    if ( $test_repeater ) {
        foreach ( $test_repeater as $item ) {
            $testimonials_list[] = array(
                'name'   => $item['client_name'],
                'text'   => $item['client_review'],
                'rating' => intval( $item['star_rating'] )
            );
        }
    }
    $textTestimonials = array(
        'sectionTitle' => get_field( 'testimonials_section_title', $post_id ),
        'items'        => $testimonials_list
    );

    // --- 9. CLINIC VIDEO ---
    $clinicVideo = array(
        'videoType'    => get_field( 'clinic_video_option', $post_id ),
        'videoUrl'     => eugenix_resolve_image_url( get_field( 'upload_clinic_video', $post_id ) ),
        'iframeLink'   => get_field( 'clinic_video_iframe_link', $post_id ),
        'posterImage'  => eugenix_resolve_image_url( get_field( 'clinic_video_section_image', $post_id ) ),
        'sectionTitle' => get_field( 'clinic_video_section_title', $post_id ),
        'description'  => get_field( 'clinic_video_section_content', $post_id )
    );

    // --- 11. FEATURED ON ---
    $media_repeater = get_field( 'media_logo_list', $post_id );
    $media = array();
    if ( $media_repeater ) {
        foreach ( $media_repeater as $item ) {
            $media[] = array(
                'logo' => eugenix_resolve_image_url( $item['media_logo'] )
            );
        }
    }
    $featuredOn = array(
        'sectionTitle' => get_field( 'media_section_title', $post_id ),
        'items'        => $media
    );

    // --- 12. HAIR LOSS SOLUTION ---
    $hair_repeater = get_field( 'hair_loss_block', $post_id );
    $hair_loss = array();
    if ( $hair_repeater ) {
        foreach ( $hair_repeater as $item ) {
            $hair_loss[] = array(
                'title'       => $item['hair_loss_block_title'],
                'image'       => eugenix_resolve_image_url( $item['hair_loss_block_image'] ),
                'description' => $item['hair_loss_block_content']
            );
        }
    }
    $hairLossSolution = array(
        'sectionTitle' => get_field( 'hair_loss_solution_section_title', $post_id ),
        'blocks'       => $hair_loss,
        'buttonLabel'  => get_field( 'hair_loss_solution_button_label', $post_id ),
        'buttonLink'   => get_field( 'hair_loss_solution_button_link', $post_id )
    );

    // --- 13. FAQ ---
    $faq_repeater = get_field( 'faq_list', $post_id );
    $faq = array();
    if ( $faq_repeater ) {
        foreach ( $faq_repeater as $item ) {
            $faq[] = array(
                'question' => $item['faq_question'],
                'answer'   => $item['faq_answer']
            );
        }
    }
    $faqSection = array(
        'sectionTitle' => get_field( 'faq_section_title', $post_id ),
        'items'        => $faq
    );

    // --- 14. ENDORSEMENTS ---
    $endorsement_gallery = get_field( 'endorsements_gallery', $post_id );
    $endorsements_list = array();
    if ( $endorsement_gallery ) {
        foreach ( $endorsement_gallery as $image ) {
            $endorsements_list[] = array(
                'image' => eugenix_resolve_image_url( $image )
            );
        }
    }
    $endorsements = array(
        'sectionTitle' => get_field( 'endorsements_section_title', $post_id ),
        'items'        => $endorsements_list
    );

    // --- 15. CONSULTATION ---
    $consultation = array(
        'sectionTitle' => get_field( 'consultation_section_title', $post_id ),
        'description'  => get_field( 'consultation_section_text', $post_id ),
        'sectionImage' => eugenix_resolve_image_url( get_field( 'consultation_section_image', $post_id ) ),
        'formScript'   => get_field( 'consultation_section_form_script', $post_id )
    );

    // --- 16. CONTACT ---
    $contact = array(
        'sectionTitle'  => get_field( 'contact_section_title', $post_id ),
        'addressBlock'  => get_field( 'address_block', $post_id ),
        'phone'         => get_field( 'clinic_number', $post_id ),
        'email'         => get_field( 'email', $post_id ),
        'workingHours'  => get_field( 'working_hours', $post_id ),
        'mapIframeLink' => get_field( 'map_iframe_link', $post_id ),
    );

    // --- 17. REVIEWS GOOGLE ---
    $reviewsGoogle = array(
        'sectionTitle' => get_field( 'reviews_google_title', $post_id ),
        'reviewScript' => get_field( 'reviews_google_script', $post_id )
    );

    // --- 10. GLOBAL CONFIG ---
    $config = array(
        'headerLogo'               => eugenix_resolve_image_url( get_option( 'options_header_logo' ) ),
        'topBarText'               => get_option( 'options_top_bar_text' ),
        'headerButtonLabel'        => get_option( 'options_header_button_label' ),
        'headerButtonLink'         => get_option( 'options_header_button_link' ),
        'mobileHeaderButtonLabel'  => get_option( 'options_mobile_header_button_label' ),
        'mobileHeaderButtonLink'   => get_option( 'options_mobile_header_button_link' ),
        'mobileNumber'             => get_option( 'options_mobile_number' ),
        'whatsappNumber'           => get_option( 'options_whatsapp_number' ),
        'email'                    => get_option( 'options_email' ),
        'officeTime'               => get_option( 'options_office_time' ),
        'officeAddress'            => get_option( 'options_office_address' ),
        'socialMediaSectionTitle'  => get_option( 'options_social_media_section_title' ),
        'socialMedia'              => get_field( 'social_media', 'options' )
    );
    
    // Final Payload
    $response_data = array(
        'config'           => $config,
        'hero'             => $hero,
        'stats'            => $stats,
        'videos'           => $videos,
        'procedure'        => $procedure,
        'services'         => $services,
        'doctors'          => $doctors,
        'results'          => $results,
        'textTestimonials' => $textTestimonials,
        'clinicVideo'      => $clinicVideo,
        'featuredOn'       => $featuredOn,
        'hairLossSolution' => $hairLossSolution,
        'faq'              => $faqSection,
        'endorsements'     => $endorsements,
        'consultation'     => $consultation,
        'contact'          => $contact,
        'reviewsGoogle'    => $reviewsGoogle,
        'journey'          => $journey,
        'india'            => $india,
        'ideal'            => $ideal
    );

    return rest_ensure_response( $response_data );
}
