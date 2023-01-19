import React, { useEffect, useState } from "react";
import "./Home.css";

import { Button, Input, Tooltip } from "antd";
import { HeartTwoTone } from "@ant-design/icons";
import weatherIcon from "../../../Icons/clouds.gif";
import axios from "axios";
import CityWeather from "../../Weather/CityWeather";

import {
  cleanWeatherData,
  getCityDataFromLocal,
  setCityDataInLocal,
} from "../../../services/weatherApiServices";
import { weatherDataType } from "../../../types";
import { useDispatch, useSelector } from "react-redux/es/exports";

import {
  addCityToFavInLocal,
  getAllFavInLocal,
} from "../../../services/favouriteServices";

const { Search } = Input;

const Home: React.FC = () => {
  const [weatherData, setWeatherData] = useState<weatherDataType>();

  const [enteredCity, setEnteredCity] = useState<string>("");

  const dispach = useDispatch();
  const favList = useSelector((state: any[] | any) => state.fav.value);

  const addCityToFav = () => {
    // if already fav
    let isCity = favList.filter(
      (cityInfo: weatherDataType) => cityInfo.id === weatherData?.id
    );

    if (isCity.length) return;

    dispach({
      type: "addToFav",
      payload: weatherData,
    });

    // if city in local
    isCity = getAllFavInLocal().filter(
      (cityInfo: weatherDataType) => cityInfo.id === weatherData?.id
    );

    if (isCity.length) {
      return;
    }
    addCityToFavInLocal(weatherData);
  };

  const featchCityWeather = async (input: String) => {
    try {
      const city = input.trim();

      // units= Metric: Celsius, Imperial: Fahrenheit.
      if (city) {
        let cityData = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_API_KEY}&units=imperial`
        );

        const data = cleanWeatherData(cityData.data);

        setCityDataInLocal(data);
        setWeatherData(data);

        // console.log("I run", a);
        // console.log(data);

        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  useEffect(() => {
    const a = async () => {
      const success = await featchCityWeather(enteredCity);
      // console.log("suss ", success);
      if (!success) {
        const cityData = getCityDataFromLocal();
        // console.log(cityData);
        setWeatherData(cityData);
      }
    };
    a();
  }, [enteredCity]);

  return (
    <div className="home">
      <Search
        placeholder="Enter City"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={(city) => setEnteredCity(city)}
        style={{ maxWidth: "375px" }}
      />

      {weatherData && (
        <div className="wether_main">
          <div className="weather_wrap">
            <CityWeather
              city={weatherData.city}
              icon={weatherData.icon ? weatherData.icon : ""}
              country={weatherData.country ? weatherData.country : ""}
              sunrise={weatherData.sunrise ? weatherData.sunrise : ""}
              sunset={weatherData.sunset ? weatherData.sunset : ""}
              climate={weatherData.climate}
            />
          </div>

          <div className="weather_wrap">
            <CityWeather
              heading={"Temperature"}
              temp={weatherData.temp_avg ? weatherData.temp_avg : ""}
              temp_min={weatherData.temp_min ? weatherData.temp_min : ""}
              temp_max={weatherData.temp_max ? weatherData.temp_max : ""}
            />

            <CityWeather
              heading={"Humidity"}
              humidity={weatherData.humidity}

              // weather={weatherData.climate}
            />
          </div>

          <Tooltip title="Add To Fav">
            <Button
              ghost
              size="large"
              type="primary"
              shape="circle"
              onClick={addCityToFav}
              icon={<HeartTwoTone twoToneColor="#eb2f96" />}
            />
          </Tooltip>
        </div>
      )}

      {!weatherData && (
        <div className="no_weather">
          <h2>Get the current weather Info </h2>
          <img src={weatherIcon} alt="weather-icon" />
        </div>
      )}
    </div>
  );
};

export default Home;
