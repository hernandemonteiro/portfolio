import React from "react";
import Image from 'next/image';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <span>Created by <b>Hernande Monteiro</b><br /><br /></span>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className={styles.SocialIcons}>
                    <a href="/curriculum">
                        <div className={styles.Icon}>
                            <FontAwesomeIcon
                                icon={faUser}
                                fixedWidth />
                        </div>
                    </a>
                    <a href="/portfolio">
                        <div className={styles.Icon}>
                            <FontAwesomeIcon
                                icon={faNewspaper}
                                fixedWidth />
                        </div>
                    </a>
                    <a href="https://github.com/hernandemonteiro">
                        <div className={styles.Icon}>
                            <FontAwesomeIcon
                                icon={faGithub}
                                fixedWidth />
                        </div>
                    </a>
                    <a href="https://www.instagram.com/monteiro.ops/">
                        <div className={styles.Icon}>
                            <FontAwesomeIcon
                                icon={faInstagram}
                                fixedWidth />
                        </div>
                    </a>
                    <a href="https://www.instagram.com/monteiro.ops/">
                        <div className={styles.Icon}>
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                fixedWidth />
                        </div>
                    </a>
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