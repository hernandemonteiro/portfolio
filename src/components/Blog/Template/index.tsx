import React, { useState } from "react";
import Head from "next/head";
import styles from "./Template.module.css";
import Header from "../Header";

interface TemplateProps {
  children?: any;
}

export default function Template(props: TemplateProps) {
  const [isLoading, setLoading] = useState(true);
  setTimeout(() => setLoading(false), 2000);

  return (
    <div className={styles.container}>
      <Head>
        <title>Hernande Monteiro - seu blog tech quentinho e atual!</title>
        <meta
          name="description"
          content="Criado para inspirar o mundo do desenvolvimento!"
        />
        <link rel="shortcut icon" href="./favicon.png" />
      </Head>
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
