import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { weatherDataType } from "../../../types";
import CityWeather from "../../Weather/CityWeather";
import {
  getAllFavInLocal,
  removeFavCityInLocal,
} from "../../../services/favouriteServices";
import { Button, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

import "./Favourite.css";

const Favourite: React.FC = () => {
  const dispach = useDispatch();

  const [favList, setFavList] = useState([]);
  const list = useSelector((state: any) => state.fav.value);

  const getFavList = () => {
    if (!list.length || !list) {
      let oldList = getAllFavInLocal();

      setFavList(oldList);

      dispach({
        type: "addMultiple",
        payload: oldList,
      });
    } else {
      setFavList(list);
    }
  };

  const removeFav = (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
    cityId: string | number | undefined
  ) => {
    e.preventDefault();

    if (!cityId) return;

    // removeFrom localStorage
    const newFav = removeFavCityInLocal(cityId);
    setFavList(newFav);

    dispach({
      type: "addMultiple",
      payload: newFav,
    });
  };

  useEffect(() => {
    getFavList();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="favourite">
      {favList.map((cityInfo: weatherDataType) => {
        return (
          <div className="fav_wrapper" key={cityInfo.id}>
            <CityWeather
              city={cityInfo.city}
              icon={cityInfo.icon}
              climate={cityInfo.climate}
              temp={cityInfo.temp}
            />

            <Tooltip title="Delete">
              <Button
                onClick={(e) => {
                  removeFav(e, cityInfo.id);
                }}
                type="primary"
                danger
                shape="circle"
                icon={<DeleteOutlined />}
              />
            </Tooltip>
          </div>
        );
      })}
    </div>
  );
};

export default Favourite;
