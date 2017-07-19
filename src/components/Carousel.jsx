import React, { Component } from 'react';
import Slider from 'react-slick';
import SwanCarousel from '../img/swan-carousel.png';

function NextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', borderRadius: '25px', background: '#002341'}}
      onClick={onClick}
    ></div>
  );
}

function PrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', borderRadius: '25px', background: '#002341'}}
      onClick={onClick}
    ></div>
  );
}

export default class Carousel extends Component {
  render() {
    var settings = {
      infinite: true,
      dots: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
    };
    return (
      <Slider className="carousel" {...settings}>
        <div>
          <img className="center-block carousel__img" alt="swan-carousel" src={SwanCarousel} />
          <div className="text-center carousel__caption">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div>
          <img className="center-block carousel__img" alt="swan-carousel" src={SwanCarousel} />
          <div className="text-center carousel__caption">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div>
          <img className="center-block carousel__img" alt="swan-carousel" src={SwanCarousel} />
          <div className="text-center carousel__caption">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div>
          <img className="center-block carousel__img" alt="swan-carousel" src={SwanCarousel} />
          <div className="text-center carousel__caption">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div>
          <img className="center-block carousel__img" alt="swan-carousel" src={SwanCarousel} />
          <div className="text-center carousel__caption">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div>
          <img className="center-block carousel__img" alt="swan-carousel" src={SwanCarousel} />
          <div className="text-center carousel__caption">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div>
          <img className="center-block carousel__img" alt="swan-carousel" src={SwanCarousel} />
          <div className="text-center carousel__caption">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </Slider>
    );
  }
}