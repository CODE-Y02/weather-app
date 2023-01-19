export interface weatherDataType {
  id?: number | string;
  temp?: string | number | undefined;
  temp_min?: string | number | undefined;
  temp_max?: string | number | undefined;
  temp_avg?: string | number | undefined;
  pressure?: number | undefined;
  humidity?: number | undefined;
  wind_speed?: string | number | undefined;
  dt?: string | number | undefined;
  country?: string | undefined;
  city?: string | undefined;
  sunrise?: string | number | undefined;
  sunset?: string | number | undefined;
  timezone?: string | number | undefined;
  climate?: string | undefined;
  icon?: string | undefined;
  description?: string | undefined;
}

export interface CityWeatherPropType extends weatherDataType {
  displayRow?: boolean;
  heading?: string | undefined;
}

// export interface CityWeatherPropType {
//   icon?: String | string | undefined;
//   City?: String | string | undefined;
//   Country?: String | string | undefined;
//   temperature?: {
//     curr: number | string | undefined;
//     avg: number | string | undefined;
//     max: number | string | undefined;
//     min: number | string | undefined;
//   };
//   weather?: string | undefined;

//   pressure?: number | undefined;
//   humidity?: number | undefined;

//   sunrise?: number | string | undefined;
//   sunset?: number | string | undefined;
//   displayRow?: boolean;
// }

export interface InfoIconProps {
  title?: string;
  value?: string | number | undefined;
  unit?: string | number | undefined;
  icon?: string | undefined;
  // datetime?: string | undefined;
}
