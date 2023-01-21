import React from "react";
import styles from "./Buttons.module.scss";
import { iButton } from "../../../interfaces/iButton";

export function Button(props: iButton) {
  return (
    <button
      type={props.type}
      className={styles.buttonDefault + " " + props.className}
      onClick={props.onClick}
      style={{ width: props.width }}
    >
      {props.children}
    </button>
  );
}
