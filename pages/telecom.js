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
    url = `${configData.SERVER_URL}all-insights?tag=322`;
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
      Driving an Effective Transformation Agenda
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/telecom_banner.jpeg")` 
    }}>

<Row>
<Col>
<div className="b-text">
<h1>Driving an Effective Transformation Agenda</h1>
<p>Embrace a data driven strategy and add new streams of revenue using SunTec Xelerate’s powerful intelligence layer. Enhance your customer experience management capabilities with the right level of process automation, analytics and product innovation.</p>
</div>
</Col> 
<Col></Col> 
</Row>
</Container>
<Container>
<h1 className="fs-2 mt-5 mb-5">In Search of Operational Efficiency and New Business Models</h1>
<p className="fs-5">The telecom industry is undergoing a phenomenal change, moving from an otherwise static industry to one where products and services are changing dynamically. Legacy revenue streams are declining, and the share of wallet is being challenged by competitive telecom companies and technology vendors. Operators are forced to rethink their customer acquisition and retention strategies – this demands a big change in the thinking and an even bigger change in business operations.</p>
<p className="fs-5">Telecom companies need to create innovative products that are centered around customer demands as opposed to simply pushing the product in the market. In addition, they are under constant pressure to match the user experience provided by companies like Facebook, Amazon and Google. The focus has discretely shifted from quality of service to quality of experience.</p>
<p className="fs-5">The telecommunication sector, like other industries, is currently caught up in a paradigm shift to digital transformation, which is compelling them to consider new avenues and opportunities to maintain footfalls. Changes in telecommunication markets are driven by rapidly advancing technologies and customer demand for increasingly sophisticated services. Customers today want to freely choose services and then negotiate the terms of those services. To meet this demand a highly flexible product and service bundling capability and a support for complex pricing models is essential.</p>

<h2 className="fs-2 mt-5 mb-5">The Challenges</h2>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/icon_21.png"/>
      <Card.Body>
        <Card.Title>Digital Aspirations, Analogue Mindset</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/icon_22.png"/>
      <Card.Body>
        <Card.Title>Inability to Leverage Customer Data and Analytics</Card.Title>
      </Card.Body>
    </Card>
</Col>   
</Row>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/icon_23.png"/>
      <Card.Body>
        <Card.Title>Legacy Infrastructure Lacks Agility and Scalability</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/icon_24.png"/>
      <Card.Body>
        <Card.Title>Poor Process Automation</Card.Title>
      </Card.Body>
    </Card>
</Col>   
</Row>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img  className="card-icon-left" src="images/icon_25.png"/>
      <Card.Body>
        <Card.Title>Traditional Product-centric Approach</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/icon_26.png"/>
      <Card.Body>
        <Card.Title>Increased Complexity of Operations</Card.Title>
      </Card.Body>
    </Card>
</Col>   
</Row>
<Row>  
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img  className="card-icon-left" src="images/icon_27.png"/>
      <Card.Body>
        <Card.Title>Poor Ecosystem Relationships</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col sm={6}>
<Card className="d-flex flex-row c-height">
      <Card.Img className="card-icon-left" src="images/icon_28.png"/>
      <Card.Body>
        <Card.Title>Explosion of Data and the Reality of IoT</Card.Title>
      </Card.Body>
    </Card>
</Col>   
</Row>

</Container>
<Container className="gra_color" fluid style={{height:35 + 'em'}}>
<Row>
  <Col><img src="/images/xelerate.png" height="300"/></Col>
  <Col>
  <h3 className="text-white fs-2">How SunTec Simplifies Your Transformation Journey?</h3>
  <ul className="mt-5">
   <li className="text-white fs-5"><strong>Monetize end-user services:</strong>Deploy an ‘intelligence layer’ to roll out innovative products and offers that are personalized to your customer needs.</li> 
   <li className="text-white fs-5"><strong>Reduce time to market:</strong> Quickly launch products and manage product changes with agility and scalability.</li>
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
        <Card.Title>Enterprise Product Management</Card.Title>
        <Card.Text>
        Comprehensive enterprise catalog management along with full product life cycle management across multiple business lines.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:400 +'px'}}>
      <Card.Img className="card-icon-left" src="/images/icon_2.png" />
      <Card.Body className="c_body">
        <Card.Title>Service Provisioning and Activation</Card.Title>
        <Card.Text>
        Configurable system that simplifies the service activation to complex network elements and rule-driven activation flow.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:400 +'px'}}>
      <Card.Img className="card-icon-left" src="/images/icon_3.png" />
      <Card.Body className="c_body">
        <Card.Title>Real-time Event Collection and Mediation</Card.Title>
        <Card.Text>
        Real-time event collections from network elements and event generators like IMS, IPDR and back office systems.
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
        <Card.Title>Convergent Billing and Invoicing System</Card.Title>
        <Card.Text>
        SunTec Xelerate facilitates converged bills for customers with charges from multiple services of different lines of businesses.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:400 +'px'}}>
      <Card.Img className="card-icon-left" src="/images/icon_5.png" />
      <Card.Body className="c_body">
        <Card.Title>Relationship-based Pricing and Value Management</Card.Title>
        <Card.Text>
        Enhance customer relationships, share of wallet and operational efficiency through differential and automated pricing.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:400 +'px'}}>
      <Card.Img className="card-icon-left" src="/images/icon_6.png" />
      <Card.Body className="c_body">
        <Card.Title>Automated Revenue Value Chain Management</Card.Title>
        <Card.Text>
        Track your customers’ lifetime journey, get a complete view of the relationship and make highly personalized offers.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>
<Row>
<Col>
<Card className="c_shadow" style={{height:400 +'px'}}>
      <Card.Img className="card-icon-left" src="/images/icon_7.png" />
      <Card.Body className="c_body">
        <Card.Title>Partner Management and Monetization</Card.Title>
        <Card.Text>
        Complete solution for partner management – right from partner onboarding, contract negotiation, setup of contracted revenue share models and actual revenue share computations and settlement.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card className="c_shadow" style={{height:400 +'px'}}>
      <Card.Img className="card-icon-left" src="/images/icon_8.png" />
      <Card.Body className="c_body">
        <Card.Title>OTT Billing</Card.Title>
        <Card.Text>          
        OTT billing with flexible pricing models to support innovative monetization strategies. Data analytics support for churn management, camping management and optimization of monetization strategies.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>

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