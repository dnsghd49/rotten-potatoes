import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Figure, Container, Row, Col } from "react-bootstrap";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMostStreamingData,
  fetchMostPopularData,
  fetchnewTVData,
} from "../../features/chartSlice";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const TvshowsTopBar = ({ deviceType }) => {
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
        <div key={index}>
          <Figure>
            <Figure.Image
              width={180}
              height={255}
              className="rounded"
              alt={movie.Title}
              src={movie.Poster}
              key={movie.imbdbID}
            />
            <Figure.Caption>{movie.Title} 🔥</Figure.Caption>
          </Figure>
        </div>
      ))
    ) : (
      <div>{mostStreaming.Error}</div>
    );

  const renderMostPopular =
    mostPopular.Response === "True" ? (
      mostPopular.Search.map((movie, index) => (
        <div key={index}>
          <Figure>
            <Figure.Image
              width={180}
              height={255}
              className="rounded"
              alt={movie.Title}
              src={movie.Poster}
              key={movie.imbdbID}
            />
            <Figure.Caption>{movie.Title} 🔥</Figure.Caption>
          </Figure>
        </div>
      ))
    ) : (
      <div>{mostPopular.Error}</div>
    );

  const renderNewTV =
    newTV.Response === "True" ? (
      newTV.Search.map((movie, index) => (
        <div key={index}>
          <Figure>
            <Figure.Image
              width={180}
              height={255}
              className="rounded"
              alt={movie.Title}
              src={movie.Poster}
              key={movie.imbdbID}
            />
            <Figure.Caption>{movie.Title} 🔥</Figure.Caption>
          </Figure>
        </div>
      ))
    ) : (
      <div>{newTV.Error}</div>
    );

  return (
    <Container>
      <Container>
        <Row className="textcontent">
          <Col>
            <h6 className="headingtitle">new and upcoming series</h6>
          </Col>
        </Row>
        <Row>
          <Carousel
            centerMode={true}
            swipeable={true}
            draggable={true}
            responsive={responsive}
            infinite={true}
            containerClass="carousel-container"
            autoPlay={false}
          >
            {renderNewTV}
          </Carousel>
        </Row>
      </Container>
      <Container>
        <Row className="textcontent">
          <Col>
            <h6 className="headingtitle">popular series on tv</h6>
          </Col>
        </Row>
        <Row>
          <Carousel
            centerMode={true}
            swipeable={true}
            draggable={true}
            responsive={responsive}
            infinite={true}
            containerClass="carousel-container"
            autoPlay={false}
          >
            {renderMostStreaming}
          </Carousel>
        </Row>
      </Container>
      <Container>
        <Row className="textcontent">
          <Col>
            <h6 className="headingtitle">best superhero series</h6>
          </Col>
        </Row>
        <Row>
          <Carousel
            centerMode={true}
            swipeable={true}
            draggable={true}
            responsive={responsive}
            infinite={true}
            containerClass="carousel-container"
            autoPlay={false}
          >
            {renderMostPopular}
          </Carousel>
        </Row>
      </Container>
    </Container>
  );
};

export default TvshowsTopBar;
