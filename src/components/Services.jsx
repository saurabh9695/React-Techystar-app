import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/student.jpg";
import img2 from "../assets/table.jpg";
const Services = () => {
  return (
    <div >
      <Carousel
      infiniteLoop 
      autoPlay
       showStatus={false}
    //    showArrows={false}
     interval={1000}
    //  showThumbs={false}   jo bhi code comment hai ye apane per hai likhana hai to likho nahi to koi bat nahi
    // showIndicators={false}
       >
      <div>
      <img src={img1} alt="Item1"/>
      <p className="legend">Full stack</p>
      </div>
      <div>
      <img src={img2} alt="Item3"/>
      <p className="legend">Peer-to-peer Support</p>
      </div>
      </Carousel>
    </div>
  )
}

export default Services
