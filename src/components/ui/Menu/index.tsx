import React from "react";
import styles from "./Menu.module.scss";
import { iMenu } from "../../../interfaces/iMenu";

export default function Menu(props: iMenu) {
  return (
    <div className={styles.Menu} style={props.MenuStyle}>
      {props.children}
    </div>
  );
}
