import React from "react";
import Carousel from "react-bootstrap/Carousel";
const Gallery = () => {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://pixabay.com/get/g9a129e5ce222298ca6c5c4e41a616bda41544e68e9f7ee13a8b75a71660cd9fba7a20ac734404176394c00af8d7363f4e880a5dc2db83e2b1d899c2c98e70d7b52ee0f5d0cc1d323fa0552a7a2711972_640.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://pixabay.com/get/g562457a59136debe2b51b6bfb31563c199cd7de9cd95a952627d9404acbd138befa04fd86d376f8de15c1ba686b7857e7d302025d982bab645145e73ad2e2724f9156f773b72726fe6302914e1a2b196_640.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://pixabay.com/get/g67ed57643e687531a91ae11a21628f738a47564a61b6dd609727070d98f080a2413396cb02723686807fcaefcfafadc93c11765f532bddcd48da99028450bb5c78d9a71552cd9d9526060b57bdb35c12_640.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Gallery;
