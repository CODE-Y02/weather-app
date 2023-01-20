import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Favourite from "../Pages/Favourite/Favourite";

import "./WeatherApp.css";

const WeatherApp: React.FC = () => {
  return (
    <div className="weather_app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </div>
  );
};

export default WeatherApp;
