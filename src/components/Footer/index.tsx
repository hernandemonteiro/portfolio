import React from "react";
import Image from 'next/image';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <span>Created by
                <a href='/'>
                    <b> Hernande Monteiro</b>
                </a>
                <br /><br /></span>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className={styles.SocialIcons}>
                    <Link
                        href="/curriculum"
                        className={styles.SocialIcon}>
                        <FontAwesomeIcon
                            icon={faUser}
                            fixedWidth />
                    </Link>
                    <Link
                        href="/portfolio"
                        className={styles.SocialIcon}>
                        <FontAwesomeIcon
                            icon={faNewspaper}
                            fixedWidth />
                    </Link>
                    <Link
                        href="https://github.com/hernandemonteiro"
                        target='_blank'
                        className={styles.SocialIcon}>
                        <FontAwesomeIcon
                            icon={faGithub}
                            fixedWidth />
                    </Link>
                    <Link
                        href="https://www.instagram.com/monteiro.ops/"
                        target='_blank'
                        className={styles.SocialIcon}>
                        <FontAwesomeIcon
                            icon={faInstagram}
                            fixedWidth />
                    </Link>
                    <Link
                        href="https://br.linkedin.com/in/hernande-monteiro-bezerra-5a778b95"
                        target='_blank'
                        className={styles.SocialIcon}>
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            fixedWidth />
                    </Link>
                </div>
                <br />
                Powered by{' '}
                <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
            </a>
        </footer>
    )
}