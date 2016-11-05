webpackHotUpdate(0,{

/***/ 402:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react2 = __webpack_require__(1);

	var _react3 = _interopRequireDefault(_react2);

	var _reactTransformHmr3 = __webpack_require__(174);

	var _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _GoogleMaps = __webpack_require__(403);

	var _GoogleMaps2 = _interopRequireDefault(_GoogleMaps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _components = {
	  Contact: {
	    displayName: 'Contact'
	  }
	};

	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/vhost/nayp/resources/assets/js/app/components/contact/Contact.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}

	var Contact = _wrapComponent('Contact')(function (_Component) {
	  _inherits(Contact, _Component);

	  function Contact() {
	    _classCallCheck(this, Contact);

	    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
	  }

	  _createClass(Contact, [{
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        'div',
	        { className: '_content' },
	        _react3.default.createElement(
	          'h1',
	          { className: 'title-base' },
	          'Contatos e hor\xE1rios'
	        ),
	        _react3.default.createElement(
	          'div',
	          { className: 'capitalize' },
	          _react3.default.createElement('br', null),
	          _react3.default.createElement(
	            'h2',
	            { className: 'title-small' },
	            'loja Online'
	          ),
	          _react3.default.createElement(
	            'p',
	            { className: '_paragraph' },
	            _react3.default.createElement(
	              'span',
	              { className: '_breakout' },
	              'para outras informa\xE7\xF5es, envie sua mensagem atrav\xE9s do formul\xE1rio, que responderemos brevemente.'
	            ),
	            'hor\xE1rios de atendimento online: ',
	            _react3.default.createElement('br', null),
	            _react3.default.createElement(
	              'span',
	              null,
	              'segunda-feira - sexta-feira: 9:00 AM - 9:00 PM (UTC-03:00 / bras\xEDlia)'
	            ),
	            _react3.default.createElement('br', null),
	            _react3.default.createElement(
	              'span',
	              null,
	              's\xE1bado - domingo: 9:00 AM - 4:00 PM (UTC-03:00 / bras\xEDlia)'
	            )
	          )
	        ),
	        _react3.default.createElement(
	          'div',
	          { className: 'form-contatos' },
	          _react3.default.createElement(
	            'form',
	            null,
	            _react3.default.createElement(
	              'div',
	              { className: 'form_box' },
	              _react3.default.createElement(
	                'label',
	                null,
	                'nome*'
	              ),
	              _react3.default.createElement('input', { type: 'email', placeholder: 'por favor digite seu primeiro nome' })
	            ),
	            _react3.default.createElement(
	              'div',
	              { className: 'form_box' },
	              _react3.default.createElement(
	                'label',
	                null,
	                'sobrenome*'
	              ),
	              _react3.default.createElement('input', { type: 'email', placeholder: 'por favor digite seu sobrenome' })
	            ),
	            _react3.default.createElement(
	              'div',
	              { className: 'form_box' },
	              _react3.default.createElement(
	                'label',
	                null,
	                'email'
	              ),
	              ' ',
	              _react3.default.createElement(
	                'span',
	                { className: 'alert-error' },
	                ' digite um email valido '
	              ),
	              _react3.default.createElement('input', { type: 'email', placeholder: 'por favor digite seu email' })
	            ),
	            _react3.default.createElement(
	              'div',
	              { className: 'form_box' },
	              _react3.default.createElement(
	                'label',
	                null,
	                'telefone'
	              ),
	              _react3.default.createElement('input', { type: 'email', placeholder: '+00 (00) 0000-0000' })
	            ),
	            _react3.default.createElement(
	              'div',
	              { className: 'form_box' },
	              _react3.default.createElement(
	                'label',
	                null,
	                'mensagem'
	              ),
	              _react3.default.createElement('textarea', { name: 'mensagem' })
	            ),
	            _react3.default.createElement(
	              'div',
	              { className: 'form_control' },
	              _react3.default.createElement(
	                'button',
	                { type: 'submit', className: 'btn-other' },
	                ' ok '
	              )
	            )
	          )
	        ),
	        _react3.default.createElement(
	          'div',
	          { className: 'capitalize' },
	          _react3.default.createElement(
	            'h2',
	            { className: 'title-small' },
	            'loja f\xEDsica'
	          ),
	          _react3.default.createElement(
	            'p',
	            { className: '_breakout' },
	            'cnpj: 00.000/0001-00 ',
	            _react3.default.createElement('br', null),
	            'r. comendador ara\xFAjo, 268, loja ca06 - shopping omar 00000-000, curitiba - paran\xE1, brasil'
	          ),
	          _react3.default.createElement(
	            'p',
	            { className: '_breakout' },
	            'hor\xE1rios de atendimento loja f\xEDsica: ',
	            _react3.default.createElement('br', null),
	            _react3.default.createElement(
	              'span',
	              null,
	              'segunda-feira - sexta-feira: 9:00 AM - 8:00 PM (UTC-03:00 / bras\xEDlia)'
	            ),
	            _react3.default.createElement('br', null),
	            _react3.default.createElement(
	              'span',
	              null,
	              's\xE1bado: 9:00 AM - 6:00 PM (UTC-03:00 / bras\xEDlia)'
	            )
	          )
	        ),
	        _react3.default.createElement(_GoogleMaps2.default, null)
	      );
	    }
	  }]);

	  return Contact;
	}(_react2.Component));

	exports.default = Contact;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(173)(module)))

/***/ }

})