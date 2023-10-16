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
          <SwiperSlide className="text-xs lg:text-xl mt-2">
            <BsFillCheckCircleFill fill="#ec42f5" className="mr-2  " /> One Page
            & Multi-Page Template
          </SwiperSlide>
          <SwiperSlide>
            <BsFillCheckCircleFill
              fill="#ec42f5"
              className="mr-2  text-sm lg:text-xl mt-2"
            />
            Responsive & Mobile Friendly
          </SwiperSlide>
          <SwiperSlide>
            <BsFillCheckCircleFill
              fill="#ec42f5"
              className="mr-2  text-sm lg:text-xl mt-2"
            />
            High Quality Support
          </SwiperSlide>

          <SwiperSlide>
            <BsFillCheckCircleFill
              fill="#ec42f5"
              className="mr-2  text-sm lg:text-xl mt-2"
            />
            Fully Customizable
          </SwiperSlide>
          <SwiperSlide>
            <BsFillCheckCircleFill
              fill="#ec42f5"
              className="mr-2  text-sm lg:text-xl mt-2"
            />
            HTML5 & CSS3
          </SwiperSlide>
          <SwiperSlide>
            <BsFillCheckCircleFill
              fill="#ec42f5"
              className="mr-2  text-sm lg:text-xl mt-2"
            />
            30+ Custom Elements
          </SwiperSlide>
          <SwiperSlide>
            <BsFillCheckCircleFill
              fill="#ec42f5"
              className="mr-2  text-sm lg:text-xl mt-2"
            />
            Super Fast
          </SwiperSlide>
          <SwiperSlide>
            <BsFillCheckCircleFill
              fill="#ec42f5"
              className="mr-2  text-sm lg:text-xl mt-2"
            />
            Google Fonts
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default HtmlSlide;