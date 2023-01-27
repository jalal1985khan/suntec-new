import {Container,Row, Col,Image,Breadcrumb,Card, Button, Offcanvas} from 'react-bootstrap';
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import Moment from 'react-moment';
import configData from "../config.json";
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
      url = `${configData.SERVER_URL}point-of-view?_embed&status=publish&per_page=${urlPage}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
       // console.log(data);
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
      cat = `${configData.SERVER_URL}categories/245`;
  
      try {
        const response = await fetch(cat);
        const cats = await response.json();
        //console.log(cats.count);
        setNext(cats.count);
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
      Point of view
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/points-of-View.jpeg")` 
    }}>

<Row>
<Col sm={4}>
<div className="r-text">
<div class="ribbon-1"></div>
<h1 className="fs-1">Point Of View</h1>
<div className="wbg-gr p-2 w-text">
<p className="fs-5">Here&apos;s our take on the industry&apos;s pivotal topics!

</p>
</div>
</div>
</Col> 
<Col >
</Col> 
</Row>
</Container>
<Container className="mt-5 ">
<h2 className="txt-main">Point of view</h2>

<Row>
{

movies.map((post, index) => {
//   console.log(post['categories']['0']);

  return (
    
    <Col sm={4} className="p-3" key={post.id}>
      <Card className="p-posts" >
        <Image
          src={post['_embedded']['wp:featuredmedia'][0]['source_url']}
          alt={post['title']['rendered']}
          width="100%"
          className="p-posts"
        />
        <Card.Body className="posts">
          
          <Card.Title className="fs-5 mb-4" style={{ height: 5 +'em' }} dangerouslySetInnerHTML={{ __html:post['title']['rendered']}}/>
          <Row>
            <Col>
            <Moment format="D MMM YYYY" withTitle>
            {post.date}
            </Moment>
            </Col>
            <Col className="d-flex justify-content-end">
            <Link key={index} href={`/point-of-view/${post['slug']}`} className="float-right">
            Read more
          </Link>
            </Col>
          </Row>
        
          
        </Card.Body>
      </Card>

    </Col>
  )


})}

</Row>


</Container>
<section className="section text-center mb-3">
        {loading && <h2 className="loading">Loading POV...</h2>}
        <div className="loadmodediv">
          {end &&
            <Button variant="primary" className="b-btn fs-5" onClick={loadMore}>
              Load More
            </Button>}
        </div>
      </section>
<Footer/>
</>


  );
}

export default LinksExample;