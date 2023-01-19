import React from "react";
import styles from "./curriculum.module.css";

interface iTemplateAboutMe {
  children: React.ReactNode;
}

export default function TemplateAboutMe(props: iTemplateAboutMe) {
  return <div className={styles.Curriculum}>{props.children}</div>;
}
