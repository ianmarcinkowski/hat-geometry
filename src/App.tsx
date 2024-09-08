import "./App.css";
import HatCanvas from "./HatCanvas";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [headbandRadius, setHeadbandRadius] = useState("");

  const buttonDisabled = false;

  return (
    <div className="App">
      <div className="App__header">
        <Header />
      </div>
      <div className="App__body">
        <div className="App__controls">
          <h1>Customize your hat</h1>
          <form>
            <label htmlFor="headbandRadius">Headband Radius(mm)</label>
            <input type="number" value={headbandRadius}
              onChange={(e) => setHeadbandRadius(e.target.value)}
              placeholder="headband radius in mm"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;