import React from "react";
import { NavLink } from "react-router-dom";
import PrimaryButton from "../Button/PrimaryButton";
import SkillBar from "../Skills/SkillBar";
import { Typewriter } from "react-simple-typewriter";
import LinkButton from "../Button/LinkButton";

const About = () => {
  return (
    <div className="px-6 text-white ">
      <div className="pt-12">
        <small data-aos="fade-down">VISIT MY PORTFOLIO & HIRE ME</small>
        <h1
          className="text-secondary my-6 text-3xl font-bold lg:text-5xl "
          data-aos="fade-down"
          data-aos-delay="300"
          data-aos-duration="500"
        >
          About Me
        </h1>
        <p className="leading-7 ">
          I am a Junior Web Developer. I am experienced in HTML5, CSS3, ReactJs,
          JavaScript, Bootstrap, Tailwind CSS, DaisyUI, React Router. Familiar
          With Redux, NodeJs, ExpressJs, MongoDB, Firebase, Heroku, Netlify,
          React Query, Axios, ES6. I have completed about 20+ projects using my
          skill in all programming knowledge. Some of my projects are
          CryptoVest,One step Auto Zone, BlackFit, Innovative agency, Best Tools
          Co,The Car Land an so on. There are some Full stack website and some
          Front End Website. Day by day I am trying to gain more skill in this
          sector with the best of mine. I am very much dedicated to my duty and
          want to developed a bright future in this sector. I have completed a
          Complete Web Development Course on Web Development from Programming
          Hero. After this course, I've achieved a Black Belt by scoring top 5%
          of the course. I love gardening, cooking and talking with people.
          During leisure time , I take care of my garden. I like to motivate
          people to lead a happy life. On holiday, I spend my time with my
          family.
        </p>
        <div className="mt-6 lg:mt-12">
          <NavLink
            to="/portfolio"
            // data-aos="zoom-in-up" data-aos-duration="1000"
          >
            <PrimaryButton className="mb-6"> Explore More </PrimaryButton>
          </NavLink>
        </div>
      </div>
      {/* ==================== */}
      <div className="my-6 lg:my-12 ">
        <h3 className="text-3xl py-4">
          About{" "}
          <span style={{ color: "#ec42f5" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[" Personal Information"]}
              loop={40}
              cursor
              cursorStyle=" !"
              typeSpeed={90}
              deleteSpeed={90}
              delaySpeed={1000}
            />
          </span>
        </h3>
        <div className="lg:flex lg:justify-start justify-center items-center gap-x-5">
          <ul className="grid grid-cols-2 pb-12 gap-0 ">
            <li>First Name : </li>
            <li className="font-bold">Sumi</li>
            <li>Last Name :</li>
            <li className="font-bold"> Akter</li>
            <li>Age :</li>
            <li className="font-bold">23 years</li>
            <li>Nationality :</li>
            <li className="font-bold">Bangladeshi</li>
            <li>Languages :</li>
            <li className="font-bold"> English, Bengali, Hindi(spoken)</li>
            <li>Address:</li>
            <li className="font-bold">Dhaka, Bangladesh</li>
            <li>Freelance: </li>
            <li className="font-bold">Available</li>
          </ul>
          <div>
            <SkillBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
