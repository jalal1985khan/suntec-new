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
    url = `${configData.SERVER_URL}all-insights?tag=328`;
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
      <Breadcrumb.Item href="/relationship-based-pricing-management" active>
      Relationship-based Pricing Management
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/relationship_based-pricing_management.jpg")` 
    }}>

<Row>
<Col>
<div className="b-text">
<h1>Relationship-based Pricing Management</h1>
<p>Bring pricing to the forefront of your customer engagement strategy by creating an enterprise pricing master for fees, rates and charges that win the hearts and minds of your customers.</p>
<Link href="/" className="r-btn">Read the datasheet</Link>
</div>
</Col> 
<Col></Col> 
</Row>
</Container>
<Container>
<Row className="d-flex flex-row mt-5 mb-5">
<Col sm={6}>
<img src="/images/xelerate.png" height="350"/>
</Col>
<Col sm={6}>
<h2 className="fs-1">Why SunTec Xelerate?</h2>
<p className="fs-5">SunTec&apos;s Relationship-based Pricing Management on SunTec Xelerate platform complements and significantly augments existing core banking capabilities and enables contextual pricing. As an enterprise pricing master, SunTec Xelerate enables fairness, enhances transparency for all stakeholders, improves control and governance and enhances revenue. The rule-based capability further automates the pricing process to provide agility, improve maintainability and allow end-to-end auditability and traceability.</p>
</Col>
</Row>    
</Container>
<Container className="wbg-sun text-center d-flex flex-column justify-content-center" style={{height: 10 +'em'}}>
<h2 className="text-white fs-2 mb-4">Discover related resources curated just for you</h2>
<Row>
<Col><Button className="w-btn">Articles</Button></Col>
<Col><Button className="w-btn">White Papers</Button></Col>
<Col><Button className="w-btn">Case Studeis</Button></Col>    
</Row>

</Container>
<Container className="mb-5">
<h1 className="fs-2 mt-5 mb-5">Features of SunTec&apos;s Relationship-based Pricing Management</h1>
<Row>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_6.png" />
      <Card.Body className="c_body">
        <Card.Title>Relationship-based</Card.Title>
        <Card.Text>
        Pricing based on holistic relationship value across
customer and customer groups including complex relational conditions
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon4_1.png" />
      <Card.Body className="c_body">
        <Card.Title>Hyper-personalized</Card.Title>
        <Card.Text>
        Pricing to the segment of one – contextual and real-time pricing driving highly personalized pricing strategies
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon4_2.png" />
      <Card.Body className="c_body">
        <Card.Title>Comprehensive Coverage</Card.Title>
        <Card.Text>
        Unified capability to manage all dimensions of value including fees, charges, rates, benefits (cash and non-cash), commissions, taxes
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon4_3.png" />
      <Card.Body className="c_body">
        <Card.Title>Agile and Configurable System</Card.Title>
        <Card.Text>
        Configurable, rule-based pricing allowing for quick launch and change management with reduced launch and operating costs
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_25.png" />
      <Card.Body className="c_body">
        <Card.Title>Enterprise Approach</Card.Title>
        <Card.Text>
        Enterprise level capability for pricing of all products, services, events and transactions
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_22.png" />
      <Card.Body className="c_body">
        <Card.Title>Insights-driven</Card.Title>
        <Card.Text>
        Reduced risk through real-time analytics driven decision-making, based on insights through rules and persona-based dashboards
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>
<Row>
<Col>
<Card className="c_shadow" style={{height:18+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon4_4.png" />
      <Card.Body className="c_body">
        <Card.Title>Regulatory Compliant</Card.Title>
        <Card.Text>
        End-to-end auditing with traceability combined with real-time data management enhances regulatory compliance and ensures fairness and transparency
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col></Col>
<Col></Col>
</Row>
</Container>
<Container>
</Container>
<Container className="gra_color pt-3" fluid style={{height:45 + 'em'}}>
<Row>
  <Col className="center"><img src="/images/xelerate.png" height="300"/></Col>
  <Col>
  <h3 className="text-white fs-2">&quot;Enhance customer relationships and improve operational efficiency through differential and automated pricing.&quot;</h3>
  <ul className="mt-5">
   <li className="text-white fs-5"><strong>Engage and retain customers:</strong> Deploy relationship-based pricing, offers and rewards to cater to customer demands and achieve sustainable growth.</li> 
   <li className="text-white fs-5"><strong>No more information silos:</strong> Achieve customer centricity with the power of data and innovative relationship-based offerings.</li>
  </ul>
  </Col>
</Row>
</Container>
<Container className="mb-5">
<h1 className="fs-2 mt-5 mb-5">Benefits</h1>
<Row>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
      <Card.Img className="card-icon-left" src="/images/icon_4_1.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Drive customer choice by offering contextual solutions
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_2.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Reduce time and cost to market of specific offers and campaigns
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_3.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Drive overall relationship value through cross bundle offers and benefits
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_4.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Improve quality of revenue through automated management of offers including enrolment/de-enrolment
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_5.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Improve offer quality and breadth by co-innovating with third party partners
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_6.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Empower front end staff to service customers through specific and personalized offers
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>
<Row>
<Col>
<Card className="c_shadow" style={{height:15+ 'em'}}>
<Card.Img className="card-icon-left" src="/images/icon_4_7.png" />
      <Card.Body className="c_body">
        <Card.Text>
        Reduce operational and revenue risk through end-to-end automation
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col></Col>
<Col></Col>
</Row>

</Container>
<Container className="wbg-gy text-center d-flex flex-column justify-content-center align-items-center" style={{height:10 + 'em'}}>
<h1 className="fs-4">Know your customers better and deliver hyper personalized offerings with SunTec.</h1>
<Button className="b-btn">Start a conversation</Button>
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