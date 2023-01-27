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
      Notices
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/HR-Initiative.jpg")` 
    }}>

<Row>
<Col>
<div className="square">
<div class="lin"></div>
<div className="square-text ">
<h1 className="fs-1">Notices</h1>
<p className="fs-5">Explore inspiring testimonials and employee experiences, one story at a time</p>
<Button  className="b-btn">Read more</Button>
</div>
<div class="lin"></div>
</div>
</Col> 
<Col>
</Col> 
</Row>
</Container>
<Container className="mt-5">
<Link href="/pdf/CAA2_Digirev-4x20-1.pdf" target="_blank" className="fs-1 fw-bold text-decoration-none text-black">
Scheme of Amalgamation
</Link>
</Container>

<Footer/>
</>


  );
}

export default LinksExample;