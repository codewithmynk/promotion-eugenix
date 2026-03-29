<?php 

/* Theme Admin */
require get_template_directory() . '/inc/theme-admin.php';

/* Classic Editor */
require get_template_directory() . '/inc/classic-editor.php';

/* SVG Support */
require get_template_directory() . '/inc/svg-support.php';

/* Theme Setup */
require get_template_directory() . '/inc/theme-setup.php';

/*@ Change WordPress Admin Login Logo */
if ( !function_exists('eugenix_wp_admin_login_logo') ) :
 
    function eugenix_wp_admin_login_logo() { ?>
        <style type="text/css">
            body.login div#login h1 a {
                background: url('<?php echo get_template_directory_uri(); ?>/assets/images/sitelogo.png;');
                background-size: 100% auto;
                width: 240px; height: 50px;
                background-repeat: no-repeat;
            }
        </style>
    <?php }
 
    add_action( 'login_enqueue_scripts', 'eugenix_wp_admin_login_logo' );
 
endif;

/*@ Change WordPress Admin Login Logo Link URL  */
if ( !function_exists('eugenix_wp_admin_login_logo_url') ) :
 
    function eugenix_wp_admin_login_logo_url() {
        return home_url();
    }
    add_filter( 'login_headerurl', 'eugenix_wp_admin_login_logo_url' );
 
endif;

/*@ Change WordPress Admin Login Logo's Title  */
if ( !function_exists('eugenix_wp_admin_login_logo_title') ) :
 
    function eugenix_wp_admin_login_logo_title( $headertext ) {
        $headertext = esc_html__( get_bloginfo('name'), 'ASL' );
        return $headertext;
    }
    add_filter( 'login_headertext', 'eugenix_wp_admin_login_logo_title' );
 
endif;
// Enable auto-updates for plugins and themes
add_filter('auto_update_plugin', '__return_true');
add_filter('auto_update_theme', '__return_true');

// Enable file modifications
add_filter('file_mod_allowed', '__return_true');


// Override both phone and message with highest priority
function override_joinchat_data($phone) {
    $current_url = isset($_SERVER['REQUEST_URI']) ? strtolower($_SERVER['REQUEST_URI']) : '';
    
    if (strpos($current_url, 'hair-transplant-google') !== false) {
        return '918826473333';
    }
    
    if (strpos($current_url, 'hair-transplant-social') !== false) {
        return '918826473333';
    }
    
    return $phone;
}

function override_joinchat_message_data($message) {
    $current_url = isset($_SERVER['REQUEST_URI']) ? strtolower($_SERVER['REQUEST_URI']) : '';
    
    if (strpos($current_url, 'hair-transplant-google') !== false) {
        return 'Hello! Can you provide me more information on this?';
    }
    
    if (strpos($current_url, 'hair-transplant-social') !== false) {
        return 'Hello! Can you share more information on this?';
    }
    
    return $message;
}

// Apply all possible filters
add_filter('joinchat_whatsapp_phone', 'override_joinchat_data', 999);
add_filter('joinchat_phone', 'override_joinchat_data', 999);
add_filter('joinchat_message', 'override_joinchat_message_data', 999);
add_filter('joinchat_whatsapp_message', 'override_joinchat_message_data', 999);

// Override settings array
add_filter('joinchat_settings', function($settings) {
    $current_url = isset($_SERVER['REQUEST_URI']) ? strtolower($_SERVER['REQUEST_URI']) : '';
    
    if (strpos($current_url, 'hair-transplant-google') !== false) {
        $settings['telephone'] = '919998199981';
        // $settings['message_text'] = 'Hello! Can you provide me more information on this?';
     $settings['message_send'] = 'Hello! Can you provide me more information on this?';
        $settings['message'] = 'Hello! Can you provide me more information on this?';
    } elseif (strpos($current_url, 'hair-transplant-social') !== false) {
        $settings['telephone'] = '919998199981';
        // $settings['message_text'] = 'Hello! Can you share more information on this?';
         $settings['message_send'] = 'Hello! Can you share more information on this?';
        $settings['message'] = 'Hello! Can you share more information on this?';
    }
    
    return $settings;
}, 999);


add_action('wp_footer', 'bitrix_form_custom_capture');

function bitrix_form_custom_capture() {
    $allowed_page_ids = array(528);
  
  if (!is_singular() || !in_array(get_the_ID(), $allowed_page_ids)) {
    return; // Exit if not on the allowed pages
  }
?>
<script>
(function () {
  'use strict';

  const CONFIG = {
    debug: true,
  };

  let lastData = null;

  function log(message, data) {
    if (CONFIG.debug) {
      console.log('[Bitrix Form]', message, data || '');
    }
  }

  // Extract data from YOUR specific Bitrix form
  function captureFormData() {
    // Find ANY form on page (yours is a Vue form in a div)
    const form = document.querySelector('form');
    
    if (!form) {
      log('No form found');
      return null;
    }

    log('Form found:', form);

    // Your form has these specific field names based on HTML:
    const data = {
      name: '',
      phone: '',
      email: '',
      city: '',
    };

    // Get Name field
    const nameInput = form.querySelector('input[name="name"]');
    if (nameInput) {
      data.name = nameInput.value;
      log('Name input found:', nameInput.name);
    }

    // Get Phone field - your form has TWO phone fields:
    // 1. Hidden: input[name="phone"]
    // 2. Visible: input[name="phoneField1"] (the one user types into)
    const phoneFieldVisible = form.querySelector('input[name="phoneField1"]');
    const phoneFieldHidden = form.querySelector('input[name="phone"]');
    
    if (phoneFieldVisible) {
      data.phone = phoneFieldVisible.value;
      log('Phone field (visible) found:', phoneFieldVisible.name);
    }
    if (phoneFieldHidden) {
      data.phone = phoneFieldHidden.value;
      log('Phone field (hidden) found:', phoneFieldHidden.name);
    }

    // Get Email field
    const emailInput = form.querySelector('input[name="email"]');
    if (emailInput) {
      data.email = emailInput.value;
      log('Email input found:', emailInput.name);
    }

    // Get City field (optional)
    const cityInputs = form.querySelectorAll('input[type="string"]');
    if (cityInputs.length > 0) {
      data.city = cityInputs[0].value; // First string input is likely city
      log('City input found');
    }

    log('Captured data:', data);
    return data;
  }

  // Store data in localStorage
  function saveData(data) {
    // Require at least email or phone
    if (!data.email && !data.phone) {
      log('No email or phone, skipping storage');
      return false;
    }

    const dataToSave = {
      name: data.name || '',
      phone: data.phone || '',
      email: data.email || '',
      city: data.city || '',
      submittedAt: new Date().toISOString(),
    };

    log('✓ SAVING DATA TO localStorage:', dataToSave);

    // Store in localStorage
    localStorage.setItem('lead_name', dataToSave.name);
    localStorage.setItem('lead_phone', dataToSave.phone);
    localStorage.setItem('lead_email', dataToSave.email);
    localStorage.setItem('lead_city', dataToSave.city);
    localStorage.setItem('lead_time', Date.now());
    localStorage.setItem('lead_submitted', 'true');
    localStorage.setItem('bitrix_form_submission', JSON.stringify(dataToSave));

    log('✓ localStorage keys created successfully');
    log('  - lead_name:', dataToSave.name);
    log('  - lead_phone:', dataToSave.phone);
    log('  - lead_email:', dataToSave.email);

    // Push to GTM dataLayer
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'bitrix_form_submission',
        eventCategory: 'engagement',
        eventAction: 'form_submit',
        eventLabel: 'Bitrix Form',
        name: dataToSave.name,
        email: dataToSave.email,
        phone: dataToSave.phone,
        city: dataToSave.city,
        timestamp: dataToSave.submittedAt,
      });
      log('✓ GTM dataLayer event pushed');
    } catch(e) {
      log('Warning: GTM push failed:', e.message);
    }

    // Fire GA4 conversion
    try {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submission', {
          'form_name': 'bitrix_form',
          'email': dataToSave.email,
          'phone': dataToSave.phone,
          'name': dataToSave.name,
        });
        log('✓ GA4 conversion event fired');
      }
    } catch(e) {
      log('Warning: GA4 failed:', e.message);
    }

    return true;
  }

  // ========== EVENT LISTENERS ==========

  log('Initializing custom Bitrix form tracker');

  // Method 1: Listen to form submit
  document.addEventListener('submit', function(e) {
    const form = e.target;
    
    // Check if it's a form (any form)
    if (form.tagName !== 'FORM') {
      return;
    }

    log('✓ Form submit event detected');

    // Capture data immediately
    const data = captureFormData();
    if (data && (data.email || data.phone)) {
      lastData = data;
      saveData(data);
    } else {
      log('No valid data captured');
    }
  }, true);

  // Method 2: Monitor input changes to build up lastData
  document.addEventListener('input', function(e) {
    const form = e.target.closest('form');
    if (form) {
      const data = captureFormData();
      if (data) {
        lastData = data;
        log('Form input changed, data updated');
      }
    }
  }, true);

  // Method 3: Monitor change events
  document.addEventListener('change', function(e) {
    const form = e.target.closest('form');
    if (form) {
      const data = captureFormData();
      if (data) {
        lastData = data;
        log('Form change detected, data updated');
      }
    }
  }, true);

  // Method 4: Monitor for Bitrix button clicks
  document.addEventListener('click', function(e) {
    // Check if user clicked a button (could be form submit)
    if (e.target.tagName === 'BUTTON' || e.target.classList.contains('b24-form-btn')) {
      log('Button clicked');
      
      // Give Bitrix a moment to process, then capture
      setTimeout(function() {
        const data = captureFormData();
        if (data && (data.email || data.phone)) {
          lastData = data;
          saveData(data);
        }
      }, 100);
    }
  }, true);

  // Method 5: Intercept AJAX requests before Bitrix sends
  if (window.XMLHttpRequest) {
    const originalOpen = window.XMLHttpRequest.prototype.open;
    
    window.XMLHttpRequest.prototype.open = function(method, url) {
      // Check if this is a Bitrix request
      if (url && (url.includes('bxajax') || url.includes('bitrix') || url.includes('crm/form'))) {
        log('Bitrix AJAX request detected');

        // Save data before request is sent
        const data = captureFormData();
        if (data && (data.email || data.phone)) {
          saveData(data);
        }
      }

      return originalOpen.apply(this, arguments);
    };
  }

  // Method 6: Watch for page unload (Bitrix redirect)
  window.addEventListener('beforeunload', function() {
    log('Page unload detected');
    
    if (lastData) {
      log('Saving data before unload');
      saveData(lastData);
    }
  });

  // Method 7: Watch for Bitrix success states
  if (typeof BX !== 'undefined' && BX.forms && BX.forms.Manager) {
    log('Bitrix BX library detected');

    // On submit
    BX.forms.Manager.onFormSubmit.subscribe(function(event, data) {
      log('BX.forms.Manager.onFormSubmit triggered');
      
      const formData = captureFormData();
      if (formData && (formData.email || formData.phone)) {
        saveData(formData);
      }
    });

    // On success
    BX.forms.Manager.onFormSuccess.subscribe(function(event, data) {
      log('BX.forms.Manager.onFormSuccess triggered');
      
      const formData = captureFormData();
      if (formData && (formData.email || formData.phone)) {
        saveData(formData);
      }
    });
  }

  // Periodically check for form updates
  setInterval(function() {
    const form = document.querySelector('form');
    if (form) {
      const data = captureFormData();
      if (data && (data.email || data.phone)) {
        if (!lastData || data.email !== lastData.email || data.phone !== lastData.phone) {
          lastData = data;
          // Don't save every change, just update lastData
        }
      }
    }
  }, 1000);

  log('✓ Tracker fully initialized and monitoring form');
  log('Waiting for form submission...');

})();
</script>
<?php
}
?>