import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { Autoplay } from "swiper";
import './HtmlSlide.css'
const HtmlSlide = () => {
    return (
      <div className="bg-black my-12 text-white h-32 py-6 rounded-lg">
        <Swiper
          autoplay={{
            delay: 900,
            disableOnInteraction: false,
          }}
          // loop={true}
          slidesPerView={4}
          spaceBetween={30}
          modules={[Autoplay]}
          className="mySwiper "
        >
          <SwiperSlide className="text-xs lg:text-xl">
            <BsFillCheckCircleFill fill="#ec42f5" className="mr-2  " /> One Page
            & Multi-Page Template
          </SwiperSlide>
          <SwiperSlide>
            <BsFillCheckCircleFill
              fill="#ec42f5"
              className="mr-2  text-sm lg:text-xl"
            />
            Responsive & Mobile Friendly
          </SwiperSlide>
          <SwiperSlide>
            <BsFillCheckCircleFill
              fill="#ec42f5"
              className="mr-2  text-sm lg:text-xl"
            />
            High Quality Support
          </SwiperSlide>

          <SwiperSlide>
            <BsFillCheckCircleFill
              fill="#ec42f5"
              className="mr-2  text-sm lg:text-xl"
            />
            Fully Customizable
          </SwiperSlide>
          <SwiperSlide>
            <BsFillCheckCircleFill
              fill="#ec42f5"
              className="mr-2  text-sm lg:text-xl"
            />
            HTML5 & CSS3
          </SwiperSlide>
          <SwiperSlide>
            <BsFillCheckCircleFill
              fill="#ec42f5"
              className="mr-2  text-sm lg:text-xl"
            />
            30+ Custom Elements
          </SwiperSlide>
          <SwiperSlide>
            <BsFillCheckCircleFill
              fill="#ec42f5"
              className="mr-2  text-sm lg:text-xl"
            />
            Super Fast
          </SwiperSlide>
          <SwiperSlide>
            <BsFillCheckCircleFill
              fill="#ec42f5"
              className="mr-2  text-sm lg:text-xl"
            />
            Google Fonts
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default HtmlSlide;