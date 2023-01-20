import React from "react";
import styles from "./MenuIcon.module.scss";
import { iMenuIcon } from "../../../interfaces/iMenuIcon";

export default function MenuIcon(props: iMenuIcon) {
  return <div className={styles.IconBox}>{props.children}</div>;
}
