import {Container,Row, Col,Image,Breadcrumb,Card, Button, Offcanvas} from 'react-bootstrap';
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import Moment from 'react-moment';
import configData from "../config.json";
import Header from '../components/Header';
import Footer from '../components/Footer';

function LinksExample() {
    const [movies, setProducts] = useState([]);
    const [solutions, setSolutions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    // const [next, setNext] = useState();
    // const [total, setTotal] = useState();
    const [end, setEnd] = useState(true);
  
    const fetchProducts = async () => {
     setLoading(true);
      let url = "";
      url = `${configData.SERVER_URL}datasheets?_embed&status=publish&tags=249&order=asc`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setProducts(data);
        // setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };


    const fetchSolutions = async () => {
        // setLoading(true);
        let url = "";
        url = `${configData.SERVER_URL}datasheets?_embed&status=publish&tags=204&order=asc`;
        try {
          const response = await fetch(url);
          const data = await response.json();
         // console.log(data);
          setSolutions(data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
  
    useEffect(() => {
      fetchProducts();
      fetchSolutions();
    },[]);
  


  return (
<>
<Header/>
<Container fluid className="breadcum">
<Breadcrumb >
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/company" active>
      Case Studies
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/datasheets_banner.jpeg")` 
    }}>

<Row>
<Col sm={4}>
<div className="r-text">
<div class="ribbon-1"></div>
<h1 className="fs-1">Data Sheets</h1>
<div className="wbg-gr p-2 w-text">
<p className="fs-5">We have a lot to say, unravel our product offerings from below!</p>
</div>
</div>
</Col> 
<Col >
</Col> 
</Row>
</Container>
<Container className="mt-5 ">
<h2 className="txt-main">Products</h2>
{loading && <h2 className="loading">Loading...</h2>}
<Row>
{

movies.map((post, index) => {
  //console.log(post);
  return (

    <Col sm={4} className="p-3" key={post.id} >
      <Card className="" style={{height:15 +'em'}}>
        <Card.Body className="">
          
          <Card.Title className="fs-5 mb-4" style={{ height: 1 +'em' }} dangerouslySetInnerHTML={{ __html:post['title']['rendered']}}/>
          <div dangerouslySetInnerHTML={{__html:post['content']['rendered']}}/>
          <Link href={post['acf']['pdf_file']} className="b-btn btn text-white" target="_blank">Datasheet</Link>
        </Card.Body>
      </Card>

    </Col>
  )


})}
</Row>
</Container>
<Container className="mt-5 ">
<h2 className="txt-main">Solutions</h2>
{loading && <h2 className="loading">Loading...</h2>}
<Row>
{

solutions.map((post, index) => {
  //console.log(post);
  return (

    <Col sm={4} className="p-3" key={post.id}>
      <Card className="" style={{height:15 +'em'}}>
        <Card.Body >
          
          <Card.Title className="fs-5 mb-4" style={{ height: 1 +'em' }} dangerouslySetInnerHTML={{ __html:post['title']['rendered']}}/>
          <div dangerouslySetInnerHTML={{__html:post['content']['rendered']}}/>
        <Link href={post['acf']['pdf_file']} className="b-btn btn text-white" target="_blank">Datasheet</Link>
          
        </Card.Body>
      </Card>

    </Col>
  )


})}
</Row>


</Container>
<Footer/>
</>


  );
}

export default LinksExample;