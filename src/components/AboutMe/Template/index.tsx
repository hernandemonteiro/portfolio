import React from "react";
import styles from "./curriculum.module.css";
import Menu from "../../UI/Menu";
import Head from "next/head";

export default function TemplateCurriculum(props) {
  return (
    <div className={styles.Curriculum}>
      <Head>
        <title>
          Hernande Monteiro - aqui você sabe um pouco mais sobre mim!
        </title>
      </Head>
      {props.children}
      <Menu />
    </div>
  );
}
