import React from "react";
import "./Performance.css";
import { TbActivityHeartbeat } from "react-icons/tb";
import { AiFillMobile } from "react-icons/ai";
import { FaHeadset } from "react-icons/fa";
const Performance = () => {
  return (
    <div className="my-12">
      <div className="lg:flex justify-center items-center gap-x-8 bg-black px-2 mx-auto rounded-lg py-6 ">
        <div className="performance-card my-6 mx-auto " data-aos="zoom-in">
          <div className="card2">
            <div className=" text-white p-6">
              <TbActivityHeartbeat size="40px" color="#ec42f5" />
              <h1 className="text-2xl font-bold my-4">Fast Performance</h1>
              <p>
                Optimized for a smaller build size, faster dev compilation and
                dozens of other improvements.
              </p>
            </div>
          </div>
        </div>
        <div
          className="performance-card my-6 mx-auto"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="card2">
            <div className=" text-white p-6">
              <AiFillMobile size="40px" color="#ec42f5" />
              <h1 className="text-2xl font-bold my-4">Perfect Responsive</h1>
              <p>
                Our Template is full Perfect for all device. You can visit our
                template all device easily.
              </p>
            </div>
          </div>
        </div>
        <div
          className="performance-card my-6 mx-auto"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <div className="card2">
            <div className=" text-white p-6">
              <FaHeadset size="40px" color="#ec42f5" />
              <h1 className="text-2xl font-bold my-4">
                Fast & Friendly Support
              </h1>
              <p>
                We are provide 24 hours support for all clients.You can purchase
                without hesitation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
