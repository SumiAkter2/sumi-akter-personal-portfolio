import { RouterProvider } from "react-router-dom";
 import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
import router from "./Router/Routes";

function App() {
  return (
    <div className="  max-w-screen-xl mx-auto  bg-base-100 " data-theme="dark">
      <RouterProvider router={router}> </RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
