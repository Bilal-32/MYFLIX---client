import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import "./movie-view.scss";

export class MovieView extends React.Component {

    render() {
        const { movie, onBackClick,handleAddFavorite,handleDeleteFavorite,isFav} = this.props;

        return (
            <Container>
                {movie && (
                    <Row>
                        <Col>
                            <Card id="movie-view">
                                <Card.Body>
                                    <Card.Img
                                        id="movie-view-image"
                                        variant="top"
                                        src={movie.imageUrl}
                                    />
                                    <Card.Title id="movie-Title" className="movie-title">
                                        {movie.title}
                                    </Card.Title>
                                    <Card.Text
                                        id="movie-description"
                                        className="movie-description"
                                    >
                                        {movie.description}
                                    </Card.Text>
                                    <Card.Text id="movie-director" className="movie-director">
                                        Director: {movie.director.name}
                                    </Card.Text>
                                    <Card.Text id="movie-genre" className="movie-genre">
                                        Genre: {movie.genre?.[0]?.name}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Button id="movie-view-button" onClick={() => { onBackClick(null); }}>Back</Button>
                            {!isFav && <Button id="movie-view-button" onClick={() => handleAddFavorite(movie._id)} >Add to Favorites</Button>}
                            {isFav &&<Button id="movie-view-button" onClick={() => handleDeleteFavorite(movie._id)} >Remove from Favorites</Button>}
                        </Col>
                    </Row>
                )}
            </Container>
        );
    }
}
