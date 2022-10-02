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
    <div className={styles.Menu}>
      <div className={styles.SocialIcon}>
        <Link href="/">
          <FontAwesomeIcon
            style={{ color: "white" }}
            icon={faBlog}
            fixedWidth
          />
        </Link>
      </div>
      <div className={styles.SocialIcon}>
        <Link href="/curriculum">
          <FontAwesomeIcon
            style={{ color: "white" }}
            icon={faUser}
            fixedWidth
          />
        </Link>
      </div>
      <div className={styles.SocialIcon}>
        <Link href="/portfolio">
          <FontAwesomeIcon
            style={{ color: "white" }}
            icon={faNewspaper}
            fixedWidth
          />
        </Link>
      </div>
      <div className={styles.SocialIcon}>
        <Link href="https://github.com/hernandemonteiro" target="_blank">
          <FontAwesomeIcon
            style={{ color: "white" }}
            icon={faGithub}
            fixedWidth
          />
        </Link>
      </div>
      <div className={styles.SocialIcon}>
        <Link href="https://www.instagram.com/monteiro.ops/">
          <FontAwesomeIcon
            style={{ color: "white" }}
            icon={faInstagram}
            fixedWidth
          />
        </Link>
      </div>
      <div className={styles.SocialIcon}>
        <Link href="https://br.linkedin.com/in/hernande-monteiro">
          <FontAwesomeIcon
            style={{ color: "white" }}
            icon={faLinkedin}
            fixedWidth
          />
        </Link>
      </div>
    </div>
  );
}
