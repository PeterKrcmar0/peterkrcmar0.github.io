$(document).ready(function(){

	$('a.home').addClass('active');
	
	$('a.home').click(function() {	
		$('html,body').scrollTo( 0 , 800 );
		return false;
	});
	
	$('a.team').click(function() {
		$('html,body').scrollTo( 901 , 800 );
		return false;
	});
	
	$('a.news').click(function() {
		$('html,body').scrollTo( 1902 , 800 );
		return false;
	});
	
	$('a.contact').click(function() {
		$('html,body').scrollTo( 2903 , 800 );
		return false;
	});
	
	$('a.shop').click(function() {
		$('html,body').scrollTo( 3904 , 800 );
		return false;
	});
	
	$(window).scroll(function(){
        if ($(this).scrollTop() >= 900 && $(this).scrollTop() < 1900) {
			$('a').removeClass('active');
            $('a.team').addClass('active');
        } else if ($(this).scrollTop() >= 1900 && $(this).scrollTop() < 2900) {
			$('a').removeClass('active');
            $('a.news').addClass('active');
        } else if ($(this).scrollTop() >= 2900 && $(this).scrollTop() < 3900) {
			$('a').removeClass('active');
            $('a.contact').addClass('active');
			//$('#contact').css('background-color','yellow')
        } else if ($(this).scrollTop() >= 3900) {
			$('a').removeClass('active');
            $('a.shop').addClass('active');
        } else {
			$('a').removeClass('active');
            $('a.home').addClass('active');
        }
    }); 

});