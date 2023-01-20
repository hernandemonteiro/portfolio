import React from "react";
import styles from "MessageForm.module.scss";
import { iMessageForm } from "../../../interfaces/iMessageForm";

export default function MessageForm(props: iMessageForm) {
  return (
    <div className={styles.MessageForm}>
      <h2>{props.message}</h2>
    </div>
  );
}
