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

	var _header = __webpack_require__(247);

	var header = _interopRequireWildcard(_header);

	var _footer = __webpack_require__(249);

	var footer = _interopRequireWildcard(_footer);

	var _cartPreview = __webpack_require__(251);

	var _toggleElements = __webpack_require__(248);

	var _productGallery = __webpack_require__(252);

	var productGallery = _interopRequireWildcard(_productGallery);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	// declaração carrinho
	(0, _cartPreview.cartPreview)(); // TOGGLE ELEMENTS

	(0, _toggleElements.toggleDisplay)('active-product-social');

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _toggleElements = __webpack_require__(248);

	(0, _toggleElements.toggleDisplay)("active-collections");
	(0, _toggleElements.toggleDisplay)("active-info");
	(0, _toggleElements.toggleDisplay)("active-search");

	// dropdown function header

	var btnDropdown = document.querySelectorAll(".item-drop .btn-dropdown");
	var itemDropdown = document.querySelectorAll(".item-drop");
	var displayDropdown = document.querySelectorAll(".dropdown");

	function toggleDropdown(btn, item, display) {
	  var _loop = function _loop(i) {
	    btn[i].addEventListener('click', function () {
	      // console.log(display[i]);
	      if (item[i].classList.contains("active")) {
	        for (var j = 0; j < btn.length; j++) {
	          item[j].classList.remove('inactive');
	        }
	        display[i].classList.remove('active');
	        item[i].classList.remove("active");
	      } else {
	        for (var _j = 0; _j < item.length; _j++) {
	          if (btn[_j] !== btn[i]) {
	            item[_j].classList.add('inactive');
	          }
	        }
	        display[i].classList.add('active');
	        item[i].classList.add("active");
	      }
	    });
	  };

	  for (var i = 0; i < item.length; i++) {
	    _loop(i);
	  }
	}

	toggleDropdown(btnDropdown, itemDropdown, displayDropdown);

/***/ },

/***/ 248:
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

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _toggleElements = __webpack_require__(248);

	(0, _toggleElements.toggleDisplay)("active-footer-menu");

/***/ },

/***/ 251:
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

/***/ },

/***/ 252:
/***/ function(module, exports) {

	"use strict";

	var gallery = document.querySelector(".product-gallery-images");
	var galleryItem = document.querySelectorAll(".product-gallery-images .gallery-item img");

	var btnPrev = document.getElementById('product-gallery-prev');
	var btnNext = document.getElementById('product-gallery-next');

	var maxWidth = 0;
	var counter = 0;

	function moveSlide(btn) {
	  btn.addEventListener("click", function () {
	    if (btn.value === "+" && counter > 0) {
	      maxWidth += galleryItem[counter].offsetWidth;
	      counter--;
	    } else if (btn.value === "-" && counter < galleryItem.length - 1) {
	      maxWidth -= galleryItem[counter].offsetWidth;
	      counter++;
	    }
	    gallery.setAttribute('style', 'margin-left:' + maxWidth + 'px');
	  });
	}

	moveSlide(btnPrev);
	moveSlide(btnNext);

/***/ }

/******/ });