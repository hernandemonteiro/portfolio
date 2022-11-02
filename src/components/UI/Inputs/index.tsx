import React from "react";
import styles from "./Inputs.module.scss";

interface InputDefaultProps {
  type: "text" | "password" | "email" | "number";
  onChange?: any;
  required?: boolean;
  width?: string;
  label?: string;
  hidden?: boolean;
  value?: string;
  placeholder?: string
}

export default function InputDefault(props) {
  return (
    <div className={styles.input} style={{ width: props.width }}>
      <label className={styles.label}>{props.label}</label>
      <input
        hidden={props.hidden}
        required={props.required}
        aria-label={props.label}
        aria-required={props.required}
        type={props.type}
        value={props.value}
        name={props.label}
        placeholder={props.placeholder}
        autoComplete="off"
        onChange={props.onChange}
      />
    </div>
  );
}
