import {Container,Row, Col ,Button} from 'react-bootstrap';
function LinksExample() {
  return (

<Container className="f_content text-center p-3 mt-4">
<p className="fs-3">Feature Content</p>
<Container>
<Row>
<Col className="section-first" sm={4}>
<div className="show-latam">  
<p className="m-heading">What’s life at SunTec like?</p>
<p className="s-heading">Join the Team that Drives Banking Transformation</p>
<div class="slide-body">
<p className="s-text">More than 80% of India’s population holds bank accounts. This presents a significant market for banks to establish and deepen relationships with innovative pricing models.</p>
<ul className="s-text">
  <li>In a price sensitive market product-centric pricing is increasingly proving to be inefficient. Smart, contextualized, and innovative pricing for a segment-of-one is the future. </li>
  <li>Develop data-driven pricing strategies to communicate greater value and engagement. </li>
  </ul>
</div>
<Button className="slide-btn">Unlock price-led innovation</Button>
</div>   
</Col>
<Col className="section-first" sm={4}>
<div className="show-latam">  
<p className="m-heading">SunTec Ecosystem Management and Monetization:</p>
<p className="s-heading">Explore the Emerging Open Banking Economy</p>
<div class="slide-body">
<p className="s-text">
Transform from being a utility provider to a value aggregator and rethink your value proposition powered by collaboration with partner ecosystems.</p>
<ul className="s-text">
<li>Co-create solutions with partner ecosystems and gain real-time insights on revenue across your ecosystem.</li>
<li>Enable comprehensive partner management in the API economy. </li>
</ul>  

</div>
<Button className="slide-btn">Capitalize your ecosystem</Button>
</div>   
</Col>
<Col className="section-first" sm={4}>
<div className="show-latam">  
<p className="m-heading">What’s life at SunTec like?</p>
<p className="s-heading">Join the Team that Drives Banking Transformation</p>
<div class="slide-body">
<p className="s-text">Be a part of a global community of passionate professionals and become a key contributor towards driving global banking transformation.</p>
<ul className="s-text">
  <li>Own what you do, do what you love, and love what you will do.</li>
  <li>Experience an open collaborative work environment that pushes you to do your best. </li>
  </ul>
</div>
<Button className="slide-btn">Explore opportunities</Button>
</div>   
</Col>
</Row>

</Container>

</Container>

  );
}

export default LinksExample;