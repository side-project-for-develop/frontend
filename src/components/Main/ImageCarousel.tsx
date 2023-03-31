"use client";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    dots: true,
    arrows: true,
    touchMove: true,
  };
  return (
    <Slider {...settings}>
      <div className="w-full h-[180px] bg-yellow-200"></div>
      <div className="w-full h-[180px] bg-red-200"></div>
      <div className="w-full h-[180px] bg-green-200"></div>
    </Slider>
  );
};

export default ImageCarousel;
