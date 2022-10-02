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
      <Link href="/" style={{ color: "white", width: '1.5rem'}}>
        <FontAwesomeIcon
          className={styles.SocialIcon}
          style={{ color: "white" }}
          icon={faBlog}
          fixedWidth
        />
      </Link>
      <Link href="/curriculum" style={{ color: "white", width: '1.5rem' }}>
        <FontAwesomeIcon
          className={styles.SocialIcon}
          style={{ color: "white" }}
          icon={faUser}
          fixedWidth
        />
      </Link>
      <Link href="/portfolio" style={{ color: "white", width: '1.5rem' }}>
        <FontAwesomeIcon
          className={styles.SocialIcon}
          style={{ color: "white" }}
          icon={faNewspaper}
          fixedWidth
        />
      </Link>
      <Link
        href="https://github.com/hernandemonteiro"
        style={{ color: "white", width: '1.5rem' }}
        target="_blank"
      >
        <FontAwesomeIcon
          className={styles.SocialIcon}
          style={{ color: "white" }}
          icon={faGithub}
          fixedWidth
        />
      </Link>
      <Link
        href="https://www.instagram.com/monteiro.ops/"
        style={{ color: "white", width: '1.5rem' }}
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
        style={{ color: "white", width: '1.5rem' }}
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
