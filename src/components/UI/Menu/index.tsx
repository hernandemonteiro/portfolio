import React from "react";
import styles from "./Menu.module.scss";

interface MenuProps {
  children: any;
}
export default function Menu(props: MenuProps) {
  return (
    <div className={styles.Menu} style={{ color: "white" }}>
      {props.children}
    </div>
  );
}
