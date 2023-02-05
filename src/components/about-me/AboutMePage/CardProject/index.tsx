import React from "react";
import styles from "./CardProject.module.scss";
import { iCardProject } from "../../../../interfaces/iCardProject";
import Link from "next/link";

function CardProject(props: iCardProject) {
  return (
    <Link className={styles.card} href={props.to} target="_blank" rel="noreferrer">
      <div className={styles.cardProject + " " + props.className}></div>
      <div className={styles.titleProject}>
        <h4>{props.title}</h4>
      </div>
    </Link>
  );
}

export default CardProject;
