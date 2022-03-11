import React from "react";
import { Container, Row, Col, Button, Figure } from "react-bootstrap";
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
          <h4>Search Results for : "omar omar"</h4>
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
        <Row>
          {this.state.allVisible ? (
            <div>
              <MovieSearch />
              <ShowSearch />
            </div>
          ) : null}
        </Row>
      </Container>
    );
  }
  onAll() {
    this.setState((prevState) => ({ allVisible: !prevState.allVisible }));
  }
}

export default ResultList;
