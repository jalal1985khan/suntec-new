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
    url = `${configData.SERVER_URL}all-insights?tag=319`;
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
      <Breadcrumb.Item href="/financial-services" active>
      Simplifying Digital Transformation
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/financial_Services_banner.jpeg")` 
    }}>

<Row>
<Col>
<div className="b-text">
<h1>Simplifying Digital Transformation</h1>
<p>SunTec Xelerate provides financial organizations with the agility and scalability to digitally transform their offerings and reap immediate benefits of product innovation, customer experience management and real-time analytics.</p>
</div>
</Col> 
<Col></Col> 
</Row>
</Container>
<Container>
<h1 className="fs-2 mt-5 mb-5">The Transformation Journey Has Just Begun</h1>
<p className="fs-5">Banks have spent a lot of money on the customer facing layer, which results in improved customer ratings. But most of them are still unable to utilize data to provide innovative products and personalize the customer experience.</p>
<p className="fs-5">A big impediment to owning the customer experience is the “speed to market” which remains a challenge for most banks.</p>
<p className="fs-5">In today&apos;s scenario, banks face unorthodox competition from the likes of Google and Facebook, to name a few. To remain the choice of customers and be competitive banks must aggressively adopt the digital route and transform their go to market approach.</p>

<h2 className="fs-2 mt-5 mb-5">The Challenges</h2>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/1.png"/>
      <Card.Body>
        <Card.Title>Legacy Core Replacement</Card.Title>
        <Card.Text>
        Complex infrastructure, high risk, high rates of failure
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/2.png"/>
      <Card.Body>
        <Card.Title>Digital Savvy Customer</Card.Title>
        <Card.Text>
        Today&apos;s customers demand faster processes, more options and better experience
        </Card.Text>
      </Card.Body>
    </Card>
</Col>   
</Row>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/3.png"/>
      <Card.Body>
        <Card.Title>Traditional Product Based Business Model</Card.Title>
        <Card.Text>
        A need to change to a customer focused organization with products designed to meet customer needs and requirements
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/4.png"/>
      <Card.Body>
        <Card.Title>Expanding Competitive Landscape</Card.Title>
        <Card.Text>
        BigTech & FinTech&apos;s foray into the banking world has added to the pressure on banks to own the customer experience
        </Card.Text>
      </Card.Body>
    </Card>
</Col>   
</Row>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img  className="card-icon-left" src="images/5.png"/>
      <Card.Body>
        <Card.Title>Time to Market</Card.Title>
        <Card.Text>
        With increasing pressure launch new products quickly, banks need to manage their offerings effectively
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/6.png"/>
      <Card.Body>
        <Card.Title>Adoption of Open Banking</Card.Title>
        <Card.Text>
        Lowers entry barriers, need for innovative products, monetizing and managing ecosystem
        </Card.Text>
      </Card.Body>
    </Card>
</Col>   
</Row>

</Container>
<Container className="gra_color" fluid style={{height:35 + 'em'}}>
<Row>
  <Col><img src="/images/xelerate.png" height="300"/></Col>
  <Col>
  <h3 className="text-white fs-2">How SunTec Simplifies Your Transformation Journey? (Financial services)</h3>
  <ul className="mt-5">
   <li className="text-white fs-5"><strong>Adopt digital transformation without replacing your legacy core systems:</strong> Add customer engagement capabilities by &apos;hollowing out customer engagement functions&apos; and managing it as a horizontal cross-enterprise layer.</li> 
   <li className="text-white fs-5"><strong>Transition from being product-focused to customer-first:</strong>
Get end-to-end product innovation capabilities, sophisticated customer data management, partner ecosystem and revenue and pricing management. </li>
  </ul>
  </Col>
</Row>
</Container>
<Container className="mb-5">

<h1 className="fs-2 mt-5 mb-5">SunTec Offerings</h1>
<p className="fs-5">See how we combine components of SunTec Xelerate to create specific solutions for digital transformation, revenue management, customer experience orchestration and partner ecosystem management.</p>
<Row>
<Col>
<Card className="c_shadow" style={{height:28+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_1.png" />
      <Card.Body className="c_body">
        <Card.Title>Relationship-based Pricing</Card.Title>
        <Card.Text>
        Enhance customer relationships, share of wallet and operational efficiency through differential and
automated pricing. Analyze customer data in real time and deliver context- specific offers at the
right time.
        </Card.Text>
      </Card.Body>
      <Card.Body>
      <Card.Link href="#">Explore</Card.Link>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:28+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_2.png" />
      <Card.Body className="c_body">
        <Card.Title>Enterprise Product Management</Card.Title>
        <Card.Text>
        Create and maintain optimized product portfolio with extreme agility. It comes pre-integrated with the relationship-based pricing module and can be seamlessly integrated with core applications.
        </Card.Text>
      </Card.Body>
      <Card.Body>
      <Card.Link href="#">Explore</Card.Link>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:28+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_3.png" />
      <Card.Body className="c_body">
        <Card.Title>Billing & Invoicing</Card.Title>
        <Card.Text>
        Allows financial institutions to manage all their billing and invoicing requirements including complex charging situations for customers availing multiple products and services. Provides a consolidated statement from across multiple business lines.
        </Card.Text>
      </Card.Body>
      <Card.Body>
      <Card.Link href="#">Explore</Card.Link>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col>
<Card className="c_shadow" style={{height:28+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_4.png" />
      <Card.Body className="c_body">
        <Card.Title>Deal Management</Card.Title>
        <Card.Text>
        Manage the complete deal lifecycle of all the contracts in the enterprise, across products and businesses. Use a single source of truth to streamline and simplify complex negotiations across different geographies, increase profit margins, ensure price transparency and policy compliance.
        </Card.Text>
      </Card.Body>
      <Card.Body>
      <Card.Link href="#">Explore</Card.Link>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:28+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_5.png" />
      <Card.Body className="c_body">
        <Card.Title>Dynamic Offer Management</Card.Title>
        <Card.Text>
        Track your customers&apos; lifetime journey, get a complete view of the relationship and make highly personalized offers. You can even bundle offers from other partners in your ecosystem to make an offer your customers just can&apos;t refuse.
        </Card.Text>
      </Card.Body>
      <Card.Body>
      <Card.Link href="#">Explore</Card.Link>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:28+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_6.png" />
      <Card.Body className="c_body">
        <Card.Title>Loyalty Management</Card.Title>
        <Card.Text>
        Determine the true value of every customer relationship regardless of the complexity of your account hierarchies and product bundles and launch effective loyalty programs. Combine your loyalty program with relationship-based pricing, identify upsell and cross-sell opportunities and improve customer retention.
        </Card.Text>
      </Card.Body>
      <Card.Body>
      <Card.Link href="#">Explore</Card.Link>
      </Card.Body>
    </Card>
</Col>
</Row>
<Row>
<Col>
<Card className="c_shadow" style={{height:28+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_7.png" />
      <Card.Body className="c_body">
        <Card.Title>Open Banking Monetization</Card.Title>
        <Card.Text>
        Embrace the open banking economy - add new business models and revenue sources. Our easy to
manage partner ecosystem allows you to transition from being a mere utility provider to a true value
aggregator.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Explore</Card.Link>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:28+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_8.png" />
      <Card.Body className="c_body">
        <Card.Title>Taxation</Card.Title>
        <Card.Text>          
Your one-stop-solution for all GST and VAT regulatory compliance requirements. Configurable framework that seamlessly integrates with business systems across organizational silos, covering tax determination, invoicing, return filing and reporting.
        </Card.Text>
      </Card.Body>
      <Card.Body>
      <Card.Link href="#">Explore</Card.Link>
      </Card.Body>
    </Card>
</Col>
<Col>

</Col>
</Row>
</Container>
<Container className="wbg-gy text-center d-flex flex-column justify-content-center align-items-center" style={{height:10 + 'em'}}>
<h1 className="fs-4">Accelerating your digital transformation journey has never been this simple!</h1>
<Button className="b-btn">Discover Now</Button>
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