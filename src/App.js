import { RouterProvider } from "react-router-dom";
// import "../public/index.css";
import router from "./Router/Routes";

function App() {
  return (
    <div className=" mx-auto max-w-screen-xl bg-base-100 " data-theme="dark">
      <RouterProvider router={router}> </RouterProvider>

     

     
     
    </div>
  );
}

export default App;
