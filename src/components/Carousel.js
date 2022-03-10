import React, { Component } from 'react';
import newspaper from "./newspaper.jpeg";
// import c5 from "./c5.jpg";
// import c6 from "./c6.jpeg";

export default class Carousel extends Component {
  render() {
    return <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{marginTop:"-16px"}}>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={newspaper}  className="d-block w-100 " alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Success is not final, failure is not fatal: it is the courage to continue that counts.</h5>
        <p>~Winston Churchill</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={newspaper} className="d-block w-100 " alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>All you need in this life is ignorance and confidence, and then success is sure.</h5>
        <p>~Mark Twain</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={newspaper}  className="d-block w-100 " alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>If you find it in your heart to care for somebody else, you will have succeeded.</h5>
        <p>~Maya Angelou</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>;
  }
}
