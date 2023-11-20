import React from "react";
import "./Carousel.scss";
//import Cookies from 'js-cookie'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useNavigate } from "react-router-dom";

const Carousel = (props) => {
  const { carousel, bagroundColor } = props
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  }

  return (
    <ul className="carousel-container">
      <Slider {...settings} className="carousal" style={{ backgroundColor: bagroundColor }}>
        <li>
          <div className="carousel-section">
            <div className="name-section">
              <p>{carousel[0].name}</p>
              <p className="offer">Up to  <span><br /> 10%</span> off</p>
            </div>
            <img
              src={carousel[0].img}
              alt="offer"
              className="carousal-item-image"
              onClick={() => navigate(`/product/${carousel[1].product_id}`)}
            />

          </div>
        </li>
        <li>
          <div className="carousel-section">
            <div className="name-section">
              <p>{carousel[0].name}</p>
              <p className="offer">Up to  <span><br /> 10%</span> off</p>
            </div>

            <img
              src={carousel[0].img}
              alt="offer"
              className="carousal-item-image"
              onClick={() => navigate(`/product/${carousel[1].product_id}`)}
            />

          </div>
        </li>
        <li>
          <div className="carousel-section">
            <div className="name-section">
              <p>{carousel[1].name}</p>
              <p className="offer">Up to  <span><br /> 10%</span> off</p>
            </div>

            <img
              src={carousel[1].img}
              alt="offer"
              className="carousal-item-image"
              onClick={() => navigate(`/product/${carousel[1].product_id}`)}
            />

          </div>
        </li>
        <li>
          <div className="carousel-section">
            <div className="name-section">
              <p>{carousel[2].name}</p>
              <p className="offer">Up to  <span><br /> 10%</span> off</p>
            </div>

            <img
              src={carousel[2].img}
              alt="offer"
              className="carousal-item-image"
              onClick={() => navigate(`/product/${carousel[1].product_id}`)}
            />

          </div>
        </li>
        <li>
          <div className="carousel-section">
            <div className="name-section">
              <p>{carousel[3].name}</p>
              <p className="offer">Up to  <span><br /> 10%</span> off</p>
            </div>

            <img
              src={carousel[3].img}
              alt="offer"
              className="carousal-item-image"
              onClick={() => navigate(`/product/${carousel[1].product_id}`)}
            />

          </div>
        </li>
        <li>
          <div className="carousel-section">
            <div className="name-section">
              <p>{carousel[4].name}</p>
              <p className="offer">Up to  <span><br /> 10%</span> off</p>
            </div>

            <img
              src={carousel[4].img}
              alt="offer"
              className="carousal-item-image"
              onClick={() => navigate(`/product/${carousel[1].product_id}`)}
            />
          </div>
        </li>
      </Slider>
    </ul>
  )

}


export default Carousel
