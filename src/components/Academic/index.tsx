import React from 'react';
import CardCurriculum from '../CardCurriculum';
import styles from './Academic.module.scss';

function Academic() {
  return (
    <div className="page-height-full">
      <CardCurriculum className={styles.containerBox} title="Acadêmico">
        <table>
          <tbody>
            <tr>
              <td>Ciência da Computação</td>
              <td>Bacharelado</td>
              <td>Cursando</td>
            </tr>
          </tbody>
        </table>
      </CardCurriculum>
    </div>
  );
}

export default Academic;
