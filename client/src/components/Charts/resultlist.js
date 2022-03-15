import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";
import MovieSearch from "./moviesearch";
import ShowSearch from "./showsearch";

class ResultList extends React.Component {
  constructor() {
    super();
    this.state = {
      allVisible: true,
      movieVisible: false,
      showVisible: false,
    };
  }

  render() {
    return (
      <Container>
        <div className="results">
          <h4>Search Results</h4>
        </div>
        <div className="buttons">
          <Row>
            <Col sm={3}>
              <Button
                onClick={() => this.onAll()}
                variant="light"
                className="buttonStyle"
              >
                All
              </Button>{" "}
              <Button
                onClick={() => this.onMovies()}
                variant="light"
                className="buttonStyle"
              >
                Movies
              </Button>{" "}
              <Button
                onClick={() => this.onShows()}
                variant="light"
                className="buttonStyle"
              >
                Shows
              </Button>{" "}
            </Col>
          </Row>
        </div>
          {this.state.allVisible ? (
            <div>
              <Row>
              <Col md="6">
              <MovieSearch />
              </Col>
              <Col md="6">
              <ShowSearch />
              </Col>
              </Row>
            </div>
          ) : null}
          {this.state.movieVisible ? (
            <div>
              <Row>
                <Col md="6">
              <MovieSearch />
                </Col>
              </Row>
            </div>
          ) : null}
          {this.state.showVisible ? (
            <div>
              <Row>
              <Col md="6">
              <ShowSearch />
              </Col>
              </Row>
            </div>
          ) : null}
      </Container>
    );
  }
  onAll() {
    this.setState((prevState) => ({
      allVisible: !prevState.allVisible,
      movieVisible: false,
      showVisible: false,
    }));
  }
  onMovies() {
    this.setState((prevState) => ({
      movieVisible: !prevState.movieVisible,
      showVisible: false,
      allVisible: false,
    }));
  }
  onShows() {
    this.setState((prevState) => ({
      showVisible: !prevState.showVisible,
      movieVisible: false,
      allVisible: false,
    }));
  }
}

export default ResultList;
