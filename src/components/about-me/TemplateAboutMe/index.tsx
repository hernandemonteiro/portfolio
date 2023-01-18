import React from "react";
import styles from "./curriculum.module.css";
import Head from "next/head";

interface iTemplateAboutMe {
  children: JSX.Element;
}

export default function TemplateAboutMe(props: iTemplateAboutMe) {
  return (
    <div className={styles.Curriculum}>
      <Head>
        <title>
          Hernande Monteiro - aqui você sabe um pouco mais sobre mim!
        </title>
      </Head>
      {props.children}
    </div>
  );
}
