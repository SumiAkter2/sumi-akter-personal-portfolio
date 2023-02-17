import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Router/Routes";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className="App mx-auto max-w-screen-xl" data-theme={dark ? "dark" : "light"}>
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
