import Main from "../Layout/Main";
import About from "../Pages/Home/About";
import Contact from "../Pages/Home/Contact/Contact";
import Home from "../Pages/Home/Home";
import AllProjects from "../Pages/Home/Performance/Projects/AllProjects";

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
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <AllProjects />,
      },
    ],
  },
]);
export default router;
