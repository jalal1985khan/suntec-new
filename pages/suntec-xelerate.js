import { Container, Row, Col, Image, Breadcrumb, Card, Button, Offcanvas,ListGroup } from 'react-bootstrap';
import { useEffect, useState } from "react";
import Link from 'next/link';
import configData from "../config.json";
import Header from '../components/Header';
import Footer from '../components/Footer';


const Xelerate = () => {

  const [allInsights, setInsights] = useState([]);
  const [heading, setHeading] = useState(false); 

  const fetchInsights = async () => {
    let url = "";
    url = `${configData.SERVER_URL}all-insights?tag=320`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.length);
      setInsights(data);
      if(data.length > 1){
        setHeading(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchInsights();
  },[]);

  return (
    <>
      <Header />
      <Container fluid className="breadcum">
        <Breadcrumb >
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/company" active>
            SunTec Xelerate
          </Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <Container className="p-3 b-banner" fluid style={{
        backgroundImage: `url("/images/xelerate.jpeg")`
      }}>

        <Row>
          <Col sm={4}>
            <div className="r-text">
              <div class="ribbon-2"></div>
              <h1 className="fs-1">Enabling Digitally Empathetic Enterprises</h1>
              <div className="wbg-gr p-2 w-text">
                <p className="fs-5">Increase Customer Lifetime Value | Manage Revenue Effectively
                </p>
              </div>
            </div>
          </Col>
          <Col >
          </Col>
        </Row>
      </Container>
      <Container className="mt-5">
        <h2 className="fs-2 mb-3">SunTec Xelerate®- The Game Changer</h2>
        <Row>
        <Col sm={6}>
        <iframe width="100%" height="450" src="https://www.youtube.com/embed/bASQV6X7_yc" title="About SunTec Xelerate" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Col>
        <Col sm={6}>
            <p className="fs-5 mb-5">SunTec Xelerate is an award-winning, cloud-native and micro-services-based platform that helps organizations own the customer experience by setting up a system-of-engagement with enhanced product management capabilities, enterprise pricing, revenue management and partner ecosystem management.</p>
            <div className="company-l middle col"><p className="fs-5 p-3">It functions as a customer-centric, business middle layer that orchestrates the internal technology landscape to enable effective transformation from a product-based to an agile, customer-first organization.</p></div>
            <p className="fs-5 mt-3">SunTec Xelerate helps organizations create and bundle products, adopt relationship-based pricing strategies, plug revenue leakage, create and configure specific deals, offer partner products, as well as track the revenue and profitability of all products across the enterprise value chain.</p>
        </Col>
        </Row>
      </Container>
      <Container fluid className="wbg-gy pt-5 pb-5">
        <h2 className="text-center">SunTec Xelerate- Features</h2>
        <Row>
          <Col><Card className="" style={{ height: 25 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">APIs and Extension</Card.Title>
              <Card.Text className="fs-5">
              The data-independent design ensures that the SunTec Xelerate APIs provide flexibility and extensibility and can be used for any context. Backward compatibility is ensured during upgrades with the APIs provided
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col><Card className="" style={{ height: 25 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">Micro-services Architecture</Card.Title>
              <Card.Text className="fs-5">
              Scalability is possible both horizontally and vertically with the micro-services architecture, and cloud deployment is made even easier
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col><Card className="" style={{ height: 25 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">SunTec Xelerate Business Management Console</Card.Title>
              <Card.Text className="fs-5">
              SunTec Xelerate Business Management Console (XBMC) encapsulates all the technical components inside, allowing customers to wire and connect processes using the services provided
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col><Card className="mt-4" style={{ height: 25 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">Cloud Enablement</Card.Title>
              <Card.Text className="fs-5">
              Elastic scalability is achieved using the micro-service architecture, with all the security aspects covered for Cloud deployment. The platform is flexible and supports multiple cloud providers
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col><Card className="mt-4" style={{ height: 25 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">Continuous Integration and Deployment</Card.Title>
              <Card.Text className="fs-5">
              Continuous Integration and Deployment enables faster releases with comprehensive automation of testing as part of the release process
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col><Card className="mt-4" style={{ height: 25 + 'em', padding: 21 + 'px' }}>
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">Polyglot Data Persistence</Card.Title>
              <Card.Text className="fs-5">
              The database is just a store and depending on the business need, multiple types of databases can be used for storage, thereby allowing better horizontal scalability
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
<Container className="wbg-dark" fluid>
    <Container className="pt-5 pb-5">
    <h2 className="text-white">Own the Customer Experience</h2>
<p className="text-white">As a digital enterprise, your top priority is to make your customers’ life easier and their experience seamless and enjoyable. The needs of your customers must be at the heart of your digital transformation plans. SunTec Xelerate provides a unified layer for product innovation and end-to-end product lifecycle management. This allows organizations to quickly add four enterprise capabilities that are critical to owning the customer experience.</p>

<Row className="mt-5">
          <Col><Card className="wbg-dark text-white border-0" style={{ height: 25 + 'em', padding: 10 + 'px' }}>
          <Card.Img src="/images/xelerate-innovation.png" className="card-icon-left"/>
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-4">Product Management Capabilities</Card.Title>
              <Card.Text className="fs-5">Create unlimited personalized products from your repository of offerings which can also be bundled with your partner offerings
              </Card.Text>

            </Card.Body>
          </Card>
          </Col>
          <Col><Card className="wbg-dark text-white border-0" style={{ height: 25 + 'em', padding: 10 + 'px' }}>
          <Card.Img src="/images/xelerate-data.png" className="card-icon-left" />
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-4">Customer Data Management</Card.Title>
              <Card.Text className="fs-5">ingle view of the customer across products, geographies and channels
              </Card.Text>

            </Card.Body>

          </Card>
          </Col>
          <Col><Card className="wbg-dark text-white border-0" style={{ height: 25 + 'em', padding: 10 + 'px' }}>
          <Card.Img src="/images/xelerate-shakehand.png"  className="card-icon-left"/>
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-4">Partner Ecosystem Management</Card.Title>
              <Card.Text className="fs-5">On-board and manage partners at multiple levels to create the right service bundles for your customers
              </Card.Text>

            </Card.Body>
          </Card>
          </Col>
          <Col><Card className="wbg-dark text-white border-0" style={{ height: 25 + 'em', padding: 10 + 'px' }}>
          <Card.Img src="/images/xelerate-revenue.png" className="card-icon-left"/>
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-4">Partner Ecosystem Management</Card.Title>
              <Card.Text className="fs-5">On-board and manage partners at multiple levels to create the right service bundles for your customers
              </Card.Text>

            </Card.Body>
          </Card>
          </Col>
</Row>          

    </Container>
</Container>    
<Container className="p-3 b-banner" fluid style={{
        backgroundImage: `url("/images/accelerate-digital-transformation.jpg")`
      }}>
<Container className="wbg-gy p-4">
<h2>Accelerate your Digital Transformation Journey</h2>
<p>SunTec Xelerate poses no risk for organizations who want to accelerate their digital transformation journey, without having to replace their functionally stable legacy core systems.</p>
<p>SunTec Xelerate simplifies the process by hollowing out customer engagement functions from the core system and managing it as a horizontal cross-enterprise layer. The enhanced product innovation capabilities of the platform coupled with sophisticated customer data management functions and partner ecosystem management enable organizations to effectively realize their revenues across the enterprise value chain.</p>
<p>With this approach, organizations can quickly adopt new technologies, add more functionality and capabilities, offer customized products and enhance the customer experience. The goal is to transition from a product-based to an agile, customer-first organization.</p>
</Container>
</Container>
<Container className="p-4">
        <h2>How does SunTec Xelerate help Organizations?</h2>
        <p className="fs-6">SunTec Xelerate helps organizations to independently realize their digital transformation aspirations notwithstanding the state of their legacy systems. It provides them with the agility and flexibility required to make their Digital Transformation plans a success. It even allows them to bring together different facets of technology and create new customer experiences.</p>
        <Row>
          <Col>
            <Card className="c_shadow" style={{ height: 18 + 'em' }}>
            
              <Card.Body className="c_body">
                <Card.Title className="fw-bold fs-5">No Core Replacement</Card.Title>
                <ul>
                  <li>Leverage your existing robust infrastructure</li>
                  <li>Achieve progressive transformation</li>
                  <li>Approach the goal by hollowing out the core</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="c_shadow" style={{ height: 18 + 'em' }}>
              <Card.Body className="c_body">
                <Card.Title className="fw-bold fs-5">Lower Upfront Costs</Card.Title>
                <ul>
                  <li>Data-driven, agile transformation</li>
                  <li>Utilize planned risk mitigation and governance frameworks</li>
                  <li>Deploy micro-services based scalable architecture</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card className="c_shadow" style={{ height: 18 + 'em' }}>
              <Card.Body className="c_body">
                <Card.Title className="fw-bold fs-5">Lower Upfront Costs</Card.Title>
                <ul>
                  <li>Implement using our highly flexible and unified cross-product middle layer</li>
                  <li>Allow end-to-end management of products, offers and revenue</li>
                  
                </ul>
              </Card.Body>
            </Card>
          </Col>

        </Row>
        <Row>
          <Col>
            <Card className="c_shadow" style={{ height: 18 + 'em' }}>
              <Card.Body className="c_body">
                <Card.Title className="fw-bold fs-5">No Core Replacement</Card.Title>
                <ul>
                  <li>Leverage your existing robust infrastructure</li>
                  <li>Achieve progressive transformation</li>
                  <li>Approach the goal by hollowing out the core</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="c_shadow" style={{ height: 18 + 'em' }}>
              <Card.Body className="c_body">
                <Card.Title className="fw-bold fs-5">Lower Upfront Costs</Card.Title>
                <ul>
                  <li>Data-driven, agile transformation</li>
                  <li>Utilize planned risk mitigation and governance frameworks</li>
                  <li>Deploy micro-services based scalable architecture</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card className="c_shadow" style={{ height: 18 + 'em' }}>
              <Card.Body className="c_body">
                <Card.Title className="fw-bold fs-5">Lower Upfront Costs</Card.Title>
                <ul>
                  <li>Implement using our highly flexible and unified cross-product middle layer</li>
                  <li>Allow end-to-end management of products, offers and revenue</li>
                  
                </ul>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>

      </Container>




      <Container fluid className="wbg-gy pt-5 pb-5">
        <h2 className="">SunTec Xelerate Products</h2>
        <p className="fs-5">We offer the flexibility for you to combine components of SunTec Xelerate to create specific solutions for digital transformation, revenue management, customer experience orchestration and partner ecosystem management.</p>
        <Row>
          <Col><Card className="sao_shadow" style={{ height: 6 + 'em' }}>
            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">Enterprise Product Management</Card.Title>
              <Card.Text className="fs-5">Put the customer at the heart of your enterprise and enable right selling through SunTec Xelerate Enterprise
Product Management. Combined with an end-to-end life cycle management this master catalog
enables managing of personalized products, including both internal as well as external partner products, and helps in setting up a single source of truth for all products and services.</Card.Text>

            </Card.Body>
            <Card.Body>
              <Button className="b-btn">Explore</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col><Card className="sao_shadow" style={{ height: 18 + 'em' }}>

            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">Dynamic Offer Management</Card.Title>
              <Card.Text className="fs-5">Enrich your customer engagement through highly personalized, contextual offers with SunTec Xelerate Offer Management. It helps organizations grow customer relationships with a highly configurable offer management capability that enables customer choice, enhances customer relationships, reduces time and cost to market and propels growth through up-sell and cross-sell capabilities.</Card.Text>
            </Card.Body>
            <Card.Body>
              <Button className="b-btn">Explore</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col><Card className="sao_shadow" style={{ height: 18 + 'em' }}>

            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">Deal Management</Card.Title>
              <Card.Text className="fs-5">Mitigate risk and reduce revenue leakage by automating the end-to-end deal process across products, businesses and geographies while ensuring price transparency and compliance with policy using SunTec Xelerate Deal Management. It helps manage the sales process right from the construction of the proposal through to the negotiation and closure of the deal.</Card.Text>
            </Card.Body>
            <Card.Body>
              <Button className="b-btn">Explore</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col><Card className="sao_shadow">

            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">Relationship-based Pricing Management</Card.Title>
              <Card.Text className="fs-5">Bring pricing to the forefront of your customer engagement strategy by creating an enterprise pricing master for fees, rates and charges. It complements and augments existing core banking capabilities and enables contextual pricing and fairness, enhances transparency for all stakeholders, improves governance and enhances revenue.</Card.Text>
            </Card.Body>
            <Card.Body>
              <Button className="b-btn">Explore</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col><Card className="sao_shadow" style={{ height: 18 + 'em' }}>

            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">Enterprise Billing and Statements Management</Card.Title>
              <Card.Text className="fs-5">Improve the quality of revenue across the enterprise by improving customer transparency and preventing revenue leakage with SunTec Xelerate. It helps build an enterprise capability for multi-product, multi-entity and hierarchical invoicing for all stakeholders with extremely rich billing and invoicing capabilities that helps in automating the billing process comprehensively.</Card.Text>
            </Card.Body>
            <Card.Body>
              <Button className="b-btn">Explore</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col><Card className="sao_shadow">

            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">Ecosystem Management and Monetization</Card.Title>
              <Card.Text className="fs-5">Embrace the open economy – adopt new business models and increase revenue sources with SunTec Xelerate Ecosystem Management and Monetization. Make your organization a true value aggregator through end-to-end management, monitoring, and monetization capabilities across the partner and the customer value chain.</Card.Text>
            </Card.Body>
            <Card.Body>
              <Button className="b-btn">Explore</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        <Row>
          <Col><Card className="sao_shadow">

            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">Benefits and Loyalty Management</Card.Title>
              <Card.Text className="fs-5">Improve your share of wallet and engage with customers across product lines with targeted and
differentiated loyalty programs. Organizations can understand and evaluate each relationship,
regardless of the complexity of client and account hierarchies, ensuring faster time to market helping retain existing customers as well as attracting new customers.</Card.Text>
            </Card.Body>
            <Card.Body>
              <Button className="b-btn">Explore</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col><Card className="sao_shadow" style={{ height: 18 + 'em' }}>

            <Card.Body className="c_body">
              <Card.Title className="mb-4 fs-3">Enterprise Indirect Taxation Management</Card.Title>
              <Card.Text className="fs-5">Comply with all indirect tax requirements through an enterprise solution for all aspects of taxation.
SunTec Xelerate provides an out-of-the-box solution designed to de-clutter core systems, extract the
indirect taxation logic and ensure a smooth journey with indirect tax (GST & VAT) compliance.</Card.Text>
            </Card.Body>
            <Card.Body>
              <Button className="b-btn">Explore</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col></Col>
        </Row>
      </Container>
<Container className="mb-5 mt-5 text-center">
{heading && <h2>Our Latest Insights</h2>}
<Container>
  <Row>
  {

allInsights.map((post) => {
  //console.log(post);

  const Type =  post['type'];
  const Pslug =  post['slug'];
  let Links;
  if(Type =='page'){
    Links = Pslug;
  }
  else{
    Links = Type + '/'+ Pslug;
  }
return (
<Col key={post['id']} sm={4}>
<Link 
href={Links}
className="pr-text text-decoration-none">
<Card>
      <Card.Img variant="top" src={post['featured_img_src']}/>
      <Card.Body className="text-start" style={{height: 6 +'em'}}>
        <Card.Title>{post['title']}</Card.Title>
      </Card.Body>
      <Card.Body  className="text-start">
        <Card.Link >Read More</Card.Link>
      </Card.Body>
    </Card>
</Link> 
    </Col>
  )
})}
</Row>
</Container>
</Container>
<Footer />
    </>
  )
}

export default Xelerate