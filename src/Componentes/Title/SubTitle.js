import React from "react";
import style from "./SubTitle.module.css";
const SubTitle = ({ titulo }) => {
  return <h3 className={style.subTitle}>{titulo}</h3>;
};

export default SubTitle;
