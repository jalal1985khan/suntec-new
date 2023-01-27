import {Container,Row, Col,Image,Breadcrumb,Card, Button, Offcanvas} from 'react-bootstrap';
import Link from 'next/link';
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function LinksExample() {

  

  return (
<>
<Header/>
<Container fluid className="breadcum">
<Breadcrumb >
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/company" active>
      CSR at SunTec
      </Breadcrumb.Item>
    </Breadcrumb>
</Container>
<Container className="p-3 b-banner" fluid style={{ 
      backgroundImage: `url("/images/csr_banner.jpeg")` 
    }}>

<Row>
<Col>
<div className="square">
<div class="lin"></div>
<div className="square-text ">
<h1 className="fs-1">CSR at SunTec</h1>
<p className="fs-5">At SunTec, we believe in actively contributing back to the society for effective social change. In line with this belief, we formed Sneha, our CSR program that aims to help our society in two critical areas – Education and Health.</p>
<Button  className="b-btn">CSR Policy</Button>
</div>
<div class="lin"></div>
</div>
</Col> 
<Col>
</Col> 
</Row>
</Container>
<Container className="mt-5">
<Row>
<Col className="border text-center">
<img src="/images/csr_1.png" style={{height:5 + 'em'}}/>
<h4 className="fs-3">IDENTIFYING PROJECTS</h4>
<p className="fs-5">We identify projects based on the impact potential. There are teams that work in tandem with the top management team to identify deserving projects.</p>
</Col>    
<Col className="border text-center">
<img src="/images/csr_2.png" style={{height:5 + 'em'}}/>
<h4 className="fs-3">EXECUTION</h4>
<p className="fs-5">Once the projects are identified it is executed by teams led by leaders who take charge of the entire activity and ensure that the activity is conducted with maximum effectiveness.</p>
</Col>  
<Col className="border text-center">
<img src="/images/csr_3.png" style={{height:5 + 'em'}}/>
<h4 className="fs-3">MEASURING SOCIAL IMPACT</h4>
<p className="fs-5">We talk to beneficiaries of social projects and quantify the impact created.</p>
</Col>  
</Row>
</Container>
<Container className="mt-5">
<Row>
<Col sm={5}><img src="/images/agasthya_balasram.svg" className="csr-img"/></Col>
<Col sm={7}>
<h3>September 2022 Initiative: Onam Celebration at Agasthya Balasram, Kattakada</h3>
<p className="fs-5">This Onam, our CSR team was at Agastya Balasram, a support home that houses boys who have lost their parents, are supported by single parents, or belong to the tribal colony in the Agastya Hills. The children are supported here till the age of 18 and are also provided with the necessary education.</p>
<p className="fs-5">We conducted fun games to brighten up their Onam, distributed T-shirts and bedsheets, and arranged an Onasadhya, a mix of traditional sweet and savory dishes for the children.</p>
<p className="fs-5">A shoutout to all our volunteers for making this happen – Vishnu V S, Divya V S, Prakash P Nair, Abhilash P S, Jyothi Jayan, Noorul Ahsan, Divya K, Nahas Babu P, Princy P, and Tejas S M.</p>
</Col>    
</Row>


<Row className="mt-5">
<Col sm={5}><img src="/images/SNEHA_Initiative.svg" className="csr-img"/></Col>
<Col sm={7}>
<h3>SNEHA Initiative July 2022: School Kit Distribution to the Children of Our Support Staff</h3>
<p className="fs-5">Offering a better learning environment is one of the pillars of our CSR program. Every year, we distribute school kits to the children of our support staff. This year, our Founder & CEO, Nanda Kumar, and G Vijayaraghavan, Member – Board of Directors at SunTec, distributed the kits. Each school kit comprises notebooks, stationery, pencil box, and vouchers worth Rs 1000.</p>
<p className="fs-5">The kits were distributed across our SunTec offices to over 50 children.</p>
<p className="fs-5">We’d like to acknowledge team SNEHA for all their efforts in making this happen.  </p>
</Col>    
</Row>


<Row className="mt-5">
<Col sm={5}><img src="/images/valiyathura.svg" className="csr-img"/></Col>
<Col sm={7}>
<h3>School Kit Distribution to Valiyathura LP & UP School on 27 June 2022</h3>
<p className="fs-5">As schools restart their academic year, team SNEHA recently distributed 104 school kits to all the students at the Valiyathura LP & UP School. Our CSR programs and our long-standing relationship with the school has helped them raise the number of annual admissions.</p>
<p className="fs-5">This CSR initiative was led by Vishnu VS – Talent Acquisition and executed successfully with full support from CSR volunteers – Shibu R K – Knowledge Management and Talent Development, Divya V S – Revenue Management Product, Aswathy SG – HR, Aswathy A S – Foundation pool, Athira Rajan – Foundation pool and Robin – Foundation pool.</p>

</Col>    
</Row>

<Row className="mt-5">
<Col sm={5}><img src="/images/sneha.jpeg" className="csr-img"/></Col>
<Col sm={7}>
<h3>Christmas Celebrations at LPS and UPS Valiathura Schools, Trivandrum on 23 December 2021</h3>
<p className="fs-5">A famous Spanish proverb says – “A joy shared is a joy doubled.”
On the 23rd of December, the CSR team at SunTec gathered and decided to spread the joy of Christmas for eighty-five children in the Valiathura LP and UP schools. It was a fun-filled day for us as well as the children as they engaged in fun activities with a festive spirit!</p>
<p className="fs-5">The school authorities and kids gave us a warm and wonderful welcome. The kids went swaying to our jingle-bells, ran wild for the candies tossed, and ran around during a fun session of musical chairs. An evening packed with the joy of Christmas, we also provided them with school bags with notebooks, umbrellas, pencil combos, pens, cakes, and masks, and a big basket of chocolates. Their parents were also present to witness this fun event.</p>
<p className="fs-5">The event was coordinated and executed successfully by the CSR volunteers – Divya V S, Rani V, Arun B, Vijayaraj D S, Vishnu V S, Sobha M S, Noorul A, Mohith H, and Shibu R K. The corporate services team helped with the procurement and logistics. The support staff helped in packing and moving all the goodies. The entire event was well monitored and guided by G Vijayaraghavan, Member – Board of Directors at SunTec.</p>
</Col>    
</Row>

<Row className="mt-5">
<Col sm={5}><img src="/images/schoolkit1.jpg" className="csr-img"/></Col>
<Col sm={7}>
<h3>SNEHA Initiative October 2021: Support Staff Project</h3>
<p className="fs-5">Support staff projects have been an integral part of our CSR efforts. We recently provided our support staff from across our offices in India with a school kit for their children. Children from LKG to PG, and other courses are supported as part of this initiative. Each kit consists of a bag, notebook, and other stationery items.  Additionally, due to the pandemic, each student was provided with a 1-ltr hand sanitizer bottle, and 25 N95 masks for their safety. A big kudos to the team that drove this project – Sunitha and Suni Stanes, and our volunteers Shibu RK, Aarika, Vidhya V Nair, Rajnikanth, Nagaraj, Aswathy Raj, Sujith, Manoj and Deepthy B.</p>
</Col>    
</Row>


<Row className="mt-5">
<Col sm={5}><img src="/images/sisu_vihar.jpeg" className="csr-img"/></Col>
<Col sm={7}>
<h3>SNEHA Initiative October 2021: Support to Sisu Vihar School, Vazhuthacaud</h3>
<p className="fs-5">Sisu Vihar, a school based in Vazhuthacaud (Kerala) required funds for a computer lab for their students. Our team reached out to the school management to understand their lab requirements and provided 14 laptops and 10 desktops to make computer education accessible to children. This initiative has helped over 290 students.</p>
</Col>    
</Row>

<Row className="mt-5">
<Col sm={5}><img src="/images/paliumIndia.jpeg" className="csr-img"/></Col>
<Col sm={7}>
<h3>SNEHA Initiative October 2021: Extended Support to 100 Children at Pallium India</h3>
<p className="fs-5">We extended our support to Pallium India, a national registered charitable trust, formed to provide quality palliative care for patients in India. The children of these affected families are hit financially and emotionally. Our team sponsored 100 children, helping the families who are burdened by their medical condition and unable to support their children.</p>
</Col>    
</Row>


<Row className="mt-5">
<Col sm={5}><img src="/images/women_at_Pothencode.jpeg" className="csr-img"/></Col>
<Col sm={7}>
<h3>SNEHA Initiative September 2021: A Visit to Karunalayam Old Age Home for Women at Pothencode, Trivandrum</h3>
<p className="fs-5">While the pandemic has impacted the world physically and mentally, the only way we can get through such trying times is through empathy, care and the mindset to help one another. The CSR team at SunTec visited, ‘Karunalayam: Old Age Home for Women’ at Potehncode in Trivandrum in early September, to contribute daily essentials for the residents. We believe that every little step counts. A shoutout to all our volunteers: Antoo NO, Suni Stanes, Rani Vinod, Rajeswary S, Vishnu V S, Sujith M, Sandeep and Monish.</p>
</Col>    
</Row>


<Row className="mt-5">
<Col sm={5}><img src="/images/gandhibhavan_international_trust.jpeg" className="csr-img"/></Col>
<Col sm={7}>
<h3>SNEHA Initiative January 2021: Visit to Gandhibhavan International Trust</h3>
<p className="fs-5">We commenced this new year with an initiative close to our hearts. Our team of SNEHA enthusiasts provided relief to Covid-19 struck Gandhibhavan, a destitute home to more than 1000 people including young children and senior citizens. We supplied 500 KG of rice, clothes, bedsheets, towels, cleaning supplies, fruit and celebratory cakes along with other essentials to support them during these difficult times. Our volunteers spent quality time with the inhabitants, celebrating the new year. The entire activity was conducted safely, ensuring social distancing and following safety practices such as using masks and sanitizers.</p>
</Col>    
</Row>


<Row className="mt-5">
<Col sm={5}><img src="/images/scholarship_for_kids.jpeg" className="csr-img"/></Col>
<Col sm={7}>
<h3>SNEHA Initiative 2020: School Kits and Smart Phone Distribution to Children of Support Staff</h3>
<p className="fs-5">During these tough times, SunTec SNEHA extended support and promoted continued education among the children of our support staff in Trivandrum and Kochi. Their immediate need was assessed and a smart phone was provided to the kids for online classes. We also gave stationery items along with an additional gift voucher for Rs 1000 per child for additional school supplies.</p>
</Col>    
</Row>


<Row className="mt-5">
<Col sm={5}><img src="/images/Xmas_CSR.jpeg" className="csr-img"/></Col>
<Col sm={7}>
<h3>Spreading Cheer – Christmas 2019 ​</h3>
<p className="fs-5">Last year, as part of our initiative to spread the Christmas cheer, we sent gifts to the children of Maruthumkuzhi Government School. Every child was given a pencil box, lunch box, water bottle, color pencils, coloring books, story books, a school bag, and a lunch bag. We also sent some toys and building blocks (to be used in classes). Our interaction with the kids culminated with some cake, chocolates and snacks. A similar outreach was done with Ashrayam, Alathara and Sreekariyam NGOs, where we distributed steel water bottles, lunch boxes and a cake among the children.</p>
</Col>    
</Row>


<Row className="mt-5">
<Col sm={5}><img src="/images/SNEHA-Initiative-2020.jpg" className="csr-img"/></Col>
<Col sm={7}>
<h3>Scholarship for Kids of Support Staff for their Academic Excellence​</h3>
<p className="fs-5">In 2019, for the fourth consecutive year we conducted our scholarship initiative, where children of our support staff are selected for a scholarship based on their academic achievement during the previous school year. These children are in the age group of 6 and 21. Every year we witness many children who have the grit to excel receiving this scholarship, thus paving a path to successful future.</p>
</Col>    
</Row>



<Row className="mt-5">
<Col sm={5}><img src="/images/SNEHA_sponsors.png" className="csr-img"/></Col>
<Col sm={7}>
<h3>SNEHA Sponsors 15 Bicycles to the Girls in Kuttanad</h3>
<p className="fs-5">In Kuttanad the roads are very narrow and uneven, and the possible means of transportation is two wheelers in most of the places. Because of the financial challenges, some of the families are unable to afford bicycles for their girl children going to schools and colleges. Knowing the situation in this place, SNEHA sponsored 15 bicycles to the girls in this area which had helped them in big way.</p>
</Col>    
</Row>


<Row className="mt-5">
<Col sm={5}><img src="/images/SNEHA_Participates.png" className="csr-img"/></Col>
<Col sm={7}>
<h3>SunTec SNEHA Participates in Blood Donation Drive</h3>
<p className="fs-5">SunTec SNEHA actively participates in blood donation drives. SunTec SNEHA was recognized for providing tremendous support towards the monthly blood donation drive as part of Project 365 conducted by Terumo penpol along with Tejus and All Kerala Blood Donors Society.</p>
</Col>    
</Row>



<Row className="mt-5">
<Col sm={5}><img src="/images/SNEHA_Hastam_Activity.png" className="csr-img"/></Col>
<Col sm={7}>
<h3>SunTec SNEHA Hastam Activity Supported Rebuilding Kerala</h3>
<p className="fs-5">The SunTec SNEHA Hastam activity supported rebuilding Kerala last year and it continues this year too. Last year we provided our support to flood relief camps at Wayanad, Pathanamthitta, Thiruvananthapuram and Ernakulum. We provided sleeping mats, cooking utensils, clothes, essentials and so forth. In addition to this we helped people in Kavalam Panchayat, Kerala in setting up water tanks and donated in the Chief Minister&pos;s Distress Relief Fund.</p>
</Col>    
</Row>



<Row className="mt-5">
<Col sm={5}><img src="/images/SNEHA_Distributes_School.png" className="csr-img"/></Col>
<Col sm={7}>
<h3>SunTec SNEHA Distributes School Kits to the Children of Our Support Staff</h3>
<p className="fs-5">In May 2019 SunTec SNEHA distributed school kits to the children of our support staff. This activity is conducted every year. The school kit included books, pens, pencils, erasers, geometry box and steel water bottle (1lt) along with a Rs.1000 gift voucher that was handed over to each child to assist them in buying other essential items.</p>
</Col>    
</Row>


<Row className="mt-5">
<Col sm={5}><img src="/images/SNEHA_visited.png" className="csr-img"/></Col>
<Col sm={7}>
<h3>SNEHA Visited “NAMASTE – Wings to Fly”</h3>
<p className="fs-5">During the week before Onam, few of us representing SNEHA visited “NAMASTE – Wings to Fly” (NAMASTE is a non-profitable, non-religious and non-political organization, started in 2000 as an alternative solution to orphanages, head quartered at Vellanad, Thiruvananthapuram) and spent an evening with the lovely kids and their care takers.</p>
</Col>    
</Row>



<Row className="mt-5">
<Col sm={5}><img src="/images/Ananda-Nilayam.png" className="csr-img"/></Col>
<Col sm={7}>
<h3>SNEHA Volunteers Visited Ananda Nilayam Orphanage & Widow&apos;s Home</h3>
<p className="fs-5">In September 2019, a team of SNEHA Volunteers visited Ananda Nilayam Orphanage & Widow&apos;s Home, Kuriyathi, Trivandrum, to celebrate Onam with the inmates.</p>
</Col>    
</Row>



<Row className="mt-5">
<Col sm={5}><img src="/images/DaanUtsav.jpeg" className="csr-img"/></Col>
<Col sm={7}>
<h3>Sustained Celebration of DaanUtsav</h3>
<p className="fs-5">Popularly known as the &apos;Festival of Giving&apos;, this annual event is celebrated by corporate India. SNEHA undertook a challenge during this annual event, to inspire each SunTec employee to contribute to the cause of eliminating hunger. We sponsored one-time grocery kits for over 500 families in Kerala. We also supported 54 other families with monthly grocery kits, for one year.</p>
</Col>    
</Row>



<Row className="mt-5">
<Col sm={5}><img src="/images/Promoting-Learning.jpeg" className="csr-img"/></Col>
<Col sm={7}>
<h3>Promoting Learning Among Children</h3>
<p className="fs-5">One of our key initiatives is to promote long-term education among the children of our support staff. To facilitate this, we provide financial support and mentorship to deserving students. Our support for education is not limited to this. We’ve helped Bharatiya Vidya Gramam, a school on the outskirts of Thiruvananthapuram, improve its infrastructure by providing financial assistance.</p>
</Col>    
</Row>


<Row className="mt-5">
<Col sm={5}><img src="/images/Sustainability-Initiatives.jpeg" className="csr-img"/></Col>
<Col sm={7}>
<h3>Supporting Sustainability Initiatives</h3>
<p className="fs-5">Going beyond the cause of education, SunTec&apos;s employees also believe in sustainability programs that make our planet smile. An example of that is Earth Hour. We encourage individuals to use electricity/ technology strategically, giving rise to an intentional usage plan. We undertake this practice annually, in the month of March.</p>
<p className="fs-5">SNEHA was drawn to launch the Go-Green Project in 2012, which supports the cause of a healthier, thriving environment. We’ve initiated a series of efforts, like introducing green, eco-friendly products, reduced printing where possible, energy conservation practices, as well as organizational energy audits.</p>
</Col>    
</Row>


<Row className="mt-5">
<Col sm={5}><img src="/images/Natural-Disasters.jpeg" className="csr-img"/></Col>
<Col sm={7}>
<h3>Relief Efforts for Victims of Natural Disasters</h3>
<p className="fs-5">In 2015, several parts of the city of Chennai were washed out due to unprecedented floods. SunTec, with its Chennai office employees leading the efforts, launched a range of relief and rehabilitation initiatives. Providing easy access to core amenities, we not only distributed healthy, hygienic food and water to multiple neighborhoods, but also set-up medical camps in schools, and distributed clothing/ blankets.</p>
</Col>    
</Row>


<Row className="mt-5">
<Col sm={5}><img src="/images/Clean-Water.jpeg" className="csr-img"/></Col>
<Col sm={7}>
<h3>Creating Sustainable Access to Clean Water</h3>
<p className="fs-5">In collaboration with students of IIM – Kochi, SunTec spearheaded a social development project at a tribal colony in Uthimoodu, Pathanamthitta district of Kerala. Though the tribal community of 26 families had sustained themselves well, a persistent issue they had was scarcity of water. Our project addressed this, by digging a borewell, providing electric pumps, as well as installing overhead tanks at the houses.</p>
</Col>    
</Row>



<Row className="mt-5">
<Col sm={5}><img src="/images/Running-Cause.jpeg" className="csr-img"/></Col>
<Col sm={7}>
<h3>Running for a Cause</h3>
<p className="fs-5">TrivandRUN is an annual charity run. It is hosted by SARSAS (Save A Rupee, Spread A Smile), to raise funds for patients who need financial assistance for treatment of critical health issues. Team SNEHA with 200 runners from SunTec, has been participating in this marathon for 3 years now, to create awareness and raise funds for cancer patients of Regional Cancer Centre, Thiruvananthapuram. We have also participated in the Mumbai Marathon, which is one of the biggest marathons in Asia.</p>
</Col>    
</Row>


<Row className="mt-5">
<Col sm={5}><img src="/images/Spread_Cheer.jpeg" className="csr-img"/></Col>
<Col sm={7}>
<h3>Celebrating Festivals to Spread Cheer</h3>
<p className="fs-5">To create an environment of joy and hope, team SNEHA celebrated ONAM, a cultural festival from Kerala, with children from Bal Sadanam – a foster care home. Our volunteers engaged with the children for an entire day, through activities of Pookkala, Onnasadya and Onakkodi.</p>
</Col>    
</Row>
</Container>
<Footer/>
</>


  );
}

export default LinksExample;