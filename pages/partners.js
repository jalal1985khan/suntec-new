import {Container,Row, Col,Image,Breadcrumb,Card, Button, Offcanvas} from 'react-bootstrap';
import Link from 'next/link';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function LinksExample() {

  

  return (
<>
<Header/>
<Container fluid className="breadcum">
<Breadcrumb >
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/company" active>
      Partners
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/partners_banner.jpeg")` 
    }}>

<Row>
<Col>
<div className="square">
<div class="lin"></div>
<div className="square-text text-black">
<h1 className="fs-1">Partners</h1>
<p className="fs-5">Our partners help us unlock the true potential of SunTec Xelerate and deliver the full value of our soluations across the globe. Let&apos;s join hands to create an engaging proposition that will help our clients succeed.</p>
<Button  className="b-btn">Read more</Button>
</div>
<div class="lin"></div>
</div>
</Col> 
<Col>
</Col> 
</Row>
</Container>
<Container>
<Row>
<Col className="wbg-dark p-5 middle" sm={5} style={{height:50 +'em'}}>
<h2 className="text-white">We play multiple roles for you.</h2>
<p className="text-white">Our partnership program supports collaborative initiatives tailor-made for each market and partner. Access highly evolved and cost-effective training programs for pre-sales and professional services. Gain pre-sales and consulting support, through the lifetime of the partnership.</p>
</Col>    
<Col className="mt-5">
<h2>PARTNER PROGRAMS</h2>
<Row>
<Col>
<Card className="border-0">
      <Card.Img variant="top" src="images/p_icon_3.png" className="card-img card-icon-left"/>
      <Card.Body>
        <Card.Title>CONSULTING FIRM</Card.Title>
        <Card.Text>
        Give your clients the strategic guidance they need to build a customer-centric business. Our product suite with proven functionalities fits into multiple business models and scenarios. Cross-geography market strategy, innovative roadmap, all this and more.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>

<Card className="border-0">
      <Card.Img variant="top" src="images/p_icon_3.png" className="card-img card-icon-left"/>
      <Card.Body>
        <Card.Title>CONSULTING FIRM</Card.Title>
        <Card.Text>
        Give your clients the strategic guidance they need to build a customer-centric business. Our product suite with proven functionalities fits into multiple business models and scenarios. Cross-geography market strategy, innovative roadmap, all this and more.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

<Row className="mt-4">
<Col>
<Card className="border-0">
      <Card.Img variant="top" src="images/p_icon_3.png" className="card-img card-icon-left"/>
      <Card.Body>
        <Card.Title>CONSULTING FIRM</Card.Title>
        <Card.Text>
        Give your clients the strategic guidance they need to build a customer-centric business. Our product suite with proven functionalities fits into multiple business models and scenarios. Cross-geography market strategy, innovative roadmap, all this and more.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
<Col>

<Card className="border-0">
      <Card.Img variant="top" src="images/p_icon_3.png" className="card-img card-icon-left"/>
      <Card.Body>
        <Card.Title>CONSULTING FIRM</Card.Title>
        <Card.Text>
        Give your clients the strategic guidance they need to build a customer-centric business. Our product suite with proven functionalities fits into multiple business models and scenarios. Cross-geography market strategy, innovative roadmap, all this and more.
        </Card.Text>
      </Card.Body>
    </Card>
</Col>
</Row>

</Col>    
</Row>
</Container>
<Container className="partner-bg">
<p className="fs-5">At SunTec, we take pride in being trusted partners with our collaborators and clients. We believe that the most impactful businesses prosper through complementary partnerships. Thus, our partner program offers a range of possibilities that enables companies to adapt to changing markets, technological advancements and meet customer needs. With us, build relationships that are meaningful, responsive and productive.</p>
</Container>
<Container className="mt-5">
<h2>WELCOME TO THE CLUB</h2>
<h3 className="mt-5">Consulting Partners</h3>
<Row>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/capco.png"/></Link>
</Col>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/cmg.jpeg"/></Link>
</Col>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/ey.png"/></Link>
</Col>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/simons.png"/></Link>
</Col>
</Row>

<h3 className="mt-5">Systems Integrators</h3>
<Row>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/atos.png" className="partner-logo"/></Link>
</Col>
<Col>
<Link href="https://www.cap.com/" target="_blank">
<img src="/images/partners/capgemini.png" className="partner-logo"/></Link>
</Col>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/cognizant.png" className="partner-logo"/></Link>
</Col>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/hcl.png" className="partner-logo"/></Link>
</Col>
</Row>
<Row>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/ibm.png" className="partner-logo"/></Link>
</Col>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/infosys.png" className="partner-logo"/></Link>
</Col>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/itc.jpeg" className="partner-logo"/></Link>
</Col>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/tcs.jpeg" className="partner-logo"/></Link>
</Col>
</Row>
<Row>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/tech-mahindra.png" className="partner-logo"/></Link>
</Col>
</Row>

<h3 className="mt-5">Technology Partners</h3>
<Row>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/ibm.png" className="partner-logo"/></Link>
</Col>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/infosys-finacle.png" className="partner-logo"/></Link>
</Col>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/mambu.png" className="partner-logo"/></Link>
</Col>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/registered-partners.jpeg" className="partner-logo"/></Link>
</Col>
</Row>

<Row>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/red-hat.jpg" className="partner-logo"/></Link>
</Col>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/Salesforce-Logo.png" className="partner-logo"/></Link>
</Col>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/Suse.png" className="partner-logo"/></Link>
</Col>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/tcs.png" className="partner-logo"/></Link>
</Col>
</Row>
<Row>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/Thought-machine.png" className="partner-logo"/></Link>
</Col>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/whatfix_new.jpg" className="partner-logo"/></Link>
</Col>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/winward.jpeg" className="partner-logo"/></Link>
</Col>
<Col>
</Col>
</Row>    

<h3 className="mt-5">Cloud Partners</h3>
<Row>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/aws-cloud.png" className="partner-logo"/></Link>
</Col>
<Col>
<Link href="https://www.capco.com/" target="_blank">
<img src="/images/partners/ibm.png" className="partner-logo"/></Link>
</Col>
<Col>
</Col>
<Col>
</Col>
</Row>

</Container>

<Footer/>
</>


  );
}

export default LinksExample;