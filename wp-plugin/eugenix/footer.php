<?php
    $websiteName = get_bloginfo('name');
    $websiteURL = get_home_url();
    $mobile_header_button_label = get_field('mobile_header_button_label', 'options');
    $mobile_header_button_link = get_field('mobile_header_button_link', 'options');
?>
<!--Footer-->
<footer id="Footer" class="footer">
    <div class="footer-bottom relative bg1">
        <div class="container">
            <div class="f-bottom-inner text-center ptb-40">
                <p class="mb-0 text-white">© <?php echo date('Y'); ?> <?php echo $websiteName; ?></p>
            </div>
        </div>
    </div>
</footer>
<div class="scrollup active"><i class="las la-arrow-up"></i></div>
<?php wp_footer(); ?>

<link rel='stylesheet' id='intlTelInput-css' href='https://promotion.eugenixhairsciences.com/lib/phone/css/intlTelInput.css' media='all' />



<script src="https://promotion.eugenixhairsciences.com/lib/phone/js/intlTelInput.min.js"></script>

<script src="https://promotion.eugenixhairsciences.com/lib/phone/js/bitrix_phone.js"></script>
<script type="text/javascript">
jQuery(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 700) {
        $(".book-consult-btnbox").addClass("darkHeader");
    } else {
        $(".book-consult-btnbox").removeClass("darkHeader");
    }
});
jQuery( document ).ready( function ( $ ) {
        var new_elem_det = {
            "type": 'tel',
            "style": 'width:100%;padding-top:5px',
            "name": 'phoneField1',
            "id": 'phoneField1',
            "placeholder": 'Phone',
            "class": 'b24-form-control phone-field',
			"minlength": '10',
			"maxlenghth": '10'
        };
        var params = {
            "form_id": 'int_form',
            "old_elem": '#int_form input[name="phone"]',
            "new_elem": '#phoneField1',
            'only_india': 'yes',
            "new_elem_det": new_elem_det
        };
         replace_phone_field(1,params);
            custom_validation();
            setTimeout(function() { custom_validation(); }, 1000);
            setTimeout(function() { custom_validation(); }, 4000);
            setTimeout(function() { custom_validation(); }, 8000);
           setTimeout(function() { custom_validation(); }, 9000);
           $(document).on('input', '#phoneField1', function() {
            var phoneNumber = $(this).val(); // Get the input value
            var digitsOnly = phoneNumber.replace(/\D/g, ''); // Remove non-digit characters
            if (digitsOnly.length > 10 || /\D/.test(phoneNumber)) {
                // Show error if more than 10 digits or if any non-digit characters are present
                if (!$('#phone-error').length) {
                    $(this).parent().after('<span id="phone-error" style="color:red;">Invalid number.</span>');
                }
            } else {
                // Remove error message if input is valid
                $('#phone-error').remove();
            }
            });
           $('#int_form').on('input', "#phoneField1", function () {
                var get_phone = $(this).val();
                if (get_phone === '') {
                    this.setCustomValidity("");  // Allow form submission if the phone field is empty
                } else if (!isValidPhoneNumber(get_phone)) {
                    this.setCustomValidity("Invalid Number");
                } else {
                    this.setCustomValidity("");
                }
            });
            $('#int_form').on('blur', "#phoneField1", function () {
            var get_phone = $(this).val();
            if (isValidPhoneNumber(get_phone)) {
                $('#int_form input[name="email"]').prop('required', false);
            }else {
                $('#int_form input[name="email"]').prop('required', true);
            }
        });
        $('#int_form').on('blur', "input[name='email']", function () {
            var get_email = $(this).val();
            if (isValidEmail(get_email)) {
                $('#int_form #phoneField1').prop('required', false);
            }else {
                $('#int_form #phoneField1').prop('required', true);
            }
        });
	});
    function isValidEmail(email) {
      // Define a regular expression to match a valid email address
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Check if the email address matches the regular expression
      return emailRegex.test(email);
    }
    function isValidPhoneNumber(phoneNumber) {
      // Remove any non-numeric characters from the phone number
      phoneNumber = phoneNumber.replace(/\D/g, '');
      return /^\d{10}$/.test(phoneNumber);
    }
    function custom_validation(){
          $("#int_form  form").removeAttr('novalidate');
          $('#int_form input[name="name"]').prop('required', false);
          $('#int_form #phoneField1').prop('required', true);
          $('#int_form input[name="email"]').prop('required', true);
    }
    function replace_phone_field(rec_count,params){
        var old_elem = params['old_elem'];
        if( $(old_elem).length ) {
            create_virtual_phone_field(params);
            set_phone_value(params);
        }
        else{
            if(rec_count < 90) {
                setDelay(rec_count,params);
            }
        }
    }
     function setDelay(rec_count,params) {
            var inc_count = parseInt(rec_count) + 1;
            var time_delay = parseInt(rec_count)+200;
          setTimeout(function(){
            replace_phone_field(inc_count,params);
			$("#phoneField1").on("input", function() {
			  if (/^0/.test(this.value)) {
				this.value = this.value.replace(/^0/, "");
				$(".b24-form-field-phone .b24-form-control-alert-message").show();
				//$(".error-red").html('');
				//$("#phoneField1").after("<span class='error-red'>Please enter a valid phone number</span>");
			  }
			});
          }, time_delay);
        }
        function create_virtual_phone_field(params){
            var  old_elem=params['old_elem'];
            var  new_elem_det=params['new_elem_det'];
            var  new_elem=params['new_elem'];
            var  form_id=params['form_id'];
            $(old_elem).hide();
            var new_elmement = create_input_field(new_elem_det);
            $(old_elem).after(new_elmement);
            var input_phn = document.querySelector(new_elem);
                if ('only_india' in params)  {
                window.intlTelInput(input_phn, {
                    separateDialCode: true,
                    onlyCountries: ["in"],
                });
            }
            else{
                window.intlTelInput(input_phn, {
                separateDialCode: true,
            });
            }
            $('#'+form_id+' .b24-form-field-phone .b24-form-control-container .b24-form-control-label').hide();
			var curhtml = $(".b24-form-field-phone .b24-form-control-label").html();
			$('.iti.iti--allow-dropdown.iti--separate-dial-code').append("<div class='b24-form-control-label'>"+ curhtml +"</div>");
        }
          function create_input_field(el_attrib){
            var element = document.createElement("input");
            for (var key in el_attrib) {
                element.setAttribute(key, el_attrib[key]);
            }
        return element;
        }
        function set_phone_value(params){
        var  old_elem=params['old_elem'];
            var  new_elem=params['new_elem'];
            var  form_id=params['form_id'];
        $('#'+form_id+' .b24-form-field-phone').on('blur', new_elem, function(){
            var code = $('#'+form_id+' .iti__selected-dial-code').text();
            var phone = $(new_elem).val();
			if (/^0/.test(phone)) {
			phone = phone.replace(/^0/, "");
			$(new_elem).val(phone);
			$(".b24-form-field-phone .b24-form-control-alert-message").show();
			//$(".error-red").html('');
				//$("#phoneField1").after("<span class='error-red'>Please enter a valid phone number</span>");
			 }
			var phoneno = /^\(?([1-9]{1})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		    if(phone.match(phoneno)) {
			$(".b24-form-field-phone .b24-form-control-alert-message").hide();
			//$(".error-red").html('');				
			}
			else {
			$(".b24-form-field-phone .b24-form-control-alert-message").show();
			//$(".error-red").html('');
			//$("#phoneField1").after("<span class='error-red'>Please enter a valid phone number</span>");
			return false;
			}
            var final = code+" "+phone;
            var target = $(old_elem)[0];
            var event = document.createEvent("HTMLEvents");  
            $(old_elem).val(final);
            event.initEvent("input", true, true);
            target.dispatchEvent(event);
        });
    }
</script>
<style>
.iti--allow-dropdown .iti__flag-container:hover .iti__selected-flag{}
.form-block .b24-form-btn{
	margin-right: auto !important;margin-left: initial;
}
.iti__selected-flag{width:90px;}
.iti{position: relative;display: inherit;}
#int_form .b24-form-field-phone .b24-form-control-container .b24-form-control-label {  display: none;}
ul#iti-0__country-listbox {    display: none;}
.iti__arrow.iti__arrow--up {    display: none;}
.b24-form-field-phone .b24-form-control-alert-message{    display:none !important;}
</style>
<?php if($mobile_header_button_label): ?>
<div class="book-consult-btnbox hide">
    <a class="btn primary" href="<?php echo $mobile_header_button_link; ?>"><span><?php echo $mobile_header_button_label; ?> <i class="las la-arrow-right"></i></span></a>
</div>
<?php endif; ?>
</body>
</html>