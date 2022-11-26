import React from "react";
import styles from "./Template.module.css";
import Header from "../Header";

interface TemplateBlogProps {
  children?: any;
}

export default function TemplateBlog(props: TemplateBlogProps) {
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
