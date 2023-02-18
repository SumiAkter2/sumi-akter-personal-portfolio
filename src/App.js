import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ImDownload3 } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { HiInformationCircle } from "react-icons/hi";
import { MdContactPhone } from "react-icons/md";
import { MdWork } from "react-icons/md";
import "react-toastify/dist/ReactToastify.css";
import LinkButton from "./Pages/Button/LinkButton";
import router from "./Router/Routes";

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
      <div
        className=" bg-transparent fixed top-[320px] right-3 
      "
      >
        <LinkButton childrens={icon1}>Home</LinkButton>
        <LinkButton childrens={icon2}>About</LinkButton>
        <LinkButton childrens={icon3}>Contact</LinkButton>
        <LinkButton childrens={icon4}>Portfolio</LinkButton>
      </div>
      <RouterProvider router={router}> </RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
