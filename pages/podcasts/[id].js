import {Container,Row, Col,Breadcrumb} from 'react-bootstrap';
import configData from "../../config.json";
// import React, { useEffect, useState } from "react";
import {WhatsappShareButton, EmailShareButton ,TwitterShareButton ,LinkedinShareButton ,WhatsappIcon ,EmailIcon,TwitterIcon,LinkedinIcon} from "react-share";
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
      <Breadcrumb.Item href="/ebooks">Ebooks</Breadcrumb.Item>
      <Breadcrumb.Item href={post['slug']} active>
      {post['title']['rendered']}
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ backgroundImage: `url(${post['acf']['desktop_image']})`}}>
<Row>
<Col sm={6}>
<div className="c-text">
<h1 className="fs-2 text-bolder" dangerouslySetInnerHTML={{__html:post['title']['rendered']}}/>
</div>
</Col> 
<Col >
</Col> 
</Row>
</Container>
<Container fluid key={post.id} className="success_post" style={{ backgroundImage: `url(${post['_embedded']['wp:featuredmedia'][0]['source_url']})`}}>
</Container>
<Container className="wbg-gr social" fluid>
<Row>
<Col className="d-flex flex-column justify-content-center align-items-end text-white fs-5">
Liked the post? Share this on your social media</Col>
<Col>
<TwitterShareButton className="p-2"
url={post['link']}
title={post['title']['rendered']}
caption={post['title']['rendered']}
>
<TwitterIcon 
size={55} 
round={true}
iconFillColor='black'
className="icon-back"

/>
</TwitterShareButton>

<LinkedinShareButton className="p-2"
url={post['link']}
title={post['title']['rendered']}
summary={post['excerpt']['rendered']}
source={post['slug']}
>
<LinkedinIcon 
size={55} 
round={true} 
iconFillColor='black'
className="icon-back"
/>
</LinkedinShareButton>
<WhatsappShareButton className="p-2"
url={post['link']}
title={post['title']['rendered']}
>
<WhatsappIcon 
size={55} 
round={true} 
iconFillColor='black'
className="icon-back"
/>
</WhatsappShareButton>
<EmailShareButton
subject={post['title']['rendered']}
body=""
className="p-2"
>
<EmailIcon 
size={55} 
round={true} 
iconFillColor='black'
className="icon-back"
/>
</EmailShareButton>



</Col>  
</Row>  
</Container>
<Container className="mt-5">
<Row>
<Col sm={7}>
<div dangerouslySetInnerHTML={{__html:post['content']['rendered']}} className="fs-5"/>
</Col>  
<Col>


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
    const res = await fetch(`${configData.SERVER_URL}podcasts?_embed&slug=${id}`);
    const data = await res.json();
    return {props:{data}}
    
    
    
}