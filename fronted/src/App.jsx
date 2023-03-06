import React from "react";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Patna from "./Pages/Patna";
import Paris from "./Pages/Paris";
import London from "./Pages/London";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Weather />
            </div>
          }
        ></Route>

        <Route
          path="/Patna"
          element={
            <div>
              <Patna />
            </div>
          }
        ></Route>
        <Route
          path="/Paris"
          element={
            <div>
              <Paris />
            </div>
          }
        ></Route>
        <Route
          path="/London"
          element={
            <div>
              <London />
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
