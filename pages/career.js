import {Container,Row, Col,Image,Breadcrumb,Card, Button, Offcanvas} from 'react-bootstrap';
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import configData from "../config.json";
import Moment from 'react-moment';
import Header from '../components/Header';
import Footer from '../components/Footer';

function LinksExample() {

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(9);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState();
    const [error, setError] = useState({});
    const [next, setNext] = useState();
    const [total, setTotal] = useState();
    const [end, setEnd] = useState(false);
  
    const fetchMovies = async () => {
      setLoading(true);
      let url = "";
      const urlPage = `${page}`;
      url = `${configData.SERVER_URL}careers?_embed&status=publish&tags=175&per_page=${urlPage}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        //console.log(data);
        setMovies(data);
        setLoading(false);
        setEnd(false);
      } catch (error) {
        console.log(error);
      }
    };
  
    const fetchNos = async () => {
      setLoading(true);
      let cat = "";
      cat = `${configData.SERVER_URL}categories/274`;
  
      try {
        const response = await fetch(cat);
        const cats = await response.json();
        //console.log(cats.count);
        setNext(cats.count);
        setTotal(cats.count);
        setLoading(false);
        setEnd(true);
  
      } catch (error) {
        console.log(error);
      }
    };
  
  
  
  
    useEffect(() => {
      fetchMovies();
      fetchNos();
    }, [page], [next]);
  
  
    const loadMore = () => {
      setTotal(next)
      //console.log(total)
      const main = next;
  
      if (total == page) {
        setEnd(false);
      }
  
      setPage((oldPage) => {
        return oldPage + 3;
      })
    };

  return (
<>
<Header/>
<Container fluid className="breadcum">
<Breadcrumb >
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/company" active>
      Careers
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/career_banner.jpeg")` 
    }}>

<Row>
<Col>
<div className="square">
<div class="lin"></div>
<div className="square-text ">
<h1 className="fs-1">Careers</h1>
{/* <p className="fs-5">Explore inspiring testimonials and employee experiences, one story at a time</p> */}
<Button  className="b-btn">Find the job you love</Button>
</div>
<div class="lin"></div>
</div>
</Col> 
<Col>
</Col> 
</Row>
</Container>
<Container className="mt-5">
<Row>
<Col sm={5}><img src="/images/careers-at-suntec.png" className="csr-img"/></Col>
<Col sm={7}>
<h3>Why Work at SunTec?</h3>
<p className="fs-5">It is people who make good companies great. With an exceptional team, we believe we certainly are on track and ensure that our people have access to the best learning and growth opportunities, while working with some of the world&apos;s leading service providers. A diverse culture, a fun vibe, and a strong desire to win the world – if you&apos;re seeking these, you&apos;re in the right place.</p>
</Col>    
</Row>
</Container>


<Container className="p-3 f-banner mt-5" fluid style={{ 
      backgroundImage: `url("/images/job_banner_fixed.jpeg")` 
    }}>

<Row>
<Col>
<div className="b-text">
<h5>SunTec Careers</h5>
<h1>Working with the Best</h1>
<p>If being digital first inspires you, you are at the right place. You could be a part of the SunTec story to enable a digital economy across industries, by orchestrating uniform value flow throughout the marketspace. Our future-ready products empower organizations to derive optimum value from their complete ecosystem, to become owners of their marketspace.</p>
</div>
</Col> 
<Col></Col> 
</Row>
</Container>

<Container className="mt-5">

<Row className="mt-5">
<Col sm={5}><img src="/images/suntec_team.jpeg" className="csr-img"/></Col>
<Col sm={7}>
<h3>What You Can Expect</h3>
<p className="fs-5">An environment of collaboration, inclusion and celebration. A chance to design a clear, growing career path. Learning with a team of go-getters. A variety of benefit programs and competitive compensation. Exposure to international work opportunities</p>
</Col>    
</Row>
</Container>
<Container className="mt-5">
<h1>Current Openings</h1>
<div className="callout callout-default">
<h4>Product Engineering</h4> 
</div>

{

movies.map((post, index) => {
//   console.log(post['categories']['0']);

  return (

<Container className="border p-4 mt-3" key={post.id}>
<Row>
<Col sm={9}>
<h2 dangerouslySetInnerHTML={{ __html:post['title']['rendered']}} />
<p>Join our Information Security team that is tasked with maintaining and monitoring the confidentiality, integrity, and availability of client information and resources. As a Senior Information Security Analyst, you will support the Lead in handling the SaaS client environment and…</p>
</Col>
<Col className="center">
<Link className="b-btn text-decoration-none text-white" key={index} href={`/careers/${post['slug']}`}>View Opening</Link>            
            </Col>   
</Row>
</Container>
    
  
  )


})}


<section className="section text-center mb-3">
        {loading && <h2 className="loading">Loading Jobs...</h2>}
        <div className="loadmodediv">
          {end &&
            <Button variant="primary" className="b-btn fs-5" onClick={loadMore}>
              Load More
            </Button>}
        </div>
      </section>




</Container>

<Container className="wbg-sun text-white middle p-5 mt-5" style={{height:7 +'em'}}>
<h2>Join our Team of Dreamers, Innovators and Go-Getters</h2>
</Container>
<Footer/>
</>


  );
}

export default LinksExample;