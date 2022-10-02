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
      <div className={styles.SocialIcon}>
        <a href="/" style={{ color: "white" }}>
          <FontAwesomeIcon
            style={{ color: "white" }}
            icon={faBlog}
            fixedWidth
          />
        </a>
      </div>
      <div className={styles.SocialIcon}>
        <a href="/curriculum" style={{ color: "white" }}>
          <FontAwesomeIcon
            style={{ color: "white" }}
            icon={faUser}
            fixedWidth
          />
        </a>
      </div>
      <div className={styles.SocialIcon}>
        <a href="/portfolio" style={{ color: "white" }}>
          <FontAwesomeIcon
            style={{ color: "white" }}
            icon={faNewspaper}
            fixedWidth
          />
        </a>
      </div>
      <div className={styles.SocialIcon} style={{ color: "white" }}>
        <a
          href="https://github.com/hernandemonteiro"
          style={{ color: "white" }}
          target="_blank"
        >
          <FontAwesomeIcon
            style={{ color: "white" }}
            icon={faGithub}
            fixedWidth
          />
        </a>
      </div>
      <div className={styles.SocialIcon}>
        <a
          href="https://www.instagram.com/monteiro.ops/"
          style={{ color: "white" }}
        >
          <FontAwesomeIcon
            style={{ color: "white" }}
            icon={faInstagram}
            fixedWidth
          />
        </a>
      </div>
      <div className={styles.SocialIcon}>
        <a
          href="https://br.linkedin.com/in/hernande-monteiro"
          style={{ color: "white" }}
        >
          <FontAwesomeIcon
            style={{ color: "white" }}
            icon={faLinkedin}
            fixedWidth
          />
        </a>
      </div>
    </div>
  );
}
