webpackHotUpdate(0,{

/***/ 393:
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

	var _FileIndex = __webpack_require__(394);

	var _FileIndex2 = _interopRequireDefault(_FileIndex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _components = {
	  SwitchForm: {
	    displayName: 'SwitchForm'
	  }
	};

	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/vhost/nayp/resources/assets/js/app/components/switch/SwitchForm.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}

	var SwitchForm = _wrapComponent('SwitchForm')(function (_Component) {
	  _inherits(SwitchForm, _Component);

	  function SwitchForm() {
	    _classCallCheck(this, SwitchForm);

	    return _possibleConstructorReturn(this, (SwitchForm.__proto__ || Object.getPrototypeOf(SwitchForm)).apply(this, arguments));
	  }

	  _createClass(SwitchForm, [{
	    key: 'render',
	    value: function render() {
	      return _react3.default.createElement(
	        'div',
	        { className: 'form_switch' },
	        _react3.default.createElement(
	          'h2',
	          { className: 'title-base' },
	          'Formulario de trocas e devolu\xE7\xF5es'
	        ),
	        _react3.default.createElement('br', null),
	        _react3.default.createElement(
	          'form',
	          null,
	          _react3.default.createElement(
	            'div',
	            null,
	            _react3.default.createElement(
	              'div',
	              { className: 'form_box _half' },
	              _react3.default.createElement(
	                'label',
	                null,
	                'nome*'
	              ),
	              _react3.default.createElement('input', { type: 'text', placeholder: 'digite seu primeiro nome' })
	            ),
	            _react3.default.createElement(
	              'div',
	              { className: 'form_box _half' },
	              _react3.default.createElement(
	                'label',
	                null,
	                'sobrenome*'
	              ),
	              _react3.default.createElement('input', { type: 'text', placeholder: 'digite seu sobrenome' })
	            )
	          ),
	          _react3.default.createElement(
	            'div',
	            null,
	            _react3.default.createElement(
	              'div',
	              { className: 'form_box _half' },
	              _react3.default.createElement(
	                'label',
	                null,
	                'email*'
	              ),
	              _react3.default.createElement('input', { type: 'email', placeholder: 'por favor, digite seu email' })
	            ),
	            _react3.default.createElement(
	              'div',
	              { className: 'form_box _half' },
	              _react3.default.createElement(
	                'label',
	                null,
	                'telefone',
	                _react3.default.createElement(
	                  'small',
	                  null,
	                  '(opcional)'
	                )
	              ),
	              _react3.default.createElement('input', { type: 'tel', placeholder: 'por favor, digite seu email' })
	            )
	          ),
	          _react3.default.createElement(
	            'div',
	            null,
	            _react3.default.createElement(
	              'div',
	              { className: 'form_box _tri' },
	              _react3.default.createElement(
	                'label',
	                null,
	                'cpf*'
	              ),
	              _react3.default.createElement('input', { type: 'number', placeholder: 'por favor, digite seu cpf' })
	            ),
	            _react3.default.createElement(
	              'div',
	              { className: 'form_box _tri' },
	              _react3.default.createElement(
	                'label',
	                null,
	                'n\xBA do pedido*'
	              ),
	              _react3.default.createElement('input', { type: 'number', placeholder: 'por favor, digite n\xBA do pedido' })
	            ),
	            _react3.default.createElement(
	              'div',
	              { className: 'form_box _tri' },
	              _react3.default.createElement(
	                'label',
	                null,
	                'c\xF3digo do produto*'
	              ),
	              _react3.default.createElement('input', { type: 'text', placeholder: 'por favor, digite o c\xF3digo do pedido' })
	            )
	          ),
	          _react3.default.createElement(
	            'div',
	            { className: 'form_box _last' },
	            _react3.default.createElement(
	              'label',
	              null,
	              'motivo da troca*'
	            ),
	            _react3.default.createElement('textarea', {
	              placeholder: 'por favor, digite o motivo pelo qual est\xE1 solicitando a troca ou a devolu\xE7\xE3o do seu pedido' })
	          ),
	          _react3.default.createElement(_FileIndex2.default, null),
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
	      );
	    }
	  }]);

	  return SwitchForm;
	}(_react2.Component));

	exports.default = SwitchForm;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(173)(module)))

/***/ }

})