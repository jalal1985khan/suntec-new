import {Container,Row, Col,Image,Breadcrumb,Card, Button, Offcanvas} from 'react-bootstrap';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const sitemap = () => {
  return (
    <>
<Header/>
<Container fluid className="mt-5">
<h1 className="mt-5">Explore</h1>
<Container className="wbg-gy p-5">
<h1 className="text-center mb-5">Products</h1>
<Row>
<Col>
<ul className="list-sitemap ">
<li><Link href="/enterprise-product-management/">Enterprise Product Management</Link></li>
<li><Link href="/dynamic-offer-management/">Dynamic Offer Management</Link></li>
<li><Link href="/deal-management">Deal Management</Link></li>
<li><Link href="/relationship-based-pricing-management/">Relationship-based Pricing Management</Link></li>
</ul>
</Col>
<Col>
<ul className="list-sitemap ">
<li><Link href="/benefits-and-loyalty-management/">Benefits and Loyalty Management</Link></li>
<li><Link href="/ecosystem-management-and-monetization/">Ecosystem Management and Monetization</Link></li>
<li><Link href="/enterprise-billing-and-statements-management/">Enterprise Billing and Statements Management</Link></li>
<li><Link href="/enterprise-indirect-taxation-management/">Enterprise Indirect Taxation Management</Link></li>
</ul>
</Col>
</Row>
</Container>

<Container className=" p-5">
<h1 className="text-center mb-5">Industries</h1>
<Row>
<Col>
<ul className="list-sitemap ">
<li><Link href="/financial-services/">Financial Services</Link></li>
<li><Link href="/telecom/">Telecom</Link></li>
</ul>
</Col>
<Col>
<ul className="list-sitemap ">
<li><Link href="/travel/">Travel</Link></li>
<li><Link href="/suntec-industries-insurance/">Insurance</Link></li>
</ul>
</Col>
</Row>
</Container>
<Container className="wbg-gy p-5">
<h1 className="text-center mb-5">Solutions</h1>
<Row>
<Col>
<ul className="list-sitemap ">
<li><Link href="/personalization/">Personalization</Link></li>
<li><Link href="/product-rationalization/">Product Rationalization</Link></li>
<li><Link href="/suntec-vat/">VAT for GCC</Link></li>
<li><Link href="/suntec-negative-interest-management/">Negative Interest Management</Link></li>
</ul>
</Col>
<Col>
<ul className="list-sitemap ">
<li><Link href="/invoicing-solution-for-swedish-banks/">Invoicing Solution for Swedish Banks</Link></li>
<li><Link href="/suntec-e-invoicing/">e-Invoicing Solution for KSA</Link></li>
</ul>
</Col>
</Row>
</Container>
<Container className=" p-5">
<h1 className="text-center mb-5">Platforms</h1>
<Row>
<Col>
<ul className="list-sitemap ">
<li><Link href="/suntec-xelerate/">Xelerate</Link></li>
</ul>
</Col>
<Col>
<ul className="list-sitemap ">
<li><Link href="/suntec-cloud/">Cloud</Link></li>
</ul>
</Col>
<Col>
<ul className="list-sitemap ">
<li><Link href="/suntec-saas/">SaaS</Link></li>
</ul>
</Col>
</Row>
</Container>
<Container className="wbg-gy p-5">
<h1 className="text-center mb-5">Insights</h1>
<Row>
<Col>
<ul className="list-sitemap ">
<li><Link href="/articles/">Articles</Link></li>
<li><Link href="/blogs/">Blogs</Link></li>
<li><Link href="/case-studies/">Case Studies</Link></li>
<li><Link href="/datasheets/">Datasheets</Link></li>
<li><Link href="/ebooks/">eBook</Link></li>
</ul>
</Col>
<Col>
<ul className="list-sitemap ">
<li><Link href="/podcasts/">Podcasts</Link></li>
<li><Link href="/point_of_view/">Point of View</Link></li>
<li><Link href="/reports/">Reports</Link></li>
<li><Link href="/whitepapers/">Whitepapers</Link></li>
<li><Link href="/webinars/">Webinars</Link></li>
</ul>
</Col>
</Row>
</Container>
<Container className=" p-5">
<h1 className="text-center mb-5">About</h1>
<Row>
<Col>
<ul className="list-sitemap ">
<li><Link href="/company/">Company</Link></li>
<li><Link href="/contact-us/">Contact Us</Link></li>
<li><Link href="/events/">Events</Link></li>
<li><Link href="/career/">Career</Link></li>
<li><Link href="/blogs/suntecs-strategic-response-to-covid-19/">Covid Response</Link></li>
<li><Link href="/corporate-social-responsibility/">CSR</Link></li>
</ul>
</Col>
<Col>
<ul className="list-sitemap ">
<li><Link href="/hr-initiative/">Hr Initative</Link></li>
<li><Link href="/news-room/">Newsroom</Link></li>
<li><Link href="/partners/">Partners</Link></li>
<li><Link href="/notices/">Notices</Link></li>
<li><Link href="/sitemap/">Sitemap</Link></li>
<li><Link href="/privacypolicy/">Privacy Policy</Link></li>
</ul>
</Col>
</Row>
</Container>


    </Container>
    
    
    <Footer/>
    </>
  )
}

export default sitemap