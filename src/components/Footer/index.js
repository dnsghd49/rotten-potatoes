import { Container, Row, Col } from 'react-bootstrap'
import './style.css'

function Footer() {
    return (
        <Container>
            <div className="bg">
                <Row>
                    <Col><ul>
                        <li>Help</li>
                        <li>About Rotten Potatoes</li>
                        <li>What's the Potatometer®?</li>
                    </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>Critic Submission</li>
                            <li>Licensing</li>
                            <li>Advertise</li>
                            <li>Careers</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li><i className="cib-gmail"></i>
                                <strong>JOIN THE NEWSLETTER</strong>
                            </li>
                            <li>Get the freshest reviews, news, and more delivered right to your inbox!</li>
                            <li><button type="button" className="btn btn-primary">JOIN THE NEWSLETTER</button></li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li><strong>FOLLOW US</strong></li>
                            <li>
                                <div className='icon-flex'>
                                    <i className="cib-facebook"></i>
                                    <i className="cib-twitter"></i>
                                    <i className="cib-instagram"></i>
                                    <i className="cib-snapchat"></i>
                                    <i className="cib-youtube"></i>
                                </div>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="footer-copyright">
                            <strong>©2022 by Rotten Potatoes</strong>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Footer