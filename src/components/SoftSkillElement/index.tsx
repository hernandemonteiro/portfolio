import React from 'react';
import styles from './SoftSkillElement.module.scss';
import { iSoftSkillElement } from '../../interfaces/iSoftSkillElement';

function SoftSkillElement(props: iSoftSkillElement) {
  return <h4 className={styles.skillSoft}>{props.skill}</h4>;
}

export default SoftSkillElement;
