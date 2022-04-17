import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from "../../Images/banner/banner.png"

const Slider = () => {
    return (
    <div>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner}
      alt="First slide"
    />
   <Carousel.Caption className='align-items-center'>
    <h3>SABBIR</h3>
      <p>PHOTOGRAPHY</p>
      <small>based in bangladesh since 2020</small>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner}
      alt="Second slide"
    />

    <Carousel.Caption className='align-items-center'>
    <h3>SABBIR</h3>
      <p>PHOTOGRAPHY</p>
      <small>based in bangladesh since 2020</small>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner}
      alt="Third slide"
    />

<Carousel.Caption className='align-items-center'>
    <h3>SABBIR</h3>
      <p>PHOTOGRAPHY</p>
      <small>based in bangladesh since 2020</small>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
    );
};

export default Slider;