import React from "react";
import type { FC } from "react";

import "antd/dist/reset.css";
import "./App.css";
import Header from "./Components/Header/Header";
import WeatherApp from "./Components/WeatherApp/WeatherApp";

const App: FC = () => (
  <div className="app">
    {/* <Button type="primary">Button</Button> */}
    <Header />
    <WeatherApp />
  </div>
);

export default App;
