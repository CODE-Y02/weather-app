import { DateTime } from "luxon";
import { weatherDataType } from "../types";

function formatDate(
  sec: number,
  zone?: number | string,
  format: string = "cccc, dd LLL yyyy' | Local time: 'hh:mm a'"
) {
  return DateTime.fromSeconds(sec).toFormat(format);
}

export const cleanWeatherData = (weatherData: any) => {
  const {
    // coord: { lon, lat },
    main: {
      temp,
      temp_min,
      temp_max,
      feels_like: temp_avg,
      pressure,
      humidity,
    },
    wind: { speed },
    dt,
    sys: { country, sunrise, sunset },
    name: city,
    id,
    timezone,
  } = weatherData;

  const { main: climate, icon, description } = weatherData.weather[0];

  return {
    id,
    temp,
    temp_min,
    temp_max,
    temp_avg,
    pressure,
    humidity,
    wind_speed: speed,
    dt: formatDate(dt),
    country,
    city,
    sunrise: formatDate(sunrise),
    sunset: formatDate(sunset),
    timezone,
    climate,
    icon,
    description,
  };
};

// for IO operation related to local storage
export const getCityDataFromLocal = () => {
  const data = localStorage.getItem("weather-city");
  if (!data) return false;

  //   if data found
  return JSON.parse(data);
};

export const setCityDataInLocal = (cityData: weatherDataType) => {
  const data = JSON.stringify(cityData);
  localStorage.setItem("weather-city", data);

  return true;
};
