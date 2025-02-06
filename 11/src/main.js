import WebGL from 'three/addons/capabilities/WebGL.js';

if ( WebGL.isWebGL2Available() ) {


	Hi
	animate();

} else {

	const warning = WebGL.getWebGL2ErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}
