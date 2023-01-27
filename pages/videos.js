import {Container,Row, Col,Image,Breadcrumb,Card, Button, Offcanvas} from 'react-bootstrap';
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import Moment from 'react-moment';
import configData from "../config.json";
import Header from '../components/Header';
import Footer from '../components/Footer';

function LinksExample() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(8);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    const [next, setNext] = useState();
    const [total, setTotal] = useState();
    const [end, setEnd] = useState(false);
  
    const fetchMovies = async () => {
      setLoading(true);
      let url = "";
      const urlPage = `${page}`;
      url = `${configData.SERVER_URL}ytvideos?_embed&status=publish&per_page=${urlPage}`;
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
      cat = `${configData.SERVER_URL}categories/311`;
      try {
        const response = await fetch(cat);
        const cats = await response.json();
        //console.log(cats);
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
      console.log(total)
      const main = next;
  
      if (total == page) {
        setEnd(true);
      }
  
      setPage((oldPage) => {
        return oldPage + 2;
      })
    };

  return (
<>
<Header/>
<Container fluid className="breadcum">
<Breadcrumb >
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/company" active>
      Videos
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/videos.png")` 
    }}>

<Row>
<Col sm={4}>
<div className="r-text">
<div class="ribbon-1"></div>
<h1 className="fs-1">Videos</h1>
<div className="wbg-gr p-2 w-text">
<p className="fs-5">Discover how our clients across verticals benefited with SunTec</p>
</div>
</div>
</Col> 
<Col >
</Col> 
</Row>
</Container>
<Container className="mt-5 ">
<h2 className="txt-main">Videos</h2>

<Row>
{

movies.map((post, index) => {
    //console.log(post);
  return (

    <Col sm={6} className="p-3" key={post.id}>

{
post['acf']['youtube_link'] === ''? 

<Image
          src={post['acf']['youtube_thumbs']['url']}
          alt={post['title']['rendered']}
          width="100%"
          className="p-posts"
        />

: 
<iframe
      width="100%"
      height="350"
      src={post['acf']['youtube_link']}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />

}

      <Card className="p-posts" >
        <Card.Body className="posts" style={{ height: 27 +'em' }}>
          <Card.Title className="fs-4 mb-4 font-weight-bold" style={{ height: 2 +'em' }} dangerouslySetInnerHTML={{ __html:post['title']['rendered']}}/>
          <div className="fs-5" dangerouslySetInnerHTML={{__html:post['acf']['description']}}/>        
        </Card.Body>
      </Card>

    </Col>
  )


})}

</Row>


</Container>
<section className="section text-center mb-3">
        {loading && <h2 className="loading">Loading Videos...</h2>}
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