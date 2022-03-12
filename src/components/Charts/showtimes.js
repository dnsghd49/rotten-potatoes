import { Container, Row, Col } from "react-bootstrap";
import "./style.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMostStreamingData,
  fetchMostPopularData,
  fetchnewTVData,
} from "../../features/chartSlice";
import icon from "./img/icon.png"

function Showtimes() {
  const dispatch = useDispatch();
  const { mostStreaming, mostPopular, newTV } = useSelector(
    (state) => state.chart
  );

  useEffect(() => {
    const data = dispatch(fetchMostStreamingData());
    return data;
  }, [dispatch]);

  useEffect(() => {
    const data = dispatch(fetchMostPopularData());
    return data;
  }, [dispatch]);

  useEffect(() => {
    const data = dispatch(fetchnewTVData());
    return data;
  }, [dispatch]);

  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();

  const renderMostStreaming =
    mostStreaming.Response === "True" ? (
      mostStreaming.Search.map((movie, index) => (
        <li key={index} className="rightborder">
          <div>
          {movie.Title}
          </div>
          {/* {index + 1 - (hours - 12) > 0 ? (
            <div>
              in {index + 1 - (hours - 12)} hours and {60 - minutes} minutes
            </div>
          ) : null}

          <div>
            {hours - 12 < index + 1 ? (
              <div>Show starts @ {index + 1}:00 PM</div>
            ) : (
              <div>Show ended</div>
            )}
          </div> */}
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
          {/* {index + 1 - (hours - 12) > 0 ? (
            <div>
              in {index + 1 - (hours - 12)} hours and {60 - minutes} minutes
            </div>
          ) : null}

          <div>
            {hours - 12 < index + 1 ? (
              <div>Show starts @ {index + 1}:00 PM</div>
            ) : (
              <div>Show ended</div>
            )}
          </div> */}
        </li>
      ))
    ) : (
      <li>{mostPopular.Error}</li>
    );

  const renderNewTV =
    newTV.Response === "True" ? (
      newTV.Search.map((movie, index) => (
        <li key={index} >
          {movie.Title}
          {/* {index + 1 - (hours - 12) > 0 ? (
            <div>
              in {index + 1 - (hours - 12)} hours and {60 - minutes} minutes
            </div>
          ) : null}

          <div>
            {hours - 12 < index + 1 ? (
              <div>Show starts @ {index + 1}:00 PM</div>
            ) : (
              <div>Show ended</div>
            )}
          </div> */}
        </li>
      ))
    ) : (
      <li>{newTV.Error}</li>
    );

  return (
    <Container>
      <Row>
        <Col sm={4}>
          <ul className="listStyle">
            <h6 className="headingtitle">showcase cinemas showtimes</h6>
            {renderMostStreaming}
          </ul>
        </Col>
        <Col sm={4}>
          <ul className="listStyle">
            <h6 className="headingtitle">amc showtimes</h6>
            {renderMostPopular}
          </ul>
        </Col>
        <Col sm={4}>
          <ul className="listStyle">
            <h6 className="headingtitle">new tv showtimes</h6>
            {renderNewTV}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Showtimes;
