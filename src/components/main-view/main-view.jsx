import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import LoginView from "../login-view/login-view";
import { RegistrationView } from "../register-view/register-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { DirectorView } from "../director-view/director-view";
import { GenreView } from "../genre-view/genre-view";
import { ProfileView } from "../profile-view/profile-view";
import { Navigation } from "../navbar-view/navbar-view";
import MoviesList from '../movie-list/movie-list';
import { setMovies, setUser, addFavMovie, remFavMovie } from '../../actions/actions';


import { Row, Col, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import "./main-view.scss";

export class MainView extends React.Component {

    constructor() {
        super();
        //Initial state is set to null.
        this.state = {
            user: '',
        }
    }

    /*
     * https://movie-api-21197.herokuapp.com/login?Username=Alice1&Password=new2123
     * Username=Alice1
     * Password=new2123
     */

    componentDidMount() {
        let accessToken = localStorage.getItem("token");
        if (accessToken !== null) {
            this.getMovies(accessToken);
            this.getUser(accessToken)
        }
    }
    
    getUser(token) {
        const userL = localStorage.getItem('user');
        const user = JSON.parse(userL)
        axios.get(`https://my-flix-careerfoundry.herokuapp.com/users/${user.userName}`, {
          headers: { Authorization: `Bearer ${token}` }
        })
          .then(response => {
            this.props.setUser(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }
    getMovies(token) {
        axios
            // .get("https://movie-api-21197.herokuapp.com/movies", {
            //     headers: { Authorization: `Bearer ${token}` }
            // })
            .get("https://my-flix-careerfoundry.herokuapp.com/movies", {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then((response) => {
                // Assign the result to the state
                this.props.setMovies(response.data);
            })
            .catch(function (error) {
                console.trace(error);
            });
        //localStorage.clear();
    }

    /* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/
    onLoggedIn(authData) {
        console.log(authData, 'authData');
        this.setState({
            user: authData.user
        })
        /*
        console.log(authData, 'authData');
        let userData = {
            ...authData.user,
            Birthday: authData.user.Birthday.substring(0, 10),
        };
        this.props.setUser(userData);
        */
        localStorage.setItem("token", authData.token);
        localStorage.setItem("user", JSON.stringify(authData.user));
        this.getMovies(authData.token);
    }

    onLoggedOut() {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.setState({
            user: null
        });
    }

    handleDeleteFavorite = (movieId) => {
        const userL = localStorage.getItem('user');
        const user = JSON.parse(userL)
        let token = localStorage.getItem('token');
        /* Send a request to the server to delete favorite (delete) */
        if (token !== null && user !== null) {
          axios.delete(`https://my-flix-careerfoundry.herokuapp.com/users/${user.userName}/movies/${movieId}`, {
            headers: { Authorization: `Bearer ${token}` }
          })
            .then(response => {
              console.log(response);
              this.props.remFavMovie(movieId);
    
            })
            .catch(error => {
              console.log(error);
            });
        }
      };
      handleAddFavorite = (movieId) => {
        const userL = localStorage.getItem('user');
        const user = JSON.parse(userL)
        let token = localStorage.getItem('token');
        if (token !== null && user !== null) {
          /* Send a request to the server to add favorite (delete) */
          axios.post(`https://my-flix-careerfoundry.herokuapp.com/users/${user.userName}/movies/${movieId}`, {}, {
            headers: { Authorization: `Bearer ${token}` }
          })
            .then(response => {
              console.log(response);
              this.props.addFavMovie(movieId);
            })
            .catch(error => {
              console.log(error);
            });
        }
      };

    render() {
        let { movies } = this.props;
        let localUser = localStorage.getItem('user');
        const user =JSON.parse(localUser)
        return (
            <Router>
                <Navigation
                 user = {user}
                 logOut={() => this.onLoggedOut()}
                 />
                <Container>
                    <Row className="main-view justify-content-center">
                        <Route
                            exact
                            path="/"
                            render={() => {
                                if (!localUser)
                                    return (
                                        <Col>
                                            <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                                        </Col>
                                    );

                                if (movies.length === 0) return <div className="main-view" />;

                                return <MoviesList movies={movies} />;
                            }}
                        />
                        <Route
                            path="/register"
                            render={() => {
                                if (localUser) return <Redirect to="/" />;
                                return (
                                    <Col>
                                        <RegistrationView />
                                    </Col>
                                );
                            }}
                        />
                        <Route
                            exact
                            path={`/user/${user?.userName}`}
                            render={() => {
                                if (!localUser) return <Redirect to="/" />;
                                return (
                                    <Col>
                                        <ProfileView
                                            user={user}
                                            movies={movies}
                                            logOut={() => this.onLoggedOut()}
                                        />
                                    </Col>
                                );
                            }}
                        />
                        <Route
                            exact
                            path="/movies/:movieId"
                            render={({ match, history }) => {
                                if (!localUser)
                                    return (
                                        <Col>
                                            <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                                        </Col>
                                    );
                                return (
                                    <Col md={8}>
                                        <MovieView
                                            handleAddFavorite ={handleAddFavorite}
                                            handleDeleteFavorite={handleDeleteFavorite}
                                            isFav={user.FavoriteMovies.includes(match.params.movieId)}
                                            movie={movies.find(
                                                (movie) => movie._id === match.params.movieId
                                            )}
                                            onBackClick={() => history.goBack()}
                                        />
                                    </Col>
                                );
                            }}
                        />
                        <Route
                            exact
                            path="/director/:Name"
                            render={({ match }) => {
                                if (!localUser)
                                    return (
                                        <Col>
                                            <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                                            ;
                                        </Col>
                                    );
                                if (movies.length === 0) return <div className="main-view" />;
                                return (
                                    <Col md={8}>
                                        <DirectorView
                                            director={
                                                movies.find(
                                                    (movie) => movie.Director.Name === match.params.name
                                                ).Director
                                            }
                                        />
                                    </Col>
                                );
                            }}
                        />
                        <Route
                            exact
                            path="/genres/:id"
                            render={({ match }) => {
                                if (!localUser)
                                    return (
                                        <Col>
                                            <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                                        </Col>
                                    );
                                if (movies.length === 0) return <div className="main-view" />;
                                return (
                                    <Col md={8}>
                                        <GenreView
                                            genre={
                                                movies.find((movie) =>
                                                    movie.Genre.includes(match.params.id)
                                                ).Genre
                                            }
                                        />
                                    </Col>
                                );
                            }}
                        />
                    </Row>
                </Container>
            </Router>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        movies: state.movies,
        user: state.user,
    };
};

export default connect(mapStateToProps, { setMovies, setUser, addFavMovie, remFavMovie })(MainView);
