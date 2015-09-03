
// easing functions from "Tween.js"
// Special Thanks for ease-component

(function( factory ) {

	'use strict';

	// We use `self` instead of `window` for `WebWorker` support.
	var root = (typeof self == 'object' && self.self == self && self) ||
			(typeof global == 'object' && global.global == global && global);

	// Set up Backbone appropriately for the environment. Start with AMD.
	if (typeof define === 'function' && define.amd) {

		define(['exports'], function(exports) {
			// Export global even in AMD case in case this script is loaded with
			// others that may still expect a global easeUc.
			root.easeUc = factory( root, exports );
		});

	// Next for CommonJS.
	} else if (typeof exports !== 'undefined') {
		factory( root, exports );

	// Finally, as a browser global.
	} else {
		root.easeUc = factory( root, {} );
	}

}( function( root, easeUc ) {
	
	// Current version of the library. Keep in sync with `package.json`.
	easeUc.VERSION = '0.0.3';

	var previousEaseUc  = root.easeUc;
	easeUc.noConflict = function() {
		root.easeUc = previousEaseUc ;
		return this;
	};

	easeUc.linear = function(n){
	  return n;
	};

	easeUc.inQuad = function(n){
	  return n * n;
	};

	easeUc.outQuad = function(n){
	  return n * (2 - n);
	};

	easeUc.inOutQuad = function(n){
	  n *= 2;
	  if (n < 1) return 0.5 * n * n;
	  return - 0.5 * (--n * (n - 2) - 1);
	};

	easeUc.inCube = function(n){
	  return n * n * n;
	};

	easeUc.outCube = function(n){
	  return --n * n * n + 1;
	};

	easeUc.inOutCube = function(n){
	  n *= 2;
	  if (n < 1) return 0.5 * n * n * n;
	  return 0.5 * ((n -= 2 ) * n * n + 2);
	};

	easeUc.inQuart = function(n){
	  return n * n * n * n;
	};

	easeUc.outQuart = function(n){
	  return 1 - (--n * n * n * n);
	};

	easeUc.inOutQuart = function(n){
	  n *= 2;
	  if (n < 1) return 0.5 * n * n * n * n;
	  return -0.5 * ((n -= 2) * n * n * n - 2);
	};

	easeUc.inQuint = function(n){
	  return n * n * n * n * n;
	}

	easeUc.outQuint = function(n){
	  return --n * n * n * n * n + 1;
	}

	easeUc.inOutQuint = function(n){
	  n *= 2;
	  if (n < 1) return 0.5 * n * n * n * n * n;
	  return 0.5 * ((n -= 2) * n * n * n * n + 2);
	};

	easeUc.inSine = function(n){
	  return 1 - Math.cos(n * Math.PI / 2 );
	};

	easeUc.outSine = function(n){
	  return Math.sin(n * Math.PI / 2);
	};

	easeUc.inOutSine = function(n){
	  return .5 * (1 - Math.cos(Math.PI * n));
	};

	easeUc.inExpo = function(n){
	  return 0 == n ? 0 : Math.pow(1024, n - 1);
	};

	easeUc.outExpo = function(n){
	  return 1 == n ? n : 1 - Math.pow(2, -10 * n);
	};

	easeUc.inOutExpo = function(n){
	  if (0 == n) return 0;
	  if (1 == n) return 1;
	  if ((n *= 2) < 1) return .5 * Math.pow(1024, n - 1);
	  return .5 * (-Math.pow(2, -10 * (n - 1)) + 2);
	};

	easeUc.inCirc = function(n){
	  return 1 - Math.sqrt(1 - n * n);
	};

	easeUc.outCirc = function(n){
	  return Math.sqrt(1 - (--n * n));
	};

	easeUc.inOutCirc = function(n){
	  n *= 2
	  if (n < 1) return -0.5 * (Math.sqrt(1 - n * n) - 1);
	  return 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
	};

	easeUc.inBack = function(n){
	  var s = 1.70158;
	  return n * n * (( s + 1 ) * n - s);
	};

	easeUc.outBack = function(n){
	  var s = 1.70158;
	  return --n * n * ((s + 1) * n + s) + 1;
	};

	easeUc.inOutBack = function(n){
	  var s = 1.70158 * 1.525;
	  if ( ( n *= 2 ) < 1 ) return 0.5 * ( n * n * ( ( s + 1 ) * n - s ) );
	  return 0.5 * ( ( n -= 2 ) * n * ( ( s + 1 ) * n + s ) + 2 );
	};

	easeUc.inBounce = function(n){
	  return 1 - easeUc.outBounce(1 - n);
	};

	easeUc.outBounce = function(n){
	  if ( n < ( 1 / 2.75 ) ) {
		return 7.5625 * n * n;
	  } else if ( n < ( 2 / 2.75 ) ) {
		return 7.5625 * ( n -= ( 1.5 / 2.75 ) ) * n + 0.75;
	  } else if ( n < ( 2.5 / 2.75 ) ) {
		return 7.5625 * ( n -= ( 2.25 / 2.75 ) ) * n + 0.9375;
	  } else {
		return 7.5625 * ( n -= ( 2.625 / 2.75 ) ) * n + 0.984375;
	  }
	};

	easeUc.inOutBounce = function(n){
	  if (n < .5) return easeUc.inBounce(n * 2) * .5;
	  return easeUc.outBounce(n * 2 - 1) * .5 + .5;
	};

	// aliases
	easeUc['in-quad'] = easeUc.inQuad;
	easeUc['out-quad'] = easeUc.outQuad;
	easeUc['in-out-quad'] = easeUc.inOutQuad;
	easeUc['in-cube'] = easeUc.inCube;
	easeUc['out-cube'] = easeUc.outCube;
	easeUc['in-out-cube'] = easeUc.inOutCube;
	easeUc['in-quart'] = easeUc.inQuart;
	easeUc['out-quart'] = easeUc.outQuart;
	easeUc['in-out-quart'] = easeUc.inOutQuart;
	easeUc['in-quint'] = easeUc.inQuint;
	easeUc['out-quint'] = easeUc.outQuint;
	easeUc['in-out-quint'] = easeUc.inOutQuint;
	easeUc['in-sine'] = easeUc.inSine;
	easeUc['out-sine'] = easeUc.outSine;
	easeUc['in-out-sine'] = easeUc.inOutSine;
	easeUc['in-expo'] = easeUc.inExpo;
	easeUc['out-expo'] = easeUc.outExpo;
	easeUc['in-out-expo'] = easeUc.inOutExpo;
	easeUc['in-circ'] = easeUc.inCirc;
	easeUc['out-circ'] = easeUc.outCirc;
	easeUc['in-out-circ'] = easeUc.inOutCirc;
	easeUc['in-back'] = easeUc.inBack;
	easeUc['out-back'] = easeUc.outBack;
	easeUc['in-out-back'] = easeUc.inOutBack;
	easeUc['in-bounce'] = easeUc.inBounce;
	easeUc['out-bounce'] = easeUc.outBounce;
	easeUc['in-out-bounce'] = easeUc.inOutBounce;

	return easeUc;
}));
