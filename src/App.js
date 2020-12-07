import MockMobileBanner from "./components/MockMobileBanner/MockMobileBanner";
import { Router } from "./Router/Router";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Config from "./Config";

function App() {
  return (
    <BrowserRouter>
      <MockMobileBanner>
        <Router config={Config()} />
      </MockMobileBanner>
    </BrowserRouter>
  );
}

export default App;
