import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/india_carousel_banner_image.png"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/india_carousel_banner_image.png"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/india_carousel_banner_image.png"

          alt="Third slide"
        />


      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;