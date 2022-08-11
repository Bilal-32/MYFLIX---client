'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MainView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _movieCard = require('../movie-card/movie-card');

var _movieView = require('../movie-view/movie-view');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainView = exports.MainView = function (_React$Component) {
    _inherits(MainView, _React$Component);

    function MainView() {
        _classCallCheck(this, MainView);

        var _this = _possibleConstructorReturn(this, (MainView.__proto__ || Object.getPrototypeOf(MainView)).call(this));

        _this.state = {
            movies: [{ _id: 1, Title: 'Inception', Description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.', ImagePath: 'https://www.imdb.com/title/tt1375666/mediaviewer/rm3426651392/' }, { _id: 2, Title: 'The Lord of the Rings: The Fellowship of the Ring', Description: 'A meek Hobit takes a journey with his friends to destroy the one ring to rule them all.', ImagePath: 'https://www.imdb.com/title/tt0120737/mediaviewer/rm3592958976/' }, { _id: 3, Title: 'Your Name', Description: 'Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?', ImagePath: 'https://www.imdb.com/title/tt0347149/mediaviewer/rm2426685696/' }],
            selectedMovie: null
        };
        return _this;
    }

    _createClass(MainView, [{
        key: 'setSelectedMovie',
        value: function setSelectedMovie(newMovieSelected) {
            this.setState({
                selectedMovie: newMovieSelected
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                movies = _state.movies,
                selectedMovie = _state.selectedMovie;

            if (selectedMovie) return _react2.default.createElement(_movieView.MovieView, { movie: selectedMovie });

            if (movies.length === 0) return _react2.default.createElement(
                'div',
                { className: 'main-view' },
                'The list of movies is empty!'
            );

            return _react2.default.createElement(
                'div',
                { className: 'main-view' },
                selectedMovie ? _react2.default.createElement(_movieView.MovieView, { movie: selectedMovie, onBackClick: function onBackClick(newMovieSelected) {
                        _this2.setSelectedMovie(newMovieSelected);
                    } }) : movies.map(function (movie) {
                    return _react2.default.createElement(_movieCard.MovieCard, { key: movie._id, movie: movie, onMovieClick: function onMovieClick(movie) {
                            _this2.setSelectedMovie(movie);
                        } });
                })
            )

            /*<div className="main-view">
                {movies.map(movie => <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />)}
            </div>*/
            ;
        }
    }]);

    return MainView;
}(_react2.default.Component);

exports.default = MainView;
