import React from 'react';
import Head from 'next/head';
import styles from './Template.module.css';
import Footer from '../Footer';
import Header from '../Header';


interface TemplateProps {
    children?: any;
    nav?: any;
}

export default function Template(props: TemplateProps) {
    return (
        <>
            <Head>
                <title>Hernande Monteiro - seu blog tech quentinho e atual!</title>
                <meta name="description" content="Criado para inspirar o mundo do desenvolvimento!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    <div className={styles.BoxContent}>
                        <div className={styles.Content}>
                            {props.nav}
                            <div className={styles.ArticleBox}>
                                {props.children}
                            </div>
                        </div>
                    </div>
                    <Footer />
                </main>
            </div>
        </>
    )
}