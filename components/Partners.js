import {Container,Row, Col} from 'react-bootstrap';
import Image from 'next/image';

function LinksExample() {
  return (

<Container className="f_content text-center p-3 mt-4">
<p className="fs-3">Partners</p>

<Container>
<Row>
<Col className="system">
<div className="system-inner">
<h2 className="fs-2">Systems Integrators</h2>
<p className="fs-5">SunTec works very closely with systems integrators who provide value added services to our customers. Our systems integrators have certified resources who design custom solutions based on the award winning SunTec Xelerate platform and help deploy and manage the same for our customers.</p>
<p>Learn more</p>
</div>
</Col>

<Col className="partner">
<div className="partner-inner">
<h2 className="fs-2">Consulting Partners</h2>
<p className="fs-5">SunTec has deep relationships with consulting partners to enable our customers shape future strategy towards disruption and competitive advantage. Our consulting partners, with their deep understanding of SunTec Xelerate, are able to effectively help customers navigate towards exponential revenue growth by leveraging the SunTec Xelerate platform.</p>
<p>Learn more</p>
</div>
</Col>
<Col className="cloud">
<div className="cloud-inner">
<h2 className="fs-2">ISV & Cloud Partners</h2>
<p className="fs-5">SunTec has a large ecosystem of ISV & cloud partners who add business and technology functionality to SunTec Xelerate. These partners bring tremendous complementary value to our customers who are using or are actively considering SunTec Xelerate for their billing and revenue solutions.</p>
<p>Learn more</p>
</div>    
</Col>
</Row>


</Container>


</Container>

  );
}

export default LinksExample;