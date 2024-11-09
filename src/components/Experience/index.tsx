import React from 'react';
import styles from './Experience.module.scss';
import CardCurriculum from '../CardCurriculum';

function Experience() {
  return (
    <div className="page-height-full">
      <CardCurriculum className={styles.containerBox} title="Experiências">
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <tr>
              <td>Atendente - Bellinati Perez</td>
              <td>2017</td>
              <td>2017</td>
            </tr>
            <tr>
              <td>Auxiliar - Espaço Gourmet</td>
              <td>2018</td>
              <td>2018</td>
            </tr>
            <tr>
              <td>Web Developer - PJ - Costa Bebidas</td>
              <td>2019</td>
              <td>2020</td>
            </tr>
            <tr>
              <td>Software Developer - PJ - Grupo Seu Antônio</td>
              <td>2019</td>
              <td>2020</td>
            </tr>
            <tr>
              <td>Web and Mobile Developer - Freelancer - Workana</td>
              <td>2021</td>
              <td>2023</td>
            </tr>
            <tr>
              <td>Web Developer - PJ - Acesso Comercial</td>
              <td>2023</td>
              <td>ATUALMENTE</td>
            </tr>
            <tr>
              <td>Web Developer - PJ - Petroplus</td>
              <td>2024</td>
              <td>ATUALMENTE</td>
            </tr>
          </tbody>
        </table>
      </CardCurriculum>
    </div>
  );
}

export default Experience;
