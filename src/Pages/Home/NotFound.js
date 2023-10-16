import React from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/img/bg6.jpg";
import sad from "../../assets/img/sad emoji.png";
import PrimaryButton from "../Button/PrimaryButton";

const NotFound = () => {
  return (
    <div
      className=""
      style={{
        background: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-black opacity-75  font-bold">
        <h1 className="text-5xl text-center text-white pt-12">
          OOOppss!! You lost your road
        </h1>
        <p className="text-xl text-center text-white py-4">Don't Be So Sad !!!</p>
        <div className="flex justify-center items-center py-12">
          <img src={sad} alt="sad-emoji" />
        </div>

        <Link to="/" className="flex justify-center items-center pb-6">
          <PrimaryButton>Please Go Home</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
