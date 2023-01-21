import React from "react";
import styles from "./Container.module.scss";
import { iContainer } from "../../interfaces/iContainer";

export default function Container(props: iContainer) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {props.Header}
        <div className={styles.BoxContent}>
          <div className={styles.Content}>
            <div className={styles.ArticleBox}>{props.children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
