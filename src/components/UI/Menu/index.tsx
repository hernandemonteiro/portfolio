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
      <Link href="/" style={{ color: "white", width: '1rem'}}>
        <FontAwesomeIcon
          className={styles.SocialIcon}
          style={{ color: "white" }}
          icon={faBlog}
          fixedWidth
        />
      </Link>
      <Link href="/curriculum" style={{ color: "white" }}>
        <FontAwesomeIcon
          className={styles.SocialIcon}
          style={{ color: "white" }}
          icon={faUser}
          size="2x"
        />
      </Link>
      <Link href="/portfolio" style={{ color: "white" }}>
        <FontAwesomeIcon
          className={styles.SocialIcon}
          style={{ color: "white" }}
          icon={faNewspaper}
          size="2x"
        />
      </Link>
      <Link
        href="https://github.com/hernandemonteiro"
        style={{ color: "white" }}
        target="_blank"
      >
        <FontAwesomeIcon
          className={styles.SocialIcon}
          style={{ color: "white" }}
          icon={faGithub}
          size="2x"
        />
      </Link>
      <Link
        href="https://www.instagram.com/monteiro.ops/"
        style={{ color: "white" }}
      >
        <FontAwesomeIcon
          className={styles.SocialIcon}
          style={{ color: "white" }}
          icon={faInstagram}
          size="3x"
        />
      </Link>
      <Link
        href="https://br.linkedin.com/in/hernande-monteiro"
        style={{ color: "white" }}
      >
        <FontAwesomeIcon
          className={styles.SocialIcon}
          style={{ color: "white" }}
          icon={faLinkedin}
          size="3x"
        />
      </Link>
    </div>
  );
}
