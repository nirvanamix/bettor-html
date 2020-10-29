jQuery(document).ready(function($) {
	const acardion = {
		fun: () => {
			$('.acardion .top').click(function(event) {
				$('.acardion .top').not($(this)).removeClass('active');
				$('.acardion .top').not($(this)).parent('.item').find('.bottom').slideUp(200);
				$(this).toggleClass('active');
				$(this).parent('.item').find('.bottom').slideToggle(200);
			});
		}
	}
	acardion.fun();


	const tabs = {
		fun: () => {
			$('.tab-swich .item').click(function(event) {
				$('.tab-swich .item').removeClass('active');
				$(this).toggleClass('active');
				$('.tabs-items > .item').hide(0);
				$('.tabs-items > .item').eq($(this).index()).show(0);
			});
		}
	}
	tabs.fun();


	const reiting = {
		fun: () => {
			$('.reiting-option .drob').click(function(event) {
				$('.reiting-option .drob').not($(this)).parent('.reiting-option').removeClass('active').find('.drob-reiting').slideUp(100);
				$(this).parent('.reiting-option').toggleClass('active');
				$(this).parent('.reiting-option').find('.drob-reiting').slideToggle(100);
			});
			jQuery(document).click( function(event){
				if(jQuery(event.target).closest(".reiting-option").length ) 
				return;
					$('.reiting-option').removeClass('active').find('.drob-reiting').slideUp(100);
				event.stopPropagation();
			});
		}
	}
	reiting.fun();


	const radio_input = {
		fun: () =>{
			$('.radio-label').each(function(index, el) {
				if($(this).find('input').prop('checked') == true){
					$(this).addClass('active');
					$(this).prevAll('label').addClass('active');
				}
				else{
					$(this).removeClass('active');
				}
			});

			/*radio reiting*/
			$('.radio-label').click(function(event) {
				$(this).parent('.group-radio').find('label').removeClass('active');
				$(this).addClass('active');
			});

			$('.radio-reiting label').click(function(event) {
				$(this).prevAll('label').addClass('active');
			});

			$('.radio-reiting label').hover(function() {
				$(this).parent('.radio-reiting').addClass('hover-block');

				
				$(this).addClass('hover-label')
				$(this).prevAll('label').addClass('hover-label')
			}, function() {
				$(this).parent('.radio-reiting').removeClass('hover-block');
				$('.radio-reiting label').removeClass('hover-label')
			});



		}
	}
	radio_input.fun();


	const show_more = {
		fun: () => {
			$('.show-more a').click(function(event) {
				event.preventDefault();
				$('.text-show[data-show=' + $(this).attr('data-show') + ']').addClass('active');
				$(this).parent('.show-more').remove();
			});
		}
	}
	show_more.fun();


	const tabs_mobile = {
		fun: () => {
			$('.tab-swich').click(function(event) {
				$(this).toggleClass('active-mobile');
			});
		}
	}
	tabs_mobile.fun();

	const mobile_menu = {
		fun: () => {
			$('.mobile-menu').click(function(event) {
				$(this).toggleClass('active');
				$('ul.nav-ul').toggleClass('active');

				$('body').toggleClass('body-open-menu')
			});

			jQuery(document).click( function(event){
				if(jQuery(event.target).closest("header").length ) 
				return;
					$('body').removeClass('body-open-menu');
					$('ul.nav-ul').removeClass('active');
					$('.mobile-menu').removeClass('active');
				event.stopPropagation();
			});

			$('ul.nav-ul svg').click(function(event) {
				event.preventDefault();
				$(this).toggleClass('active');
				$('ul.nav-ul svg').not($(this)).removeClass('active');
				$(this).parents('li').find('ul.drob-ul').toggleClass('active');
			});
		}
	}
	mobile_menu.fun();

	const modal_window = {
		fun: () => {
			$('body').on('click', 'a[data-modal]', function(event){
				event.preventDefault();
				$('.modal-window').fadeOut(400).removeClass('active');
				$('.modal-window[data-modal="' + $(this).attr('data-modal') +'"]').fadeIn(400).addClass('active');
				$('html, body').addClass('overflow-body');
			});
			const close_window = () => {
				$('.modal-window').fadeOut(400).removeClass('active');
				$('html, body').removeClass('overflow-body');
			}
			$('body').on('click', '.close', function(event){
				close_window();
			});
			jQuery(".modal-window").click( function(event){
				if(jQuery(event.target).closest(".window").length ) 
				return;
					close_window();
				event.stopPropagation();
			});
		}
	}
	modal_window.fun();


});



const open_modal = {
	fun: (name) => {
		$('.modal-window[data-modal="' + name +'"]').fadeIn(400).addClass('active');
		$('html, body').addClass('overflow-body');
	}
}
// open_modal.fun('modal-action');







