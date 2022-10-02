import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBlog, faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Menu.module.css";


export default function Menu() {
  return (
    <div className={styles.Menu}>
      <div className={styles.SocialIcon}>
        <a href="/">
          <FontAwesomeIcon icon={faBlog} fixedWidth />
        </a>
      </div>
      <div className={styles.SocialIcon}>
        <a href="/curriculum">
          <FontAwesomeIcon icon={faUser} fixedWidth />
        </a>
      </div>
      <div className={styles.SocialIcon}>
        <a href="/portfolio">
          <FontAwesomeIcon icon={faNewspaper} fixedWidth />
        </a>
      </div>
      <div className={styles.SocialIcon}>
        <a href="https://github.com/hernandemonteiro" target="_blank">
          <FontAwesomeIcon icon={faGithub} fixedWidth />
        </a>
      </div>
      <div className={styles.SocialIcon}>
        <arguments href="https://www.instagram.com/monteiro.ops/">
          <FontAwesomeIcon icon={faInstagram} fixedWidth />
        </a>
      </div>
      <div className={styles.SocialIcon}>
        <a href="https://br.linkedin.com/in/hernande-monteiro">
          <FontAwesomeIcon icon={faLinkedin} fixedWidth />
        </a>
      </div>
    </div>
  );
}
