import React from "react";
import Head from "next/head";
import styles from "./Template.module.css";
import Header from "../Header";

interface TemplateProps {
  children?: any;
}

export default function Template(props: TemplateProps) {
  return (
    <>
      <Head>
        <title>Hernande Monteiro - seu blog tech quentinho e atual!</title>
        <meta
          name="description"
          content="Criado para inspirar o mundo do desenvolvimento!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
    </>
  );
}
