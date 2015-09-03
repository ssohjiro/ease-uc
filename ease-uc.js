
// easing functions from "Tween.js"

(function( factory ) {

	'use strict';

	// We use `self` instead of `window` for `WebWorker` support.
	var root = (typeof self == 'object' && self.self == self && self) ||
			(typeof global == 'object' && global.global == global && global);

	// Set up Backbone appropriately for the environment. Start with AMD.
	if (typeof define === 'function' && define.amd) {

		define(['exports'], function(exports) {
			// Export global even in AMD case in case this script is loaded with
			// others that may still expect a global easeComponent.
			root.easeComponent = factory( root, exports );
		});

	// Next for CommonJS.
	} else if (typeof exports !== 'undefined') {
		factory( root, exports );

	// Finally, as a browser global.
	} else {
		root.easeComponent = factory( root, {} );
	}

}( function( root, easeComponent ) {
	
	// Current version of the library. Keep in sync with `package.json`.
	easeComponent.VERSION = '0.0.1';

	var previousRafUC = root.easeComponent;
	easeComponent.noConflict = function() {
		root.easeComponent = previousRafUC;
		return this;
	};

	easeComponent.linear = function(n){
	  return n;
	};

	easeComponent.inQuad = function(n){
	  return n * n;
	};

	easeComponent.outQuad = function(n){
	  return n * (2 - n);
	};

	easeComponent.inOutQuad = function(n){
	  n *= 2;
	  if (n < 1) return 0.5 * n * n;
	  return - 0.5 * (--n * (n - 2) - 1);
	};

	easeComponent.inCube = function(n){
	  return n * n * n;
	};

	easeComponent.outCube = function(n){
	  return --n * n * n + 1;
	};

	easeComponent.inOutCube = function(n){
	  n *= 2;
	  if (n < 1) return 0.5 * n * n * n;
	  return 0.5 * ((n -= 2 ) * n * n + 2);
	};

	easeComponent.inQuart = function(n){
	  return n * n * n * n;
	};

	easeComponent.outQuart = function(n){
	  return 1 - (--n * n * n * n);
	};

	easeComponent.inOutQuart = function(n){
	  n *= 2;
	  if (n < 1) return 0.5 * n * n * n * n;
	  return -0.5 * ((n -= 2) * n * n * n - 2);
	};

	easeComponent.inQuint = function(n){
	  return n * n * n * n * n;
	}

	easeComponent.outQuint = function(n){
	  return --n * n * n * n * n + 1;
	}

	easeComponent.inOutQuint = function(n){
	  n *= 2;
	  if (n < 1) return 0.5 * n * n * n * n * n;
	  return 0.5 * ((n -= 2) * n * n * n * n + 2);
	};

	easeComponent.inSine = function(n){
	  return 1 - Math.cos(n * Math.PI / 2 );
	};

	easeComponent.outSine = function(n){
	  return Math.sin(n * Math.PI / 2);
	};

	easeComponent.inOutSine = function(n){
	  return .5 * (1 - Math.cos(Math.PI * n));
	};

	easeComponent.inExpo = function(n){
	  return 0 == n ? 0 : Math.pow(1024, n - 1);
	};

	easeComponent.outExpo = function(n){
	  return 1 == n ? n : 1 - Math.pow(2, -10 * n);
	};

	easeComponent.inOutExpo = function(n){
	  if (0 == n) return 0;
	  if (1 == n) return 1;
	  if ((n *= 2) < 1) return .5 * Math.pow(1024, n - 1);
	  return .5 * (-Math.pow(2, -10 * (n - 1)) + 2);
	};

	easeComponent.inCirc = function(n){
	  return 1 - Math.sqrt(1 - n * n);
	};

	easeComponent.outCirc = function(n){
	  return Math.sqrt(1 - (--n * n));
	};

	easeComponent.inOutCirc = function(n){
	  n *= 2
	  if (n < 1) return -0.5 * (Math.sqrt(1 - n * n) - 1);
	  return 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1);
	};

	easeComponent.inBack = function(n){
	  var s = 1.70158;
	  return n * n * (( s + 1 ) * n - s);
	};

	easeComponent.outBack = function(n){
	  var s = 1.70158;
	  return --n * n * ((s + 1) * n + s) + 1;
	};

	easeComponent.inOutBack = function(n){
	  var s = 1.70158 * 1.525;
	  if ( ( n *= 2 ) < 1 ) return 0.5 * ( n * n * ( ( s + 1 ) * n - s ) );
	  return 0.5 * ( ( n -= 2 ) * n * ( ( s + 1 ) * n + s ) + 2 );
	};

	easeComponent.inBounce = function(n){
	  return 1 - easeComponent.outBounce(1 - n);
	};

	easeComponent.outBounce = function(n){
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

	easeComponent.inOutBounce = function(n){
	  if (n < .5) return easeComponent.inBounce(n * 2) * .5;
	  return easeComponent.outBounce(n * 2 - 1) * .5 + .5;
	};

	// aliases
	easeComponent['in-quad'] = easeComponent.inQuad;
	easeComponent['out-quad'] = easeComponent.outQuad;
	easeComponent['in-out-quad'] = easeComponent.inOutQuad;
	easeComponent['in-cube'] = easeComponent.inCube;
	easeComponent['out-cube'] = easeComponent.outCube;
	easeComponent['in-out-cube'] = easeComponent.inOutCube;
	easeComponent['in-quart'] = easeComponent.inQuart;
	easeComponent['out-quart'] = easeComponent.outQuart;
	easeComponent['in-out-quart'] = easeComponent.inOutQuart;
	easeComponent['in-quint'] = easeComponent.inQuint;
	easeComponent['out-quint'] = easeComponent.outQuint;
	easeComponent['in-out-quint'] = easeComponent.inOutQuint;
	easeComponent['in-sine'] = easeComponent.inSine;
	easeComponent['out-sine'] = easeComponent.outSine;
	easeComponent['in-out-sine'] = easeComponent.inOutSine;
	easeComponent['in-expo'] = easeComponent.inExpo;
	easeComponent['out-expo'] = easeComponent.outExpo;
	easeComponent['in-out-expo'] = easeComponent.inOutExpo;
	easeComponent['in-circ'] = easeComponent.inCirc;
	easeComponent['out-circ'] = easeComponent.outCirc;
	easeComponent['in-out-circ'] = easeComponent.inOutCirc;
	easeComponent['in-back'] = easeComponent.inBack;
	easeComponent['out-back'] = easeComponent.outBack;
	easeComponent['in-out-back'] = easeComponent.inOutBack;
	easeComponent['in-bounce'] = easeComponent.inBounce;
	easeComponent['out-bounce'] = easeComponent.outBounce;
	easeComponent['in-out-bounce'] = easeComponent.inOutBounce;

	return easeComponent;
}));
