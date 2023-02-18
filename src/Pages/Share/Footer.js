import React from "react";
import logo from "../../assets/s.png";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { RiGithubLine } from "react-icons/ri";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="footer p-10 bg-black rounded-lg">
      <div>
        <div className="flex justify-center items-center">
          <img src={logo} alt="logo" className="w-12" />
          <p className="ml-4">sumiakter6335@gmail.com</p>
        </div>
        <p className="mt-6">  Copy Right &copy; {date} All Reserved By Sumi Akter</p>
      </div>

      <div>
        <span className="footer-title">Social</span>
        <div className="flex justify-center items-center gap-x-6 ">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/alishaakhtersumi.sumi"
            className="hover:text-black text-primary bg-white w-8 h-8 rounded-full p-1"
          >
            <FaFacebookF size="25px" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/thesumiakter/"
            className="hover:text-black text-primary bg-white w-8 h-8 rounded-full p-1"
          >
            <GrLinkedinOption size="25px" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/SumiAkter2"
            className="hover:text-black text-primary bg-white w-8 h-8 rounded-full p-1"
          >
            <RiGithubLine size="25px" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
