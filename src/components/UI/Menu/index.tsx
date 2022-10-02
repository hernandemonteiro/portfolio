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
<<<<<<< Updated upstream
        <a href="/" style={{ color: "white" }}>
=======
        <Link href="/" style={{ color: "white" }}>
>>>>>>> Stashed changes
          <FontAwesomeIcon
            style={{ color: "white" }}
            icon={faBlog}
            fixedWidth
          />
        </a>
      </div>
      <div className={styles.SocialIcon}>
<<<<<<< Updated upstream
        <a href="/curriculum" style={{ color: "white" }}>
=======
        <Link href="/curriculum" style={{ color: "white" }}>
>>>>>>> Stashed changes
          <FontAwesomeIcon
            style={{ color: "white" }}
            icon={faUser}
            fixedWidth
          />
        </a>
      </div>
      <div className={styles.SocialIcon}>
<<<<<<< Updated upstream
        <a href="/portfolio" style={{ color: "white" }}>
=======
        <Link href="/portfolio" style={{ color: "white" }}>
>>>>>>> Stashed changes
          <FontAwesomeIcon
            style={{ color: "white" }}
            icon={faNewspaper}
            fixedWidth
          />
        </a>
      </div>
      <div className={styles.SocialIcon} style={{ color: "white" }}>
<<<<<<< Updated upstream
        <a
=======
        <Link
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        <a
=======
        <Link
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        <a
=======
        <Link
>>>>>>> Stashed changes
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
