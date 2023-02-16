import { useState } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className="App bg-secondary">
      <button className="btn btn-primary" onClick={() => setDark(!dark)}>
        Hello
      </button>
      <h1 className="text-primary text-3xl"> Heljsdtui lsdkfjrueiw</h1>
    </div>
  );
}

export default App;
