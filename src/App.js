/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import MyNav from "./components/MyNav";

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <div className="App">
        <Route />
      </div>
    </BrowserRouter>
  );
}

export default App;
