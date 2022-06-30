import React, { useState } from "react";
import style from "./Card.module.scss";

const Card = (props) => {

  return (
    <div className={style.card}>
      <div className={style.card__name}>{props.name}</div>
      <div className={style.card__group}>{props.group}</div>
    </div>
  )
}

export default Card;