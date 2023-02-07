import React from "react";

import { Avatar, Card } from "antd";
import "./CityWeather.css";

import Meta from "antd/es/card/Meta";
import InfoIcon from "./InfoIcon";

import TempIcon from "../../Icons/temp.png";
import TempHighIcon from "../../Icons/temp-h.png";
import TempLowIcon from "../../Icons/temp-l.png";
import humidityIcon from "../../Icons/humidity.png";

import SunGif from "../../Icons/sun.gif";
import NigntGif from "../../Icons/night.gif";

import { CityWeatherPropType } from "../../types";

const CityWeather = (props: CityWeatherPropType) => {
  return (
    <div className="site-card-border-less-wrapper cityWeather">
      <Card bordered={false} style={{ width: "auto", maxWidth: "325px" }}>
        <Meta
          avatar={
            props.icon && (
              <Avatar
                src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
              />
            )
          }
          title={<h2>{props.city}</h2>}
        />
        {props.climate && (
          <div className="weather">
            <img
              src={`https://openweathermap.org/img/wn/${props.icon}@4x.png`}
              alt={props.climate}
            />
            <div className="weather_desc">{props.climate}</div>
          </div>
        )}
        <Card>
          {/* temp is temperature */}
          {props.temp && (
            <InfoIcon
              title="current temp"
              value={props.temp}
              unit={"F"}
              icon={TempIcon}
            />
          )}
          {props.temp_max && (
            <InfoIcon
              title="Max Temp"
              value={props.temp_max}
              unit={"F"}
              icon={TempHighIcon}
            />
          )}
          {props.temp_min && (
            <InfoIcon
              title="Min Temp"
              unit={"F"}
              value={props.temp_min}
              icon={TempLowIcon}
            />
          )}

          {/* sur Rise and sunset */}
          {props.sunrise && (
            <InfoIcon title="Sun Rise" value={props.sunrise} icon={SunGif} />
          )}
          {props.sunset && (
            <InfoIcon title="Sun set" value={props.sunset} icon={NigntGif} />
          )}

          {/* humidity and pressure */}

          {props.humidity && (
            <InfoIcon
              title="Humidity"
              value={props.humidity}
              icon={humidityIcon}
            />
          )}
        </Card>
      </Card>
    </div>
  );
};

export default CityWeather;
