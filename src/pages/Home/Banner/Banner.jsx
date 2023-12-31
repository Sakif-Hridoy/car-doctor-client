import React from 'react';
import PropTypes from 'prop-types';
import img1 from "../../../assets/banner/1.jpg"
import img2 from "../../../assets/banner/2.jpg"
import img3 from "../../../assets/banner/3.jpg"
import img4 from "../../../assets/banner/4.jpg"
import img5 from "../../../assets/banner/5.jpg"
import img6 from "../../../assets/banner/6.jpg"


const Banner = props => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full" />
    <div className="absolute flex transform -translate-y-1/2 left-5 right-5 top-1/2">
      <div className='text-white'>
      <h2 className="text-6xl">Affordable Price For Car Servicing</h2>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      <div>
      <button className='btn btn-primary'>Discover More</button>
      <button className='btn btn-outline btn-secondary'>Latest Project</button>
      </div>
      </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

Banner.propTypes = {
    
};

export default Banner;