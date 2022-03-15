import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Figure, Container, Row, Col } from "react-bootstrap";
import "./style.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularData } from "../../features/movieSlice";

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

const PopularIn = ({ deviceType }) => {
  const dispatch = useDispatch();
  const { popular } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchPopularData());
  }, [dispatch]);

  const renderPopular =
    popular.Response === "True" ? (
      popular.Search.map((movie, index) => (
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
      <div>{popular.Error}</div>
    );

  return (
    <Container>
      <Row className="textcontent">
        <Col>
          <h6 className="headingtitle">popular in theatres</h6>
        </Col>
        {/* <Col>
          <p className="viewalltext">VIEW ALL</p>
        </Col> */}
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
          {renderPopular}
        </Carousel>
      </Row>
    </Container>
  );
};

export default PopularIn;
