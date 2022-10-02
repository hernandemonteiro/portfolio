import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>
        Created by:
        <Link href="/" className={styles.linkLogo}>
          <b> Hernande Monteiro </b>
        </Link>
        <br />
        <br />
      </span>
      <div className={styles.SocialIcons}>
        <div className={styles.SocialIcon}>
          <Link href="/curriculum">
            <FontAwesomeIcon icon={faUser} fixedWidth />
          </Link>
        </div>
        <div className={styles.SocialIcon}>
          <Link href="/portfolio">
            <FontAwesomeIcon icon={faNewspaper} fixedWidth />
          </Link>
        </div>
        <div className={styles.SocialIcon}>
          <Link href="https://github.com/hernandemonteiro" target="_blank">
            <FontAwesomeIcon icon={faGithub} fixedWidth />
          </Link>
        </div>
        <div className={styles.SocialIcon}>
          <Link href="https://www.instagram.com/monteiro.ops/">
            <FontAwesomeIcon icon={faInstagram} fixedWidth />
          </Link>
        </div>
        <div className={styles.SocialIcon}>
          <Link href="https://br.linkedin.com/in/hernande-monteiro">
            <FontAwesomeIcon icon={faLinkedin} fixedWidth />
          </Link>
        </div>
      </div>
      <br />
      Powered by{" "}
      <span className={styles.logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </footer>
  );
}
