import "./style.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchMostPopularData,
    fetchnewTVData,
} from "../../features/chartSlice";
import thumbnail from "./img/icon.png"

const ContentComments = () => {
    const dispatch = useDispatch();
    const { mostPopular, newTV } = useSelector(
        (state) => state.chart
    );

    useEffect(() => {
        dispatch(fetchMostPopularData());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchnewTVData());
    }, [dispatch]);


    const renderMostPopular =
        mostPopular.Response === "True" ? (
            mostPopular.Search.map((movie, index) => (
                <li key={index} className="rightborder">
                    {movie.Title}
                </li>
            ))
        ) : (
            <li>{mostPopular.Error}</li>
        );

    const renderNewTV =
        newTV.Response === "True" ? (
            newTV.Search.map((movie, index) => <li key={index}>{movie.Title}</li>)
        ) : (
            <li>{newTV.Error}</li>
        );
    const handleFormSubmit =async () => {
        const response = await fetch("/ratings", {
            
        })

    }
    return (
        <Container>
            <Row>
                <Col sm={5}>
                    <Row>
                        <Col sm={10}>
                            <ul className="listComment">
                                <h6 className="headingtitle">most popular on rp</h6>
                                {renderMostPopular}
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Row>
                        <img src={thumbnail} className="mainpic" alt="potato" />
                    </Row>
                    <Row>
                        <Col sm={6}>
                            <img src={thumbnail} className="lilpreview" alt="potato" />
                        </Col>
                        <Col sm={6}>
                            <div className="headingtrial">
                                <h3>MOVIE/SHOW TITLE</h3>
                                <div>GENRE</div>
                                <div>RANDOM SCORE</div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <div className="commentheader"><h3 className="headertext">Rate and Review</h3></div>
                    <Row>
                        <Form className="formcontentname" onSubmit={handleFormSubmit} >
                            <Form.Group controlId="form.Textarea">
                                <Form.Label>Review</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <div className="commentheader"><h3 className="headertext">Comments</h3></div>
                    <Row>

                    </Row>
                </Col>
            </Row>
        </Container>

    );
};

export default ContentComments;
