import React from 'react';
import styles from './Experience.module.scss';
import CardCurriculum from '../CardCurriculum';

function Experience() {
  return (
    <div className="page-height-full">
      <CardCurriculum className={styles.containerBox} title="Experiências">
        <table>
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <tr>
              <td>Bellinati Perez - Estágio</td>
              <td>2017</td>
              <td>2017</td>
            </tr>
            <tr>
              <td>Espaço Gourmet</td>
              <td>2018</td>
              <td>2018</td>
            </tr>
            <tr>
              <td>Software Engineer - Autônomo</td>
              <td>2019</td>
              <td>ATUALMENTE</td>
            </tr>
          </tbody>
        </table>
      </CardCurriculum>
    </div>
  );
}

export default Experience;
