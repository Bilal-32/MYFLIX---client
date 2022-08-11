import React from 'react';
import './genre-view.scss'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';


export class GenreView extends React.Component {

    render() {
        const { genre, onBackClick } = this.props;

        return (
            <Container>
                <Row>
                    <Col>
                        <Card text='dark' className="genreCard">
                            <Card.Header>{genre.Name}</Card.Header>
                            <Card.Body>
                                <Card.Text>{genre.Description}</Card.Text>
                                <Button onClick={() => { onBackClick(null); }}>Back</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }

}
