import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div className="my-4">
      <Slider {...settings}>
        <div>
          <img src="/assets/hero.png" alt="" />
        </div>
        <div>
          <img src="/assets/hero2.png" alt="" />
        </div>
        <div>
          <img src="/assets/hero3.png" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
