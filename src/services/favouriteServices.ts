import { weatherDataType } from "../types";

// for IO operation related to local storage
export const getAllFavInLocal = () => {
  const localdata = localStorage.getItem("Fav");
  if (!localdata) return [];
  return JSON.parse(localdata);
};

export const addCityToFavInLocal = (cityData?: weatherDataType) => {
  const oldFav = getAllFavInLocal();

  const newFav = [cityData, ...oldFav];

  const newlocal = JSON.stringify(newFav);
  localStorage.setItem("Fav", newlocal);

  return newFav;
};

export const removeFavCityInLocal = (cityId: string | number | undefined) => {
  const localdata = localStorage.getItem("Fav");

  if (!localdata) return true;

  let oldFav = JSON.parse(localdata) || [];

  const newFav = oldFav.filter((city: weatherDataType) => city.id !== cityId);

  const newlocal = JSON.stringify(newFav);
  localStorage.setItem("Fav", newlocal);

  return newFav;
};
