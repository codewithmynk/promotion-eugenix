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
        'subtitle'     => get_field( 'banner_subtitle', $post_id ),
        'title'        => get_field( 'banner_title', $post_id ),
        'description'  => get_field( 'banner_description', $post_id ),
        'button_label' => get_field( 'banner_button_label', $post_id ),
        'button_link'  => get_field( 'banner_button_link', $post_id ),
        'image'        => eugenix_resolve_image_url( get_field( 'banner_image', $post_id ) )
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
        'background_image' => eugenix_resolve_image_url( get_field( 'counter_section_background_image', $post_id ) ),
        'items'            => $stats_list
    );

    // --- 3. VIDEOS (Dynamic from ACF) ---
    $video_repeater = get_field( 'video_testimonial_block', $post_id );
    $video_list = array();
    if ( $video_repeater ) {
        foreach ( $video_repeater as $item ) {
            $vid_id = '';
            if ( $item['video_review_option'] === 'youtube-url' && $item['youtube_video_url'] ) {
                if ( preg_match( '/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i', $item['youtube_video_url'], $video_match ) ) {
                    $vid_id = $video_match[1];
                }
            } elseif ( $item['video_review_option'] === 'upload-review-video' && $item['upload_testimonial_video'] ) {
                $vid_id = $item['upload_testimonial_video'];
            }
            
            if ( $vid_id ) {
                $video_list[] = array('id' => $vid_id);
            }
        }
    }
    
    $videos = array(
        'title'        => get_field( 'video_testimonial_section_title', $post_id ),
        'button_label' => get_field( 'video_testimonial_button_label', $post_id ),
        'button_link'  => get_field( 'video_testimonial_button_link', $post_id ),
        'items'        => $video_list
    );

    // --- 4. PROCEDURE ---
    $proc_repeater = get_field( 'procedure_block', $post_id );
    $proc_list = array();
    if ( $proc_repeater ) {
        foreach ( $proc_repeater as $item ) {
            $proc_list[] = array(
                'title' => $item['procedure_block_title'],
                'icon'  => eugenix_resolve_image_url( $item['procedure_block_icon'] ),
                'desc'  => $item['procedure_block_content']
            );
        }
    }
    $procedure = array(
        'section_title' => get_field( 'procedure_section_title', $post_id ),
        'button_label'  => get_field( 'procedure_section_button_label', $post_id ),
        'button_link'   => get_field( 'procedure_section_button_link', $post_id ),
        'items'         => $proc_list
    );

    // --- 5. SERVICES ---
    $serv_repeater = get_field( 'service_list', $post_id );
    $serv_list = array();
    if ( $serv_repeater ) {
        foreach ( $serv_repeater as $item ) {
            $serv_list[] = array(
                'title'   => $item['service_title'],
                'icon'    => eugenix_resolve_image_url( $item['service_icon'] ),
                'image'   => eugenix_resolve_image_url( $item['service_image'] ),
                'content' => $item['service_content']
            );
        }
    }
    $services = array(
        'section_title' => get_field( 'services_section_title', $post_id ),
        'items'         => $serv_list
    );

    // --- 6. DOCTORS ---
    $team_repeater = get_field( 'team_list', $post_id );
    $doc_list = array();
    if ( $team_repeater ) {
        foreach ( $team_repeater as $item ) {
            $doc_list[] = array(
                'name'           => strip_tags( $item['team_member_name'] ),
                'qualifications' => $item['team_member_qualification'],
                'img'            => eugenix_resolve_image_url( $item['team_member_image'] ),
                'button_label'   => $item['team_member_mobile_button_label'],
                'button_link'    => $item['team_member_mobile_number']
            );
        }
    }
    $doctors = array(
        'section_title' => get_field( 'team_section_title', $post_id ),
        'description'   => get_field( 'team_section_description', $post_id ),
        'items'         => $doc_list
    );

    // --- 7. RESULTS ---
    $results_repeater = get_field( 'results_list', $post_id );
    $results_list = array();
    if ( $results_repeater ) {
        foreach ( $results_repeater as $item ) {
            $results_list[] = array(
                'before' => eugenix_resolve_image_url( $item['results_beforeafter_image'] )
            );
        }
    }
    $results_section = array(
        'section_title' => get_field( 'results_section_title', $post_id ) ?: "LIFE-CHANGING RESULTS",
        'items'         => $results_list
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
    $text_testimonials = array(
        'section_title' => get_field( 'testimonials_section_title', $post_id ),
        'items'         => $testimonials_list
    );

    // --- 9. CLINIC VIDEO ---
    $clinic_video = array(
        'video_type'  => get_field( 'clinic_video_option', $post_id ),
        'url'         => eugenix_resolve_image_url( get_field( 'upload_clinic_video', $post_id ) ),
        'iframe_link' => get_field( 'clinic_video_iframe_link', $post_id ),
        'poster'      => eugenix_resolve_image_url( get_field( 'clinic_video_section_image', $post_id ) ),
        'heading'     => get_field( 'clinic_video_section_title', $post_id ),
        'content'     => get_field( 'clinic_video_section_content', $post_id )
    );

    // --- 11. MEDIA / FEATURED ON ---
    $media_repeater = get_field( 'media_logo_list', $post_id );
    $media = array();
    if ( $media_repeater ) {
        foreach ( $media_repeater as $item ) {
            $media[] = array(
                'logo' => eugenix_resolve_image_url( $item['media_logo'] )
            );
        }
    }
    $featured_on = array(
        'title' => get_field( 'media_section_title', $post_id ),
        'logos' => $media
    );

    // --- 12. HAIR LOSS SOLUTION ---
    $hair_repeater = get_field( 'hair_loss_block', $post_id );
    $hair_loss = array();
    if ( $hair_repeater ) {
        foreach ( $hair_repeater as $item ) {
            $hair_loss[] = array(
                'title'   => $item['hair_loss_block_title'],
                'image'   => eugenix_resolve_image_url( $item['hair_loss_block_image'] ),
                'content' => $item['hair_loss_block_content']
            );
        }
    }
    $hair_loss_solution = array(
        'title'        => get_field( 'hair_loss_solution_section_title', $post_id ),
        'blocks'       => $hair_loss,
        'button_label' => get_field( 'hair_loss_solution_button_label', $post_id ),
        'button_link'  => get_field( 'hair_loss_solution_button_link', $post_id )
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
    $faq_section = array(
        'title' => get_field( 'faq_section_title', $post_id ),
        'list'  => $faq
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
        'section_title' => get_field( 'endorsements_section_title', $post_id ),
        'gallery'       => $endorsements_list
    );

    // --- 15. CONSULTATION SECTION ---
    $consultation = array(
        'section_title' => get_field( 'consultation_section_title', $post_id ),
        'section_text'  => get_field( 'consultation_section_text', $post_id ),
        'section_image' => eugenix_resolve_image_url( get_field( 'consultation_section_image', $post_id ) ),
        'form_script'   => get_field( 'consultation_section_form_script', $post_id )
    );

    // --- 16. CONTACT SECTION ---
    $contact = array(
        'contact_section_title' => get_field( 'contact_section_title', $post_id ),
        'address_block'         => get_field( 'address_block', $post_id ),
        'clinic_number'         => get_field( 'clinic_number', $post_id ),
        'email'                 => get_field( 'email', $post_id ),
        'working_hours'         => get_field( 'working_hours', $post_id ),
        'map_iframe_link'       => get_field( 'map_iframe_link', $post_id ),
    );

    // --- 10. GLOBAL CONFIG / OPTIONS ---
    $config = array(
        'header_logo'                => eugenix_resolve_image_url( get_option( 'options_header_logo' ) ),
        'top_bar_text'               => get_option( 'options_top_bar_text' ),
        'header_button_label'        => get_option( 'options_header_button_label' ),
        'header_button_link'         => get_option( 'options_header_button_link' ),
        'mobile_header_button_label' => get_option( 'options_mobile_header_button_label' ),
        'mobile_header_button_link'  => get_option( 'options_mobile_header_button_link' ),
        'mobile_number'              => get_option( 'options_mobile_number' ),
        'whatsapp_number'            => get_option( 'options_whatsapp_number' ),
        'email'                      => get_option( 'options_email' ),
        'office_time'                => get_option( 'options_office_time' ),
        'office_address'             => get_option( 'options_office_address' ),
        'social_media_section_title' => get_option( 'options_social_media_section_title' ),
        'social_media'               => get_field( 'social_media', 'options' )
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
        'results'          => $results_section,
        'textTestimonials' => $text_testimonials,
        'clinicVideo'      => $clinic_video,
        'featuredOn'       => $featured_on,
        'hairLossSolution' => $hair_loss_solution,
        'faq'              => $faq_section,
        'endorsements'     => $endorsements,
        'consultation'     => $consultation,
        'contact'          => $contact
    );

    return rest_ensure_response( $response_data );
}
