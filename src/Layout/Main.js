import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Share/Footer";
import Header from "../Pages/Share/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
