import "./style.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchMostPopularData,
} from "../../features/chartSlice";
import thumbnail from "./img/icon.png"
import ReactStars from 'react-stars'

const ContentComments = () => {
    const dispatch = useDispatch();
    const { mostPopular } = useSelector(
        (state) => state.chart
    );

    const [userID, setUserID] = useState(0);
    const [rating, setRating] = useState(0);
    const [movieId, setMovieId] = useState(0);
    const [comment, setComment] = useState('');

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
        try {
            const response = await fetch("https://lit-sea-72283.herokuapp.com/ratings", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: userID,
                    movie_id: movieId,
                    rating: rating,
                    comment: comment
                }),
            });
            const data = await response();
            console.log(data);
        } catch (error) {
        }


    }
    // STARS RATING
    const ratingChanged = (newRating) => {
        console.log(newRating)
        setRating(newRating)
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
                            <Form.Group className="mb-3">
                                <Form.Label>User ID</Form.Label>
                                <Form.Control min="1" max="4" value={userID} type="number" name="user" id="user" placeholder="Enter ID 1~4" onChange={(e) => setUserID(e.target.value)} required />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Movie Title </Form.Label>
                                <Form.Select value={movieId} type="number" name="movie" id="movie" onChange={(e) => setMovieId(e.target.value)}>
                                    {/* Map from your movires */}
                                    <option value={1}>Another Day to Die</option>
                                    <option value={2}>Occtopussy</option>
                                    <option value={3}>A Time to kill</option>
                                    <option value={4}>Dr. No</option>
                                    <option value={5}>Goldfinger</option>
                                    <option value={6}>Caino Royal</option>
                                    <option value={7}>The World is Not Enough</option>
                                    <option value={8}>License To Kill</option>
                                    <option value={9}>The Dark Knight Rises</option>
                                    <option value={10}>Batman Returns</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Rating: </Form.Label>
                                <ReactStars className="ratingStyles"
                                    count={5}
                                    value={rating}
                                    onChange={ratingChanged}
                                    size={24}
                                    edit={true}
                                    color2={'#ffd700'} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Review: </Form.Label>
                                <Form.Control value={comment} type="text" name="comment" id="comment" as="textarea" rows={3} onChange={(e) => setComment(e.target.value)} />
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
