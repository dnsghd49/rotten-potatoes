import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import "./style.css";
import { useSelector } from "react-redux";

const MovieSearch = () => {
  let { searchMovie } = useSelector((state) => state.movie);

  const renderMovieSearch =
    searchMovie.Response === "True" ? (
      searchMovie.Search.map((movie, index) => (
        <li key={index} className="rightborder">
          <Figure.Image
            width={80}
            height={80}
            id="thumbnailStyle"
            className="thumbnail"
            src={movie.Poster}
            alt={movie.Title}
          />
          {movie.Title}
        </li>
      ))
    ) : (
      <li>{searchMovie.Error}</li>
    );

  return (
    <Container>
      <Row>
        <Col>
          <ul className="listStyle">
            <h6 className="headingtitle">Movies</h6>
            {renderMovieSearch}
          </ul>
          {/* <Button variant="light" className="buttonStyle">
            Previous
          </Button>{" "}
          <Button variant="light" className="buttonStyle">
            Next
          </Button>{" "} */}
        </Col>
      </Row>
    </Container>
  );
};

export default MovieSearch;
