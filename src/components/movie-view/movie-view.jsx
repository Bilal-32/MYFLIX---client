import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import "./movie-view.scss";

export class MovieView extends React.Component {

    render() {
        const { movie, onBackClick } = this.props;

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
                                        src={movie.ImagePath}
                                    />
                                    <Card.Title id="movie-Title" className="movie-title">
                                        {movie.Title}
                                    </Card.Title>
                                    <Card.Text
                                        id="movie-description"
                                        className="movie-description"
                                    >
                                        {movie.Description}
                                    </Card.Text>
                                    <Card.Text id="movie-director" className="movie-director">
                                        Director: {movie.Director.Name}
                                    </Card.Text>
                                    <Card.Text id="movie-genre" className="movie-genre">
                                        Genre: {movie.Genre.Name}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Button id="movie-view-button" onClick={() => { onBackClick(null); }}>Back</Button>
                            <Button id="movie-view-button" onClick={() => { }}>Add to Favorites</Button>
                        </Col>
                    </Row>
                )}
            </Container>
        );
    }
}
