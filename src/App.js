import { Link, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ImDownload3 } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import { MdContactPhone } from "react-icons/md";
import { MdWork } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import LinkButton from "./Pages/Button/LinkButton";
import router from "./Router/Routes";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const icon1 = (
    <>
      <FaHome />
    </>
  );
  const icon2 = (
    <>
      <HiInformationCircle />
    </>
  );
  const icon3 = (
    <>
      <MdWork />
    </>
  );
  const icon4 = (
    <>
      <MdContactPhone />
    </>
  );
  return (
    <div
      className="max-w-screen-xl mx-auto  bg-base-100 relative "
      data-theme="dark"
    >
      <AnimatedCursor
        innerSize={20}
        outerSize={40}
        color="white"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
        innerStyle={{
          background: " #ec42f5",
        }}
        outerStyle={{
          border: "3px solid white",
        }}
      />
      <div
        className=" bg-transparent fixed top-[280px] right-3 
      "
      >
        <LinkButton props={"/"} prop={icon1}>
          Home
        </LinkButton>
        <LinkButton props={"/portfolio"} prop={icon4}>
          Portfolio
        </LinkButton>
        <LinkButton props={"/about"} prop={icon2}>
          About
        </LinkButton>

        <LinkButton props={"/contact"} prop={icon3}>
          Contact
        </LinkButton>
      </div>
      <RouterProvider router={router}> </RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
