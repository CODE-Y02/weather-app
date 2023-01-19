import React from "react";

import "./IconStyle.css";
import { InfoIconProps } from "../../types";

const InfoIcon: React.FC<InfoIconProps> = ({ title, value, icon, unit }) => {
  return (
    <div className="info_icon">
      <div className="logo">
        <img src={icon} alt={title} />
      </div>
      <div className="prop_info">
        <h4>{title} </h4>
        <h6>
          {value} <span> {unit} </span>{" "}
        </h6>
      </div>
    </div>
  );
};

export default InfoIcon;
