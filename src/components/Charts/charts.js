import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

function ChartList() {
    return (
        <Container>
            <Row>
            <Col sm={4}>
            <ul className="listStyle">
            <h6 className="headingtitle">popular streaming movies</h6>
                <li className="rightborder">Texas Chainsaw Massacre</li>
                <li className="rightborder">Texas Chainsaw Massacre</li>
                <li className="rightborder">Texas Chainsaw Massacre</li>
                <li className="rightborder">Texas Chainsaw Massacre</li>
                <li className="rightborder">Texas Chainsaw Massacre</li>
                <li className="rightborder">Texas Chainsaw Massacre</li>
                <li className="rightborder">Texas Chainsaw Massacre</li>
                <li className="rightborder">Texas Chainsaw Massacre</li>
                <li className="rightborder">Texas Chainsaw Massacre</li>
                <li className="rightborder">Texas Chainsaw Massacre</li>
            </ul>
            </Col>
            <Col sm={4}>
            <ul className="listStyle">
            <h6 className="headingtitle">most popular on rt</h6>
                <li>Texas Chainsaw Massacre</li>
                <li>Texas Chainsaw Massacre</li>
                <li>Texas Chainsaw Massacre</li>
                <li>Texas Chainsaw Massacre</li>
                <li>Texas Chainsaw Massacre</li>
                <li>Texas Chainsaw Massacre</li>
                <li>Texas Chainsaw Massacre</li>
                <li>Texas Chainsaw Massacre</li>
                <li>Texas Chainsaw Massacre</li>
                <li>Texas Chainsaw Massacre</li>
            </ul>
            </Col>
            </Row>
            <Row>
            <Col sm={4}>
            <ul className="listStyle">
            <h6 className="headingtitle">new tv this week</h6>
                <li className="rightborder">Texas Chainsaw Massacre</li>
                <li className="rightborder">Texas Chainsaw Massacre</li>
                <li className="rightborder">Texas Chainsaw Massacre</li>
                <li className="rightborder">Texas Chainsaw Massacre</li>
                <li className="rightborder">Texas Chainsaw Massacre</li>
                <li className="rightborder">Texas Chainsaw Massacre</li>
                <li className="rightborder">Texas Chainsaw Massacre</li>
                <li className="rightborder">Texas Chainsaw Massacre</li>
                <li className="rightborder">Texas Chainsaw Massacre</li>
                <li className="rightborder">Texas Chainsaw Massacre</li>
            </ul>
            </Col>
            </Row>
        </Container>
    )
}

export default ChartList;