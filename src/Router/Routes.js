import Main from "../Layout/Main";
import About from "../Pages/Home/About";
import Home from "../Pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
export default router;
