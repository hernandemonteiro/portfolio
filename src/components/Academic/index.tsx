import React from 'react';
import CardCurriculum from '../CardCurriculum';
import styles from './Academic.module.scss';

function Academic() {
  return (
    <div className="page-height-full">
      <CardCurriculum className={styles.containerBox} title="Formações">
        <table>
          <thead>
            <tr>
              <th>Curso</th>
              <th>Tipo</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ensino Médio</td>
              <td>Formação</td>
              <td>Concluido</td>
            </tr>
            <tr>
              <td>Ciência da Computação</td>
              <td>Graduação</td>
              <td>Cursando</td>
            </tr>
          </tbody>
        </table>
      </CardCurriculum>
    </div>
  );
}

export default Academic;
