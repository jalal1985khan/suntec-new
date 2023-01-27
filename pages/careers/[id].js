import {Button, Container,Row, Col,Breadcrumb, Card} from 'react-bootstrap';
import configData from "../../config.json";
// import React, { useEffect, useState } from "react";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import GravityForm from 'react-native-gravityform';

const post = ({data}) => {
  console.log(data);
  return (
    <div>
<Header/>   
{
data.map((post)=>{
return (
<div key={post.id}>
<Container fluid className="breadcum">
<Breadcrumb >
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/career">{post.type}</Breadcrumb.Item>
      <Breadcrumb.Item href={post['slug']} active>
      {post['title']['rendered']}
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>

<Container fluid key={post.id}  >
</Container>
<Container fluid>
<Card className="border-0 text-center">
      <Card.Body>
        <h1>{post['acf']['headline']}</h1>
      <Button className="b-btn mb-4">{post['title']['rendered']}</Button>
        <Card.Title>Experience: <span dangerouslySetInnerHTML={{__html:post['acf']['experience']}}/></Card.Title>
        <Card.Title>Location: <span dangerouslySetInnerHTML={{__html:post['acf']['job_location']}} /></Card.Title>
        <Card.Text dangerouslySetInnerHTML={{__html:post['acf']['job_location_subfield']}} className="fs-5"/>

       
      </Card.Body>
    </Card>
</Container>
<Container className="mt-5">
<Row>
<Col sm={7}>
<div dangerouslySetInnerHTML={{__html:post['content']['rendered']}} className="fs-5"/>
</Col>  
<Col className="border">


</Col>
</Row>
</Container>
<Footer/>
</div>
)
})}


</div>
  )
}

export default post




export async function getServerSideProps(context){
    const {id} = context.params;
    const res = await fetch(`${configData.SERVER_URL}careers?_embed&slug=${id}`);
    const data = await res.json();
    return {props:{data}}
    
    
    
}