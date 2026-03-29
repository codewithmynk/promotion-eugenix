wow = new WOW({ offset:100, mobile:true, live:true }); wow.init();
jQuery(document).ready(function(){

	//Treeview
	jQuery(".treeview").treeview({
		collapsed: true,
		animated: "medium",
	});

	//*=============menu sticky js START=============*//
	var $window = $(window);
	var didScroll,
		lastScrollTop = 0,
		delta = 5,
		$mainNav = $("#Header"),
		$mainNavHeight = $mainNav.outerHeight(),
		scrollTop;

	$window.on("scroll", function () {
		didScroll = true;
		scrollTop = $(this).scrollTop();
	});

	setInterval(function () {
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 200);

	function hasScrolled() {
		if (Math.abs(lastScrollTop - scrollTop) <= delta) {
			return;
		}
		if (scrollTop > lastScrollTop && scrollTop > $mainNavHeight) {
			$mainNav.removeClass("fadeInDown").addClass("fadeInUp").css('top', -$mainNavHeight);
		} else {
			if (scrollTop + $(window).height() < $(document).height()) {
				$mainNav.removeClass("fadeInUp").addClass("fadeInDown").css('top', 0);
			}
		}
		lastScrollTop = scrollTop;
	}

	function navbarFixed() {
		if ($('#Header').length) {
			$(window).scroll(function () {
				var scroll = $(window).scrollTop();
				if (scroll) {
					$("#Header").addClass("navbar_fixed");
					//$(".sticky-nav-doc .body_fixed").addClass("body_navbar_fixed");
				} else {
					$("#Header").removeClass("navbar_fixed");
					//$(".sticky-nav-doc .body_fixed").removeClass("body_navbar_fixed");
				}
			})
		}
	}
	navbarFixed();
	//*=============menu sticky js END=============*//

	//Moble Menu Script
	jQuery(".mobilemenuicon").click(function(){
		jQuery('.mobilemenuicon .icon-bar').toggleClass('active');
		jQuery("body").toggleClass("mobile-menu-open");
	});
	jQuery(".menu-open-overlay").click(function(){
		jQuery(".mobilemenuicon .icon-bar").removeClass('active');
		jQuery("body").removeClass("mobile-menu-open");
	});

  /* scroll bottom to top */
  if (jQuery(this).scrollTop() > 600) {
    jQuery('.scrollup').addClass("active");
  } else {
    jQuery('.scrollup').removeClass("active");
  }
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 600) {
      jQuery('.scrollup').addClass("active");
    } else {
      jQuery('.scrollup').removeClass("active");
    }
  });
  jQuery('.scrollup').click(function () {
    jQuery("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

	//Home Banner Slider
	jQuery('.hero-slider').slick({
	  arrows: false,
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  autoplay: true,
  	autoplaySpeed: 5000
	});

	jQuery(".slick-prev.slick-arrow").attr( "title", "Previous" );
	jQuery(".slick-next.slick-arrow").attr( "title", "Next" );


	jQuery('#exampleTab').easyResponsiveTabs({
    tabidentify: 'hor_1',
    inactive_bg: '',
    activetab_bg: ''
  });


jQuery(window).scroll(function() {    

    var scroll = $(window).scrollTop();



    if (scroll >= 700) {

        $("body").addClass("darkHeader-sticky");

    } else {

        $("body").removeClass("darkHeader-sticky");

    }

});


});//End

