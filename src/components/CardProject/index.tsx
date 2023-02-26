import React from 'react';
import styles from './CardProject.module.scss';
import { iCardProject } from '../../interfaces/iCardProject';

function CardProject(props: iCardProject) {
  return (
    <div className={styles.card}>
      <div className={styles.cardProject + ' ' + props.className}></div>
      <div className={styles.titleProject}>
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

export default CardProject;
