import "./style.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchMostPopularData,
} from "../../features/chartSlice";
import thumbnail from "./img/icon.png"
import ReactStars from 'react-stars'

const ContentComments = () => {
    const dispatch = useDispatch();
    const { mostPopular} = useSelector(
        (state) => state.chart
    );

    useEffect(() => {
        dispatch(fetchMostPopularData());
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
    const handleFormSubmit = async e => {
        // require('dotenv')
        e.preventDefault();
            // try {
            //   const body = { user_id, movie_id, rating, comment };
            //   const response = await fetch(`PG_URI`, {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify(body)
            //   });
            //   window.location = "/";
            //   console.log(response)
            // } catch (err) {
            //   console.error(err.message);
            // };

    }
    // STARS RATING
    const ratingChanged = (newRating) => {
        console.log(newRating)
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
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address: </Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Rating: </Form.Label>
                                <ReactStars className="ratingStyles"
                                    count={5}
                                    onChange={ratingChanged}
                                    size={24}
                                    edit={true}
                                    color2={'#ffd700'} />
                            </Form.Group>
                            <Form.Group controlId="form.Textarea">
                                <Form.Label>Review: </Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button type="submit" className="submitStyle">Submit Review</Button>
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
