import React from "react";
import styles from "./SoftSkillElement.module.scss";
import { iSoftSkillElement } from "../../../interfaces/iSoftSkillElement";

function SoftSkillElement(props: iSoftSkillElement) {
  return (
    <div className={styles.skillSoft}>
      <h4>{props.skill}</h4>
    </div>
  );
}

export default SoftSkillElement;
