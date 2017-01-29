webpackHotUpdate(0,{

/***/ 389:
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

	var _Question = __webpack_require__(390);

	var _Question2 = _interopRequireDefault(_Question);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _components = {
	  QuestionList: {
	    displayName: 'QuestionList'
	  }
	};

	var _reactTransformHmr2 = (0, _reactTransformHmr4.default)({
	  filename: '/vhost/nayp/resources/assets/js/app/components/questions/QuestionList.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _reactTransformHmr2(Component, id);
	  };
	}

	var QuestionList = _wrapComponent('QuestionList')(function (_Component) {
	  _inherits(QuestionList, _Component);

	  function QuestionList(props) {
	    _classCallCheck(this, QuestionList);

	    var _this = _possibleConstructorReturn(this, (QuestionList.__proto__ || Object.getPrototypeOf(QuestionList)).call(this, props));

	    _this.state = {
	      content: _this.props.list
	    };
	    return _this;
	  }

	  _createClass(QuestionList, [{
	    key: 'itemToggle',
	    value: function itemToggle(itemId) {

	      var clone = this.state.content;

	      for (var i = 0; i < clone.length; i++) {

	        if (itemId === clone[i].id && !clone[i].visibility) {
	          clone[i].visibility = '_active';
	        } else {
	          clone[i].visibility = false;
	        }
	      }
	      this.setState({
	        content: clone
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react3.default.createElement(
	        'div',
	        { className: 'questions' },
	        this.state.content.map(function (item) {
	          return _react3.default.createElement(
	            'div',
	            { className: 'question ' + item.visibility,
	              onClick: function onClick() {
	                return _this2.itemToggle(item.id);
	              } },
	            _react3.default.createElement(
	              'div',
	              { className: '_header' },
	              _react3.default.createElement(
	                'span',
	                null,
	                item.head
	              ),
	              _react3.default.createElement(
	                'button',
	                { className: 'btn-icon' },
	                _react3.default.createElement(
	                  'svg',
	                  { 'class': 'icon icon-down' },
	                  _react3.default.createElement('use', { xlinkHref: 'public/svg/icons.svg#icon-down' })
	                )
	              )
	            ),
	            _react3.default.createElement(
	              'div',
	              { className: '_main' },
	              item.main.map(function (p) {
	                return _react3.default.createElement(
	                  'p',
	                  { className: '_paragraph' },
	                  p
	                );
	              })
	            )
	          );
	        })
	      );
	    }
	  }]);

	  return QuestionList;
	}(_react2.Component));

	exports.default = QuestionList;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(173)(module)))

/***/ }

})