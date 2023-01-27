import {Container,Row, Col,Card ,Image} from 'react-bootstrap';
import { useEffect, useState } from "react";
import Link from 'next/link';
import configData from "../config.json";

import Header from '../components/Header';
import Banner from '../components/Home-Banner';
import Text from '../components/Home-Text';
import Feature from '../components/Feature-Content';
import Fposts from '../components/Feature-Posts';
import Clogos from '../components/ClientsLogo';
import Banking from '../components/Banking-Opportunities';
import Counts from '../components/Customers-Count';
import Life from '../components/Life-Suntec';
import Testimonials from '../components/Testimonails';
import Solutions from '../components/Industry-Solutions';
import Partners from '../components/Partners';
import Footer from '../components/Footer';


const HomePage = () => {
  const [pr, setPressRelease] = useState([]);
  const [blogFirst, setBlogFirst] = useState([]);
  const [blogSecond, setBlogSecond] = useState([]);
  const [blogThird, setBlogThird] = useState([]);
  const [blogFourth, setBlogFourth] = useState([]);
  const [blogFifth, setBlogFifth] = useState([]);
  const [blogSixth, setBlogSixth] = useState([]);

  const fetchPressRelease = async () => {
    let url = "";
    url = `${configData.SERVER_URL}press_release?_embed&status=publish&homepage=312`;
    try {
      const response = await fetch(url);
      const data = await response.json();
     // console.log(data);
      setPressRelease(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBlogFirst = async () => {
    let url = "";
    url = `${configData.SERVER_URL}all-posts?tag=313`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      setBlogFirst(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchBlogSecond = async () => {
    let url = "";
    url = `${configData.SERVER_URL}all-posts?tag=314`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      setBlogSecond(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchBlogThird = async () => {
    let url = "";
    url = `${configData.SERVER_URL}all-posts?tag=315`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      setBlogThird(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBlogFourth = async () => {
    let url = "";
    url = `${configData.SERVER_URL}all-posts?tag=316`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      setBlogFourth(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchBlogFifth = async () => {
    let url = "";
    url = `${configData.SERVER_URL}all-posts?tag=317`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      setBlogFifth(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBlogSixth = async () => {
    let url = "";
    url = `${configData.SERVER_URL}all-posts?tag=318`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      //console.log(data);
      setBlogSixth(data);
    } catch (error) {
      console.log(error);
    }
  };


useEffect(() => {
    fetchPressRelease();
    fetchBlogFirst();
    fetchBlogSecond();
    fetchBlogThird();
    fetchBlogFourth();
    fetchBlogFifth();
    fetchBlogSixth();
  },[]);

  return (
    <>
  <Header/>
    <Banner/>
    <Text/>
    <Feature/>
    <Fposts/>
    <Clogos/>
    <Banking/>
    <Counts/>
    <Life/>
    <Testimonials/>
<Container className="mb-5">
<h2 className="mt-5">What&apos;s New at SunTec</h2>
<Row className="mb-5">
{
pr.map((post) => {
  // console.log(post);
  const Type =  post['type'];
  const Pslug =  post['slug'];
  let Links;
  if(Type =='page'){
    Links = Pslug;
  }
  else{
    Links = Type + '/'+ Pslug;
  }
return (
<Col sm={6} className="p-1" key={post['id']}>
<div className="news-out">
 <Row className="news-in">
<Col sm={5}>
<img  src={post['_embedded']['wp:featuredmedia'][0]['source_url']} className="news-img"/>
</Col>
<Col className="middle fs-5" >
<Link href={Links}
className="pr-text text-decoration-none">{post['title']['rendered']}</Link>  
</Col>
</Row> 
</div>
</Col> 
  )


})}

</Row>
<Row className="center">
<Link href="/" className="b-btn text-white text-decoration-none mt-5 fs-5" style={{width:250+'px'}}>Get The Latest News</Link>
</Row>
</Container>
<Container>
<h2 className="text-center">Insights to Build a Customer-centric Business</h2>
<Container>
<Row>
<Col>
{

blogFirst.map((post) => {
  //console.log(post);

  const Type =  post['type'];
  const Pslug =  post['slug'];
  let Links;
  if(Type =='page'){
    Links = Pslug;
  }
  else{
    Links = Type + '/'+ Pslug;
  }
return (
<Row className="wbg-main p-2 mx-1" key={post['id']}>
<Col className="blog-padding middle">
<img  src={post['home_pr']} className="blog-img"/>
</Col>  
<Col className="blog-desc middle">
<Link 
href={Links}
className="pr-text text-decoration-none">
<h3 className="fs-5">{post['title']}</h3>
<p dangerouslySetInnerHTML={{__html:post['excerpt']}} className="fs-6"/>
</Link>
</Col> 
</Row>
  )
})}



</Col>
<Col>

{

blogSecond.map((post) => {
  //console.log(post);

  const Type =  post['type'];
  const Pslug =  post['slug'];
  let Links;
  if(Type =='page'){
    Links = Pslug;
  }
  else{
    Links = Type + '/'+ Pslug;
  }
return (
<Row className="wbg-gy p-2 mb-3" style={{height:14+'em'}} key={post['id']}> 
<Col className='blog-padding middle'>
<Link 
href={Links}
className="pr-text text-decoration-none">
<h3  className="fs-5">{post['title']}</h3>
<p dangerouslySetInnerHTML={{__html:post['excerpt']}} className="fs-6"/>
</Link>  
</Col>
<Col sm={5} className="middle">
<img  src={post['featured_img_src']} className="blog-img"/>
</Col>   
</Row>

  )


})}

{

blogThird.map((post) => {
  //console.log(post);

  const Type =  post['type'];
  const Pslug =  post['slug'];
  let Links;
  if(Type =='page'){
    Links = Pslug;
  }
  else{
    Links = Type + '/'+ Pslug;
  }
return (
<Row className="wbg-top p-2 mb-4" style={{height:14+'em'}} key={post['id']}>
<Col sm={5} className="blog-padding middle">
<img  src={post['featured_img_src']} className="blog-img"/>
</Col>  
<Col className="middle">
<Link 
href={Links}
className="pr-text text-decoration-none">
<h3 className="fs-5">{post['title']}</h3>
<p dangerouslySetInnerHTML={{__html:post['excerpt']}} className="fs-6"/>
</Link>
</Col>  
</Row>

  )


})}
</Col>
</Row>
{/* second line start here  */}
<Row>
<Col>
{

blogFourth.map((post) => {
  //console.log(post);

  const Type =  post['type'];
  const Pslug =  post['slug'];
  //const Links = Type + '/'+ Pslug;
  let Links;
  if(Type =='page'){
    Links = Pslug;
  }
  else{
    Links = Type + '/'+ Pslug;
  }

return (
<Row className="wbg-main p-2 mx-1" key={post['id']}>
<Col className="blog-padding middle">
<img  src={post['home_pr']} className="blog-img"/>
</Col>  
<Col className="blog-desc middle">
<Link 
href={Links}
className="pr-text text-decoration-none">
<h3 className="fs-5">{post['title']}</h3>
<p dangerouslySetInnerHTML={{__html:post['excerpt']}} className="fs-6"/>
</Link>
</Col>    
</Row>
  )
})}



</Col>
<Col>

{

blogFifth.map((post) => {
  //console.log(post);
  const Type =  post['type'];
  const Pslug =  post['slug'];
  const Links = Type + '/'+ Pslug;
return (
<Row className="wbg-gy p-2 mb-3" style={{height:14+'em'}} key={post['id']}> 
<Col className='blog-padding middle'>
<Link 
href={Links}
className="pr-text text-decoration-none">
<h3  className="fs-5">{post['title']}</h3>
<p dangerouslySetInnerHTML={{__html:post['excerpt']}} className="fs-6"/>
</Link>
</Col>
<Col sm={5} className="middle">
<img  src={post['featured_img_src']} className="blog-img"/>
</Col>   
</Row>

  )


})}

{

blogSixth.map((post) => {
  //console.log(post);
  const Type =  post['type'];
  const Pslug =  post['slug'];
  const Links = Type + '/'+ Pslug;
return (
<Row className="wbg-top p-2 mb-4" style={{height:14+'em'}} key={post['id']}>
<Col sm={5} className="blog-padding middle">
<img  src={post['featured_img_src']} className="blog-img"/>
</Col>  
<Col className="middle">
<Link 
href={Links}
className="pr-text text-decoration-none">
<h3 className="fs-5">{post['title']}</h3>
<p dangerouslySetInnerHTML={{__html:post['excerpt']}} className="fs-6"/>
</Link>
</Col>  
</Row>

  )


})}
</Col>
</Row>



</Container>
</Container>




    <Solutions/>
    <Partners/>
    <Footer/>    
    </>
  )
}

export default HomePage



