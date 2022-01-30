import React from "react";
import { NavLink } from "react-router-dom";
import style from "./LocationInfo.module.css";
import { ReactComponent as Location } from "../../Assets/location.svg";
import { ReactComponent as Option } from "../../Assets/option.svg";
const LocationInfo = () => {
  return (
    <section className={style.LocationInfo}>
      <div className={style.infoContainer}>
        <Location className={style.icon} />
        <div className={style.info}>
          <h5>Home</h5>
          <h6>Rua Professor Fernando Moreira, 400</h6>
        </div>
      </div>
      <NavLink to="/" className={style.option}>
        <Option />
      </NavLink>
    </section>
  );
};

export default LocationInfo;
