import React from 'react';
import styles from './Presentation.module.scss';
import Link from 'next/link';
import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp } from 'react-icons/si';

function Presentation() {
  return (
    <div className={styles.presentation}>
      <div
        className={styles.avatarImg}
        aria-label="Foto de Hernande Monteiro, ele usa uma blusa branca com um pequeno colar dourado aparente, cabelo crespo, pele parda e sorriso no rosto."
      />
      <header className={'text-center'}>
        <h1 className="text-white">Hernande Monteiro</h1>
        <h2 className="text-white">Full-Stack Developer</h2>
        <div className={styles.SocialLinks}>
          <Link href="https://github.com/hernandemonteiro" target="_blank">
            <SiGithub />
          </Link>

          <Link
            href="https://linkedin.com/in/hernande-monteiro"
            target="_blank"
          >
            <SiLinkedin />
          </Link>

          <Link href="https://instagram.com/monteiro.ops" target="_blank">
            <SiInstagram />
          </Link>

          <Link href="https://wa.me/41999175718" target="_blank">
            <SiWhatsapp />
          </Link>
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
