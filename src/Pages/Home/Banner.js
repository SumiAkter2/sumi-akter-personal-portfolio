import React from "react";
import "./Banner.css";
import { ImDownload3 } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import { MdContactPhone } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { RiGithubLine } from "react-icons/ri";
import { Typewriter } from "react-simple-typewriter";
import PrimaryButton from "../Button/PrimaryButton";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner-container  max-w-screen text-start lg:p-12 p-6 mx-auto">
      <div>
        <div className="bg-black p-6 rounded-lg">
          <div>
            <div className="flex justify-between items-center px-6 ">
              <div className="flex justify-center items-center gap-x-6 ">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/alishaakhtersumi.sumi"
                  className="hover:text-black text-primary bg-white w-6 h-6 rounded-full p-1"
                >
                  <FaFacebookF />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/thesumiakter/"
                  className="hover:text-black text-primary bg-white w-6 h-6 rounded-full p-1"
                >
                  <GrLinkedinOption />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/SumiAkter2"
                  className="hover:text-black text-primary bg-white w-6 h-6 rounded-full p-1"
                >
                  <RiGithubLine />
                </a>
              </div>
              <div className="lg:block hidden">
                <ul className="menu menu-horizontal px-1 ">
                  <li>
                    <NavLink className="ml-2" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="ml-2" to="/portfolio">
                      Portfolio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="ml-2 " to="/about">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="ml-2" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <p className="font-bold text-sm lg:block hidden">
                {" "}
                sumiakter6335@gmail.com
              </p>
            </div>
          </div>
          {/* <div className=" ">
            <ul className="m-1 p-2 menu  w-16 bg-secondary  rounded-md text-white text-sm ">
              <div className="flex justify-center items-center lg:hidden mx-auto">
                <li>
                  <NavLink to="/" className="rounded-md ">
                    <FaHome />
                  </NavLink>
                </li>
                <li>
                  <NavLink className="rounded-md mt-2" to="/about">
                    <HiInformationCircle />
                  </NavLink>
                </li>
                <li>
                  <NavLink className="rounded-md mt-2" to="/portfolio">
                    <MdWork />
                  </NavLink>
                </li>
                <li>
                  <NavLink className="rounded-md mt-2" to="/contact">
                    <MdContactPhone />
                  </NavLink>
                </li>
              </div>
            </ul>
          </div> */}
        </div>
      </div>

      <div className="flex justify-center items-center  lg:mt-12 mt-6">
        <div className="font-sans">
          <small data-aos="fade-down">Hi, Welcome to my Portfolio</small>
          <h1 className="lg:text-5xl text-3xl font-bold lg:my-12 my-6">
            I'm {}
            <span style={{ color: "#ec42f5" }}>
              <Typewriter
                words={["SUMI AKTER", "A WEB DEVELOPER"]}
                loop={40}
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
            marvelous skilled and working in this sector with high reputation. I
            can provide clean code and pixel perfect design. I also make website
            more & more interactive with web animations.
          </p>

          <div className="mt-12">
            <PrimaryButton>
              <a
                // href={pdf}
                href="/"
                download
                className="ml-2 mt-2"
              >
                Download Resume
              </a>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
