'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MovieView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovieView = exports.MovieView = function (_React$Component) {
    _inherits(MovieView, _React$Component);

    function MovieView() {
        _classCallCheck(this, MovieView);

        return _possibleConstructorReturn(this, (MovieView.__proto__ || Object.getPrototypeOf(MovieView)).apply(this, arguments));
    }

    _createClass(MovieView, [{
        key: 'render',
        value: function render() {
            var movie = this.props.movie;

            return _react2.default.createElement(
                'div',
                { className: 'movie-view' },
                _react2.default.createElement(
                    'div',
                    { className: 'movie-poster' },
                    _react2.default.createElement('img', { src: movie.ImagePath })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'movie-title' },
                    _react2.default.createElement(
                        'span',
                        { className: 'label' },
                        'Title: '
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'value' },
                        movie.Title
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'movie-description' },
                    _react2.default.createElement(
                        'span',
                        { className: 'label' },
                        'Description: '
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'label' },
                        movie.Description,
                        ' '
                    )
                ),
                _react2.default.createElement(
                    'button',
                    null,
                    'Back'
                )
            );
        }
    }]);

    return MovieView;
}(_react2.default.Component);
