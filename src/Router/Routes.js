import Main from "../Layout/Main";
import About from "../Pages/Home/About";
import Contact from "../Pages/Home/Contact/Contact";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/Home/NotFound";
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
        path: "/portfolio",
        element: <AllProjects />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;
