import {Carousel,Container,Button} from 'react-bootstrap';

function UncontrolledExample() {
  return (
    <Container fluid className="wbg-gy p-5">
<h2 className="mb-5">Find Industry Solutions that Deliver Value</h2>
        <Container className="solutions">
    <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/travel_banner.png"
          alt="First slide"
          height="440"
        />
        <Carousel.Caption>
          <h3 className="fs-1 black">TRAVEL</h3>
          <p className="black fs-5 w">Already have existing infrastructure in place? No worries! Let SunTec Xelerate help you create multiple monetization opportunities on a single platform.</p>
          <Button className="b-btn">GET STARTED</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/insurance_banner.png"
          alt="Second slide"
          height="440"
        />

        <Carousel.Caption>
          <h3 className="fs-1 text-white">INSURANCE</h3>
          <p className="text-white fs-5 w">You’ve come to the right place to redefine your insurance business with a strategic approach. We’ve got the solutions to all your questions about tackling revenue leakages, contextually personalizing your product offerings and more!</p>
          <Button className="b-btn">GET STARTED</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/financial_banner.png"
          alt="Third slide"
          height="440"
        />

        <Carousel.Caption>
          <h3 className="fs-1 text-white">FINANCIAL SERVICES</h3>
          <p className="text-white fs-5 w">
          Already have existing infrastructure in place? No worries! Let SunTec Xelerate help you create multiple monetization opportunities on a single platform.
          </p>
          <Button className="b-btn">GET STARTED</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/telecom_banner.png"
          alt="Third slide"
          height="440"
        />

        <Carousel.Caption>
          <h3 className="fs-1 black">TELECOM</h3>
          <p className="black fs-5 w">Lead the way and add new revenue streams for your telcom business with SunTec Xelerate’s powerful intelligence layer. Manage products, billing, and pricing seamlessly, thereby delivering an impactful customer experience.</p>
          <Button className="b-btn">GET STARTED</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></Container>
    </Container>
  );
}

export default UncontrolledExample;