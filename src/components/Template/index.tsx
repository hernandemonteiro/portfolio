import React from 'react';
import Head from 'next/head';
import styles from './Template.module.css';
import Footer from '../Footer';
import Header from '../Header';


interface TemplateProps {
    children?: any;
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
                <Header />
                <main className={styles.main}>
                    <div className={styles.BoxContent}>
                        <div className={styles.Content}>
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