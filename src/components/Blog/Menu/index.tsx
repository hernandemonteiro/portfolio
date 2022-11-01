import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBlog, faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import styles from "./Menu.module.css";

export default function Menu() {
  return (
    <div className={styles.Menu} style={{ color: "white" }}>
      <div className={styles.IconBox}>
        <Link href="/">
          <FontAwesomeIcon
            className={styles.SocialIcon}
            icon={faBlog}
            fixedWidth
          />
        </Link>
      </div>
      <div className={styles.IconBox}>
        <Link href="/about-me">
          <FontAwesomeIcon
            className={styles.SocialIcon}
            icon={faUser}
            fixedWidth
          />
        </Link>
      </div>
      {/* <div className={styles.IconBox}>
        <Link href="/portfolio">
          <FontAwesomeIcon
            className={styles.SocialIcon}
            icon={faNewspaper}
            fixedWidth
          />
        </Link>
      </div> */}
      <div className={styles.IconBox}>
        <a
          href="https://github.com/hernandemonteiro"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className={styles.SocialIcon}
            icon={faGithub}
            fixedWidth
          />
        </a>
      </div>
      <div className={styles.IconBox}>
        <a
          href="https://www.instagram.com/monteiro.ops/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className={styles.SocialIcon}
            icon={faInstagram}
            fixedWidth
          />
        </a>
      </div>
      <div className={styles.IconBox}>
        <a
          href="https://br.linkedin.com/in/hernande-monteiro"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className={styles.SocialIcon}
            icon={faLinkedin}
            fixedWidth
          />
        </a>
      </div>
    </div>
  );
}
