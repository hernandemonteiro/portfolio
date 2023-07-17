import React from 'react';
import styles from './Presentation.module.scss';
import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp } from 'react-icons/si';

function Presentation() {
  return (
    <div className={styles.presentation}>
      <div
        className={styles.avatarImg}
        data-testid={'avatarImgTest'}
        aria-label="Foto de Hernande Monteiro, ele usa uma blusa branca com um pequeno colar dourado aparente, cabelo crespo, pele parda e sorriso no rosto."
      />
      <header className={'text-center'}>
        <h1 className="text-white">Hernande Monteiro</h1>
        <h2 className="text-white">Agente Tecnológico - Banco do Brasil</h2>
        <h3 style={{ color: 'yellow' }}>
          {'"'}starting as a beginner in datascience{'"'}
        </h3>

        <div className={styles.SocialLinks}>
          <a href="https://github.com/hernandemonteiro" target="__blank">
            <SiGithub />
          </a>

          <a href="https://linkedin.com/in/hernande-monteiro" target="__blank">
            <SiLinkedin />
          </a>

          <a href="https://instagram.com/monteiro.ops" target="__blank">
            <SiInstagram />
          </a>

          <a href="https://wa.me/41999175718" target="__blank">
            <SiWhatsapp />
          </a>
        </div>
        <div>
          <p className="text-white">
            Apaixonado por tecnologia e inovação! 😍💻📱
            <br />
            <br />
            Desde 2019 descobrindo novas maneiras de transformar o mundo com a
            programação.
          </p>
        </div>
      </header>
    </div>
  );
}

export default Presentation;
