import React from "react";
import styles from "./Inputs.module.scss";
import { iInputDefault } from "../../../interfaces/iInputDefault";

export default function InputDefault(props: iInputDefault) {
  return (
    <div className={styles.input} style={{ width: props.width }}>
      <label className={styles.label}>{props.label}</label>
      <input
        hidden={props.hidden}
        required={props.required}
        aria-label={props.label}
        aria-required={props.required}
        autoFocus={props.autoFocus}
        type={props.type || "text"}
        value={props.value}
        name={props.label}
        min={props.min}
        minLength={props.minLength}
        placeholder={props.placeholder}
        autoComplete="off"
        onChange={props.onChange}
        onClick={props.onClick}
      />
    </div>
  );
}
