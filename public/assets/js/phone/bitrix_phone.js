   function set_phone_value(params){



        var  old_elem=params['old_elem'];

        var  new_elem=params['new_elem'];

        var  form_id=params['form_id'];



        $('#'+form_id+' .b24-form-field-phone').on('blur', new_elem, function(){

         

            var code = $('#'+form_id+' .iti__selected-dial-code').text();

            var phone = $(new_elem).val();

            if(phone !='') {

               var final = code+" "+phone; 

            }else{

                var final = '';

            }

            



            var target = $(old_elem)[0];

            var event = document.createEvent("HTMLEvents");  

            $(old_elem).val(final);

            event.initEvent("input", true, true);

            target.dispatchEvent(event);



        });

    }

    

      function booking_replace_phone_field(rec_count,params){

            var old_elem = params['old_elem'];

           

                create_virtual_phone_field(params);

                set_phone_value(params);

            

         

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

                
                if ('only_australia' in params)  {

                window.intlTelInput(input_phn, {

                    separateDialCode: true,

                    initialCountry: "gb",

                    onlyCountries: ["gb"],

                    allowDropdown: false,

                });

                }

                if ('only_india' in params)  {
                    window.intlTelInput(input_phn, {
                        separateDialCode: true,
                        onlyCountries: ["in"],
                    });
                }
            

            $('#'+form_id+' .b24-form-field-phone .b24-form-control-label').hide();

          

        }



        function create_input_field(el_attrib){

            var element = document.createElement("input");

            for (var key in el_attrib) {

                element.setAttribute(key, el_attrib[key]);

            }

        return element;

        }

