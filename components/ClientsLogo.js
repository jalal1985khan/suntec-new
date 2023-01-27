import {Container,Row, Col} from 'react-bootstrap';
import Image from 'next/image';



var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  const options = {
    loop: true,
    margin: 10,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  };

function LinksExample() {


  return (

<Container className="f_content text-center p-3 mt-4">
    <p className="fs-4 txt-main">Over 150 Clients in 45+ Countries Rely on SunTec</p>
<OwlCarousel
          // className="owl-theme"
          loop={true}
          autoplay={true}
          margin={10}
          {...options}
        >
          <div class="item">
            <img
              alt="img1"
              src="/images/clients/cleint-1.png"
              className="partners"
            />
          </div>
          <div class="item">
          <img
              alt="img1"
              src="/images/clients/cleint-2.png"
              className="partners"
            />
          </div>
          <div class="item">
          <img
              alt="img1"
              src="/images/clients/cleint-3.png"
              className="partners"
            />
          </div>
          <div class="item">
          <img
              alt="img1"
              src="/images/clients/cleint-4.png"
              className="partners"
            />
          </div>
          <div class="item">
          <img
              alt="img1"
              src="/images/clients/cleint-5.png"
              className="partners"
            />
          </div>
          <div class="item">
          <img
              alt="img1"
              src="/images/clients/cleint-6.png"
              className="partners"
            />
            
          </div>
          <div class="item">
          <img
              alt="img1"
              src="/images/clients/cleint-7.png"
              className="partners"
            />
            
          </div>
          <div class="item">
          <img
              alt="img1"
              src="/images/clients/cleint-8.png"
              className="partners"
            />
            
          </div>
          <div class="item">
          <img
              alt="img1"
              src="/images/clients/cleint-9.png"
              className="partners"
            />
            
          </div>
          <div class="item">
          <img
              alt="img1"
              src="/images/clients/cleint-10.png"
              className="partners"
            />
            
          </div>
          <div class="item">
          <img
              alt="img1"
              src="/images/clients/cleint-11.png"
              className="partners"
            />
            
          </div>
          <div class="item">
          <img
              alt="img1"
              src="/images/clients/cleint-12.png"
              className="partners"
            />
            
          </div>
        </OwlCarousel>


</Container>

  );
}

export default LinksExample;