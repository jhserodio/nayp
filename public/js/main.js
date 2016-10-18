/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _header = __webpack_require__(271);

	var header = _interopRequireWildcard(_header);

	var _footer = __webpack_require__(273);

	var footer = _interopRequireWildcard(_footer);

	var _slide = __webpack_require__(274);

	var _cartPreview = __webpack_require__(275);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	// declaração carrinho
	// TOGGLE ELEMENTS

	(0, _cartPreview.cartPreview)();

	// slide();

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _toggleElements = __webpack_require__(272);

	(0, _toggleElements.toggleDisplay)("active-collections");
	(0, _toggleElements.toggleDisplay)("active-info");
	(0, _toggleElements.toggleDisplay)("active-search");

	// dropdown function header

	var activeDropdown = document.querySelectorAll(".item-drop");
	var removeDropdown = document.querySelectorAll(".dropdown-back");
	var displayDropdown = document.querySelectorAll(".dropdown");
	var displayMenu = document.querySelector(".megamenu .menu");

	function showDropdown(active, display, menu) {
	  var _loop = function _loop(i) {
	    active[i].addEventListener('click', function (e) {
	      e.preventDefault();
	      display[i].classList.add('active');
	      menu.classList.add('inactive');
	    });
	  };

	  for (var i = 0; i < active.length; i++) {
	    _loop(i);
	  }
	}

	showDropdown(activeDropdown, displayDropdown, displayMenu);

/***/ },

/***/ 272:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function toggleDisplay(btn) {

	  // VARIAVEIS DE CONTROLE
	  var button = document.getElementById(btn);
	  var display = document.querySelectorAll(".display");
	  var displayId = document.getElementById(btn.slice(/-/.exec(btn).index + 1));

	  // DISPARANDO EVENTO
	  button.addEventListener("click", function () {

	    // SE DISPLAY ATIVO DESATIVA
	    if (displayId.classList.contains('active')) {
	      displayId.classList.remove('active');
	    } else {
	      // DISPARA FUNÇÃO RESET DISPLAY
	      resetDisplay(display);
	      // SE DISPLAY DESATIVO ATIVA
	      displayId.classList.add('active');
	    }
	  });
	}

	// DESABILITA DISPLAYS ATIVOS
	function resetDisplay(item) {
	  for (var i = 0; i < item.length; i++) {
	    if (item[i].classList.contains('active')) {
	      item[i].classList.remove('active');
	    }
	  }
	}

	exports.toggleDisplay = toggleDisplay;

/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _toggleElements = __webpack_require__(272);

	(0, _toggleElements.toggleDisplay)("active-footer-menu");

/***/ },

/***/ 274:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function slide() {

	  var slides = document.querySelectorAll(".slide-item");
	  var slidePrev = document.querySelector('.slide-nav-prev');
	  var slideNext = document.querySelector('.slide-nav-next');

	  slidePrev.addEventListener('click', function (e) {
	    e.preventDefault();
	    slideArrow(slides, 'left');
	  });

	  slideNext.addEventListener('click', function (e) {
	    e.preventDefault();
	    slideArrow(slides, 'right');
	  });
	}

	function slideClear(display) {
	  for (var j = 0; j < display.length; j++) {
	    if (display[j].classList.contains('active')) display[j].classList.remove('active');
	  }
	}

	function slideArrow(display, direction) {

	  var position = 0;

	  if (direction === "left") direction = -1;else if (direction === "right") direction = 1;else console.log("direction error arg");

	  for (var i = 0; i < display.length; i++) {
	    if (display[i].classList.contains('active')) {
	      var slide = display[i + direction];
	      position = i;
	    }
	  }

	  if (!(position === 0 && direction === -1 || position === display.length - 1 && direction === 1)) {
	    slideClear(display);
	    slide.classList.add('active');
	  }
	}

	exports.slide = slide;

/***/ },

/***/ 275:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function cartPreview() {

	  var btnCart = document.getElementById('active-cart');
	  var btnShip = document.getElementById('active-ship');
	  var displayCart = document.querySelector('.cart-preview');
	  var displayShip = document.querySelector('.preview-shipping');
	  var closeCart = document.getElementById('close-preview-cart');;
	  var closeShip = document.getElementById('close-preview-ship');

	  btnCart.addEventListener('click', function () {
	    displayCart.classList.add('active');
	    document.body.setAttribute('style', 'overflow:hidden');
	  });

	  btnShip.addEventListener('click', function () {
	    displayShip.classList.toggle('active');
	  });

	  closeCart.addEventListener('click', function () {
	    displayShip.classList.remove('active');
	    displayCart.classList.remove('active');
	    document.body.removeAttribute('style');
	  });

	  closeShip.addEventListener('click', function () {
	    displayShip.classList.remove('active');
	  });
	}

	exports.cartPreview = cartPreview;

/***/ }

/******/ });