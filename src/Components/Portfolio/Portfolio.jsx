import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Recurit from "../../img/recruit.jpeg";
import Ecommerce from "../../img/Ecom1.jpg";
import Port from "../../img/Portfolio.jpg";
import Bubble from "../../img/BubbleSort.jpg";
import "swiper/css";
const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* Heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* Slider */}
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className="portfolio-slider"
      >
      <SwiperSlide>
          <img src={Recurit} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Bubble} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Port} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
