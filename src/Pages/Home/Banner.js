import React from "react";
import "./Banner.css";
import { ImDownload3 } from "react-icons/im";
import { Typewriter } from "react-simple-typewriter";
const Banner = () => {
  return (
    <div className="banner-container text-start lg:p-12 p-6">
      <div>
        <div className="flex justify-center items-center  lg:mt-12">
          <div className="  font-sans">
            <small data-aos="fade-down">Hi, Welcome to my Portfolio</small>
            <h1 className="lg:text-5xl text-3xl font-bold my-6">
              I'm {}
              <span style={{ color: "#06b6d4" }}>
                <Typewriter
                  words={["SUMI AKTER", "A WEB DEVELOPER"]}
                  loop={20}
                  cursor
                  cursorStyle=" !"
                  typeSpeed={90}
                  deleteSpeed={90}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="text-xl mt-4 lg:mt-12">
              Hi, I am Sumi Akter. A passionate junior web developer with
              marvelous skilled and working in this sector with high reputation.
              I can provide clean code and pixel perfect design. I also make
              website more & more interactive with web animations.
            </p>

            <div>
              <button className="btn btn-primary mt-6 lg:mt-12">
                <a
                  // href={pdf}
                  href="/"
                  download
                  className="flex justify-center items-center"
                >
                  <ImDownload3 className="mr-4 mt-2" /> Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
