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
      What Drives the People at SunTec?
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
<h1 className="fs-1">What Drives the People at SunTec?</h1>
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
<p className="fs-5">Come, work with a forward-thinking, passionate, and encouraging organization that believes in delivering value in every interaction. We work with financial services firms, telecom companies, and travel organizations globally to provide solutions that help them enrich their customer interactions and accelerate innovation.</p>
<p className="fs-5">We believe in empowering our people and offering an environment of continuous learning where you can carve your own career paths. If you have the drive, we provide all the training, tools, and inspiration to help you thrive.</p>
</Container>
<Container className="mt-5">
<Row>
<Col sm={5}><img src="/images/SunTec-Culture.jpeg" className="csr-img"/></Col>
<Col sm={7}>
<h3>The SunTec Culture We All Love</h3>
<p className="fs-5">We believe in creating an environment where you love what you do and can freely express new ideas and perspectives. Right from the beginning of your lifecycle as an employee at SunTec, we ensure you feel at home and have the necessary tools to perform your best.</p>
<p className="fs-5">When you join SunTec you become part of the SunTec family. We work as one team and share our knowledge and expertise. We all work towards one goal and ensure that our clients and employees alike can steer the changing world.</p>
</Col>    
</Row>


<Row className="mt-5">
<Col sm={7}>
<h3>Where Learning Never Stops – Our L&D Initiatives​</h3>
<p className="fs-5">Developing talent and ensuring our employees have sound technical and functional knowledge is our top priority. To enable continuous learning and upskilling, our L&D approach includes training and interactive sessions with practitioners and experts. Every employee is given an Individual Development Plan (IDP) to hone their skills, enabling them to define their own learning path and content. Our learning platform, SunTec Academy, is aimed at encouraging learning throughout the lifecycle of an employee to help enhance skillsets. Leadership assessment and development programs are developed to mentor individuals and create our next line of leaders.</p>
<p className="fs-5">We take our Objectives and Key Results program (OKR) seriously to enhance our efficiency and productivity. All departments and teams at SunTec work towards a deﬁned goal and in line with the organization’s strategy. Our objectives cascade top down – right from our CEO down to the junior most SunTecian.  Our OKR system has frequent checks to measure progress and help adjust our course of action accordingly.</p>
</Col>    
<Col sm={5}><img src="/images/Learning-Never-Stops.jpeg" className="csr-img"/></Col>
</Row>


<Row className="mt-5">
<Col sm={5}><img src="/images/Vibrant-Bunch.jpeg" className="csr-img"/></Col>
<Col sm={7}>
<h3>We&apos;re a Vibrant Bunch! Employee Wellbeing & Engagement Programs​</h3>
<p className="fs-5">We believe employees do their best when they are offered a safe environment to voice their concern. Every SunTecian is assigned a HR buddy and can always reach out to them to discuss concerns such as payroll, performance grievances, team change, grievances within their team and more.</p>
<p className="fs-5">Our employee engagement activities aim to establish meaningful interactions and maintain high employee morale. Our programs include fun activities with employees and their families, wellness webinars, festive celebrations at work, to name a few. This year, we took our Onam and Diwali celebrations virtual and indeed made the most of it.</p>
</Col>    
</Row>

<Row className="mt-5">
<Col sm={7}>
<h3>Benefits & Rewards to Love</h3>
<p className="fs-5">Employees who perform their best deserve to be recognized. As part of our rewards and recognition program, employees are given a bonus every financial year based on their performance.</p>
<p className="fs-5">To motivate consistent top performers, we also recognize top employees who are given an extra set of KRAs for the financial year along with certain milestones to be achieved every quarter. Employees who meet their milestones are given a monetary reward.</p>
</Col>    
<Col sm={5}><img src="/images/Benefits-Rewards.jpeg" className="csr-img"/></Col>
</Row>

<Row className="mt-5">
<Col sm={5}><img src="/images/Ordinary-People.jpeg" className="csr-img"/></Col>
<Col sm={7}>
<h3>Stories of Ordinary People who Worked Extraordinarily to Keep the SunTec Flag Flying</h3>
<p className="fs-5">When the pandemic struck in March 2020 and we had to go into lockdown, our people ably rose to the challenge. SunTecians have stayed true to our organizational culture with a firm focus on quality and completeness. Despite the trying times, individuals across departments and geographies rarely dropped the ball and certainly never settled for suboptimal. This book is a compilation of stories that reflect the unputdownable spirit of our employees who, come rain or sunshine, put the customer at the center of everything. We hope you enjoy reading these stories.</p>
<Button className="b-btn">Read our stories from the pandemic</Button>
</Col>    
</Row>


<Row className="mt-5">
<Col sm={7}>
<h3>Here&apos;s How SunTecians Creatively Express Themselves!</h3>
<p className="fs-5">Get a glimpse of all the talent at SunTec in this edition! From dancing or visual storytelling, to repurposing everyday objects and art, here&apos;s what our employees love doing in their free time.</p>
<Button className="b-btn">Enjoy this visual treat</Button>
</Col>
<Col sm={5}><img src="/images/peoples-of-suntec.jpeg" className="csr-img"/></Col>    
</Row>
</Container>
<Container className="wbg-sun text-white middle p-5" style={{height:7 +'em'}}>
<h2>Join our Team of Dreamers, Innovators and Go-Getters</h2>
</Container>
<Footer/>
</>


  );
}

export default LinksExample;