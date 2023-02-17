import { RouterProvider } from "react-router-dom";
// import "../public/index.css";
import router from "./Router/Routes";

function App() {
  return (
    <div className="  max-w-screen-xl mx-auto  bg-base-100 " data-theme="dark">
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
