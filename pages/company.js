import {Container,Row, Col,Image,Breadcrumb,Card, Button, Offcanvas} from 'react-bootstrap';
import Link from 'next/link';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function LinksExample({ name, ...props }) {

  const [user1, setUser1] = useState(false);
  const [user2, setUser2] = useState(false);
  const [user3, setUser3] = useState(false);
  const [user4, setUser4] = useState(false);
  const [user5, setUser5] = useState(false);
  const [user6, setUser6] = useState(false);
  const [user7, setUser7] = useState(false);
  const [user8, setUser8] = useState(false);

  const user1Close = () => setUser1(false);
  const user1Show = () => setUser1(true);

  const user2Close = () => setUser2(false);
  const user2Show = () => setUser2(true);

  const user3Close = () => setUser3(false);
  const user3Show = () => setUser3(true);

  const user4Close = () => setUser4(false);
  const user4Show = () => setUser4(true);

  const user5Close = () => setUser5(false);
  const user5Show = () => setUser5(true);

  const user6Close = () => setUser6(false);
  const user6Show = () => setUser6(true);

  const user7Close = () => setUser7(false);
  const user7Show = () => setUser7(true);

  const user8Close = () => setUser8(false);
  const user8Show = () => setUser8(true);

  return (
<>
<Header/>
<Container fluid className="breadcum">
<Breadcrumb >
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/company" active>
      Company
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/company_banner.jpeg")` 
    }}>

<Row>
<Col>
<div className="b-text">
<h1>About</h1>
<p>We are the world&apos;s No. 1 pricing and billing company that creates value for enterprises through its Cloud-based products. Our award-winning products and solutions enable organizations like yours to adopt a customer first strategy, exponentially increase revenue and customer base, and deliver exceptional customer experience.</p>
</div>
</Col> 
<Col>

</Col> 
</Row>
</Container>
<Container className="mt-5">
<Row>
<Col className="right">
<img src="/images/suntec_30_year.png" style={{height: 20+'em'}}/>
</Col>    
<Col className="f-end">
<span className="years">Years of</span>
<h3 className="years-i">Innovation</h3>
</Col>
<Col className="company-bg text-center p-5">
<p className="company-h">Our Vision</p>
<p className="company-i">At SunTec, Our vision is to enable every value exchange in the digitally driven world</p>
</Col>    
</Row>
</Container>
<Container className="mt-5">
<p className="fs-5">At SunTec, we help our clients increase the lifetime value of their customer relationships through effective revenue management and real-time customer experience orchestration with cloud-native, cloud-agnostic products. Our low-risk digital transformation approach enables clients to own the customer experience by enhancing their value-based engagement with end customers.</p>
<p className="fs-5">Established in 1990, SunTec is today the World&apos;s #1 Relationship-based Pricing and Billing company that enables organizations to be digitally empathetic and help future-proof their customer relationship with products built on its award-winning, cloud-native and micro-services based platform SunTec Xelerate. SunTec Xelerate platform and products help organizations own the customer experience by setting up a system-of-engagement with enhanced product management capabilities, enterprise pricing, revenue management, and partner ecosystem management.</p>
<p className="fs-5">With 130+ clients in 45+ countries, SunTec is a trusted partner of leading organizations across Banking, Financial Services, Insurance, Telecom, and Travel industries. Headquartered in India, SunTec has offices in Australia, Canada, Germany, Singapore, UAE, UK and USA to cater to the global customer base.</p>
</Container>
<Container className="mt-5">
<Row>
<Col className="middle"><p className="fs-2">Leadership Team</p></Col>
<Col className="company-l middle">
<p className="fs-5">Exceptional technology skills. In depth market understanding. Years of domain experience. And above all, high commitment. Meet the people driving the SunTec dream of enabling all value transactions in the world.</p>
</Col>
</Row>
</Container>
<Container className="mt-5">
<Row>
<Col>
<Card  className="d-flex flex-row">
<Card.Img className="company-img" src="/images/nanda_kumar.png" />
      <Card.Body className="f-end">
        <Card.Title>Nanda Kumar</Card.Title>
        <Card.Text>
        Founder & CEO
        </Card.Text>
        <Button variant="primary" onClick={user1Show} className="me-2 company-btn">
        Read more
      </Button>
      </Card.Body>
    </Card>
    <Offcanvas show={user1} onHide={user1Close} {...props} className="profile">
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Nanda Kumar</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Card className="border-0">
      <Card.Img variant="top" src="/images/nanda_kumar.png" className="pro-img"/>
      <Card.Body>
        <Card.Title>Nanda Kumar</Card.Title>
        <Card.Text>
        Founder & CEO
        </Card.Text>
      </Card.Body>
    </Card>
        A technology evangelist with over 30 years in the industry, Nanda Kumar (NK) has shaped the wave of customer-centric software platforms and solutions for pricing and billing, particularly in transaction-intensive verticals. He pioneered the concept of relationship-based pricing – an idea industry analysts and thought leaders now acknowledge as the key to balanced pricing dynamics. NK has made SunTec one of the global leaders in revenue management and business assurance space in the financial and telecom industries. Under the guidance of NK, SunTec has forayed into areas such as offer management, loyalty and relationship based pricing. Under his leadership, the company has won several awards and is considered as a leader in enterprise products. He has delivered numerous talks across global forums such as SIBOS, 3G Mobile Forum, Indian Banking Summit, Gartner Summits etc. He is also a widely read writer who has written for many technology oriented newsletters and blogs. NK holds a master’s degree in management and physics.
        </Offcanvas.Body>  
      </Offcanvas>
</Col>
<Col>
<Card  className="d-flex flex-row">
<Card.Img className="company-img" src="images/vijayaraghavan.png" />
      <Card.Body className="f-end">
        <Card.Title>G Vijayaraghavan</Card.Title>
        <Card.Text>
        Member – Board of Directors
        </Card.Text>
        <Button variant="primary" onClick={user2Show} className="me-2 company-btn">
        Read more
      </Button>
      </Card.Body>
    </Card>
    <Offcanvas show={user2} onHide={user2Close} {...props} className="profile">
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>G Vijayaraghavan</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Card className="border-0">
      <Card.Img variant="top" src="images/vijayaraghavan.png" className="pro-img"/>
      <Card.Body>
        <Card.Title>G Vijayaraghavan</Card.Title>
        <Card.Text>
        Member – Board of Directors
        </Card.Text>
      </Card.Body>
    </Card>
    GVR, as he is fondly known, provides strategic inputs to guide our company. With more than 30 years of experience in organisational strategy and management consulting, he has contributed immensely to SunTec’s growth. A pioneering technocrat, GVR has played a decisive role in the evolution of the IT and software industry in India. He is the founder and former CEO of India’s first software technology hub (Technopark) and was the former President of International Association of Science Parks (Asia Pacific). A visionary, he was also a member of the Kerala State Planning Board and the Kerala State Council of Science Technology and Environment.
        </Offcanvas.Body>  
      </Offcanvas>
</Col>  
</Row>

<Row className="mt-4">
<Col>
<Card  className="d-flex flex-row">
<Card.Img className="company-img" src="images/amit.png" />
      <Card.Body className="f-end">
        <Card.Title>Amit Dua</Card.Title>
        <Card.Text>
        President, SunTec Business Solutions
        </Card.Text>
        <Button variant="primary" onClick={user3Show} className="me-2 company-btn">
        Read more
      </Button>
      </Card.Body>
    </Card>
    <Offcanvas show={user3} onHide={user3Close} {...props} className="profile">
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Amit Dua</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Card className="border-0">
      <Card.Img variant="top" src="images/amit.png" className="pro-img"/>
      <Card.Body>
        <Card.Title>Amit Dua</Card.Title>
        <Card.Text>
        President, SunTec Business Solutions
        </Card.Text>
      </Card.Body>
    </Card>
    Amit Dua is President, SunTec Business Solutions. Based in London, he leads Sales, Business Development, Client Engagement, Alliances, and Industry Solutions functions for SunTec globally. Prior to joining SunTec, he served as Vice President & Regional Head for Europe, Americas and Australia, New Zealand as well as Head of Global Alliances for the banking product business of Infosys Limited, a $12 BN global firm. He also served as the Executive Sponsor of the Finacle Client Advisory Board, and has a proven track record of building businesses, providing executive level sponsorships to clients, and helping banks go through business and technology transformations. Over last 26+ years, Amit has handled all the markets in advanced and emerging economies – Europe, Americas including LATAM, Asia, Australia, New Zealand, Middle East and Africa interacting with global and local banks alike. He is a keen business strategist and regularly comments on a range of banking and technology related issues. He has authored several articles and speaks regularly on contemporary topics like trends in banking technology, customer experience management, digital banking, channels, and core banking transformations, to name a few. Amit has a bachelor&apos;s degree in Electronics Engineering and an MBA in Marketing.
        </Offcanvas.Body>  
      </Offcanvas>
</Col>
<Col>
<Card  className="d-flex flex-row">
<Card.Img className="company-img" src="images/satish.png" />
      <Card.Body className="f-end">
        <Card.Title>Sathish Chandran R</Card.Title>
        <Card.Text>
        President and Global Head – Demand Fulfillment Group
        </Card.Text>
        <Button variant="primary" onClick={user4Show} className="me-2 company-btn">
        Read more
      </Button>
      </Card.Body>
    </Card>
    <Offcanvas show={user4} onHide={user4Close} {...props} className="profile">
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Sathish Chandran R</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Card className="border-0">
      <Card.Img variant="top" src="images/satish.png" className="pro-img"/>
      <Card.Body>
        <Card.Title>Sathish Chandran R</Card.Title>
        <Card.Text>
        President and Global Head – Demand Fulfillment Group
        </Card.Text>
      </Card.Body>
    </Card>
    Sathish heads Demand Fulfilment Group consisting of Product Engineering, Delivery, Support, Product & Delivery Assurance and CoE teams. He manages client delight by ensuring that client commitments are always met, while maintaining the highest levels of service. With more than 25 years of experience in the software industry and nearly 15 in revenue management and customer experience, he ensures delivery of our solutions with the highest quality, in the shortest time possible. He manages a proactive support organization which is aligned with our clients’ needs. Sathish holds a bachelor’s degree in engineering from the University of Kerala.
        </Offcanvas.Body>  
      </Offcanvas>
</Col>  
</Row>

<Row className="mt-4">
<Col>
<Card  className="d-flex flex-row">
<Card.Img className="company-img" src="images/michael_yesudas.jpeg"/>
      <Card.Body className="f-end">
        <Card.Title>Michael Yesudas</Card.Title>
        <Card.Text>
        Chief Technology Officer
        </Card.Text>
        <Button variant="primary" onClick={user5Show} className="me-2 company-btn">
        Read more
      </Button>
      </Card.Body>
    </Card>
    <Offcanvas show={user5} onHide={user5Close} {...props} className="profile">
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Michael Yesudas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Card className="border-0">
      <Card.Img variant="top" src="images/michael_yesudas.jpeg" className="pro-img"/>
      <Card.Body>
        <Card.Title>Michael Yesudas</Card.Title>
        <Card.Text>
        Chief Technology Officer
        </Card.Text>
      </Card.Body>
    </Card>
    Michael [Mike] Yesudas is the Chief Technology Officer at SunTec and heads the technology and engineering functions, including platform engineering, product engineering, and release engineering. He has nearly three decades of experience in systems, software and AI solutions and has worked with Fortune 500 clients across verticals – telecom, retail, financial services, manufacturing, and software, to name a few. Prior to this, he has played several significant technology leadership roles across organizations, including IBM, Sterling Commerce, GE, and HP and has handled key projects across EMEA, APAC and America. In his previous role in IBM, he was an IBM Distinguished Engineer and the CTO of IBM Sterling and AI Applications Expert Labs. He completed his BTech at IIT Kharagpur and has an MS in Engineering from the University of Houston and MS in Computer Science from Monash University. He has several U.S. and international patents and has been a CISSP Certified Security Expert for 15 years.
        </Offcanvas.Body>  
      </Offcanvas>
</Col>
<Col>
<Card  className="d-flex flex-row">
<Card.Img className="company-img" src="/images/suresh_rao.png" />
      <Card.Body className="f-end">
        <Card.Title>Suresh Rao</Card.Title>
        <Card.Text>
        Chief Finance Officer
        </Card.Text>
        <Button variant="primary" onClick={user6Show} className="me-2 company-btn">
        Read more
      </Button>
      </Card.Body>
    </Card>
    <Offcanvas show={user6} onHide={user6Close} {...props} className="profile">
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Suresh Rao</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Card className="border-0">
      <Card.Img variant="top" src="/images/suresh_rao.png"  className="pro-img"/>
      <Card.Body>
        <Card.Title>Suresh Rao</Card.Title>
        <Card.Text>
        Chief Finance Officer
        </Card.Text>
      </Card.Body>
    </Card>
        Suresh Rao is Chief Financial Officer and leads Finance, Legal & Commercial, Secretarial, and Corporate Services teams at SunTec Business Solutions. With over 30 years of experience in strategic planning and developing financial strategy for large scale enterprises, handling mergers and acquisitions, fund sourcing, MIS, managing forex and allied finance and accounting functions, he ensures our operations are smooth and compliant. He has an innate ability to foresee challenges well ahead of time as he keenly observes operating trends and lead indicators with interest. He observes Global Economic trends as well. Given how diverse Finance, Legal and Corporate Services can be with each function being independent by itself, yet many times in conflict with each other, it requires expert subject and people management skills that Suresh has acquired over the years and demonstrates in his day to day role at SunTec. Suresh began his career in finance in petrochemical and fertilizer plants, and he went on to work across industries such as packaging, pharmaceuticals, auto ancillaries, electronics and software product and service segments. Prior to SunTec, he held several key roles, such as Global CFO & Head of India Operations at Mindteck India Ltd., and Vice President (Finance) at Subex Ltd. Suresh is a Chartered Accountant, an Intermediate Cost Accountant and has a bachelor’s degree in commerce. He is also qualified as an Independent Director and a member of Independent Directors Data Bank of the Ministry of Corporate Affairs, Government of India. He holds Nominee Directorship position in all investee ventures of SunTec Business Solutions. Suresh speaks regularly at events including CII, Trivandrum Management Association and ICSI Trivandrum chapter. His professional interests lie in taxation, enterprise valuation, mergers & acquisition, process re-engineering and automation, insurance, forex risk management and MIS design and implementation. Apart from his professional interests, Suresh enjoys playing lawn tennis and occasionally participates in endurance runs and cycling. He is a sports and fitness enthusiast and takes keen interest in yoga and meditation. He loves music, both film music and Carnatic, and also enjoys photography and cooking.
        </Offcanvas.Body>  
      </Offcanvas>
</Col>  
</Row>
<Row className="mt-4">
<Col>
<Card  className="d-flex flex-row">
<Card.Img className="company-img" src="/images/pramod.jpeg" />
      <Card.Body className="f-end">
        <Card.Title>Pramod Perumparambil</Card.Title>
        <Card.Text>
        Chief Strategy and Transformation Officer
        </Card.Text>
        <Button variant="primary" onClick={user7Show} className="me-2 company-btn">
        Read more
      </Button>
      </Card.Body>
    </Card>
    <Offcanvas show={user7} onHide={user7Close} {...props} className="profile">
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Pramod Perumparambil</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Card className="border-0">
      <Card.Img variant="top" src="/images/pramod.jpeg" className="pro-img"/>
      <Card.Body>
        <Card.Title>Pramod Perumparambil</Card.Title>
        <Card.Text>
        Chief Strategy and Transformation Officer
        </Card.Text>
      </Card.Body>
    </Card>
    Pramod Perumparambil is the Chief Strategy and Transformation Officer (CSTO) at SunTec. He is responsible for driving company-wide strategy to deliver business growth and long-term value to clients. He facilitates collaboration between key stakeholders to devise effective strategies and ensures business and talent alignment with the company vision.
        </Offcanvas.Body>  
      </Offcanvas>
</Col>
<Col>
<Card  className="d-flex flex-row">
      <Card.Img className="company-img" src="images/peter_yorke.jpeg"/>
      <Card.Body className="f-end">
        <Card.Title>Peter Yorke</Card.Title>
        <Card.Text>
        Senior Vice President – Marketing
        </Card.Text>
        <Button variant="primary" onClick={user8Show} className="me-2 company-btn">
        Read more
      </Button>
      </Card.Body>
    </Card>
    <Offcanvas show={user8} onHide={user8Close} {...props} className="profile">
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Peter Yorke</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Card className="border-0">
      <Card.Img variant="top" src="images/peter_yorke.jpeg" className="pro-img"/>
      <Card.Body>
        <Card.Title>Peter Yorke</Card.Title>
        <Card.Text>
        Senior Vice President – Marketing
        </Card.Text>
      </Card.Body>
    </Card>
    Peter Yorke is Senior Vice President and Head of Marketing at SunTec. A seasoned marketing professional, he brings strategic marketing and internal communications competencies to SunTec.He handles SunTec’s global branding and marketing initiatives to strengthen the company presence across the world. He has over 30 years of experience in branding, corporate communications, marketing, high-tech public relations, content marketing, training, and strategic communication. He was earlier the Founder and CEO of Yorke Communications Pvt. Ltd., a content marketing firm that created marketing programs for brands. He has also served as the Vice President of Marketing and Communications at Oracle Financial Services Software [formerly i-flex solutions]. He earlier had stints in Tata Consultancy Services [TCS] and Wipro Systems in the editorial and communication function. He has done his Bachelor of Arts in Economics from the University of Bombay and a Diploma in Journalism from the Bombay College of Journalism. He is a member of the International Association of Business Communicators (IABC).x
        </Offcanvas.Body>  
      </Offcanvas>
</Col>  
</Row>


<Row className="mt-4">
<Col sm={3}></Col>
<Col>
<Card  className="d-flex flex-row">
<Card.Img className="company-img" src="/images/prakash.png" />
      <Card.Body className="f-end">
        <Card.Title>Prakash P Nair</Card.Title>
        <Card.Text>
        VP & Global Head - Talent Function
        </Card.Text>
        <Button variant="primary" onClick={user8Show} className="me-2 company-btn">
        Read more
      </Button>
      </Card.Body>
    </Card>
    <Offcanvas show={user8} onHide={user8Close} {...props} className="profile">
        <Offcanvas.Header closeButton>
        <Offcanvas.Title>Prakash P Nair</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Card className="border-0">
      <Card.Img variant="top" src="/images/prakash.png" className="pro-img"/>
      <Card.Body>
        <Card.Title>Prakash P Nair</Card.Title>
        <Card.Text>
        VP & Global Head - Talent Function
        </Card.Text>
      </Card.Body>
    </Card>
    Prakash heads the people function at SunTec Business Solutions. Human Capital is SunTec&apros;s biggest asset. Prakash manages our talent needs, ensuring employee engagement and competency development across the organization, thus enabling our people strategies to support our overall goals. Prakash has been with SunTec for over 19 years and has previously headed our Programme Management Office (PMO). Prior to heading PMO, he was heading the Delivery and Account Management function for the APAC region. He has handled the Centre of Excellence as well, where he was responsible for over 400 members – from a people and competency aspect. Prakash has published a few people and competency related articles on topics such as Selflessness for Success, Self-Custodianship – for Lasting Relevance, Owning a Learning Culture: Designing Communities of Excellence, Making the Best, the Right Crux of Agile Talent Management, Elevate Your Thinking Level to Elevate Your Reach, and Good is Simply Not Good Enough Anymore, to name a few. His professional interest primarily lies in talent management and ways to enhance talent to exponentially contribute to the growth of the organization and individuals. He holds an MBA from the Indian Institute of Management, Kozhikode, and has a master’s degree in computer application. Prakash uses his free time to try out his culinary skills, trying new recipes with his wife. He also enjoys reading books on Eastern Mythology.
        </Offcanvas.Body>  
      </Offcanvas>
</Col>
<Col sm={3}></Col>
</Row>



</Container>




<Footer/>
</>


  );
}

export default LinksExample;