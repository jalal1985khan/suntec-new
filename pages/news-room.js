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
      News Room
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/Newsroom.jpg")` 
    }}>

<Row>
<Col>
<div className="square">
<div class="lin"></div>
<div className="square-text ">
<h1 className="fs-1">News Room</h1>
<p className="fs-5">Explore our latest media coverage and press releases</p>
</div>
<div class="lin"></div>
</div>
</Col> 
<Col>
</Col> 
</Row>
</Container>
<Container className="mt-5 text-center">
<h2 className="txt-main">What’s Happening at SunTec</h2>
<Row className="mt-5">
<Col>
<Card >
      <Card.Img variant="top" src="images/Press-Release.jpeg" />
      <Card.Body className="wbg-sun text-white">
        <Card.Title >Press Releases</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card >
      <Card.Img variant="top" src="images/News.jpeg" />
      <Card.Body className="wbg-sun text-white">
        <Card.Title>SunTec News and Insights</Card.Title>
      </Card.Body>
    </Card>
</Col>
<Col>
<Card >
      <Card.Img variant="top" src="images/about-us.jpeg" />
      <Card.Body className="wbg-sun text-white">
        <Card.Title>About SunTec</Card.Title>
      </Card.Body>
    </Card>
</Col>
</Row>    
</Container>
<Footer/>
</>


  );
}

export default LinksExample;