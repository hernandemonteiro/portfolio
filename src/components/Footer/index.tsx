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
                    <div
                        className={styles.SocialIcon}>
                        <a
                            href="/curriculum"
                        >
                            <FontAwesomeIcon
                                icon={faUser}
                                fixedWidth
                                flip='horizontal' />
                        </a>
                    </div>
                    <div
                        className={styles.SocialIcon}>
                        <a
                            href="/portfolio"
                            >
                            <FontAwesomeIcon
                                icon={faNewspaper}
                                fixedWidth
                                flip='horizontal' />
                        </a>
                    </div>
                    <div
                        className={styles.SocialIcon}>
                        <a
                            href="https://github.com/hernandemonteiro"
                            target='_blank'
                            >
                            <FontAwesomeIcon
                                icon={faGithub}
                                fixedWidth
                                flip='horizontal' />
                        </a>
                    </div>
                    <div
                        className={styles.SocialIcon}>
                        <a
                            href="https://www.instagram.com/monteiro.ops/"
                            target='_blank'
                            >
                            <FontAwesomeIcon
                                icon={faInstagram}
                                fixedWidth
                                flip='horizontal' />
                        </a>
                    </div>
                    <div
                        className={styles.SocialIcon}>
                        <a
                            href="https://br.linkedin.com/in/hernande-monteiro-bezerra-5a778b95"
                            target='_blank'
                            >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                fixedWidth
                                flip='horizontal' />
                        </a>
                    </div>
                </div>
                <br /><br />
                Powered by{' '}
                <span className={styles.logo}>
                    <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                </span>
            </a>
        </footer>
    )
}