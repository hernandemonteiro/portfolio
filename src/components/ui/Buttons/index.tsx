import React from "react";
import styles from "./Buttons.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "submit" | "button" | "reset";
  width?: string;
}
export function Button(props: ButtonProps) {
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
