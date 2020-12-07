import "./App.css";
import "./mui.css";
import Header from "./components/Header/Header";
import { Router } from "./Router/Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Router />
      </Header>
    </BrowserRouter>
  );
}

export default App;
