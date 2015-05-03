(function($){
	var body = $('body');
	
		
		var overlay = $(this).parents('.overlay'),
		langs = overlay.find('.lang'),
		id_layout = 'english_layout';
		langs.addClass('active_lang');
		
	
		setTimeout(function(){
		
			var header, about,works,worksY, active_layout;
			
			langs.hide();
			active_layout = $('#english_layout');
			active_layout.addClass('active_layout');
			
			header = active_layout.find('.home'),
			about = header.next(),
			works = about.next(),
			worksY = works.offset().top;

			if(window.pageYOffset < worksY){
					$(this).animationLayout({
						container: header
					});
					
					$(this).animationLayout({
							container: about
					});
				
			}else{
					$(this).animationLayout({
						container: works
					});
			}
			
			$(document).on('scroll' , function(){
			
				if(window.pageYOffset <= worksY){
					$(this).animationLayout({
						container: works
					});
	
				}else{
					$(this).animationLayout({
						container: header
					});
					
					$(this).animationLayout({
							container: about
					});
				}
			});
		},300);

	$('.scroll_action').on('click', function(event){
	
		event.preventDefault();
		
		var	target = $(this).attr('href'),
		position = $(target).offset().top; 

		$('html, body').animate({scrollTop: position}, 800);

	});
})(jQuery);