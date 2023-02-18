import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "./Router/Routes";

function App() {
  return (
    <div
      className="lg:max-w-screen-xl max-w-xs mx-auto  bg-base-100 "
      data-theme="dark"
    >
      <RouterProvider router={router}> </RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
