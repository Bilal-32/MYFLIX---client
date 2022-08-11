use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mainView = require('./components/main-view/main-view');

require('./index.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import statement to indicate that you need to bundle `./index.scss`


// Main component (will eventually use all the others)
var MyFlixApplication = function (_React$Component) {
    _inherits(MyFlixApplication, _React$Component);

    function MyFlixApplication() {
        _classCallCheck(this, MyFlixApplication);

        return _possibleConstructorReturn(this, (MyFlixApplication.__proto__ || Object.getPrototypeOf(MyFlixApplication)).apply(this, arguments));
    }

    _createClass(MyFlixApplication, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_mainView.MainView, null);
        }
    }]);

    return MyFlixApplication;
}(_react2.default.Component);

// Finds the root of your app


var container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
_reactDom2.default.render(_react2.default.createElement(MyFlixApplication), container);
