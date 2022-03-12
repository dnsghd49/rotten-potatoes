import React from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import "./style.css";
import { useSelector } from "react-redux";

const ShowSearch = () => {
  let { searchShow } = useSelector((state) => state.chart);

  const renderShowSearch =
    searchShow.Response === "True" ? (
      searchShow.Search.map((movie, index) => (
        <li key={index} className="leftborder">
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
      <li>{searchShow.Error}</li>
    );
  return (
    <Container>
      <Row>
        <Col>
          <ul className="listStyle">
            <h6 className="headingtitle">Show</h6>
            {renderShowSearch}
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

export default ShowSearch;
