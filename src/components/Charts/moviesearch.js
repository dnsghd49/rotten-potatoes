import React from 'react';
import { Container, Row, Col, Button, Figure } from 'react-bootstrap'
import './style.css'

class MovieSearch extends React.Component {
    render(){
        return(
            <Container>
                <Row>
                <Col sm={6}>
            <ul className="listStyle">
            <h6 className="headingtitle">Movies</h6>
            <li className="rightborder">
                <Figure.Image
                width={80}
                height={80}
                id="thumbnailStyle"
                className="thumbnail"
                src="http://placekitten.com/80/80"
                />
                Texas Chainsaw Massacre
                </li>
                <li className="rightborder">
                <Figure.Image
                width={80}
                height={80}
                id="thumbnailStyle"
                className="thumbnail"
                src="http://placekitten.com/80/80"
                />
                Texas Chainsaw Massacre
                </li>
                <li className="rightborder">
                <Figure.Image
                width={80}
                height={80}
                id="thumbnailStyle"
                className="thumbnail"
                src="http://placekitten.com/80/80"
                />
                Texas Chainsaw Massacre
                </li>
                <li className="rightborder">
                <Figure.Image
                width={80}
                height={80}
                id="thumbnailStyle"
                className="thumbnail"
                src="http://placekitten.com/80/80"
                />
                Texas Chainsaw Massacre
                </li>
                <li className="rightborder">
                <Figure.Image
                width={80}
                height={80}
                id="thumbnailStyle"
                className="thumbnail"
                src="http://placekitten.com/80/80"
                />
                Texas Chainsaw Massacre
                </li>
                <li className="rightborder">
                <Figure.Image
                width={80}
                height={80}
                id="thumbnailStyle"
                className="thumbnail"
                src="http://placekitten.com/80/80"
                />
                Texas Chainsaw Massacre
                </li>
            </ul>
            <Button variant="light" className="buttonStyle">Previous</Button>{' '}
            <Button variant="light" className="buttonStyle">Next</Button>{' '}
            </Col>
                </Row>
            </Container>
        )
    }
}

export default MovieSearch;