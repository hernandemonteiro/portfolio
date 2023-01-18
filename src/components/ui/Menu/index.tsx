import React, { CSSProperties } from "react";
import styles from "./Menu.module.scss";

interface MenuProps {
  children: any;
  MenuStyle?: CSSProperties;
}
export default function Menu(props: MenuProps) {
  return (
    <div className={styles.Menu} style={props.MenuStyle}>
      {props.children}
    </div>
  );
}
