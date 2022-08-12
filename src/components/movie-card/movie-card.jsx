import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import './movie-card.scss';

export class MovieCard extends React.Component {
    render() {
        const { movie } = this.props;
        return (
            <Card className="movieCard mb-2">
                <Card.Img
                    className="movieCard-img"
                    variant="top"
                    src={movie.ImagePath}
                    crossOrigin="anonymous"
                />
                <Card.Body>
                    <Card.Title className="cardTitle">{movie.Title}</Card.Title>
                    <Link to={`/movies/${movie._id}`}>
                        <Button className="button-style" variant="warning">Open</Button>
                    </Link>
                </Card.Body>
            </Card>
        );
    }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        ImagePath: PropTypes.string.isRequired,
    }).isRequired,
};
