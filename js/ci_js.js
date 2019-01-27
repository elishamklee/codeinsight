$(function(){

	$('#signin').click(function(){
		$('#signin_popup').slideToggle();
		$('.modal_bg.desktop').addClass('open');
	})

	$('.modal_close').click(function(){
		$('#signin_popup').slideToggle();
		$('.modal_bg.desktop').removeClass('open');
	})

	$('.modal_bg.desktop').click(function(){
		$('#signin_popup').slideToggle();
		$('.modal_bg.desktop').removeClass('open');
	})

	$('.hamburger').click(function(){
		$('.modal_bg.mobile').addClass('open');
		$('.mobile_menu').addClass('open');
		$('.h_close').removeClass('hide');
		$(this).addClass('hide');
	})

	$('.h_close').click(function(){
		$(this).addClass('hide');
		$('.mobile_menu').removeClass('open');
		$('.hamburger').removeClass('hide');
		$('.modal_bg.mobile').removeClass('open');
	})

	$('.modal_bg.mobile').click(function(){
		$('.mobile_menu').removeClass('open');
		$('.modal_bg.mobile').removeClass('open');
	})

});