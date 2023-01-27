import {Container,Row, Col,Button} from 'react-bootstrap';
import Image from 'next/image';

function LinksExample() {
  return (

<Container className="f_content text-center p-3 mt-4">
<p className="fs-3">Why Our Customers Count On Us</p>

<Container className="counts">
<Row>
<Col className="b-box" sm={3}>
<h3 className="fs-1">4X
</h3>
<p className="fs-5 ">Increase in Deposit Growth</p>
<hr/>
<h3 className="fs-1">0</h3>
<p className="fs-5">Compliance Violations</p>
</Col>
<Col sm={1} className="line"><hr className="l-border"/></Col>
<Col className="b-box" sm={4}>
<h3 className="fs-1">3X
</h3>
<p className="fs-5 h">Increase in Customer<br/>Base</p>
<hr/>
<h3 className="fs-3">Months to Days</h3>
<p className="fs-5 ">Launch New Pricing, Products & Offers</p>
</Col>
<Col sm={1} className="line"><hr className="l-border"/></Col>
<Col className="b-box" sm={3}>
<h3 className="fs-1">2X
</h3>
<p className="fs-5 ">Increase in Product to Customer Ratio</p>
<hr/>
<h3 className="fs-1">60M+</h3>
<p className="fs-5">Reduction in Revenue Leakage</p>
</Col>
</Row>

</Container>
<Button className="mt-5 b-btn fs-5">Explore how we can help you</Button>


</Container>

  );
}

export default LinksExample;