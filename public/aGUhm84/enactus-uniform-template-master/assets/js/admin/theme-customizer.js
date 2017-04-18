function getContrast50(hexcolor){
    return (parseInt(hexcolor, 16) > 0xffffff/2) ? '#000':'#fff';
}

/**
 * This file adds some LIVE to the Theme Customizer live preview. To leverage
 * this, set your custom settings to 'postMessage' and then add your handling
 * here. Your javascript should grab settings from customizer controls, and 
 * then make any necessary changes to the page using jQuery.
 */
( function( $ ) {


	// Update the site title in real time...
	wp.customize( 'blogname', function( value ) {
		value.bind( function( newval ) {
			$( '.uniform-title' ).html( newval );
		} );
	} );
	
	//Update the site description in real time...
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( newval ) {
			$( '.uniform-description' ).html( newval );
		} );
	} );

	//Update site logo in real time...
	wp.customize( 'uniform_logo', function( value ) {
		value.bind( function( newval ) {
			$('.uniform-logo').attr('src', newval );
		} );
	} );	

	//Update site title color in real time...
	wp.customize( 'uniform_color', function( value ) {	
		value.bind( function( newval ) {

			$('.uniform-color').css('background-color', newval );
			$('.uniform-color-border').css('border-color', newval )
			$('.uniform-color-text').css('color', newval );	

		} );
	} );

	//Update site text color in real time...
	wp.customize( 'uniform_color_text', function( value ) {	

		value.bind( function( newval ) {

			$('.uniform-color-contrast').css('color', newval );			

		} );
	} );

	
} )( jQuery );
