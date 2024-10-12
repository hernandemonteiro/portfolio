import React from 'react';
import styles from './SoftSkills.module.scss';
import CardCurriculum from '../CardCurriculum';
import SoftSkillElement from '../SoftSkillElement';

function SoftSkills() {
  return (
    <div className="page-height-full">
      <CardCurriculum className={styles.skillsBox} title="Soft-skills">
        <div className={styles.skillsBox + ' ' + styles.marginTopSkills}>
          <SoftSkillElement skill={'Inteligência Emocional'} />
          <SoftSkillElement skill={'Criatividade'} />
          <SoftSkillElement skill={'Autodidatismo'} />
          <SoftSkillElement skill={'Proatividade'} />
          <SoftSkillElement skill={'Empatia'} />
          <SoftSkillElement skill={'Trabalho em Equipe'} />
          <SoftSkillElement skill={'Dicotômia'} />
          <SoftSkillElement skill={'Senso de Liderança'} />
        </div>
      </CardCurriculum>
    </div>
  );
}

export default SoftSkills;
