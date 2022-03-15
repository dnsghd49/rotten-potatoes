import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMostStreamingData,
  fetchMostPopularData,
  fetchnewTVData,
} from "../../features/chartSlice";

function ChartList() {
  const dispatch = useDispatch();
  const { mostStreaming, mostPopular, newTV } = useSelector(
    (state) => state.chart
  );

  useEffect(() => {
    dispatch(fetchMostStreamingData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMostPopularData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchnewTVData());
  }, [dispatch]);

  const renderMostStreaming =
    mostStreaming.Response === "True" ? (
      mostStreaming.Search.map((movie, index) => (
        <li key={index} className="rightborder">
          {movie.Title}
        </li>
      ))
    ) : (
      <li>{mostStreaming.Error}</li>
    );

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

  return (
    <Container>
      <Row>
        <Col sm={4}>
          <ul className="listStyle">
            <h6 className="headingtitle">popular streaming movies</h6>
            {renderMostStreaming}
          </ul>
        </Col>
        <Col sm={4}>
          <ul className="listStyle">
            <h6 className="headingtitle">most popular on rt</h6>
            {renderMostPopular}
          </ul>
        </Col>
        <Col sm={4}>
          <ul className="listStyle">
            <h6 className="headingtitle">new tv this week</h6>
            {renderNewTV}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default ChartList;
