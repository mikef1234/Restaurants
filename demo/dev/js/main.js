(function($){
	
	var body = $("body");
	 
	var scrollEvent = {
		
		displays: $(".display_js"),
	
		init: function(){
			
			var display_active = scrollEvent.getActiveDisplay();
			
			$(this).magicLayout({
				container: display_active
			});
			
			scrollEvent.sedtBodyId(display_active);

			$(document).on('scroll', function(){
			
				scrollEvent.setActiveDisplay();
				
			});
		},
		
		getActiveDisplay: function(){
		
			var window_top = $(window).scrollTop(),
			offsetTop, display_active, cache;
			
			display_active = scrollEvent.displays.filter(function(index, element){
			
				cache = $(element);
				offsetTop = cache.offset().top;
				return window_top >= offsetTop && window_top < offsetTop + cache.outerHeight();
				
			});
			
			return display_active;
		},

		setActiveDisplay: function(){
			
			var window_top = $(window).scrollTop(),
			display_active = scrollEvent.getActiveDisplay();
		
			if(window_top > display_active.offset().top + display_active.outerHeight() / 2){
			
				$(this).magicLayout({
					container: display_active.next()
				});
				
				$(this).magicLayout({
					container: display_active
				});
			}
			
			if(!display_active.hasClass("display_active")){	
			
				scrollEvent.sedtBodyId(display_active);
				display_active.addClass("display_active").siblings(".display_js").removeClass("display_active");
				$('[data-scroll-nav=' + scrollEvent.displays.index(display_active) + ']').addClass("nav__link_active").siblings().removeClass("nav__link_active");
			
			}
		},
		
		sedtBodyId: function(display_active){
		
			body.attr("id", display_active.attr('id') + "_active");	
		
		},
		
		scroll: function(element){

			var	display_id = element.attr('data-id-section'),
			display_active = $('#' + display_id),
			position = display_active.offset().top; 

			$(this).addClass("nav__link_active").siblings().removeClass("nav__link_active");
			$("html, body").animate({scrollTop: position}, 1200);
			body.removeClass("nav-panel_active");
			
			scrollEvent.sedtBodyId(display_active);

			if(!display_active.hasClass("active_container")){

				$(this).magicLayout({
					container: display_active
				});
				
			}
		}
	}; 
	 
	scrollEvent.init();
	
	$("#action_button").on('click', function(){
		location.reload();
	});
	
})(jQuery);