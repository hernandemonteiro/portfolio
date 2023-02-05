import React from "react";
import styles from "./CardCurriculum.module.scss";
import { iCardCurriculum } from "../../../interfaces/iCardCurriculum";

export default function CardCurriculum(props: iCardCurriculum) {
  return (
    <div className={styles.CardCurriculum}>
      <div className={styles.TitleCard}>
        <h1 className="text-white">{props.title}</h1>
      </div>
      <div className={styles.CardContent + " " + props.className}>
        {props.children}
      </div>
    </div>
  );
}
