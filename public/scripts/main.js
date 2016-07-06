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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _header = __webpack_require__(1);

	var header = _interopRequireWildcard(_header);

	var _footer = __webpack_require__(3);

	var footer = _interopRequireWildcard(_footer);

	var _slide = __webpack_require__(4);

	var _cartPreview = __webpack_require__(5);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	// declaração carrinho
	// TOGGLE ELEMENTS

	(0, _cartPreview.cartPreview)();

	(0, _slide.slide)();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _toggleElements = __webpack_require__(2);

	(0, _toggleElements.toggleDisplay)("active-collections");
	(0, _toggleElements.toggleDisplay)("active-info");
	(0, _toggleElements.toggleDisplay)("active-search");

	// dropdown function header

	var btnDropdown = document.querySelectorAll(".item-drop");
	var displayDropdown = document.querySelectorAll(".dropdown");

	function toggleDropdown(btn, display) {
	  var _loop = function _loop(i) {
	    btn[i].addEventListener('click', function () {
	      // console.log(display[i]);
	      if (btn[i].classList.contains("active")) {
	        for (var j = 0; j < btn.length; j++) {
	          if (btn[j] !== btn[i]) {
	            btn[j].removeAttribute('style');
	          }
	        }
	        display[i].setAttribute('style', 'display:none');
	        btn[i].classList.remove("active");
	      } else {
	        for (var _j = 0; _j < btn.length; _j++) {
	          if (btn[_j] !== btn[i]) {
	            btn[_j].setAttribute('style', 'display:none');
	          }
	        }
	        display[i].setAttribute('style', 'display:block');
	        btn[i].classList.add("active");
	      }
	    });
	  };

	  for (var i = 0; i < btn.length; i++) {
	    _loop(i);
	  }
	}

	toggleDropdown(btnDropdown, displayDropdown);

/***/ },
/* 2 */
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _toggleElements = __webpack_require__(2);

	(0, _toggleElements.toggleDisplay)("active-footer-menu");

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function slide() {

	  var slides = document.querySelectorAll(".slide-item");
	  var slideNav = document.querySelector(".slide-navegation");
	  var slidePrev = document.querySelector('.slide-nav-prev');
	  var slideNext = document.querySelector('.slide-nav-next');

	  for (var i = 0; i < slides.length; i++) {

	    var itemList = document.createElement('LI');
	    itemList.classList.add('slide-nav-item');
	    itemList.appendChild(document.createElement('A'));
	    slideNav.appendChild(itemList);

	    var itemLink = document.querySelectorAll('.slide-nav-item a');
	    itemLink[i].setAttribute('href', '#');
	  }

	  itemLink[0].classList.add('active');

	  slideChange(itemLink, slides);

	  slidePrev.addEventListener('click', function () {
	    slideArrow(itemLink, slides, 'left');
	  });

	  slideNext.addEventListener('click', function () {
	    slideArrow(itemLink, slides, 'right');
	  });
	}

	function slideChange(btn, display) {
	  var _loop = function _loop(i) {
	    btn[i].addEventListener('click', function () {
	      if (!btn[i].classList.contains('active')) {
	        slideClear(btn, display);
	        btn[i].classList.add('active');
	        display[i].classList.add('active');
	      }
	    });
	  };

	  for (var i = 0; i < btn.length; i++) {
	    _loop(i);
	  }
	}

	function slideClear(btn, display) {
	  for (var j = 0; j < btn.length; j++) {
	    if (btn[j].classList.contains('active')) btn[j].classList.remove('active');
	    display[j].classList.remove('active');
	  }
	}

	function slideArrow(btn, display, direction) {

	  var position = 0;

	  if (direction === "left") direction = -1;else if (direction === "right") direction = 1;else console.log("direction error arg");

	  console.log(direction);

	  for (var i = 0; i < btn.length; i++) {
	    if (btn[i].classList.contains('active')) {
	      var button = btn[i + direction];
	      var slide = display[i + direction];
	      position = i;
	    }
	  }

	  if (!(position === 0 && direction === -1 || position === btn.length - 1 && direction === 1)) {
	    slideClear(btn, display);
	    button.classList.add('active');
	    slide.classList.add('active');
	  }
	}

	exports.slide = slide;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function cartPreview() {

	  var btnCart = document.getElementById('active-cart');
	  var btnShip = document.getElementById('active-ship');
	  var displayCart = document.querySelector('.preview-seller');
	  var displayShip = document.querySelector('.preview-shipping');
	  var closeCart = document.getElementById('close-preview-cart');;
	  var closeShip = document.getElementById('close-preview-ship');

	  btnCart.addEventListener('click', function () {
	    displayCart.setAttribute('style', 'display:block');
	    document.body.setAttribute('style', 'overflow:hidden');
	  });

	  btnShip.addEventListener('click', function () {
	    displayShip.setAttribute('style', 'display:block');
	  });

	  closeCart.addEventListener('click', function () {
	    displayCart.removeAttribute('style');
	    displayShip.removeAttribute('style');
	    document.body.removeAttribute('style');
	  });

	  closeShip.addEventListener('click', function () {
	    displayShip.removeAttribute('style');
	  });
	}

	exports.cartPreview = cartPreview;

/***/ }
/******/ ]);