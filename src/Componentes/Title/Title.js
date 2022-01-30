import React from "react";
import style from "./Title.module.css";
const Title = ({ titulo }) => {
  return <h1 className={style.Title}>{titulo}</h1>;
};

export default Title;
