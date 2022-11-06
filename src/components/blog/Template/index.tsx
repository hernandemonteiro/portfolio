import React from "react";
import styles from "./Template.module.css";
import Header from "../Header";

interface TemplateProps {
  children?: any;
}

export default function Template(props: TemplateProps) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <div className={styles.BoxContent}>
          <div className={styles.Content}>
            <div className={styles.ArticleBox}>{props.children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
