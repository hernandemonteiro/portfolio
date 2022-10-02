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
            style={{ color: "white" }}
            icon={faBlog}
            fixedWidth
          />
        </Link>
      </div>
      <div className={styles.IconBox}>
        <Link href="/curriculum">
          <FontAwesomeIcon
            className={styles.SocialIcon}
            style={{ color: "white" }}
            icon={faUser}
            fixedWidth
          />
        </Link>
      </div>
      <div className={styles.IconBox}>
        <Link href="/portfolio">
          <FontAwesomeIcon
            className={styles.SocialIcon}
            style={{ color: "white" }}
            icon={faNewspaper}
            fixedWidth
          />
        </Link>
      </div>
      <div className={styles.IconBox}>
        <Link href="https://github.com/hernandemonteiro" target="_blank">
          <FontAwesomeIcon
            className={styles.SocialIcon}
            style={{ color: "white" }}
            icon={faGithub}
            fixedWidth
          />
        </Link>
      </div>
      <div className={styles.IconBox}>
        <Link href="https://www.instagram.com/monteiro.ops/">
          <FontAwesomeIcon
            className={styles.SocialIcon}
            style={{ color: "white" }}
            icon={faInstagram}
            fixedWidth
          />
        </Link>
      </div>
      <div className={styles.IconBox}>
        <Link href="https://br.linkedin.com/in/hernande-monteiro">
          <FontAwesomeIcon
            className={styles.SocialIcon}
            style={{ color: "white" }}
            icon={faLinkedin}
            fixedWidth
          />
        </Link>
      </div>
    </div>
  );
}
