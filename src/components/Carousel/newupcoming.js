import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Figure, Container, Row, Col } from "react-bootstrap";
import "./style.css"

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const NewUpcoming = ({ deviceType }) => {
  return (
    <Container>
      <Row className="textcontent">
        <Col>
          <h6 className='headingtitle'>NEW AND UPCOMING MOVIES</h6>
        </Col>
        <Col>
          <p className="viewalltext">VIEW ALL</p>
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
          <div>
            <Figure>
              <Figure.Image
                width={180}
                height={255}
                className="rounded"
                alt="180x255"
                src="http://placekitten.com/180/255"
              />
              <Figure.Caption>
                ABSOLUTE BANGER/10 🔥
              </Figure.Caption>
            </Figure>
          </div>
          <div>
            <Figure>
              <Figure.Image
                width={180}
                height={255}
                className="rounded"
                alt="180x255"
                src="http://placekitten.com/180/255"
              />
              <Figure.Caption>
                ABSOLUTE BANGER/10 🔥
              </Figure.Caption>
            </Figure>
          </div>
          <div>
            <Figure>
              <Figure.Image
                width={180}
                height={255}
                className="rounded"
                alt="180x255"
                src="http://placekitten.com/180/255"
              />
              <Figure.Caption>
                ABSOLUTE BANGER/10 🔥
              </Figure.Caption>
            </Figure>
          </div>
          <div>
            <Figure>
              <Figure.Image
                width={180}
                height={255}
                className="rounded"
                alt="180x255"
                src="http://placekitten.com/180/255"
              />
              <Figure.Caption>
                ABSOLUTE BANGER/10 🔥
              </Figure.Caption>
            </Figure>
          </div>
          <div>
            <Figure>
              <Figure.Image
                width={180}
                height={255}
                className="rounded"
                alt="180x255"
                src="http://placekitten.com/180/255"
              />
              <Figure.Caption>
                ABSOLUTE BANGER/10 🔥
              </Figure.Caption>
            </Figure>
          </div>
          <div>
            <Figure>
              <Figure.Image
                width={180}
                height={255}
                className="rounded"
                alt="180x255"
                src="http://placekitten.com/180/255"
              />
              <Figure.Caption>
                ABSOLUTE BANGER/10 🔥
              </Figure.Caption>
            </Figure>
          </div>
        </Carousel>
      </Row>
    </Container>
  );
};

export default NewUpcoming;