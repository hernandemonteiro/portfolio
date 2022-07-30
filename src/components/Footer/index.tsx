import React from "react";
import Image from 'next/image';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLarge, faNewspaper } from '@fortawesome/free-solid-svg-icons'
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
                        <FontAwesomeIcon  style={{fontSize: '1rem'}} icon={faUserLarge} /> : Sobre Mim
                    </a>
                    <a href="/portfolio">
                        <FontAwesomeIcon style={{fontSize: '1rem'}} icon={faNewspaper} /> : Portfolio
                    </a>
                    <a href="https://github.com/hernandemonteiro">
                        <FontAwesomeIcon size='1x' icon={faGithub} /> : Github
                    </a>
                    <a href="https://www.instagram.com/monteiro.ops/">
                        <FontAwesomeIcon style={{fontSize: '1rem'}} icon={faInstagram} /> : Instagram
                    </a>
                    <a href="https://www.instagram.com/monteiro.ops/">
                        <FontAwesomeIcon style={{fontSize: '1rem'}} icon={faLinkedin} /> : Linkedin
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