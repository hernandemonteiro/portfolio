import React from "react";
import styles from "./curriculum.module.css";
import { iTemplateAboutMe } from "../../../interfaces/iTemplateAboutMe";

export default function TemplateAboutMe(props: iTemplateAboutMe) {
  return <div className={styles.Curriculum}>{props.children}</div>;
}
