import "./App.css";
import MockMobileBanner from "./components/MockMobileBanner/MockMobileBanner";
import { Router } from "./Router/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MockMobileBanner>
        <Router />
      </MockMobileBanner>
    </BrowserRouter>
  );
}

export default App;
