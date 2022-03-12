import React, { useEffect } from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPodcastData,
  fetchMorePodcastData,
} from "../../features/podcastSlice";

const PodcastList = () => {
  const { newPodcast, morePodcast } = useSelector((state) => state.podcast);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPodcastData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMorePodcastData());
  }, [dispatch]);

  const renderPodcast =
    newPodcast.Response === "True" ? (
      newPodcast.Search.map((movie, index) => (
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
      <li>{newPodcast.Error}</li>
    );

  const renderMorePodcast =
    morePodcast.Response === "True" ? (
      morePodcast.Search.map((movie, index) => (
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
      <li>{morePodcast.Error}</li>
    );

  return (
    <Container>
      <Row>
        <Col md="6">
          <h6 className="headingtitle">Podcasts</h6>
          <ul className="listStyle">{renderPodcast}</ul>
        </Col>
        <Col md="6">
          <h6 className="headingtitle">More Podcasts</h6>
          <ul className="listStyle">{renderMorePodcast}</ul>
        </Col>
      </Row>
    </Container>
  );
};

export default PodcastList;
