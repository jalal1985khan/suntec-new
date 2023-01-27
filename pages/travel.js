import {Container,Row, Col,Image,Breadcrumb,Card, Button} from 'react-bootstrap';
import { useEffect, useState } from "react";
import Link from 'next/link';
import configData from "../config.json";
import Header from '../components/Header';
import Footer from '../components/Footer';
function LinksExample() {

  const [allInsights, setInsights] = useState([]);
  const [heading, setHeading] = useState(false); 

  const fetchInsights = async () => {
    let url = "";
    url = `${configData.SERVER_URL}all-insights?tag=323`;
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
<Header/>
<Container fluid className="breadcum">
<Breadcrumb >
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/" active>
      Pricing, Product & Billing Solutions for Travel
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/travel_banner.jpeg")` 
    }}>

<Row>
<Col>
<div className="b-text">
<h1>Improving Revenue Management and Share of Wallet</h1>
<p>Capitalize on the benefits of SunTec Xelerate’s next-generation revenue management system. Build on top of your existing infrastructure, take your business to the next level and create multiple monetization opportunities on a single platform.</p>
</div>
</Col> 
<Col></Col> 
</Row>
</Container>
<Container>
<h1 className="fs-2 mt-5 mb-5">Travel Management Companies Are Struggling to Differentiate</h1>
<p className="fs-5">Demand for Corporate travel is growing but the competition is getting equally fierce. Barriers to entry are almost non-existent resulting in intense competition between suppliers and players. This directly impacts pricing and transaction fees creating consistent pressure on margins.</p>
<p className="fs-5">The sector continues to witness disruption across, forcing many established players to look at technology as a differentiator to connect better with the customer and stay ahead of its competitors. But it is not an easy decision, as most players that have been in the industry for a while have accumulated multiple legacy systems that are not integrated. More importantly, these systems do not have the agility and/or flexibility required for the next level of customer centric digital transformation that the Travel Management Companies (TMCs) need so badly today. A complete overhaul of the revenue management system is the need of the hour for the TMCs.</p>


<h2 className="fs-2 mt-5 mb-5">The Challenges</h2>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/icon_21.png"/>
      <Card.Body>
        <Card.Title>Declining Margins</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/icon_22.png"/>
      <Card.Body>
        <Card.Title>Slow Time to Market</Card.Title>
      </Card.Body>
    </Card>
</Col>   
</Row>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/icon_23.png"/>
      <Card.Body>
        <Card.Title>Increased Operational Overheads</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/icon_24.png"/>
      <Card.Body>
        <Card.Title>Manual Processes</Card.Title>
      </Card.Body>
    </Card>
</Col>   
</Row>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img  className="card-icon-left" src="images/icon_25.png"/>
      <Card.Body>
        <Card.Title>Missing Travel Ecosystem</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/icon_26.png"/>
      <Card.Body>
        <Card.Title>Discrete Systems Across Different Countries</Card.Title>
      </Card.Body>
    </Card>
</Col>   
</Row>


</Container>
<Container className="gra_color" fluid style={{height:35 + 'em'}}>
<Row>
  <Col><img src="/images/xelerate.png" height="300"/></Col>
  <Col>
  <h3 className="text-white fs-2">How Can SunTec Help Unlock Value?</h3>
  <ul className="mt-5">
   <li className="text-white fs-5"><strong>Build new capabilities into your existing infrastructure:</strong> Transform, optimize and grow your Travel Management Company with next-generation revenue management capability .</li> 
   <li className="text-white fs-5"><strong>Get a unified platform:</strong> Monetize all your service offerings in a hassle-free manner through a single platform.</li>
  </ul>
  </Col>
</Row>
</Container>
<Container className="mb-5">

<h1 className="fs-2 mt-5 mb-5">SunTec Offerings</h1>
<p className="fs-5">See how we combine components of SunTec Xelerate to create specific solutions for digital transformation, revenue management, customer experience orchestration and partner ecosystem management.</p>
<Row>
<Col>
<Card className="c_shadow" style={{height:400 +'px'}}>
      <Card.Img className="card-icon-left" src="/images/icon_1.png" />
      <Card.Body className="c_body">
        <Card.Title>Create Win-win Deals with Deal Management Features</Card.Title>
        <Card.Text>
        In complex business scenarios, where the deals involve multiple parameters, creating the right deal which stands out as a win-win for both you and the client is extremely important.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:400 +'px'}}>
      <Card.Img className="card-icon-left" src="/images/icon_2.png" />
      <Card.Body className="c_body">
        <Card.Title>Manage Contracts, Calculate Fees, Expense and Revenue Shares</Card.Title>
        <Card.Text>
        Handle customer contracts with ease and quickly launch innovative pricing models.
Move towards commitment-based revenue sharing.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:400 +'px'}}>
      <Card.Img className="card-icon-left" src="/images/icon_3.png" />
      <Card.Body className="c_body">
        <Card.Title>Automate Your Client Billing; Make it Faster and Error-free</Card.Title>
        <Card.Text>
        Create invoice grouping based on customer preferences and support for bulk invoice generation and
pattern-based selective invoice review to ensure quick revenue realization.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col>
<Card className="c_shadow" style={{height:400 +'px'}}>
      <Card.Img className="card-icon-left" src="/images/icon_4.png" />
      <Card.Body className="c_body">
        <Card.Title>Global Platform Across Markets</Card.Title>
        <Card.Text>
        Support complex market requirements and provide a single global platform for pricing and billing needs across markets.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:400 +'px'}}>
      <Card.Img className="card-icon-left" src="/images/icon_5.png" />
      <Card.Body className="c_body">
        <Card.Title>Personalized Dashboards Powered by Analytics</Card.Title>
        <Card.Text>
        Create customer persona-based dashboard and analytics that provides detailed insights on client usage patterns.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:400 +'px'}}>
      <Card.Img className="card-icon-left" src="/images/icon_6.png" />
      <Card.Body className="c_body">
        <Card.Title>Relationship-Based Pricing and Value Management</Card.Title>
        <Card.Text>
        Analyze customer data in real time and provide them with context-specific offers at the right time and location.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

</Container>
<Container className="wbg-gy text-center d-flex flex-column justify-content-center align-items-center" style={{height:10 + 'em'}}>
<h1 className="fs-4">130+ leading organizations across 45+ countries use SunTec’s Xelerate to deliver value.</h1>
<Button className="b-btn">See SunTec Xelerate in action</Button>
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

<Footer/>
</>


  );
}

export default LinksExample;