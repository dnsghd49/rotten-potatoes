import { Container, Row, Col, Figure } from "react-bootstrap";
import "./style.css";
import "./styleShowtime.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMostStreamingData,
  fetchMostPopularData,
  fetchnewTVData,
} from "../../features/chartSlice";
// import icon from "./img/icon.png";

function Showtimes() {
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

  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();

  const renderMostStreaming =
    mostStreaming.Response === "True" ? (
      mostStreaming.Search.map((movie, index) => (
        <li key={index} className="rightborder" id="showtime">
          <div>{movie.Title}</div>
          <Figure.Image
            width={80}
            height={80}
            id="thumbnailStyle"
            className="thumbnail"
            src={movie.Poster}
            alt={movie.Title}
          />
          <div>
            {hours - 12 < index + 1 ? (
              <li>Show starts @ {index + 1}:00 PM</li>
            ) : (
              <li>Show ended</li>
            )}
          </div>
          {index + 1 - (hours - 12) > 0 ? (
            <div>
              in {index + 1 - (hours - 12) < 1 ? 0 : index - (hours - 12)} hours
              and {60 - minutes} minutes
            </div>
          ) : null}
        </li>
      ))
    ) : (
      <li>{mostStreaming.Error}</li>
    );

  const renderMostPopular =
    mostPopular.Response === "True" ? (
      mostPopular.Search.map((movie, index) => (
        <li key={index} className="rightborder" id="showtime">
          <div>{movie.Title}</div>
          <Figure.Image
            width={80}
            height={80}
            id="thumbnailStyle"
            className="thumbnail"
            src={movie.Poster}
            alt={movie.Title}
          />
          <div>
            {hours - 12 < index + 2 ? (
              <div>Show starts @ {index + 2}:00 PM</div>
            ) : (
              <div>Show ended</div>
            )}
          </div>
          {index + 2 - (hours - 12) > 0 ? (
            <div>
              in {index + 2 - (hours - 12) < 1 ? 0 : index + 1 - (hours - 12)}{" "}
              hours and {60 - minutes} minutes
            </div>
          ) : null}
        </li>
      ))
    ) : (
      <li>{mostPopular.Error}</li>
    );

  const renderNewTV =
    newTV.Response === "True" ? (
      newTV.Search.map((movie, index) => (
        <li key={index} id="showtime">
          <div>{movie.Title}</div>
          <Figure.Image
            width={80}
            height={80}
            id="thumbnailStyle"
            className="thumbnail"
            src={movie.Poster}
            alt={movie.Title}
          />
          <div>
            {hours - 12 < index + 2 ? (
              <div>Show starts @ {index + 2}:00 PM</div>
            ) : (
              <div>Show ended</div>
            )}
          </div>
          {index + 2 - (hours - 12) > 0 ? (
            <div>
              in {index + 2 - (hours - 12) < 1 ? 0 : index + 1 - (hours - 12)}{" "}
              hours and {60 - minutes} minutes
            </div>
          ) : null}
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
            <h6 className="headingtitle" id="showtime">showcase cinemax showtimes</h6>
            {renderMostStreaming}
          </ul>
        </Col>
        <Col sm={4}>
          <ul className="listStyle">
            <h6 className="headingtitle" id="showtime">
              super-deluxe showtimes
            </h6>
            {renderMostPopular}
          </ul>
        </Col>
        <Col sm={4}>
          <ul className="listStyle">
            <h6 className="headingtitle" id="showtime">
              new tv showtimes
            </h6>
            {renderNewTV}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Showtimes;
