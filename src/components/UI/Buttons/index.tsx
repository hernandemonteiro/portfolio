import React from "react";
import styles from "./Buttons.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}
export default function ButtonDefault(props: ButtonProps) {
  return (
    <button className={styles.buttonPagination} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
