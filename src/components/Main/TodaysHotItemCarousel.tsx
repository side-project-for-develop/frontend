"use client";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PostInfoCard from "../Common/PostInfoCard";

const TodaysHotItemCarousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,

    touchMove: true,
  };
  return (
    <Slider {...settings}>
      <div className="my-10 w-full px-4">
        <h3 className="font-BMHANNA">
          {" "}
          인기있는 <span className="text-red-500">건강</span>토픽
        </h3>

        <div className="mt-5 flex flex-col gap-y-6">
          <PostInfoCard />
          <PostInfoCard />
          <PostInfoCard />
        </div>
      </div>
      <div className="my-10 w-full px-4">
        <h3 className="font-BMHANNA">
          {" "}
          인기있는 <span className="text-red-500">IT</span>토픽
        </h3>

        <div className="mt-5 flex flex-col gap-y-6">
          <PostInfoCard />
          <PostInfoCard />
          <PostInfoCard />
        </div>
      </div>
      <div className="my-10 w-full px-4">
        <h3 className="font-BMHANNA">
          {" "}
          인기있는 <span className="text-red-500">유머</span>토픽
        </h3>

        <div className="mt-5 flex flex-col gap-y-6">
          <PostInfoCard />
          <PostInfoCard />
          <PostInfoCard />
        </div>
      </div>
      <div className="my-10 w-full px-4">
        <h3 className="font-BMHANNA">
          {" "}
          인기있는 <span className="text-red-500">취미</span>토픽
        </h3>

        <div className="mt-5 flex flex-col gap-y-6">
          <PostInfoCard />
          <PostInfoCard />
          <PostInfoCard />
        </div>
      </div>
    </Slider>
  );
};

export default TodaysHotItemCarousel;
